"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {ContentWidth} from "@/components/ContentWidth";

type Stat = {
    value: string;
    label: string;
};

const STATS: Stat[] = [
    { value: "12K+", label: "Leads generados" },
    { value: "58%", label: "Mejora promedio en conversión" },
    { value: "700+", label: "Proyectos entregados" },
    { value: "150+", label: "Clientes atendidos" },
];

function parseStatValue(raw: string) {
    const hasK = /k/i.test(raw);
    const hasPercent = raw.includes("%");
    const hasPlus = raw.includes("+");

    const num = Number((raw.match(/[\d.]+/)?.[0] ?? "0"));

    const target = hasK ? num * 1000 : num;

    return { target, hasK, hasPercent, hasPlus, rawNum: num };
}

function formatStatValue(
    current: number,
    meta: ReturnType<typeof parseStatValue>
) {
    let out: string;

    if (meta.hasK) {
        const k = current / 1000;
        out = Number.isInteger(k) ? `${k}K` : `${k.toFixed(1)}K`;
    } else if (!Number.isInteger(meta.rawNum)) {
        out = current.toFixed(1);
    } else {
        out = Math.round(current).toString();
    }

    if (meta.hasPercent) out += "%";
    if (meta.hasPlus) out += "+";

    return out;
}

function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
    const ref = React.useRef<T | null>(null);
    const [inView, setInView] = React.useState(false);

    React.useEffect(() => {
        if (!ref.current) return;
        const el = ref.current;

        const io = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) setInView(true);
        }, options);

        io.observe(el);
        return () => io.disconnect();
    }, [options]);

    return { ref, inView };
}

function useCountUp(target: number, start: boolean, duration = 1100) {
    const [value, setValue] = React.useState(0);

    React.useEffect(() => {
        if (!start) return;

        let raf = 0;
        const startAt = performance.now();
        const from = 0;

        const tick = (now: number) => {
            const t = Math.min(1, (now - startAt) / duration);
            // easeOutCubic
            const eased = 1 - Math.pow(1 - t, 3);
            const next = from + (target - from) * eased;

            setValue(next);

            if (t < 1) raf = requestAnimationFrame(tick);
        };

        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [start, target, duration]);

    return value;
}

export function StatsSection() {
    const { ref, inView } = useInView<HTMLElement>({ threshold: 0.25 });

    return (
        <section ref={ref} className="relative my-20 py-20">
            <ContentWidth>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-6">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.05]">
                            Resultados reales con estrategia, ejecución y medición
                        </h2>

                        <p className="mt-5 max-w-xl text-base md:text-lg text-muted-foreground">
                            Trabajamos campañas, diseño y desarrollo web con foco en métricas
                            claras: leads, conversiones y crecimiento sostenible para tu
                            negocio.
                        </p>

                        <div className="mt-6">
                            <Button
                                variant="link"
                                className="px-0 text-primary hover:text-primary/90"
                                asChild
                            >
                                <Link href="/services">
                                    Ver servicios <span aria-hidden>↗</span>
                                </Link>
                            </Button>
                        </div>
                    </div>

                    <div className="lg:col-span-6">
                        <div className="relative">
                            <div className="relative overflow-hidden rounded-3xl bg-transparent">
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/0 via-background/0 to-background/35" />

                                <Image
                                    src="/stats.png"
                                    alt="Servicios y soluciones digitales"
                                    width={900}
                                    height={600}
                                    className={cn(
                                        "w-full h-auto object-contain",
                                        "drop-shadow-[0_20px_45px_rgba(0,0,0,0.08)]"
                                    )}
                                    priority={false}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-14 border-t border-border/60 pt-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {STATS.map((s, idx) => (
                            <StatItem key={s.label} stat={s} animate={inView} showDivider={idx !== STATS.length - 1} />
                        ))}
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
}

function StatItem({
                      stat,
                      animate,
                      showDivider,
                  }: {
    stat: Stat;
    animate: boolean;
    showDivider: boolean;
}) {
    const meta = React.useMemo(() => parseStatValue(stat.value), [stat.value]);
    const current = useCountUp(meta.target, animate, 1100);

    return (
        <div className="relative">
            <p className="text-4xl md:text-5xl font-extrabold tracking-tight tabular-nums">
                {formatStatValue(current, meta)}
            </p>
            <p className="mt-2 text-xs md:text-sm text-muted-foreground">
                {stat.label}
            </p>

            {showDivider && (
                <div className="hidden md:block absolute right-0 top-2 h-14 w-px bg-border/70" />
            )}
        </div>
    );
}
