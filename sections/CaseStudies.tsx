"use client";

import Link from "next/link";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {ArrowUpRight, CheckCircle2, Target, Timer, TrendingUp} from "lucide-react";
import {cn} from "@/lib/utils";
import {ContentWidth} from "@/components/ContentWidth";

type CaseStudy = {
    id: string;
    title: string;
    kind: string;
    industry: string;
    problem: string;
    solution: string;
    results: { kpi: string; label: string; tone: "primary" | "secondary" | "accent" }[];
    tags: string[];
    href: string;
    image?: string;
    gradientClass: string;
    note: string;
};

const CASES: CaseStudy[] = [
    {
        id: "habkooal-villantas",
        kind: "proyecto",
        title: "Habkooal Villantas: captación + medición para ventas",
        industry: "E-commerce / Local",
        problem:
            "Tráfico sin medición clara y pocas consultas desde formularios o WhatsApp.",
        solution:
            "Implementamos tracking (GA4 + eventos), optimizamos páginas clave (categorías y producto) y armamos campañas orientadas a consultas con landing de apoyo.",
        results: [
            { kpi: "GA4", label: "Eventos + conversiones", tone: "secondary" },
            { kpi: "-25%", label: "Mejoras en carga (objetivo)", tone: "primary" },
            { kpi: "CTR ↑", label: "Optimización de anuncios", tone: "accent" },
        ],
        tags: ["Tracking", "Google Ads", "Landing"],
        href: "/casos/habkooalvillantas",
        image: "/case-studies/hankookalvillantas.png",
        gradientClass: "from-primary/90 via-secondary/65 to-accent/60",
        note: "Proyecto destacado: métricas mostradas como objetivos/implementación (no resultados públicos).",
    },
    {
        id: "estudio-contable",
        kind: "proyecto",
        title: "Estudio contable: más consultas con SEO local + WhatsApp",
        industry: "Servicios / Profesional",
        problem:
            "Poca visibilidad en búsquedas locales y consultas dispersas sin registro.",
        solution:
            "Optimizamos SEO on-page, configuramos Google Business Profile, y conectamos formularios/WhatsApp con medición de conversiones para seguimiento.",
        results: [
            { kpi: "Maps", label: "Perfil optimizado", tone: "accent" },
            { kpi: "Leads", label: "Form + WhatsApp medidos", tone: "secondary" },
            { kpi: "SEO", label: "Contenido por intención", tone: "primary" },
        ],
        tags: ["SEO Local", "Maps", "Conversiones"],
        image: "/case-studies/servicont.png",
        href: "/casos/estudio-contable",
        gradientClass: "from-accent/85 via-primary/55 to-secondary/65",
        note: "Proyecto destacado: enfoque en implementación y medición (sin cifras inventadas).",
    },
];


export function CaseStudies() {
    return (
        <section id="cases" className="relative my-20 py-20">
            <ContentWidth>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div>
                        <h2 data-snake-title className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
                            Casos y resultados
                        </h2>
                        <p className="mt-3 max-w-2xl text-muted-foreground">
                            Ejemplos de cómo combinamos estrategia, ejecución y medición para
                            mejorar resultados.
                        </p>
                    </div>

                    <Button
                        variant="outline"
                        className="rounded-full border-primary/30 hover:border-primary"
                        asChild
                        size="lg"
                    >
                        <Link href="/cases">
                            Ver todos <ArrowUpRight className="ml-2 h-4 w-4"/>
                        </Link>
                    </Button>
                </div>

                <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {CASES.map((c) => (
                        <article
                            key={c.id}
                            className="rounded-3xl border border-border/70 bg-card/50 backdrop-blur overflow-hidden card-hover"
                        >
                            <div className="relative h-[220px] w-full overflow-hidden rounded-t-3xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-sky-900/55 to-sky-800/35"/>

                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_45%)]"/>

                                <div className="absolute inset-0 bg-black/30"/>

                                <div className="relative z-10 p-6 flex flex-col justify-end h-full">
                                    <p className="text-white/80 text-xs font-semibold">
                                        {c.industry}
                                    </p>

                                    <h3 className="mt-2 text-white text-2xl font-extrabold leading-tight">
                                        {c.title}
                                    </h3>

                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {c.tags.map((t) => (
                                            <span key={t} className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-white border border-white/15">{t}</span>
                                        ))}
                                    </div>
                                </div>

                                {c.image && (
                                    <div className="absolute right-5 top-5 z-10 hidden md:block">
                                        <div
                                            className="relative h-14 w-20 overflow-hidden rounded-xl border border-white/15 bg-white/5">
                                            <Image
                                                src={c.image}
                                                alt=""
                                                fill
                                                className="object-cover opacity-80"
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="p-6">
                                <div className="space-y-4">
                                    <Block
                                        icon={<Target className="h-4 w-4"/>}
                                        label="Problema"
                                        text={c.problem}
                                    />
                                    <Block
                                        icon={<CheckCircle2 className="h-4 w-4"/>}
                                        label="Solución"
                                        text={c.solution}
                                    />
                                </div>

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
                                        <TrendingUp className="h-4 w-4"/>
                                        <span>Optimización continua</span>
                                        <span className="mx-1">•</span>
                                        <Timer className="h-4 w-4"/>
                                        <span>Implementación rápida</span>
                                    </div>

                                    <Button variant="link" className="px-0 text-primary" asChild>
                                        <Link href={c.href}>
                                            Ver caso <ArrowUpRight className="ml-1 h-4 w-4"/>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div
                    className="mt-10 relative overflow-hidden rounded-3xl border border-border/70 bg-card/50 backdrop-blur p-7 md:p-8">
                    <div className="pointer-events-none absolute inset-0">
                        <div className="absolute -left-20 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl"/>
                        <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl"/>
                    </div>

                    <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                        <div>
                            <p className="text-xl md:text-2xl font-extrabold tracking-tight">
                                ¿Quieres resultados similares?
                            </p>
                            <p className="mt-2 text-sm md:text-base text-muted-foreground max-w-2xl">
                                Te proponemos un plan según tu objetivo: leads, ventas, posicionamiento o web.
                                En una llamada breve definimos el camino y los entregables.
                            </p>

                            <div className="mt-4 flex flex-wrap gap-2">
                                <span className="text-xs font-semibold rounded-full px-3 py-1 border border-border/70 bg-background/60 text-muted-foreground">Diagnóstico rápido</span>
                                <span className="text-xs font-semibold rounded-full px-3 py-1 border border-border/70 bg-background/60 text-muted-foreground">Plan de acción</span>
                                <span className="text-xs font-semibold rounded-full px-3 py-1 border border-border/70 bg-background/60 text-muted-foreground">Métricas claras</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <Button variant="outline" className="rounded-full border-primary/30 hover:border-primary"
                                    asChild size="lg">
                                <Link href="/contact">
                                    Agendar llamada <ArrowUpRight className="ml-2 h-4 w-4"/>
                                </Link>
                            </Button>

                            <Button className="rounded-full bg-primary text-primary-foreground hover:opacity-95" asChild
                                    size="lg">
                                <Link href="/cotizar">
                                    Solicitar cotización <ArrowUpRight className="ml-2 h-4 w-4"/>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>

            </ContentWidth>
        </section>
    );
}

function Block({icon, label, text,}: {
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
