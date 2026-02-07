"use client";

import Link from "next/link";
import {Button} from "@/components/ui/button";
import {ArrowUpRight, BadgeCheck, BarChart3, ShieldCheck, Target, Wrench, Zap,} from "lucide-react";
import {cn} from "@/lib/utils";

type Differentiator = {
    title: string;
    desc: string;
    icon: React.ReactNode;
    tone: "primary" | "secondary" | "accent";
};

const DIFFERENTIATORS: Differentiator[] = [
    {
        title: "Resultados medibles",
        desc: "Definimos KPIs desde el inicio y medimos conversiones, no solo “likes”.",
        icon: <BarChart3 className="h-5 w-5" />,
        tone: "primary",
    },
    {
        title: "Marketing + desarrollo",
        desc: "Unimos campañas con landing pages rápidas y tracking bien hecho para convertir.",
        icon: <Target className="h-5 w-5" />,
        tone: "secondary",
    },
    {
        title: "Ejecución rápida",
        desc: "Iteramos en semanas, no en meses. Priorizamos lo que mueve el negocio.",
        icon: <Zap className="h-5 w-5" />,
        tone: "accent",
    },
    {
        title: "Soporte real",
        desc: "Acompañamiento continuo, mejoras y ajustes sin perder el contexto del proyecto.",
        icon: <Wrench className="h-5 w-5" />,
        tone: "secondary",
    },
    {
        title: "Transparencia",
        desc: "Reportes claros, acceso a datos y comunicación directa. Nada de caja negra.",
        icon: <ShieldCheck className="h-5 w-5" />,
        tone: "primary",
    },
    {
        title: "Calidad y consistencia",
        desc: "Buenas prácticas, QA y entregables sólidos. Lo dejamos listo para escalar.",
        icon: <BadgeCheck className="h-5 w-5" />,
        tone: "accent",
    },
];

export function WhyChooseUsSection() {
    return (
        <section className="relative">
            {/* soft glows */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
            </div>

            <div className="container-custom section-padding relative">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div>
                        <p className="text-xs tracking-wide text-muted-foreground">
                            (WHY CHOOSE US)
                        </p>
                        <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
                            ¿Por qué{" "}
                            <span className="gradient-text-secondary">elegirnos</span>?
                        </h2>
                        <p className="mt-3 max-w-2xl text-muted-foreground">
                            No se trata de “hacer marketing”, sino de construir un sistema que
                            genere demanda y convierta. Esto es lo que nos diferencia.
                        </p>
                    </div>

                    <div className="flex gap-2">
                        <Button
                            variant="outline"
                            className="rounded-full border-primary/30 hover:border-primary"
                            asChild
                        >
                            <Link href="/portafolio">
                                Ver trabajos <ArrowUpRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button className="rounded-full bg-primary text-primary-foreground hover:opacity-95" asChild>
                            <Link href="/cotizar">Solicitar cotización</Link>
                        </Button>
                    </div>
                </div>

                {/* Grid */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {DIFFERENTIATORS.map((d) => (
                        <div
                            key={d.title}
                            className="rounded-3xl border border-border/70 bg-card/50 backdrop-blur p-6 card-hover"
                        >
                            <div className="flex items-start gap-4">
                                <div
                                    className={cn(
                                        "h-12 w-12 rounded-2xl border border-border/70 bg-background/60 grid place-items-center",
                                        toneRing(d.tone),
                                    )}
                                >
                  <span className={cn("text-muted-foreground", toneText(d.tone))}>
                    {d.icon}
                  </span>
                                </div>

                                <div>
                                    <p className="text-lg font-semibold">{d.title}</p>
                                    <p className="mt-2 text-sm text-muted-foreground">
                                        {d.desc}
                                    </p>
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

                {/* Bottom note */}
                <div className="mt-10 rounded-3xl border border-border/70 bg-card/50 backdrop-blur p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <p className="font-semibold">¿No sabes por dónde empezar?</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                            Te recomendamos el mejor camino según tu objetivo (leads, ventas,
                            posicionamiento o sistema web).
                        </p>
                    </div>

                    <Button className="rounded-full bg-primary text-primary-foreground hover:opacity-95" asChild>
                        <Link href="/contacto">
                            Agendar llamada <ArrowUpRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}

function labelByTone(tone: Differentiator["tone"]) {
    if (tone === "primary") return "Performance";
    if (tone === "secondary") return "Estrategia";
    return "Optimización";
}

function toneRing(tone: Differentiator["tone"]) {
    if (tone === "primary") return "ring-1 ring-primary/20";
    if (tone === "secondary") return "ring-1 ring-secondary/20";
    return "ring-1 ring-accent/20";
}

function toneText(tone: Differentiator["tone"]) {
    if (tone === "primary") return "text-primary";
    if (tone === "secondary") return "text-secondary";
    return "text-accent";
}

function tonePill(tone: Differentiator["tone"]) {
    if (tone === "primary")
        return "border-primary/25 bg-primary/10 text-primary";
    if (tone === "secondary")
        return "border-secondary/25 bg-secondary/10 text-secondary";
    return "border-accent/25 bg-accent/10 text-accent";
}
