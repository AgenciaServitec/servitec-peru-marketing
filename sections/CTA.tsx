"use client";

import Link from "next/link";
import {Button} from "@/components/ui/button";
import {ArrowUpRight, PhoneCall} from "lucide-react";
import {ContentWidth} from "@/components/ContentWidth";

export function Cta() {
    return (
        <section id="cta" className="relative mt-20 py-20">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
            </div>

            <ContentWidth>
                <div className="rounded-[2rem] border border-border/60 bg-card/60 backdrop-blur-xl p-8 md:p-12 shadow-sm">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-8">
                            <p className="text-sm text-muted-foreground">
                                Listo para dar el siguiente paso
                            </p>

                            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                                Lanza tu próxima campaña o web con un{" "}
                                <span className="gradient-text-primary">equipo serio</span>.
                            </h2>

                            <p className="mt-4 max-w-2xl text-base md:text-lg text-muted-foreground">
                                Estrategia + ejecución: anuncios, SEO, webs rápidas y medición
                                clara. Te ayudamos a convertir visitas en resultados reales.
                            </p>
                        </div>

                        <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
                            <Button
                                className="rounded-full bg-primary text-primary-foreground hover:opacity-95 w-full sm:w-auto lg:w-full"
                                asChild
                                size="lg"
                            >
                                <Link href="/cotizar">
                                    Solicitar cotización
                                    <ArrowUpRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>

                            <Button
                                variant="outline"
                                className="rounded-full border-primary/30 hover:border-primary w-full sm:w-auto lg:w-full"
                                asChild
                                size="lg"
                            >
                                <Link href="/contact">
                                    Agendar llamada
                                    <PhoneCall className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
}
