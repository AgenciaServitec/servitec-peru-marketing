"use client";

import Link from "next/link";
import {Button} from "@/components/ui/button";
import {ArrowUpRight, BadgeCheck, BarChart3, PhoneCall, ShieldCheck, Target, Wrench, Zap,} from "lucide-react";
import {cn} from "@/lib/utils";
import {ContentWidth} from "@/components/ContentWidth";

type Tone = "primary" | "secondary" | "accent";

type Differentiator = {
    title: string;
    desc: string;
    icon: React.ReactNode;
    tone: Tone;
    bullets?: string[];
};

const DIFFERENTIATORS: Differentiator[] = [
    {
        title: "Resultados medibles",
        desc: "Definimos KPIs desde el inicio y reportamos avances con datos (leads, ventas, conversiones).",
        bullets: ["KPIs claros", "Eventos + conversiones", "Reportes periódicos"],
        icon: <BarChart3 className="h-5 w-5" />,
        tone: "primary",
    },
    {
        title: "Marketing + desarrollo",
        desc: "Alineamos campañas con una web/landing optimizada para convertir y medir mejor.",
        bullets: ["Landing rápida", "Tracking bien armado", "Mejor UX"],
        icon: <Target className="h-5 w-5" />,
        tone: "secondary",
    },
    {
        title: "Ejecución rápida",
        desc: "Trabajamos por sprints: priorizamos y entregamos avances visibles semana a semana.",
        bullets: ["Priorización", "Iteración", "Mejoras continuas"],
        icon: <Zap className="h-5 w-5" />,
        tone: "accent",
    },
    {
        title: "Soporte real",
        desc: "Acompañamiento y mejoras sin perder el contexto del proyecto (y sin “re-empezar” cada vez).",
        bullets: ["Seguimiento", "Ajustes", "Soporte"],
        icon: <Wrench className="h-5 w-5" />,
        tone: "secondary",
    },
    {
        title: "Transparencia",
        desc: "Acceso a tus cuentas (Ads/GA4) y comunicación directa. Te explicamos qué se hizo y por qué.",
        bullets: ["Accesos", "Decisiones claras", "Sin misterio"],
        icon: <ShieldCheck className="h-5 w-5" />,
        tone: "primary",
    },
    {
        title: "Calidad y consistencia",
        desc: "Buenas prácticas, QA y entregables ordenados para que el proyecto sea mantenible y escalable.",
        bullets: ["QA", "Checklist", "Estandarización"],
        icon: <BadgeCheck className="h-5 w-5" />,
        tone: "accent",
    },
];

export function WhyChooseUsSection() {
    return (
        <section id="why" className="relative my-20 py-20">

            <ContentWidth>
                <div className="relative">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        <div>
                            <h2 data-snake-title className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
                                ¿Por qué elegirnos?
                            </h2>
                            <p className="mt-3 max-w-2xl text-muted-foreground">
                                No es “hacer marketing”. Es construir un sistema: estrategia, ejecución y medición
                                con entregables claros y mejoras continuas.
                            </p>
                        </div>

                        <div className="flex gap-2">
                            <Button
                                variant="outline"
                                className="rounded-full border-primary/30 hover:border-primary"
                                asChild
                                size="lg"
                            >
                                <Link href="/portfolio">
                                    Ver trabajos <ArrowUpRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>

                            <Button
                                className="rounded-full bg-primary text-primary-foreground hover:opacity-95"
                                asChild
                                size="lg"
                            >
                                <Link href="/cotizar">Solicitar cotización</Link>
                            </Button>
                        </div>
                    </div>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {DIFFERENTIATORS.map((d) => (
                            <div
                                key={d.title}
                                className={cn(
                                    "rounded-3xl border border-border/70 bg-card/50 backdrop-blur p-6"
                                )}
                            >
                                <div className="flex items-start gap-4">
                                    <div
                                        className={cn(
                                            "h-12 w-12 rounded-2xl border border-border/70 bg-background/60 grid place-items-center",
                                            toneRing(d.tone)
                                        )}
                                    >
                                        <span className={cn("text-muted-foreground", toneText(d.tone), "h-11 w-11 grid place-items-center")}>{d.icon}</span>
                                    </div>

                                    <div className="min-w-0">
                                        <p className="text-lg font-semibold">{d.title}</p>
                                        <p className="mt-2 text-sm text-muted-foreground">{d.desc}</p>

                                        {!!d.bullets?.length && (
                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {d.bullets.slice(0, 3).map((b) => (
                                                    <span
                                                        key={b}
                                                        className="text-xs rounded-full px-3 py-1 border border-border/70 bg-background/60 text-muted-foreground"
                                                    >
                            {b}
                          </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="mt-5 flex flex-wrap gap-2">
                  <span className={cn("text-xs font-semibold rounded-full px-3 py-1 border", tonePill(d.tone))}>
                    {labelByTone(d.tone)}
                  </span>
                                    <span className="text-xs font-semibold rounded-full px-3 py-1 border border-border/70 bg-background/60 text-muted-foreground">
                    Enfoque en negocio
                  </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div
                        className={cn(
                            "mt-10 rounded-3xl border border-border/70 bg-card/50 backdrop-blur",
                            "p-6 md:p-8",
                            "relative overflow-hidden"
                        )}
                    >
                        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
                        <div className="pointer-events-none absolute -left-24 -bottom-24 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />

                        <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                            <div className="max-w-2xl">
                                <p className="text-xl md:text-2xl font-extrabold tracking-tight">
                                    ¿No sabes por dónde empezar?
                                </p>
                                <p className="mt-2 text-sm md:text-base text-muted-foreground">
                                    En una llamada breve te ayudamos a elegir el mejor camino según tu objetivo:
                                    leads, ventas, posicionamiento o una web que convierta.
                                </p>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {["Quiero más leads", "Quiero vender más", "Quiero salir en Google", "Necesito una web"].map((t) => (
                                        <span
                                            key={t}
                                            className="text-xs md:text-sm rounded-full px-3 py-1 border border-border/70 bg-background/60 text-muted-foreground"
                                        >
                      {t}
                    </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-2">
                                <Button
                                    variant="outline"
                                    className="rounded-full border-primary/30 hover:border-primary"
                                    asChild
                                    size="lg"
                                    data-cursor="pointer"
                                >
                                    <Link href="/contact">
                                        <PhoneCall className="mr-2 h-4 w-4" />
                                        Agendar llamada
                                    </Link>
                                </Button>

                                <Button
                                    className="rounded-full bg-primary text-primary-foreground hover:opacity-95"
                                    asChild
                                    size="lg"
                                >
                                    <Link href="/cotizar">
                                        Solicitar cotización <ArrowUpRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
}

function labelByTone(tone: Tone) {
    if (tone === "primary") return "Performance";
    if (tone === "secondary") return "Estrategia";
    return "Optimización";
}

function toneRing(tone: Tone) {
    if (tone === "primary") return "ring-1 ring-primary/20";
    if (tone === "secondary") return "ring-1 ring-secondary/20";
    return "ring-1 ring-accent/20";
}

function toneText(tone: Tone) {
    if (tone === "primary") return "text-primary";
    if (tone === "secondary") return "text-secondary";
    return "text-accent";
}

function tonePill(tone: Tone) {
    if (tone === "primary") return "border-primary/25 bg-primary/10 text-primary";
    if (tone === "secondary") return "border-secondary/25 bg-secondary/10 text-secondary";
    return "border-accent/25 bg-accent/10 text-accent";
}
