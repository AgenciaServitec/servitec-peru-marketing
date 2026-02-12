"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ContentWidth } from "@/components/ContentWidth";
import { cn } from "@/lib/utils";
import {
    ArrowRight,
    BarChart3,
    Check,
    Globe,
    Megaphone,
    MousePointerClick,
    ShieldCheck,
    Target,
    Zap,
} from "lucide-react";

export default function AdsServicePage() {
    return (
        <main className="min-h-screen bg-background relative overflow-hidden">
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]" />
            </div>

            <AdsHero />
            <PainPoints />
            <PlatformsSection />
            <MethodologySection />
            <DeliverablesList />
            <CtaSection />
        </main>
    );
}

function AdsHero() {
    return (
        <section className="relative pt-24 pb-20 md:pt-32 md:pb-24">
            <ContentWidth>
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="flex-1 text-center lg:text-left z-10">
                        <Badge variant="outline" className="mb-6 py-1.5 px-4 text-sm border-blue-500/30 bg-blue-500/10 text-blue-500 rounded-full">
                            <Zap className="w-3.5 h-3.5 mr-2 fill-current" />
                            Marketing de resultados
                        </Badge>

                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
                            Deja de perseguir clics y <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                                empieza a capturar clientes
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Gestionamos tus campañas en Google y Meta Ads con un objetivo claro:
                            <strong className="text-foreground font-semibold"> ROI positivo</strong>.
                            Sin métricas vanidosas. Estrategia de palabras clave, creatividades que convierten y reportes en tiempo real.
                        </p>

                        <div className="mt-10 pt-8 border-t border-border/40 flex items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4 text-green-500" />
                                <span>Configuración de conversiones</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <BarChart3 className="w-4 h-4 text-blue-500" />
                                <span>Reportes transparentes</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 w-full max-w-[600px] lg:max-w-none relative z-10">
                        <div className="relative aspect-square md:aspect-[4/3] rounded-3xl border border-border/50 bg-card/30 backdrop-blur-xl p-6 shadow-2xl overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent" />

                            <div className="flex items-center justify-between mb-8">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                </div>
                                <div className="h-2 w-20 rounded-full bg-border/50" />
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <StatCard label="ROAS Objetivo" value="+300%" trend="KPI Principal" color="text-green-500" />
                                <StatCard label="Costo por Lead" value="Optimizado" trend="A la baja" color="text-blue-500" />
                            </div>
                            <div className="h-40 w-full bg-gradient-to-t from-blue-500/10 to-transparent rounded-xl border border-blue-500/10 flex items-end justify-between px-4 pb-0 overflow-hidden relative">
                                {[40, 55, 45, 70, 60, 85, 75].map((h, i) => (
                                    <div key={i} style={{ height: `${h}%` }} className="w-[10%] bg-blue-500/40 rounded-t-sm" />
                                ))}
                                <div className="absolute top-4 left-4 text-xs font-mono text-blue-400">Tendencia de Conversiones</div>
                            </div>
                        </div>

                        <div className="absolute -top-6 -right-6 bg-card border border-border p-4 rounded-2xl shadow-xl animate-pulse">
                            <MousePointerClick className="w-6 h-6 text-purple-500 mb-1" />
                            <p className="text-xs font-bold">Remarketing Activo</p>
                        </div>
                        <div className="absolute -bottom-6 -left-6 bg-card border border-border p-4 rounded-2xl shadow-xl">
                            <Target className="w-6 h-6 text-red-500 mb-1" />
                            <p className="text-xs font-bold">Segmentación Precisa</p>
                        </div>
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
}

function StatCard({ label, value, trend, color }: { label: string; value: string; trend: string; color: string }) {
    return (
        <div className="bg-background/40 rounded-xl p-4 border border-border/50">
            <p className="text-xs text-muted-foreground mb-1">{label}</p>
            <div className="flex items-end justify-between">
                <span className="text-2xl font-bold tracking-tight">{value}</span>
                <span className={cn("text-xs font-medium bg-background/50 px-1.5 py-0.5 rounded", color)}>{trend}</span>
            </div>
        </div>
    );
}

function PainPoints() {
    return (
        <section className="py-20 bg-card/30 border-y border-border/40 backdrop-blur-sm">
            <ContentWidth>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">
                            ¿Por qué fallan muchas <br />
                            <span className="text-muted-foreground">campañas publicitarias?</span>
                        </h2>
                        <ul className="space-y-4">
                            {[
                                "Segmentación demasiado amplia que quema presupuesto.",
                                "Reportes basados en 'Likes' que no pagan facturas.",
                                "Falta de seguimiento (Tracking) de las conversiones reales.",
                                "Creativos genéricos que no llaman la atención."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                                    <div className="mt-1 min-w-[20px]"><span className="text-red-500/70 font-bold">✕</span></div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-500/20 blur-3xl -z-10 rounded-full opacity-50" />
                        <div className="bg-background/60 border border-border rounded-3xl p-8 shadow-2xl">
                            <h3 className="text-xl font-bold mb-6 text-blue-500 flex items-center gap-2">
                                <Check className="w-5 h-5 bg-blue-500 text-white rounded-full p-0.5" />
                                Nuestro Enfoque
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "Estructura de campañas granular y ordenada.",
                                    "Optimización basada en Costo por Adquisición (CPA).",
                                    "A/B Testing constante de anuncios y públicos.",
                                    "Transparencia total: Tú eres dueño de tu cuenta."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="mt-1 min-w-[20px]"><Check className="w-4 h-4 text-blue-500" /></div>
                                        <span className="font-medium text-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
}

function PlatformsSection() {
    return (
        <section id="platforms" className="py-24 relative">
            <ContentWidth>
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight">Gestión experta de canales</h2>
                    <p className="mt-4 text-muted-foreground">
                        No disparamos a todos lados. Nos enfocamos en las plataformas donde tu cliente
                        está buscando o descubriendo productos.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <PlatformCard
                        title="Google Ads"
                        subtitle="Captura de demanda"
                        desc="Aparece justo cuando alguien busca tus productos o servicios. Ideal para intenciones de compra alta (Search & Shopping)."
                        icon={Globe}
                        gradient="from-blue-500/20 to-cyan-500/5"
                        borderColor="hover:border-blue-500/50"
                    />
                    <PlatformCard
                        title="Meta Ads (FB + IG)"
                        subtitle="Generación de demanda"
                        desc="Llegamos a tu cliente ideal mediante segmentación demográfica y de intereses. Perfecto para branding y retargeting."
                        icon={Megaphone}
                        gradient="from-purple-500/20 to-pink-500/5"
                        borderColor="hover:border-purple-500/50"
                    />
                    <PlatformCard
                        title="Estrategia B2B"
                        subtitle="Segmentación profesional"
                        desc="Para negocios B2B, utilizamos LinkedIn Ads o segmentaciones avanzadas para llegar a tomadores de decisiones."
                        icon={Target}
                        gradient="from-blue-700/20 to-indigo-500/5"
                        borderColor="hover:border-indigo-500/50"
                    />
                </div>
            </ContentWidth>
        </section>
    );
}

function PlatformCard({ title, subtitle, desc, icon: Icon, gradient, borderColor }: any) {
    return (
        <div className={cn(
            "group relative rounded-3xl border border-border/60 bg-card/40 backdrop-blur-sm p-8 transition-all duration-300 hover:shadow-xl",
            borderColor
        )}>
            <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-3xl", gradient)} />

            <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-background/50 border border-border/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-foreground" />
                </div>

                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-3 mt-1">{subtitle}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
        </div>
    );
}
function MethodologySection() {
    const steps = [
        { title: "Auditoría & Setup", desc: "Revisamos cuentas anteriores, configuramos conversiones (Pixel/GTM) y definimos objetivos." },
        { title: "Estrategia & Creatividad", desc: "Definimos palabras clave, estructuras de campañas y diseñamos anuncios atractivos." },
        { title: "Lanzamiento & Test", desc: "Lanzamos las campañas y validamos qué anuncios y audiencias funcionan mejor en la primera fase." },
        { title: "Optimización Continua", desc: "Ajustamos pujas, pausamos lo que no funciona y escalamos lo que trae resultados." },
    ];

    return (
        <section className="py-24 bg-background relative border-t border-border/40">
            <ContentWidth>
                <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
                    <div className="md:w-1/3">
                        <h2 className="text-3xl font-extrabold tracking-tight mb-4">Un proceso ordenado para resultados consistentes</h2>
                        <p className="text-muted-foreground mb-8">
                            No es magia, es trabajo constante. Nuestro ciclo de optimización busca mejorar la calidad de tus leads y reducir costos mes a mes.
                        </p>
                        <Button variant="outline" className="rounded-full border-primary/30 text-primary hover:bg-primary/5">
                            Ver planes <ArrowRight className="ml-2 h-4 w-4"/>
                        </Button>
                    </div>

                    <div className="md:w-2/3 grid gap-8">
                        {steps.map((step, idx) => (
                            <div key={idx} className="flex gap-4 md:gap-6 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-sm group-hover:scale-110 transition-transform bg-background z-10">
                                        {idx + 1}
                                    </div>
                                    {idx !== steps.length - 1 && <div className="w-px h-full bg-border/60 my-2 group-hover:bg-primary/30 transition-colors" />}
                                </div>
                                <div className="pb-8">
                                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{step.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed max-w-md">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
}

function DeliverablesList() {
    return (
        <section className="py-20 bg-card/20 backdrop-blur-sm border-y border-border/40">
            <ContentWidth>
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-bold">Lo que incluye el servicio</h2>
                    <p className="mt-2 text-muted-foreground">Todo lo necesario para una campaña profesional</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 max-w-4xl mx-auto">
                    {[
                        "Estrategia de palabras clave (Search)",
                        "Diseño de creatividades (Imágenes)",
                        "Redacción de anuncios persuasivos",
                        "Remarketing avanzado",
                        "Configuración de Analytics & Pixel",
                        "Reportes en tiempo real (Looker)",
                        "Gestión de públicos y audiencias",
                        "Reuniones de seguimiento mensual"
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 rounded-lg hover:bg-background/40 transition-colors">
                            <Check className="w-5 h-5 text-green-500 shrink-0" />
                            <span className="text-sm font-medium">{item}</span>
                        </div>
                    ))}
                </div>
            </ContentWidth>
        </section>
    );
}
function CtaSection() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 -z-10" />
            <ContentWidth>
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl font-extrabold tracking-tight mb-6">
                        ¿Hablamos sobre tu campaña?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
                        Analicemos tu situación actual. Si ya tienes campañas, las auditamos. Si no, te proponemos un plan de lanzamiento sólido.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button variant="outline" size="lg" className="rounded-full h-14 px-10 text-lg bg-background/50 backdrop-blur" asChild>
                            <Link href="https://wa.me/51941801827" target="_blank">
                                Hablar por WhatsApp
                            </Link>
                        </Button>
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
}