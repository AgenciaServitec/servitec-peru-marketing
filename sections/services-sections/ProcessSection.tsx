"use client";

import { ContentWidth } from "@/components/ContentWidth";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight, Search, Target, Rocket, BarChart2 } from "lucide-react";

const STEPS = [
    {
        number: "01",
        title: "Análisis & Brief",
        desc: "Entendemos tu negocio. No lanzamos nada sin saber quién es tu cliente y qué hace tu competencia.",
        icon: Search,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
    },
    {
        number: "02",
        title: "Estrategia",
        desc: "Definimos el plan de ataque: canales, presupuesto, tecnología y KPIs claros para medir el éxito.",
        icon: Target,
        color: "text-indigo-500",
        bg: "bg-indigo-500/10",
        border: "border-indigo-500/20",
    },
    {
        number: "03",
        title: "Ejecución",
        desc: "Manos a la obra. Desarrollo ágil o lanzamiento de campañas con monitoreo constante de calidad.",
        icon: Rocket,
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20",
    },
    {
        number: "04",
        title: "Medición",
        desc: "Lo que no se mide, no mejora. Recibes reportes claros y optimizamos para superar los resultados.",
        icon: BarChart2,
        color: "text-pink-500",
        bg: "bg-pink-500/10",
        border: "border-pink-500/20",
    },
];

export function ProcessSection() {
    return (
        <section className="py-24 relative overflow-hidden border-t border-border/40 bg-background/50">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-primary/5 blur-[100px] rounded-full -z-10" />

            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />

            <ContentWidth>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
                    <div className="max-w-2xl relative">
                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                            Simple, transparente y <span className="text-primary">efectivo</span>
                        </h2>
                        <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
                            Nuestro proceso elimina el caos. Sabrás exactamente en qué etapa está tu proyecto y qué esperar después.
                        </p>
                    </div>

                    <Button asChild className="rounded-full hidden md:flex h-12 px-6 text-base shadow-lg shadow-primary/20">
                        <Link href="/contact">
                            Comenzar ahora <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -z-10" />

                    {STEPS.map((step, idx) => (
                        <div
                            key={idx}
                            className="group relative flex flex-col h-full"
                        >
                            {/* Card Container */}
                            <div className={cn(
                                "relative flex-1 rounded-3xl border border-border/60 bg-card/40 backdrop-blur-md p-6 overflow-hidden transition-all duration-300",
                                "hover:border-primary/40 hover:bg-card/60 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5"
                            )}>

                                {/* Gran número de fondo (Marca de agua) */}
                                <span className="absolute -right-4 -top-6 text-[8rem] font-black text-foreground/5 select-none transition-transform duration-500 group-hover:scale-110 group-hover:text-foreground/10">
                  {step.number}
                </span>
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

                                <div className="relative z-10 flex flex-col gap-5 h-full">
                                    <div className={cn(
                                        "flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-300",
                                        "bg-background/80 backdrop-blur shadow-sm group-hover:scale-110",
                                        step.border
                                    )}>
                                        <step.icon className={cn("h-7 w-7", step.color)} />
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold tracking-tight mb-2 flex items-center gap-2">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </div>
                                    <div className="mt-4 pt-4 border-t border-border/40 flex items-center justify-between">
                    <span className="text-xs font-mono font-medium text-muted-foreground/70 group-hover:text-primary transition-colors">
                      Fase {step.number}
                    </span>
                                        <div className={cn("h-1.5 w-1.5 rounded-full", step.bg.replace('/10', ''))} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-12 md:hidden">
                    <Button asChild className="w-full rounded-full h-12 text-base shadow-lg">
                        <Link href="/contact">Comenzar ahora <ArrowRight className="ml-2 h-4 w-4"/></Link>
                    </Button>
                </div>
            </ContentWidth>
        </section>
    );
}