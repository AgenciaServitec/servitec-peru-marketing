"use client";

import Link from "next/link";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {ContentWidth} from "@/components/ContentWidth";
import {useTypewriter} from "@/hooks/useTypewriter";

const phrases = [
    "campañas de anuncios que generan leads",
    "SEO que posiciona negocios locales",
    "webs rápidas enfocadas en conversión",
    "publicidad en Google y Meta Ads",
    "estrategia digital con resultados medibles",
];

export function Hero() {

    const typedText = useTypewriter(phrases);

    return (
        <ContentWidth>
            <section id="hero" className="relative overflow-hidden">
                <div className="pt-16 relative">

                    <div className="mx-auto max-w-4xl text-center">

                        <h1 className="mt-5 font-extrabold tracking-tight leading-[0.95] text-[clamp(2.4rem,5vw,4.5rem)]">
                            Marketing digital y desarrollo web
                        </h1>

                        <p className="mt-3 text-lg md:text-xl font-medium">
                            para{" "}
                            <span className="text-primary font-semibold">
    {typedText}
                                <span className="animate-pulse">|</span>
  </span>
                        </p>

                        <div className="mt-7 flex flex-col sm:flex-row sm:justify-center gap-3">
                            <Button className="rounded-full bg-primary text-primary-foreground hover:opacity-95"
                                    asChild>
                                <Link href="https://wa.me/51941801827" target="_blank">Solicitar cotización</Link>
                            </Button>

                            <Button variant="outline" className="rounded-full border-primary/30 hover:border-primary"
                                    asChild>
                                <Link href="/services">Ver servicios</Link>
                            </Button>
                        </div>
                    </div>

                    <div className="mt-10 md:mt-14">
                        <div
                            className="rounded-3xl border border-border/70 bg-card/50 backdrop-blur p-3 md:p-4 shadow-sm">
                            <div
                                className={cn(
                                    "flex gap-3 md:gap-4",
                                    "overflow-x-auto md:overflow-visible",
                                    "snap-x snap-mandatory [-webkit-overflow-scrolling:touch]",
                                    "pb-1"
                                )}
                            >
                                <HeroCard
                                    tone="primary"
                                    accent="red"
                                    title="Publicidad digital"
                                    subtitle="Campañas en Google y Meta enfocadas en leads y ventas."
                                    rightTag="01"
                                    className="w-[260px] sm:w-[300px] md:w-[320px] lg:w-[340px]"
                                />

                                <HeroCard
                                    tone="neutral"
                                    accent="blue"
                                    title="Branding y diseño web"
                                    subtitle="Identidad visual y sitios web rápidos, claros y optimizados para conversión."
                                    rightTag="02"
                                    className="w-[260px] sm:w-[300px] md:w-[320px] lg:w-[340px]"
                                />

                                <HeroCard
                                    tone="warm"
                                    accent="green"
                                    title="SEO y contenido estratégico"
                                    subtitle="Posicionamiento orgánico y contenido pensado para atraer clientes."
                                    rightTag="03"
                                    className="w-[260px] sm:w-[300px] md:w-[320px] lg:w-[340px]"
                                />

                                <div
                                    className="snap-start relative overflow-hidden rounded-2xl border border-border/70 bg-background p-5 min-h-[180px] w-[240px] sm:w-[260px] md:w-[280px]">
                                    <div
                                        className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-secondary/15 blur-2xl"/>
                                    <div className="flex items-start justify-between gap-4">
                                        <p className="text-xs text-muted-foreground">Proyectos entregados</p>
                                        <Link
                                            href="/services"
                                            className="text-xs text-muted-foreground hover:text-foreground transition"
                                        >
                                            Ver todo →
                                        </Link>
                                    </div>

                                    <div className="mt-7">
                                        <p className="text-5xl font-extrabold tracking-tight">4.9 ★</p>
                                        <p className="mt-1 text-sm text-muted-foreground">valoración promedio</p>
                                    </div>

                                    <div className="mt-7 flex items-center gap-2">
                                        <span className="h-2 w-2 rounded-full bg-primary"/>
                                        <p className="text-xs text-muted-foreground">
                                            Resultados medibles desde el inicio
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </ContentWidth>
    );
}

function HeroCard({
                      tone,
                      title,
                      subtitle,
                      rightTag,
                      className,
                      variant = "image",
                      accent = "blue",
                  }: {
    tone: "primary" | "neutral" | "warm";
    title: string;
    subtitle: string;
    rightTag: string;
    className?: string;
    variant?: "image" | "paper";
    accent?: "red" | "blue" | "green" | "amber";
}) {
    const accentStyles = {
        red: {
            shell: "from-red-500/8 via-red-500/4 to-transparent border-red-500/15",
            dot: "bg-red-500",
            glow: "bg-red-500/10",
            pill: "bg-red-500/8 border-red-500/15 text-foreground/80",
        },
        blue: {
            shell: "from-blue-500/8 via-blue-500/4 to-transparent border-blue-500/15",
            dot: "bg-blue-500",
            glow: "bg-blue-500/10",
            pill: "bg-blue-500/8 border-blue-500/15 text-foreground/80",
        },
        green: {
            shell: "from-emerald-500/8 via-emerald-500/4 to-transparent border-emerald-500/15",
            dot: "bg-emerald-500",
            glow: "bg-emerald-500/10",
            pill: "bg-emerald-500/8 border-emerald-500/15 text-foreground/80",
        },
        amber: {
            shell: "from-amber-500/10 via-amber-500/5 to-transparent border-amber-500/15",
            dot: "bg-amber-500",
            glow: "bg-amber-500/12",
            pill: "bg-amber-500/10 border-amber-500/15 text-foreground/80",
        },
    }[accent];

    return (
        <div
            className={cn(
                "snap-start relative overflow-hidden rounded-2xl border p-5",
                "min-h-[180px] md:min-h-[350px]",
                "bg-gradient-to-br",
                accentStyles.shell,
                className
            )}
        >
            <div className={cn("pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full blur-3xl", accentStyles.glow)} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/[0.03] to-transparent" />

            <div className="relative flex items-start justify-between gap-3">
                <p className="text-xs font-semibold text-foreground/80">{subtitle}</p>
                <span className="text-xs font-semibold text-foreground/60">{rightTag}</span>
            </div>

            <div className="relative mt-7">
                <p className="whitespace-pre-line text-3xl font-extrabold leading-[1.02] tracking-tight">
                    {title}
                </p>

                <div className="mt-4 flex items-center gap-2">
                    <span className={cn("h-2 w-2 rounded-full", accentStyles.dot)} />
                    <p className="text-xs text-foreground/65">
                        Estrategia · Diseño · Performance
                    </p>
                </div>
            </div>

            <div className="absolute left-4 bottom-4">
        <Button className={cn("inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold backdrop-blur border", accentStyles.pill)}>
            <Link href="/services">
                Ver más →
            </Link>
        </Button>
            </div>
        </div>
    );
}

