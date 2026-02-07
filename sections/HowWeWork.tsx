"use client";

import Link from "next/link";
import {Button} from "@/components/ui/button";
import {ArrowUpRight, CheckCircle2, Layers, LineChart, Rocket, Search,} from "lucide-react";

type Step = {
    step: string;
    title: string;
    desc: string;
    bullets: string[];
    icon: React.ReactNode;
};

const STEPS: Step[] = [
    {
        step: "01",
        title: "Análisis",
        desc: "Entendemos tu negocio, objetivos y el estado actual de tu presencia digital.",
        bullets: ["Revisión rápida", "Objetivos claros", "Priorización"],
        icon: <Search className="h-5 w-5" />,
    },
    {
        step: "02",
        title: "Estrategia",
        desc: "Definimos el plan: canal, mensaje, público y cómo vamos a medir resultados.",
        bullets: ["Roadmap", "Propuesta de valor", "KPIs"],
        icon: <Layers className="h-5 w-5" />,
    },
    {
        step: "03",
        title: "Ejecución",
        desc: "Implementamos campañas, contenido o desarrollo web con foco en conversión.",
        bullets: ["Creatividades", "Implementación", "QA"],
        icon: <Rocket className="h-5 w-5" />,
    },
    {
        step: "04",
        title: "Medición y optimización",
        desc: "Medimos, iteramos y mejoramos: lo que no se mide, no crece.",
        bullets: ["Dashboards", "A/B testing", "Optimización continua"],
        icon: <LineChart className="h-5 w-5" />,
    },
];

export function HowWeWork() {
    return (
        <section className="relative">
            {/* soft background */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-24 left-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
            </div>

            <div className="container-custom section-padding relative">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div>
                        <p className="text-xs tracking-wide text-muted-foreground">
                            (HOW WE WORK)
                        </p>
                        <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
                            Nuestro proceso para{" "}
                            <span className="gradient-text-primary">lograr resultados</span>
                        </h2>
                        <p className="mt-3 max-w-2xl text-muted-foreground">
                            Trabajamos con un flujo claro: estrategia, ejecución y medición.
                            Sin pasos innecesarios, con entregables visibles.
                        </p>
                    </div>

                    <div className="flex gap-2">
                        <Button
                            variant="outline"
                            className="rounded-full border-primary/30 hover:border-primary"
                            asChild
                        >
                            <Link href="/contacto">
                                Agendar llamada <ArrowUpRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button className="rounded-full bg-primary text-primary-foreground hover:opacity-95" asChild>
                            <Link href="/cotizar">Solicitar cotización</Link>
                        </Button>
                    </div>
                </div>

                {/* Steps */}
                <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Left: steps grid */}
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {STEPS.map((s) => (
                            <div
                                key={s.step}
                                className="rounded-3xl border border-border/70 bg-card/50 backdrop-blur p-6 card-hover"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-11 w-11 rounded-2xl bg-background/60 border border-border/70 grid place-items-center text-muted-foreground">
                                            {s.icon}
                                        </div>
                                        <div>
                                            <p className="text-xs text-muted-foreground">
                                                Paso {s.step}
                                            </p>
                                            <p className="text-lg font-semibold">{s.title}</p>
                                        </div>
                                    </div>

                                    <span className="text-xs font-semibold rounded-full px-3 py-1 border border-border/70 bg-background/60 text-muted-foreground">
                    {s.step}
                  </span>
                                </div>

                                <p className="mt-4 text-sm text-muted-foreground">
                                    {s.desc}
                                </p>

                                <div className="mt-5 space-y-2">
                                    {s.bullets.map((b) => (
                                        <div key={b} className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-accent mt-0.5" />
                                            <p className="text-sm text-muted-foreground">{b}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: sticky deliverables card */}
                    <div className="lg:col-span-4">
                        <div className="rounded-3xl border border-border/70 bg-card/50 backdrop-blur p-6 lg:sticky lg:top-24">
                            <p className="text-sm font-semibold">Entregables</p>
                            <p className="mt-2 text-sm text-muted-foreground">
                                Desde la primera semana tendrás claridad de qué se hará y cómo se
                                medirá.
                            </p>

                            <div className="mt-5 space-y-3">
                                <Deliverable title="Brief + objetivos" desc="Qué buscamos lograr y en cuánto tiempo." />
                                <Deliverable title="Plan de acción" desc="Roadmap por canal y prioridades." />
                                <Deliverable title="Implementación" desc="Web / campañas / contenido en ejecución." />
                                <Deliverable title="Reporte + mejoras" desc="KPIs, hallazgos y optimizaciones." />
                            </div>

                            <div className="mt-6 rounded-2xl border border-border/70 bg-background/60 p-4">
                                <p className="text-xs text-muted-foreground">
                                    Tip: Si no sabes qué servicio te conviene, te guiamos en una
                                    llamada de 15 minutos.
                                </p>
                                <Button
                                    variant="link"
                                    className="px-0 text-primary hover:text-primary/90"
                                    asChild
                                >
                                    <Link href="/contacto">
                                        Hablar con un asesor <ArrowUpRight className="ml-1 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Deliverable({ title, desc }: { title: string; desc: string }) {
    return (
        <div className="rounded-2xl border border-border/70 bg-background/60 p-4">
            <p className="font-semibold">{title}</p>
            <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
        </div>
    );
}
