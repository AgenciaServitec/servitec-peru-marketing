"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function CustomCursor({ className }: { className?: string }) {
    const ringRef = React.useRef<HTMLDivElement | null>(null);
    const dotRef = React.useRef<HTMLDivElement | null>(null);

    React.useEffect(() => {
        const finePointer = window.matchMedia("(pointer: fine)").matches;
        if (!finePointer) return;

        const ring = ringRef.current;
        const dot = dotRef.current;
        if (!ring || !dot) return;

        let mx = window.innerWidth / 2;
        let my = window.innerHeight / 2;

        // ring suavizado (lerp)
        let rx = mx;
        let ry = my;

        const onMove = (e: MouseEvent) => {
            mx = e.clientX;
            my = e.clientY;
            dot.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
        };

        const isInteractiveEl = (el: HTMLElement) =>
            !!el.closest("a, button, [role='button'], [data-cursor='pointer']");

        const onOver = (e: Event) => {
            const t = e.target as HTMLElement | null;
            if (!t) return;
            const isInteractive = isInteractiveEl(t);
            ring.dataset.interactive = isInteractive ? "true" : "false";
            dot.dataset.interactive = isInteractive ? "true" : "false";
        };

        const onOut = () => {
            ring.dataset.interactive = "false";
            dot.dataset.interactive = "false";
        };

        const onDown = () => {
            ring.dataset.down = "true";
            dot.dataset.down = "true";
        };
        const onUp = () => {
            ring.dataset.down = "false";
            dot.dataset.down = "false";
        };

        const tick = () => {
            rx += (mx - rx) * 0.14;
            ry += (my - ry) * 0.14;
            ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
            requestAnimationFrame(tick);
        };

        ring.style.opacity = "1";
        dot.style.opacity = "1";

        window.addEventListener("mousemove", onMove, { passive: true });
        window.addEventListener("mouseover", onOver, { passive: true });
        window.addEventListener("mouseout", onOut, { passive: true });
        window.addEventListener("mousedown", onDown, { passive: true });
        window.addEventListener("mouseup", onUp, { passive: true });

        const raf = requestAnimationFrame(tick);

        return () => {
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mouseover", onOver);
            window.removeEventListener("mouseout", onOut);
            window.removeEventListener("mousedown", onDown);
            window.removeEventListener("mouseup", onUp);
            cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <>
            {/* Ring */}
            <div
                ref={ringRef}
                className={cn(
                    "pointer-events-none fixed left-0 top-0 z-[9998]",
                    "-translate-x-1/2 -translate-y-1/2",
                    "opacity-0",
                    "h-10 w-10 rounded-full",
                    "border-2 border-primary bg-transparent",
                    "transition-[width,height,border-width] duration-150",
                    // hover sobre links/botones: más grande y borde un poco más grueso
                    "[&[data-interactive='true']]:h-14 [&[data-interactive='true']]:w-14",
                    "[&[data-interactive='true']]:border-[3px]",
                    // click: se achica un toque
                    "[&[data-down='true']]:h-9 [&[data-down='true']]:w-9",
                    className
                )}
            />

            {/* Dot */}
            <div
                ref={dotRef}
                className={cn(
                    "pointer-events-none fixed left-0 top-0 z-[9999]",
                    "-translate-x-1/2 -translate-y-1/2",
                    "opacity-0",
                    "h-2 w-2 rounded-full bg-primary",
                    "transition-[width,height] duration-150",
                    "[&[data-interactive='true']]:h-2.5 [&[data-interactive='true']]:w-2.5",
                    "[&[data-down='true']]:h-1.5 [&[data-down='true']]:w-1.5"
                )}
            />
        </>
    );
}
