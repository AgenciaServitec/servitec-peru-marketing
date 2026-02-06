"use client";

import Link from "next/link";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";

export function Hero() {
    return (
        <section className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
                <div className="absolute -top-10 -right-24 h-72 w-72 rounded-full bg-secondary/15 blur-3xl" />
                <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
            </div>

            <div className="container-custom section-padding relative">
                <div className="absolute right-4 top-10 md:right-10 md:top-16">
                    <div className="relative">
                        <div className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-primary shadow-primary" />
                        <div className="absolute inset-[10px] rounded-full bg-background/90 border border-border/70 backdrop-blur" />
                        <div className="absolute inset-0 grid place-items-center">
                            <div className="text-center leading-none">
                                <p className="text-[10px] md:text-xs font-semibold tracking-wide text-foreground">
                                    LET’S GO
                                </p>
                                <p className="text-[9px] md:text-[10px] text-muted-foreground">
                                    COMUNICACIÓN
                                </p>
                            </div>
                        </div>

                        <div className="pointer-events-none absolute -inset-3 rounded-full border border-dashed border-border/60" />
                    </div>
                </div>

                <div className="max-w-4xl">
                    <p className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-3 py-1 text-xs text-muted-foreground">
                        <span className="h-2 w-2 rounded-full bg-accent" />
                        Agencia de marketing + desarrollo web
                    </p>

                    <h1 className="mt-5 font-extrabold tracking-tight leading-[0.95]">
                        <span className="block">SOCIAL MEDIA</span>
                        <span className="block">GROWTH ENGINE.</span>
                    </h1>

                    <p className="mt-5 max-w-2xl text-base md:text-lg text-muted-foreground">
                        Estrategia, creatividad y tecnología para escalar tu presencia digital.
                        Campañas que convierten + webs rápidas y medibles.
                    </p>

                    <div className="mt-7 flex flex-col sm:flex-row gap-3">
                        <Button
                            className="rounded-full bg-primary text-primary-foreground hover:opacity-95"
                            asChild
                        >
                            <Link href="/cotizar">Empezar</Link>
                        </Button>

                        <Button
                            variant="outline"
                            className="rounded-full border-primary/30 hover:border-primary"
                            asChild
                        >
                            <Link href="/servicios">Ver servicios</Link>
                        </Button>
                    </div>
                </div>

                <div className="mt-10 md:mt-14">
                    <div className="rounded-3xl border border-border/70 bg-card/50 backdrop-blur p-3 md:p-4 shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4">
                            <HeroCard
                                tone="primary"
                                title="Explore\nMore!"
                                subtitle="Ads + Creatividad"
                                rightTag="01"
                            />

                            <HeroCard
                                tone="neutral"
                                title="Social\nIdentity"
                                subtitle="Branding & Diseño"
                                rightTag="02"
                            />

                            <HeroCard
                                tone="warm"
                                title="Seasonal\nmarketing tips"
                                subtitle="Contenido & Growth"
                                rightTag="03"
                            />

                            <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-background p-5">
                                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-secondary/15 blur-2xl" />
                                <div className="flex items-start justify-between gap-4">
                                    <p className="text-xs text-muted-foreground">(SMM)</p>
                                    <span className="text-xs text-muted-foreground">ALL SERVICES →</span>
                                </div>

                                <div className="mt-6">
                                    <p className="text-4xl font-extrabold tracking-tight">
                                        349
                                    </p>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        4.9 Reviews ★
                                    </p>
                                </div>

                                <div className="mt-6 flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-primary" />
                                    <p className="text-xs text-muted-foreground">
                                        Resultados medibles desde el día 1
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/40 px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-primary" />
              SEO & Ads
            </span>
                        <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/40 px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-secondary" />
              Web & Landing Pages
            </span>
                        <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/40 px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Analítica & Automatización
            </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

function HeroCard({
                      tone,
                      title,
                      subtitle,
                      rightTag,
                  }: {
    tone: "primary" | "neutral" | "warm";
    title: string;
    subtitle: string;
    rightTag: string;
}) {
    const bg = {
        primary:
            "bg-gradient-to-br from-primary/95 to-secondary/85 text-primary-foreground",
        neutral:
            "bg-gradient-to-br from-muted to-background text-foreground",
        warm:
            "bg-gradient-to-br from-primary/90 via-accent/65 to-secondary/75 text-primary-foreground",
    }[tone];

    return (
        <div
            className={cn(
                "relative overflow-hidden rounded-2xl border border-border/70 p-5 min-h-[168px]",
                bg,
            )}
        >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />

            <div className="relative flex items-start justify-between gap-3">
                <p className="text-xs font-semibold opacity-90">{subtitle}</p>
                <span className="text-xs font-semibold opacity-80">{rightTag}</span>
            </div>

            <div className="relative mt-6">
                <p className="whitespace-pre-line text-2xl font-extrabold leading-[1.05] tracking-tight">
                    {title}
                </p>
                <div className="mt-4 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-background/70" />
                    <p className="text-xs opacity-85">
                        Estrategia · Diseño · Performance
                    </p>
                </div>
            </div>

            <div className="absolute left-4 bottom-4">
        <span className="inline-flex items-center rounded-full bg-background/20 px-3 py-1 text-[11px] font-semibold backdrop-blur border border-white/20">
          Ver más →
        </span>
            </div>
        </div>
    );
}
