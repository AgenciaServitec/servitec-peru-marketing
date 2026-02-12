"use client";

import Link from "next/link";
import {ContentWidth} from "@/components/ContentWidth";
import {Button} from "@/components/ui/button";
import {ArrowDown, ArrowUpRight, Sparkles} from "lucide-react";
import {ServicesShowcase} from "@/sections/ServicesShowcase";
import {HowWeWork} from "@/sections/HowWeWork";
import {Deliverables} from "@/sections/Deliverables";
import {Faq} from "@/sections/Faq";
import {FinalCTA} from "@/sections/FinalCTA";
import * as React from "react";

export default function Services() {
    return (
        <main className="relative">
            <HeroServices />

            {/* Explorador principal (tu showcase interactivo) */}
            <ServicesShowcase />

            <Deliverables />

            {/* Proceso (tu sección) */}
            <HowWeWork />

            <Faq />

            <FinalCTA />
        </main>
    );
}

type Intent = "leads" | "posicionamiento" | "web" | "automatizacion";

export function HeroServices({
                                 onPick,
                             }: {
    onPick?: (intent: Intent) => void;
}) {
    return (
        <section className="relative overflow-hidden">
            {/* glows */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-28 -left-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute -top-16 -right-24 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
                <div className="absolute -bottom-28 left-1/3 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
            </div>

            <ContentWidth>
                <div className="relative pt-14 md:pt-20 pb-10 md:pb-14">
                    <div className="max-w-4xl">
                        <p className="inline-flex items-center gap-2 text-xs font-semibold rounded-full px-3 py-1 border border-border/70 bg-card/40 backdrop-blur text-muted-foreground">
                            <Sparkles className="h-4 w-4 text-accent" />
                            Catálogo de servicios (sin promesas irreales)
                        </p>

                        <h1 className="mt-5 font-extrabold tracking-tight leading-[0.98] text-[clamp(2.2rem,5vw,4.6rem)]">
                            Elige el servicio correcto{" "}
                            <span className="gradient-text-primary">para tu objetivo</span>
                        </h1>

                        <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl">
                            Te mostramos qué incluye cada servicio, para quién es y cómo lo medimos.
                            Si no sabes por dónde empezar, te guiamos en una llamada breve.
                        </p>

                        <div className="mt-7 flex flex-col sm:flex-row gap-3">
                            <Button className="rounded-full bg-primary text-primary-foreground hover:opacity-95" asChild size="lg">
                                <Link href="/cotizar">
                                    Solicitar cotización <ArrowUpRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>

                            <Button
                                variant="outline"
                                className="rounded-full border-primary/30 hover:border-primary"
                                asChild
                                size="lg"
                            >
                                <Link href="#services">
                                    Ver servicios <ArrowDown className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>

                            <Button
                                variant="outline"
                                className="rounded-full border-border/70"
                                asChild
                                size="lg"
                            >
                                <Link href="/contact">
                                    Agendar llamada <ArrowUpRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>

                        {/* Intent chips */}
                        <div className="mt-8 rounded-3xl border border-border/70 bg-card/40 backdrop-blur p-4 md:p-5">
                            <p className="text-sm font-semibold">¿Qué quieres lograr?</p>
                            <p className="mt-1 text-sm text-muted-foreground">
                                Toca una opción y te resaltamos el servicio recomendado.
                            </p>

                            <div className="mt-4 flex flex-wrap gap-2">
                                <IntentChip label="Quiero leads" onClick={() => onPick?.("leads")} />
                                <IntentChip label="Quiero posicionamiento" onClick={() => onPick?.("posicionamiento")} />
                                <IntentChip label="Quiero una web que convierta" onClick={() => onPick?.("web")} />
                                <IntentChip label="Quiero automatizar / medir" onClick={() => onPick?.("automatizacion")} />
                            </div>
                        </div>
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
}

function IntentChip({ label, onClick }: { label: string; onClick?: () => void }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="rounded-full border border-border/70 bg-background/60 px-4 py-2 text-sm font-semibold text-muted-foreground hover:text-foreground hover:border-border transition"
        >
            {label}
        </button>
    );
}

function MiniTrust({ label, desc }: { label: string; desc: string }) {
    return (
        <div className="rounded-2xl border border-border/70 bg-card/40 backdrop-blur p-4">
            <p className="text-sm font-semibold">{label}</p>
            <p className="mt-1 text-xs text-muted-foreground">{desc}</p>
        </div>
    );
}
