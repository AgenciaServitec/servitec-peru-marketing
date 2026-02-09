"use client";

import * as React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MotionPathPlugin from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

type SnakeScrollProps = {
    /** contenedor principal donde están las secciones */
    containerSelector?: string;
};

export function SnakeScroll({ containerSelector = "body" }: SnakeScrollProps) {
    const wrapRef = React.useRef<HTMLDivElement | null>(null);
    const pathRef = React.useRef<SVGPathElement | null>(null);
    const headRef = React.useRef<HTMLDivElement | null>(null);
    const underlineRef = React.useRef<HTMLDivElement | null>(null);

    React.useEffect(() => {
        const prefersReduced =
            window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

        if (prefersReduced) return; // accesibilidad: si reduce motion, no animamos

        const wrap = wrapRef.current;
        const path = pathRef.current;
        const head = headRef.current;
        const underline = underlineRef.current;

        if (!wrap || !path || !head || !underline) return;

        const ctx = gsap.context(() => {
            // 1) Preparar “dibujo” del trazo
            const length = path.getTotalLength();
            gsap.set(path, {
                strokeDasharray: length,
                strokeDashoffset: length,
            });

            // 2) Timeline principal: dibuja la línea + mueve la cabeza
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: document.querySelector(containerSelector) ?? document.body,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1,
                },
            });

            tl.to(path, { strokeDashoffset: 0, ease: "none" }, 0);

            tl.to(
                head,
                {
                    ease: "none",
                    motionPath: {
                        path,
                        align: path,
                        alignOrigin: [0.5, 0.5],
                        autoRotate: false,
                    },
                },
                0
            );

            // 3) ScrollSpy para subrayado: detecta títulos
            const titles = Array.from(
                document.querySelectorAll<HTMLElement>("[data-snake-title]")
            );

            const moveUnderlineTo = (el: HTMLElement) => {
                const r = el.getBoundingClientRect();
                // underline está fijo en viewport, lo movemos a la posición del título
                const targetX = r.left; // alineado a inicio del título
                const targetY = r.top + r.height - 6; // “debajo” del texto
                const targetW = Math.min(r.width, 520); // límite para que no sea enorme

                gsap.to(underline, {
                    x: targetX,
                    y: targetY,
                    width: targetW,
                    duration: 0.35,
                    ease: "power3.out",
                });

                // pequeño “pulso” para que se sienta vivo
                gsap.fromTo(
                    underline,
                    { scaleY: 0.8, opacity: 0.75 },
                    { scaleY: 1, opacity: 1, duration: 0.25, ease: "power2.out" }
                );
            };

            // Arranque: subrayar el primero visible
            const first = titles[0];
            if (first) moveUnderlineTo(first);

            titles.forEach((t) => {
                ScrollTrigger.create({
                    trigger: t,
                    start: "top 55%",
                    end: "bottom 45%",
                    onEnter: () => moveUnderlineTo(t),
                    onEnterBack: () => moveUnderlineTo(t),
                });
            });

            // Recalcular en resize (importante para layouts responsive)
            const onResize = () => {
                const active = titles.find((t) => {
                    const r = t.getBoundingClientRect();
                    return r.top < window.innerHeight * 0.55 && r.bottom > window.innerHeight * 0.45;
                });
                if (active) moveUnderlineTo(active);
            };

            window.addEventListener("resize", onResize);
            ScrollTrigger.addEventListener("refreshInit", onResize);

            return () => {
                window.removeEventListener("resize", onResize);
                ScrollTrigger.removeEventListener("refreshInit", onResize);
            };
        }, wrap);

        return () => ctx.revert();
    }, [containerSelector]);

    return (
        <>
            {/* Snake lateral (solo desktop) */}
            <div
                ref={wrapRef}
                className="pointer-events-none fixed inset-0 z-10 hidden lg:block"
                aria-hidden="true"
            >
                {/* SVG path lateral (ajusta right/left según tu diseño) */}
                <svg className="absolute right-8 top-0 h-full w-[140px] opacity-90">
                    <path
                        ref={pathRef}
                        d="
              M 70 80
              C 70 200, 30 240, 70 320
              C 110 400, 70 460, 70 560
              C 70 700, 30 760, 70 860
              C 110 960, 70 1040, 70 1160
              C 70 1320, 30 1400, 70 1520
              C 110 1640, 70 1760, 70 1920
              C 70 2100, 40 2200, 70 2360
            "
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-primary/45"
                    />
                </svg>

                {/* Cabeza (dot) */}
                <div
                    ref={headRef}
                    className="absolute right-[calc(2rem+70px-10px)] top-[70px] h-5 w-5 rounded-full"
                >
                    <div className="h-5 w-5 rounded-full bg-primary/80 shadow-[0_0_30px_rgba(255,0,0,0.25)]" />
                    <div className="absolute inset-0 rounded-full border border-primary/40" />
                </div>

                {/* Underline flotante (se posiciona sobre los H2) */}
                <div
                    ref={underlineRef}
                    className="absolute left-0 top-0 h-[10px] w-[220px] rounded-full"
                    style={{
                        transform: "translate3d(0,0,0)",
                        background:
                            "linear-gradient(90deg, color-mix(in oklch, var(--primary) 85%, white), transparent)",
                        filter: "blur(0.2px)",
                    }}
                />
            </div>
        </>
    );
}
