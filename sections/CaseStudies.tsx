"use client";

import Link from "next/link";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {ArrowUpRight, CheckCircle2, Target, Timer, TrendingUp} from "lucide-react";
import {cn} from "@/lib/utils";

type CaseStudy = {
    id: string;
    title: string;
    industry: string;
    problem: string;
    solution: string;
    results: { kpi: string; label: string; tone: "primary" | "secondary" | "accent" }[];
    tags: string[];
    href: string;
    image?: string; // opcional: /public/cases/...
    gradientClass: string;
};

const CASES: CaseStudy[] = [
    {
        id: "case-ads-local",
        title: "Leads para negocio local",
        industry: "Servicios / Local",
        problem: "Baja captación de consultas y poca visibilidad en búsquedas.",
        solution:
            "Reestructuramos campañas, mejoramos segmentación y creamos landing enfocada en conversión con tracking.",
        results: [
            { kpi: "+38%", label: "Más consultas", tone: "primary" },
            { kpi: "-22%", label: "Costo por lead", tone: "accent" },
            { kpi: "2.1x", label: "Mejor conversión", tone: "secondary" },
        ],
        tags: ["Google Ads", "Landing", "Tracking"],
        href: "/casos/leads-negocio-local",
        gradientClass: "from-primary/90 via-secondary/65 to-accent/60",
    },
    {
        id: "case-seo-maps",
        title: "SEO Local y Google Maps",
        industry: "Comercio / Local",
        problem: "No aparecía en Maps y la competencia captaba la demanda.",
        solution:
            "Optimizamos Google Business Profile, estructura SEO on-page y plan de contenido por intención.",
        results: [
            { kpi: "+52%", label: "Visitas a Maps", tone: "accent" },
            { kpi: "+31%", label: "Llamadas", tone: "primary" },
            { kpi: "+18%", label: "Tráfico orgánico", tone: "secondary" },
        ],
        tags: ["SEO", "Maps", "Contenido"],
        href: "/casos/seo-local-maps",
        gradientClass: "from-accent/85 via-primary/55 to-secondary/65",
    },
    {
        id: "case-web-speed",
        title: "Web rápida orientada a conversión",
        industry: "Empresa / B2B",
        problem: "Sitio lento, sin mensajes claros y sin medición de conversiones.",
        solution:
            "Rediseño moderno, performance (Core Web Vitals), formularios + WhatsApp y analítica completa.",
        results: [
            { kpi: "90+", label: "Performance score", tone: "secondary" },
            { kpi: "-40%", label: "Tiempo de carga", tone: "primary" },
            { kpi: "+25%", label: "Conversiones", tone: "accent" },
        ],
        tags: ["Next.js", "UX", "Analytics"],
        href: "/casos/web-performance",
        gradientClass: "from-secondary/85 via-primary/60 to-accent/55",
    },
];

export function CaseStudies() {
    return (
        <section className="relative">
            {/* soft glows */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-24 left-16 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
                <div className="absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
            </div>

            <div className="container-custom section-padding relative">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div>
                        <p className="text-xs tracking-wide text-muted-foreground">
                            (CASE STUDIES)
                        </p>
                        <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
                            Casos y{" "}
                            <span className="gradient-text-primary">resultados</span>
                        </h2>
                        <p className="mt-3 max-w-2xl text-muted-foreground">
                            Ejemplos de cómo combinamos estrategia, ejecución y medición para
                            mejorar resultados. (Luego reemplazamos con datos reales.)
                        </p>
                    </div>

                    <Button
                        variant="outline"
                        className="rounded-full border-primary/30 hover:border-primary"
                        asChild
                    >
                        <Link href="/casos">
                            Ver todos <ArrowUpRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>

                {/* Cards */}
                <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {CASES.map((c) => (
                        <article
                            key={c.id}
                            className="rounded-3xl border border-border/70 bg-card/50 backdrop-blur overflow-hidden card-hover"
                        >
                            {/* Media */}
                            <div className="relative">
                                {c.image ? (
                                    <div className="relative h-[220px] w-full">
                                        <Image
                                            src={c.image}
                                            alt={c.title}
                                            fill
                                            className="object-cover"
                                            priority={false}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                    </div>
                                ) : (
                                    <div
                                        className={cn(
                                            "h-[220px] w-full bg-gradient-to-br",
                                            c.gradientClass,
                                        )}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-transparent" />
                                    </div>
                                )}

                                {/* overlay text */}
                                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                    <p className="text-white/85 text-xs font-semibold">
                                        {c.industry}
                                    </p>
                                    <h3 className="mt-2 text-white text-2xl font-extrabold leading-tight">
                                        {c.title}
                                    </h3>

                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {c.tags.map((t) => (
                                            <span
                                                key={t}
                                                className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold text-white border border-white/20 backdrop-blur"
                                            >
                        {t}
                      </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="space-y-4">
                                    <Block
                                        icon={<Target className="h-4 w-4" />}
                                        label="Problema"
                                        text={c.problem}
                                    />
                                    <Block
                                        icon={<CheckCircle2 className="h-4 w-4" />}
                                        label="Solución"
                                        text={c.solution}
                                    />
                                </div>

                                {/* Results */}
                                <div className="mt-5 grid grid-cols-3 gap-2">
                                    {c.results.map((r) => (
                                        <div
                                            key={r.label}
                                            className={cn(
                                                "rounded-2xl border border-border/70 bg-background/60 p-3 text-center",
                                                r.tone === "primary" && "ring-1 ring-primary/15",
                                                r.tone === "secondary" && "ring-1 ring-secondary/15",
                                                r.tone === "accent" && "ring-1 ring-accent/15",
                                            )}
                                        >
                                            <p className={cn("text-lg font-extrabold tracking-tight",
                                                r.tone === "primary" && "text-primary",
                                                r.tone === "secondary" && "text-secondary",
                                                r.tone === "accent" && "text-accent",
                                            )}>
                                                {r.kpi}
                                            </p>
                                            <p className="mt-1 text-[11px] text-muted-foreground leading-tight">
                                                {r.label}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                        <TrendingUp className="h-4 w-4" />
                                        <span>Optimización continua</span>
                                        <span className="mx-1">•</span>
                                        <Timer className="h-4 w-4" />
                                        <span>Implementación rápida</span>
                                    </div>

                                    <Button variant="link" className="px-0 text-primary" asChild>
                                        <Link href={c.href}>
                                            Ver caso <ArrowUpRight className="ml-1 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Bottom CTA mini */}
                <div className="mt-10 rounded-3xl border border-border/70 bg-card/50 backdrop-blur p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <p className="font-semibold">¿Quieres resultados similares?</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                            Te proponemos un plan según tu objetivo: leads, ventas, posicionamiento o web.
                        </p>
                    </div>

                    <Button className="rounded-full bg-primary text-primary-foreground hover:opacity-95" asChild>
                        <Link href="/cotizar">
                            Solicitar cotización <ArrowUpRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}

function Block({
                   icon,
                   label,
                   text,
               }: {
    icon: React.ReactNode;
    label: string;
    text: string;
}) {
    return (
        <div className="rounded-2xl border border-border/70 bg-background/60 p-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                <span className="text-accent">{icon}</span>
                <span>{label}</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{text}</p>
        </div>
    );
}
