"use client";

import Link from "next/link";
import Image from "next/image";
import {Button} from "@/components/ui/button";

type Stat = { value: string; label: string };

const STATS: Stat[] = [
    { value: "12K+", label: "Leads generados" },
    { value: "58%", label: "Mejora promedio en conversión" },
    { value: "700+", label: "Proyectos entregados" },
    { value: "150+", label: "Clientes atendidos" },
];

export function StatsSection() {
    return (
        <section className="relative">
            {/* glows */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute -top-10 -right-24 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
            </div>

            <div className="container-custom section-padding relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-6">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.05]">Resultados reales con estrategia ejecución medición</h2>

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
                                <Link href="/servicios">
                                    Ver servicios <span aria-hidden>↗</span>
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="lg:col-span-6">
                        <div className="relative rounded-3xl border border-border/70 bg-card/60 backdrop-blur p-4 shadow-sm">
                            <div className="relative overflow-hidden rounded-2xl">
                                <Image
                                    src="https://servitec.site/img/offers1.png"
                                    alt="Servicios y soluciones digitales"
                                    width={900}
                                    height={600}
                                    className="w-full h-auto object-contain"
                                    priority={false}
                                />
                            </div>

                            {/* glow accent */}
                            <div className="pointer-events-none absolute -right-16 -bottom-16 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
                        </div>
                    </div>
                </div>

                {/* STATS */}
                <div className="mt-14 border-t border-border/60 pt-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {STATS.map((s, idx) => (
                            <div key={s.label} className="relative">
                                <p className="text-4xl md:text-5xl font-extrabold tracking-tight">
                                    {s.value}
                                </p>
                                <p className="mt-2 text-xs md:text-sm text-muted-foreground">
                                    {s.label}
                                </p>

                                {/* divider */}
                                {idx !== STATS.length - 1 && (
                                    <div className="hidden md:block absolute right-0 top-2 h-14 w-px bg-border/70" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
