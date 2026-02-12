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
    Cpu,
    Database,
    FileSpreadsheet,
    GitBranch,
    Network,
    PieChart,
    Settings2,
    Workflow,
    Zap,
} from "lucide-react";

export default function AnalyticsServicePage() {
    return (
        <main className="min-h-screen bg-background relative overflow-hidden">
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[130px]" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[130px]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>

            <AnalyticsHero />
            <ChaosToClarity />
            <TechStackSection />
            <AutomationFlow />
            <FeaturesGrid />
            <CtaSection />
        </main>
    );
}

function AnalyticsHero() {
    return (
        <section className="relative pt-24 pb-20 md:pt-32 md:pb-24">
            <ContentWidth>
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 text-center lg:text-left z-10">
                        <Badge variant="outline" className="mb-6 py-1.5 px-4 text-sm border-indigo-500/30 bg-indigo-500/10 text-indigo-400 rounded-full">
                            <Database className="w-3.5 h-3.5 mr-2 fill-current" />
                            Data & Automations
                        </Badge>

                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
                            Transforma datos en <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400">
                decisiones inteligentes
              </span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Deja de adivinar y empieza a saber. Implementamos <strong className="text-foreground">dashboards claros</strong> que centralizan tu negocio y creamos flujos de trabajo que operan <strong className="text-foreground">mientras duermes</strong>.
                        </p>

                        <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-3 text-sm font-medium text-muted-foreground">
                            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Google Analytics 4</span>
                            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Looker Studio</span>
                            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Make / Zapier</span>
                        </div>
                    </div>

                    <div className="flex-1 w-full relative z-10 perspective-1000">
                        <div className="relative rounded-xl border border-border/50 bg-card/40 backdrop-blur-xl p-1 shadow-2xl transition-transform duration-500 hover:rotate-x-2 hover:rotate-y-2 lg:rotate-y-[-5deg] lg:rotate-x-[5deg]">
                            <div className="h-8 border-b border-border/50 bg-background/50 flex items-center px-4 gap-2 rounded-t-lg">
                                <div className="w-3 h-3 rounded-full bg-red-500/40" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
                                <div className="w-3 h-3 rounded-full bg-green-500/40" />
                                <div className="ml-auto text-[10px] text-muted-foreground font-mono">LIVE DATA • 🟢 ONLINE</div>
                            </div>

                            <div className="p-6 grid grid-cols-2 gap-4">
                                <div className="col-span-2 bg-background/40 rounded-lg p-4 border border-border/40">
                                    <div className="flex justify-between items-start mb-2">
                                        <p className="text-xs text-muted-foreground">Ingresos Totales (YTD)</p>
                                        <Badge variant="secondary" className="text-[10px] h-5 bg-emerald-500/10 text-emerald-500">+14.2%</Badge>
                                    </div>
                                    <p className="text-3xl font-mono font-bold text-foreground">$124,500</p>
                                    <div className="mt-3 flex items-end gap-1 h-8 opacity-50">
                                        {[30,45,35,60,50,75,60,90,80,100].map((h,i) => (
                                            <div key={i} style={{height: `${h}%`}} className="flex-1 bg-indigo-500 rounded-sm" />
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-background/40 rounded-lg p-4 border border-border/40">
                                    <p className="text-xs text-muted-foreground mb-1">Conversión Web</p>
                                    <p className="text-xl font-bold">3.8%</p>
                                    <div className="w-full bg-secondary h-1 mt-2 rounded-full overflow-hidden">
                                        <div className="bg-cyan-500 w-[60%] h-full" />
                                    </div>
                                </div>
                                <div className="bg-background/40 rounded-lg p-4 border border-border/40">
                                    <p className="text-xs text-muted-foreground mb-1">Costo por Lead</p>
                                    <p className="text-xl font-bold">$4.20</p>
                                    <p className="text-[10px] text-emerald-500 mt-1">▼ 12% vs mes pasado</p>
                                </div>

                                <div className="col-span-2 bg-background/40 rounded-lg p-3 border border-border/40 flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-md bg-orange-500/20 flex items-center justify-center">
                                        <Zap className="w-4 h-4 text-orange-500" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs font-medium">Nuevo Lead en Facebook</p>
                                        <div className="flex items-center gap-2 mt-1">
                                            <div className="h-0.5 w-4 bg-border" />
                                            <p className="text-[10px] text-muted-foreground">Enviado a CRM & WhatsApp</p>
                                        </div>
                                    </div>
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                </div>
                            </div>
                        </div>

                        <div className="absolute inset-0 bg-indigo-500/20 blur-3xl -z-10 rounded-full" />
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
}

function ChaosToClarity() {
    return (
        <section className="py-20 bg-card/20 backdrop-blur-sm border-y border-border/40">
            <ContentWidth>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 relative">
                        <div className="grid grid-cols-2 gap-4 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                            <div className="p-4 rounded-xl bg-background border border-dashed border-border flex flex-col items-center justify-center text-center gap-2 rotate-[-3deg]">
                                <FileSpreadsheet className="w-8 h-8 text-green-600" />
                                <span className="text-xs">Excel v3_final.xlsx</span>
                            </div>
                            <div className="p-4 rounded-xl bg-background border border-dashed border-border flex flex-col items-center justify-center text-center gap-2 rotate-[2deg] mt-6">
                                <Network className="w-8 h-8 text-blue-500" />
                                <span className="text-xs">Datos desconectados</span>
                            </div>
                            <div className="p-4 rounded-xl bg-background border border-dashed border-border flex flex-col items-center justify-center text-center gap-2 rotate-[4deg]">
                                <Settings2 className="w-8 h-8 text-gray-500" />
                                <span className="text-xs">Procesos manuales</span>
                            </div>
                            <div className="p-4 rounded-xl bg-background border border-dashed border-border flex flex-col items-center justify-center text-center gap-2 rotate-[-2deg] -mt-4">
                                <div className="text-2xl font-bold text-red-400">?</div>
                                <span className="text-xs">¿Rentabilidad?</span>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 md:order-2">
                        <h2 className="text-3xl font-bold mb-4">
                            ¿Tu negocio crece a ciegas?
                        </h2>
                        <p className="text-muted-foreground text-lg mb-6">
                            Tener datos no sirve si no puedes leerlos. Muchas empresas pierden horas copiando datos de un lado a otro o tomando decisiones basadas en "intuición".
                        </p>
                        <div className="space-y-4">
                            <FeatureCheck title="Unificamos tus fuentes" desc="Facebook, Google, CRM y Excel en una sola pantalla." />
                            <FeatureCheck title="Adiós a la tarea manual" desc="Automatizamos lo repetitivo para que tu equipo venda, no digite." />
                        </div>
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
}

function FeatureCheck({ title, desc }: { title: string, desc: string }) {
    return (
        <div className="flex gap-4">
            <div className="mt-1 h-6 w-6 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                <Check className="h-3.5 w-3.5 text-emerald-500" />
            </div>
            <div>
                <h3 className="font-semibold text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
        </div>
    );
}
function TechStackSection() {
    return (
        <section className="py-24">
            <ContentWidth>
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold">Tecnología que implementamos</h2>
                    <p className="mt-3 text-muted-foreground">Herramientas estándar de la industria, configuradas a tu medida.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <TechCard
                        title="Google Analytics 4"
                        icon={BarChart3}
                        desc="Configuración avanzada de eventos y conversiones. Rastrea qué hacen los usuarios en tu web realmente."
                        color="text-yellow-500"
                        bg="bg-yellow-500/10"
                    />
                    <TechCard
                        title="Looker Studio"
                        icon={PieChart}
                        desc="Dashboards interactivos y visuales. Comparte reportes con un link que se actualiza solo. Adiós PPTs semanales."
                        color="text-blue-500"
                        bg="bg-blue-500/10"
                    />
                    <TechCard
                        title="Zapier & Make"
                        icon={Workflow}
                        desc="El pegamento de internet. Conectamos tu formulario web con tu WhatsApp, CRM y Email automáticamente."
                        color="text-purple-500"
                        bg="bg-purple-500/10"
                    />
                </div>
            </ContentWidth>
        </section>
    );
}

function TechCard({ title, icon: Icon, desc, color, bg }: any) {
    return (
        <div className="group p-6 rounded-3xl border border-border/50 bg-card/30 hover:bg-card/50 transition-colors">
            <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110", bg)}>
                <Icon className={cn("w-6 h-6", color)} />
            </div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
        </div>
    );
}

function AutomationFlow() {
    return (
        <section className="py-24 bg-background border-t border-border/40 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/5 via-background to-background" />

            <ContentWidth>
                <div className="text-center mb-12">
                    <Badge variant="secondary" className="mb-4">Ejemplo de Automatización</Badge>
                    <h2 className="text-3xl font-bold">Flujos que trabajan mientras duermes</h2>
                </div>

                {/* Visualización del Pipeline */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
                        {/* Línea conectora */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-border via-indigo-500/50 to-border -z-10 transform -translate-y-1/2" />

                        <FlowStep icon={GitBranch} title="Entrada" desc="Cliente llena formulario" />
                        <ArrowRight className="md:hidden text-muted-foreground" />

                        <FlowStep icon={Cpu} title="Proceso (Make)" desc="Valida datos y filtra" highlight />
                        <ArrowRight className="md:hidden text-muted-foreground" />

                        <FlowStep icon={Database} title="CRM" desc="Guarda contacto" />
                        <ArrowRight className="md:hidden text-muted-foreground" />

                        <FlowStep icon={Zap} title="Acción" desc="Envía WhatsApp + Email" />
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
}

function FlowStep({ icon: Icon, title, desc, highlight }: any) {
    return (
        <div className={cn(
            "flex flex-col items-center text-center p-4 rounded-2xl border bg-background z-10 w-48 transition-all duration-300",
            highlight ? "border-indigo-500 shadow-lg shadow-indigo-500/20 scale-110" : "border-border/60"
        )}>
            <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center mb-3",
                highlight ? "bg-indigo-500 text-white" : "bg-muted text-muted-foreground"
            )}>
                <Icon className="w-5 h-5" />
            </div>
            <p className="font-bold text-sm">{title}</p>
            <p className="text-xs text-muted-foreground mt-1">{desc}</p>
        </div>
    );
}

function FeaturesGrid() {
    const items = [
        "Auditoría de Tracking Actual",
        "Implementación de GA4 Avanzado",
        "Diseño de Dashboard en Looker Studio",
        "Conexión con Google Ads / Meta Ads",
        "Automatización de Leads (Zapier/Make)",
        "Alertas automáticas de anomalías",
        "Integración con CRM (HubSpot/Pipedrive)",
        "Capacitación de uso del reporte"
    ];

    return (
        <section className="py-20">
            <ContentWidth>
                <div className="bg-card/20 border border-border/40 rounded-3xl p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Lo que incluye el servicio</h3>
                            <p className="text-muted-foreground mb-6">
                                Un paquete completo para pasar de la ceguera de datos a la inteligencia de negocios.
                            </p>
                            <Button variant="outline" className="rounded-full" asChild>
                                <Link href="/quote">Consultar factibilidad</Link>
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {items.map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                                    <span className="text-sm font-medium text-foreground/90">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
}

function CtaSection() {
    return (
        <section className="py-24 relative overflow-hidden text-center">
            <ContentWidth>
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                        ¿Tus datos te ayudan o te estorban?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-10">
                        Organiza tu empresa hoy. Un dashboard bien hecho te ahorra horas de reuniones y te dice exactamente dónde invertir.
                    </p>
                    <div className="flex justify-center gap-4">
                        {/*<Button size="lg" className="rounded-full h-14 px-8 text-lg bg-foreground text-background hover:bg-foreground/90" asChild>*/}
                        {/*    <Link href="/quote">Automatizar mi negocio</Link>*/}
                        {/*</Button>*/}
                        <Button variant="outline" size="lg" className="rounded-full h-14 px-8 text-lg" asChild>
                            <Link href="https://wa.me/51941801827" target="_blank">WhatsApp directo</Link>
                        </Button>
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
}