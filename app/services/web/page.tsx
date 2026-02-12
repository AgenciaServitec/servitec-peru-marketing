"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ContentWidth } from "@/components/ContentWidth";
import {
    ArrowRight,
    Check,
    Code2,
    Cpu,
    Gauge,
    Globe,
    LayoutTemplate,
    Layers,
    MousePointerClick,
    Rocket,
    Smartphone,
    Zap,
} from "lucide-react";

export default function WebServicePage() {
    return (
        <main className="min-h-screen bg-background relative overflow-hidden">
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-fuchsia-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px]" />

                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>

            <WebHero />
            <TechStackSection />
            <SpeedSection />
            <ConversionFeatures />
            <DeliverablesSection />
            <CtaSection />
        </main>
    );
}

function WebHero() {
    return (
        <section className="relative pt-24 pb-20 md:pt-32 md:pb-24">
            <ContentWidth>
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    <div className="flex-1 text-center lg:text-left z-10 order-2 lg:order-1">
                        <Badge variant="outline" className="mb-6 py-1.5 px-4 text-sm border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-500 rounded-full">
                            <LayoutTemplate className="w-3.5 h-3.5 mr-2" />
                            Diseño & Arquitectura Web
                        </Badge>

                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
                            Webs que cargan rápido y <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-pink-500 to-cyan-500">
                                venden mejor
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            Olvídate de las plantillas lentas. Desarrollamos con <strong>Astro, Next.js y React</strong> para crear sitios con arquitectura pensada en la conversión y optimizados para Google.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button size="lg" className="rounded-full h-12 px-8 text-base shadow-lg shadow-fuchsia-500/20 bg-foreground text-background hover:bg-foreground/90" asChild>
                                <Link href="https://wa.me/51941801827" target="_blank">
                                    Cotizar mi Web <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>

                        <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm font-medium text-muted-foreground">
                            <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-yellow-500 fill-current" /> Carga instántanea</span>
                            <span className="flex items-center gap-2"><Smartphone className="w-4 h-4 text-foreground" /> Mobile First</span>
                        </div>
                    </div>

                    <div className="flex-1 w-full flex justify-center order-1 lg:order-2 relative perspective-1000">
                        <div className="relative w-full max-w-[420px] bg-background/80 backdrop-blur-xl border border-border/50 rounded-3xl shadow-2xl p-8 transform rotate-y-[-5deg] transition-transform duration-500 hover:rotate-0">
                            <div className="flex items-center justify-between mb-8 border-b border-border/40 pb-4">
                                <div className="flex items-center gap-2">
                                    <Globe className="w-5 h-5 text-muted-foreground" />
                                    <span className="text-sm font-mono text-muted-foreground">https://tu-negocio.com</span>
                                </div>
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/20" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/20" />
                                </div>
                            </div>

                            <div className="flex justify-center mb-8">
                                <div className="relative w-32 h-32 flex items-center justify-center">
                                    <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                                        <circle cx="64" cy="64" r="60" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-muted/20" />
                                        <circle cx="64" cy="64" r="60" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="377" strokeDashoffset="10" className="text-emerald-500" strokeLinecap="round" />
                                    </svg>
                                    <div className="text-center">
                                        <span className="text-4xl font-black text-emerald-500">98</span>
                                        <p className="text-[10px] font-bold text-muted-foreground uppercase mt-1">Performance</p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <MetricItem label="First Contentful Paint" value="0.4 s" status="good" />
                                <MetricItem label="Speed Index" value="0.8 s" status="good" />
                                <MetricItem label="Total Blocking Time" value="0 ms" status="good" />
                                <MetricItem label="SEO Score" value="100" status="good" />
                            </div>

                            <div className="absolute -right-8 top-10 bg-card border border-border p-3 rounded-xl shadow-lg animate-bounce duration-[3000ms]">
                                <span className="text-2xl">🚀</span>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
}

// ----------------------------------------------------------------------
// NUEVA SECCIÓN: TECH STACK
// ----------------------------------------------------------------------
function TechStackSection() {
    return (
        <section className="py-12 border-b border-border/40">
            <ContentWidth>
                <div className="text-center mb-10">
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                        Powerhouse Technology
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold mt-2">
                        El stack correcto para cada proyecto
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Astro Card */}
                    <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/40 p-6 hover:bg-card/60 transition-colors">
                        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-orange-500/10 blur-2xl group-hover:bg-orange-500/20 transition-colors" />
                        <div className="relative z-10 flex flex-col items-center text-center">
                            <div className="mb-4 p-3 rounded-xl bg-orange-500/10 text-orange-600">
                                <Rocket className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Astro</h3>
                            <p className="text-sm text-muted-foreground">
                                Para Landing Pages y sitios informativos. Cero JavaScript innecesario.
                                <span className="block mt-1 font-medium text-orange-600">El más rápido del mundo.</span>
                            </p>
                        </div>
                    </div>

                    {/* Next.js Card */}
                    <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/40 p-6 hover:bg-card/60 transition-colors">
                        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-foreground/5 blur-2xl group-hover:bg-foreground/10 transition-colors" />
                        <div className="relative z-10 flex flex-col items-center text-center">
                            <div className="mb-4 p-3 rounded-xl bg-foreground/10 text-foreground">
                                <Layers className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Next.js</h3>
                            <p className="text-sm text-muted-foreground">
                                Para plataformas complejas, e-commerce y aplicaciones web.
                                <span className="block mt-1 font-medium text-foreground">Escalabilidad total.</span>
                            </p>
                        </div>
                    </div>

                    {/* React Card */}
                    <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/40 p-6 hover:bg-card/60 transition-colors">
                        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-2xl group-hover:bg-cyan-500/20 transition-colors" />
                        <div className="relative z-10 flex flex-col items-center text-center">
                            <div className="mb-4 p-3 rounded-xl bg-cyan-500/10 text-cyan-500">
                                <Code2 className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">React.js</h3>
                            <p className="text-sm text-muted-foreground">
                                El motor de interactividad. Interfaces fluidas, modernas y dinámicas.
                                <span className="block mt-1 font-medium text-cyan-600">Experiencia de usuario premium.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </ContentWidth>
        </section>
    )
}

function MetricItem({ label, value, status }: { label: string, value: string, status: "good" | "bad" }) {
    return (
        <div className="flex items-center justify-between p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-xs text-muted-foreground font-medium">{label}</span>
            </div>
            <span className="text-sm font-bold text-foreground">{value}</span>
        </div>
    )
}

function SpeedSection() {
    return (
        <section className="py-20 bg-card/30 backdrop-blur-sm border-y border-border/40">
            <ContentWidth>
                <div className="text-center mb-12 max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">La velocidad es dinero</h2>
                    <p className="text-muted-foreground">
                        Amazon descubrió que por cada 100ms de retraso, perdían 1% en ventas.
                        No dejes que una web lenta mate tu negocio.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="p-8 rounded-3xl border border-red-500/20 bg-red-500/5 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-red-100 rounded-lg text-red-600"><Gauge className="w-6 h-6" /></div>
                            <h3 className="text-xl font-bold">Web Tradicional</h3>
                        </div>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li className="flex gap-2"><span className="text-red-500">✕</span> Plantillas pesadas (Wordpress)</li>
                            <li className="flex gap-2"><span className="text-red-500">✕</span> Carga lenta (+5 segundos)</li>
                            <li className="flex gap-2"><span className="text-red-500">✕</span> Código basura innecesario</li>
                        </ul>
                    </div>

                    <div className="relative p-8 rounded-3xl border border-emerald-500/30 bg-emerald-500/5 shadow-2xl shadow-emerald-500/10 scale-105">
                        <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">RECOMENDADO</div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600"><Cpu className="w-6 h-6 fill-current" /></div>
                            <h3 className="text-xl font-bold text-foreground">Stack Moderno</h3>
                        </div>
                        <ul className="space-y-3 text-sm">
                            <li className="flex gap-2"><Check className="w-4 h-4 text-emerald-500" /> <strong>Astro</strong> para velocidad extrema</li>
                            <li className="flex gap-2"><Check className="w-4 h-4 text-emerald-500" /> <strong>Next.js</strong> para apps potentes</li>
                            <li className="flex gap-2"><Check className="w-4 h-4 text-emerald-500" /> <strong>React</strong> para interactividad</li>
                        </ul>
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
}

function ConversionFeatures() {
    return (
        <section className="py-24">
            <ContentWidth>
                <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
                    <div className="flex-1">
                        <Badge variant="secondary" className="mb-4">Diseño UI/UX</Badge>
                        <h2 className="text-3xl font-bold mb-6">No solo bonita.<br />Diseñada para convertir.</h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Una web bonita que no vende es un adorno. Nosotros aplicamos psicología de usuario para guiar al visitante hacia el botón de compra o contacto.
                        </p>

                        <div className="space-y-6">
                            <FeatureRow
                                icon={MousePointerClick}
                                title="Call to Actions Claros"
                                desc="Botones estratégicos que persiguen al usuario sin ser molestos."
                            />
                            <FeatureRow
                                icon={Smartphone}
                                title="Mobile First Real"
                                desc="El 80% de tu tráfico es móvil. Diseñamos para el celular primero, luego para escritorio."
                            />
                            <FeatureRow
                                icon={Layers}
                                title="Arquitectura de Información"
                                desc="Estructura lógica para que el cliente encuentre lo que busca en menos de 3 clics."
                            />
                        </div>
                    </div>

                    <div className="flex-1 w-full flex justify-center">
                        <div className="relative w-full max-w-sm">
                            <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-500/20 to-cyan-500/20 blur-[60px] rounded-full" />
                            <div className="relative bg-background border border-border p-4 rounded-xl shadow-lg mb-4 transform translate-x-4">
                                <p className="text-xs text-muted-foreground mb-2">Elemento Clave</p>
                                <div className="w-full h-10 bg-fuchsia-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-fuchsia-500/30">
                                    Comprar Ahora <ArrowRight className="ml-2 w-4 h-4" />
                                </div>
                            </div>
                            <div className="relative bg-background border border-border p-6 rounded-xl shadow-lg transform -translate-x-4 z-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 rounded-full bg-muted" />
                                    <div className="h-2 w-24 bg-muted rounded-full" />
                                </div>
                                <div className="space-y-3">
                                    <div className="h-8 w-full bg-muted/50 rounded-lg border border-border/50" />
                                    <div className="h-8 w-full bg-muted/50 rounded-lg border border-border/50" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
}

function FeatureRow({ icon: Icon, title, desc }: any) {
    return (
        <div className="flex gap-4 group">
            <div className="mt-1 w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center shrink-0 group-hover:border-fuchsia-500/50 group-hover:text-fuchsia-500 transition-colors shadow-sm">
                <Icon className="w-5 h-5" />
            </div>
            <div>
                <h4 className="font-bold text-foreground text-lg">{title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
        </div>
    )
}
function DeliverablesSection() {
    return (
        <section className="py-20 bg-fuchsia-950/5 border-t border-border/40">
            <ContentWidth>
                <div className="text-center mb-10">
                    <h2 className="text-2xl font-bold">Todo lo que tu web necesita</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { text: "UX/UI Moderno", icon: LayoutTemplate },
                        { text: "Optimización Core Web Vitals", icon: Gauge },
                        { text: "Integración CRM/WhatsApp", icon: Smartphone },
                        { text: "Landing Pages de Venta", icon: MousePointerClick },
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl bg-background border border-border/60 shadow-sm hover:border-fuchsia-500/40 transition-colors group">
                            <div className="w-10 h-10 rounded-full bg-fuchsia-100 flex items-center justify-center text-fuchsia-600 mb-3 group-hover:scale-110 transition-transform">
                                <item.icon className="w-5 h-5" />
                            </div>
                            <p className="font-semibold group-hover:text-fuchsia-700 transition-colors">{item.text}</p>
                        </div>
                    ))}
                </div>
            </ContentWidth>
        </section>
    );
}

function CtaSection() {
    return (
        <section className="py-24 text-center relative overflow-hidden">
            <ContentWidth>
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl font-extrabold mb-6">
                        ¿Tu web actual te da vergüenza?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-10">
                        Es hora de tener una presencia digital que esté a la altura de tu marca. Rápida, bonita y efectiva.
                    </p>
                    <div className="flex justify-center gap-4">
                        {/*<Button size="lg" className="rounded-full h-14 px-8 text-lg bg-foreground text-background hover:bg-foreground/90 shadow-xl" asChild>*/}
                        {/* <Link href="/quote">Cotizar Proyecto Web</Link>*/}
                        {/*</Button>*/}
                        <Button variant="outline" size="lg" className="rounded-full h-14 px-8 text-lg" asChild>
                            <Link href="https://wa.me/51941801827" target="_blank">
                                Consultar por WhatsApp
                            </Link>
                        </Button>
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
}