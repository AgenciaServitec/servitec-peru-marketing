"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ContentWidth } from "@/components/ContentWidth";
import { cn } from "@/lib/utils";
import {
    CheckCircle2,
    Globe,
    LayoutList,
    MapPin,
    MessageCircle,
    Search,
    Star,
    TrendingUp,
} from "lucide-react";

export default function SeoServicePage() {
    return (
        <main className="min-h-screen bg-background relative overflow-hidden">
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
            </div>

            <SeoHero />
            <LocalVsOrganic />
            <StrategySection />
            <DeliverablesSection />
            <CtaSection />
        </main>
    );
}

function SeoHero() {
    return (
        <section className="relative pt-24 pb-20 md:pt-32 md:pb-24">
            <ContentWidth>
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Texto */}
                    <div className="flex-1 text-center lg:text-left z-10">
                        <Badge variant="outline" className="mb-6 py-1.5 px-4 text-sm border-amber-500/30 bg-amber-500/10 text-amber-600 rounded-full">
                            <Search className="w-3.5 h-3.5 mr-2" />
                            Crecimiento Orgánico
                        </Badge>

                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
                            Que te encuentren <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">
                cuando te buscan
              </span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            No sirve de nada tener la mejor web si nadie la ve. Optimizamos tu presencia técnica y local para que Google te prefiera sobre tu competencia.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button size="lg" className="rounded-full h-12 px-8 text-base bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-500/20 text-white" asChild>
                                <Link href="https://wa.me/51941801827" target="_blank">
                                    <MessageCircle className="mr-2 h-5 w-5" />
                                    Analizar mi web por WhatsApp
                                </Link>
                            </Button>
                        </div>

                        <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm font-medium text-muted-foreground">
                            <div className="flex -space-x-2">
                                {[1,2,3].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-slate-200 flex items-center justify-center text-[10px] font-bold">
                                        G
                                    </div>
                                ))}
                            </div>
                            <span>Estrategias White Hat (Seguras)</span>
                        </div>
                    </div>

                    <div className="flex-1 w-full max-w-[500px] lg:max-w-none relative z-10 perspective-1000">
                        <div className="relative rounded-2xl border border-border/50 bg-card/90 backdrop-blur-xl shadow-2xl p-6 transform rotate-y-[-5deg] transition-transform duration-500 hover:rotate-0">

                            <div className="flex items-center gap-3 bg-background border border-border/60 rounded-full px-4 py-2 mb-6 shadow-sm">
                                <Search className="w-4 h-4 text-muted-foreground" />
                                <div className="h-2 w-32 bg-muted-foreground/20 rounded-full" />
                                <div className="ml-auto w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs">S</div>
                            </div>

                            <div className="flex gap-4 mb-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-2xl">
                                    S
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg leading-none mb-1">Tu Empresa S.A.C.</h3>
                                    <div className="flex items-center gap-1 mb-1">
                                        <span className="text-orange-500 font-bold text-sm">5.0</span>
                                        <div className="flex text-orange-500">
                                            {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                                        </div>
                                        <span className="text-xs text-muted-foreground">(84 reseñas)</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground">Marketing Agency • Lima, Perú</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-4 gap-2 mb-6">
                                <div className="bg-blue-50 rounded-lg p-2 flex flex-col items-center justify-center gap-1 border border-blue-100">
                                    <Globe className="w-4 h-4 text-blue-600" />
                                    <span className="text-[10px] font-medium text-blue-700">Web</span>
                                </div>
                                <div className="bg-blue-50 rounded-lg p-2 flex flex-col items-center justify-center gap-1 border border-blue-100">
                                    <MapPin className="w-4 h-4 text-blue-600" />
                                    <span className="text-[10px] font-medium text-blue-700">Cómo llegar</span>
                                </div>
                                <div className="bg-blue-50 rounded-lg p-2 flex flex-col items-center justify-center gap-1 border border-blue-100">
                                    <MessageCircle className="w-4 h-4 text-blue-600" />
                                    <span className="text-[10px] font-medium text-blue-700">Chat</span>
                                </div>
                            </div>

                            {/* Ranking Graph */}
                            <div className="pt-4 border-t border-border/50">
                                <div className="flex justify-between items-end mb-2">
                      <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                         <TrendingUp className="w-3 h-3" /> Tendencia de Búsqueda
                      </span>
                                    <span className="text-xs font-mono text-muted-foreground">+125%</span>
                                </div>
                                <div className="h-16 w-full flex items-end gap-1">
                                    {[20, 35, 30, 50, 45, 60, 55, 80, 70, 95].map((h, i) => (
                                        <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-amber-500/20 rounded-t-sm hover:bg-amber-500/40 transition-colors" />
                                    ))}
                                </div>
                            </div>

                            {/* Map Pin Flotante */}
                            <div className="absolute -right-6 -top-6 w-12 h-12 bg-red-500 rounded-full border-4 border-background shadow-xl flex items-center justify-center animate-bounce">
                                <MapPin className="w-6 h-6 text-white fill-current" />
                            </div>
                        </div>
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
}

function LocalVsOrganic() {
    return (
        <section className="py-20 bg-card/30 backdrop-blur-sm border-y border-border/40">
            <ContentWidth>
                <div className="text-center mb-12 max-w-2xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Dos frentes de batalla</h2>
                    <p className="text-muted-foreground">
                        Atacamos el posicionamiento desde dos ángulos para capturar tanto al cliente que busca "cerca de mí" como al que investiga soluciones.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <StrategyCard
                        icon={MapPin}
                        title="SEO Local (Google Maps)"
                        desc="Ideal para negocios físicos o de servicios en una ciudad específica."
                        points={[
                            "Optimización de Ficha de Negocio (GBP)",
                            "Gestión de reseñas y reputación",
                            "Citas locales y directorios"
                        ]}
                        color="text-red-500"
                        bg="bg-red-500/10"
                        borderColor="hover:border-red-500/30"
                    />
                    <StrategyCard
                        icon={Search}
                        title="SEO Orgánico (Búsqueda)"
                        desc="Para aparecer en los resultados tradicionales debajo del mapa."
                        points={[
                            "Optimización técnica de la web (Velocidad/Móvil)",
                            "Creación de contenido que responde dudas",
                            "Autoridad de dominio (Link Building)"
                        ]}
                        color="text-blue-500"
                        bg="bg-blue-500/10"
                        borderColor="hover:border-blue-500/30"
                    />
                </div>
            </ContentWidth>
        </section>
    );
}

function StrategyCard({ icon: Icon, title, desc, points, color, bg, borderColor }: any) {
    return (
        <div className={cn("p-8 rounded-3xl bg-background border border-border/60 transition-all duration-300", borderColor)}>
            <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6", bg)}>
                <Icon className={cn("w-7 h-7", color)} />
            </div>
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">{desc}</p>

            <ul className="space-y-3">
                {points.map((point: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-medium">
                        <CheckCircle2 className={cn("w-4 h-4 shrink-0 mt-0.5", color)} />
                        <span>{point}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function StrategySection() {
    return (
        <section className="py-24">
            <ContentWidth>
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold mb-6">No es magia, es ingeniería</h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Google tiene más de 200 factores de ranking. Nosotros nos enfocamos en los que realmente mueven la aguja, sin trucos baratos que te penalicen después.
                        </p>

                        <div className="space-y-8 relative">
                            <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-border -z-10" />

                            <StepItem number="01" title="Auditoría Técnica" desc="Reparamos errores que impiden que Google lea tu sitio." />
                            <StepItem number="02" title="Keyword Research" desc="Descubrimos cómo buscan tus clientes (no como tú crees que buscan)." />
                            <StepItem number="03" title="Contenido & Autoridad" desc="Creamos las páginas que responden a esas búsquedas y conseguimos enlaces." />
                        </div>
                    </div>

                    <div className="flex-1 w-full flex justify-center">
                        <div className="relative w-full max-w-sm aspect-[4/5] bg-slate-900 rounded-2xl p-6 shadow-2xl border border-slate-800 overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/90 z-10" />

                            <div className="space-y-2 font-mono text-xs text-slate-400 opacity-60">
                                <p>{`<meta name="description" content="..." />`}</p>
                                <p>{`<h1>Palabra Clave Principal</h1>`}</p>
                                <p className="text-emerald-500">{``}</p>
                                <p>{`<link rel="canonical" />`}</p>
                            </div>

                            <div className="absolute bottom-8 left-6 right-6 z-20">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="text-white font-bold text-lg">Indexado Correctamente</span>
                                </div>
                                <p className="text-slate-400 text-sm">Tu sitio está listo para competir.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
}

function StepItem({ number, title, desc }: { number: string, title: string, desc: string }) {
    return (
        <div className="flex gap-6 items-start bg-background p-2 rounded-xl">
            <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center font-bold text-muted-foreground shrink-0 shadow-sm">
                {number}
            </div>
            <div>
                <h4 className="font-bold text-lg">{title}</h4>
                <p className="text-sm text-muted-foreground mt-1">{desc}</p>
            </div>
        </div>
    )
}

function DeliverablesSection() {
    return (
        <section className="py-20 bg-amber-500/5 border-t border-border/40">
            <ContentWidth>
                <div className="text-center mb-10">
                    <h2 className="text-2xl font-bold">¿Qué incluye el servicio?</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { text: "Auditoría técnica", icon: LayoutList },
                        { text: "Google Business Profile", icon: MapPin },
                        { text: "Link Building ético", icon: Globe },
                        { text: "Contenido estratégico", icon: FileTextIcon },
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl bg-background border border-border/60 shadow-sm hover:border-amber-500/40 transition-colors">
                            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mb-3">
                                <item.icon className="w-5 h-5" />
                            </div>
                            <p className="font-semibold">{item.text}</p>
                        </div>
                    ))}
                </div>
            </ContentWidth>
        </section>
    );
}

function FileTextIcon(props: any) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
    )
}

function CtaSection() {
    return (
        <section className="py-24 text-center relative overflow-hidden">
            <ContentWidth>
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl font-extrabold mb-6">
                        ¿Tu competencia sale antes que tú?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-10">
                        El mejor momento para empezar a posicionar tu web fue ayer. El segundo mejor momento es hoy. Hablemos por WhatsApp.
                    </p>
                    <div className="flex justify-center">
                        <Button size="lg" className="rounded-full h-14 px-10 text-lg bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl shadow-emerald-500/20" asChild>
                            <Link href="https://wa.me/51941801827" target="_blank">
                                <MessageCircle className="mr-2 h-5 w-5" />
                                Consultar estrategia SEO
                            </Link>
                        </Button>
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
}