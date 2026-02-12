"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ContentWidth } from "@/components/ContentWidth";
import {
    ArrowRight,
    Check,
    FileText,
    Receipt,
    Server,
    ShieldCheck,
} from "lucide-react";

export default function FacturationServicePage() {
    return (
        <main className="min-h-screen bg-background relative overflow-hidden">
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-slate-500/5 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
            </div>

            <FacturationHero />
            <ComplianceSection />
            <OperationalAdvantages />
            <CtaSection />
        </main>
    );
}

function FacturationHero() {
    return (
        <section className="relative pt-24 pb-20 md:pt-32 md:pb-24">
            <ContentWidth>
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 text-center lg:text-left z-10">
                        <Badge variant="outline" className="mb-6 py-1.5 px-4 text-sm border-emerald-500/30 bg-emerald-500/10 text-emerald-600 rounded-full">
                            <Receipt className="w-3.5 h-3.5 mr-2" />
                            Gestión Administrativa
                        </Badge>

                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
                            Facturación sin fricción, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                100% validada por SUNAT
              </span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Integra la emisión de comprobantes directamente en tu software o ERP.
                            Olvídate de los portales lentos y de los errores manuales.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button size="lg" className="rounded-full h-12 px-8 text-base bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-500/20" asChild>
                                <Link href="https://wa.me/51941801827" target="_blank">
                                    Implementar Facturación <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" className="rounded-full h-12 px-8 text-base border-border/60" asChild>
                                <Link href="#features">Ver requisitos</Link>
                            </Button>
                        </div>

                        <div className="mt-8 flex items-center justify-center lg:justify-start gap-3 text-sm font-medium text-muted-foreground">
                            <ShieldCheck className="w-5 h-5 text-emerald-600" />
                            <span>Cumplimos con normativa OSE/PSE vigente</span>
                        </div>
                    </div>

                    <div className="flex-1 w-full max-w-[500px] lg:max-w-none relative z-10">
                        <div className="relative rounded-2xl border border-border/50 bg-card/80 backdrop-blur-xl shadow-2xl overflow-hidden p-6 md:p-8">
                            <div className="flex items-center justify-between border-b border-border/40 pb-4 mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
                                        <Check className="h-6 w-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-foreground">Comprobante Emitido</p>
                                        <p className="text-xs text-muted-foreground">Hace 2 segundos</p>
                                    </div>
                                </div>
                                <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-600 border-emerald-200">Aceptado</Badge>
                            </div>

                            <div className="space-y-4">
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Serie / Número:</span>
                                    <span className="font-mono font-medium">F001-0002458</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Cliente:</span>
                                    <span className="font-medium">Empresa SAC</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Total:</span>
                                    <span className="font-bold text-lg">S/ 4,500.00</span>
                                </div>
                            </div>

                            <div className="mt-6 p-3 rounded-lg bg-background/50 border border-border/60 flex items-center gap-3">
                                <Server className="h-5 w-5 text-muted-foreground" />
                                <div className="flex-1">
                                    <p className="text-xs font-semibold">Respuesta SUNAT (CDR)</p>
                                    <p className="text-[10px] text-muted-foreground">El comprobante ha sido aceptado.</p>
                                </div>
                                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                            </div>
                        </div>

                        <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-emerald-500/5 rounded-3xl border border-emerald-500/10" />
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
}

function ComplianceSection() {
    return (
        <section id="features" className="py-20 bg-card/30 backdrop-blur-sm border-y border-border/40">
            <ContentWidth>
                <div className="text-center mb-12 max-w-2xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Por qué integrar tu facturación con nosotros?</h2>
                    <p className="text-muted-foreground">
                        Evita la doble digitación (tu sistema + portal SUNAT). Centraliza todo en un solo lugar.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <FeatureCard
                        icon={Server}
                        title="Conexión OSE/SUNAT"
                        desc="Nos encargamos de la parte técnica. Tus comprobantes viajan seguros y obtienes el CDR (Constancia de Recepción) al instante."
                    />
                    <FeatureCard
                        icon={FileText}
                        title="Formatos PDF y XML"
                        desc="Generación automática de los archivos obligatorios. Personalizamos el PDF con tu logo y colores."
                    />
                    <FeatureCard
                        icon={ShieldCheck}
                        title="Validez Legal"
                        desc="Actualizamos el sistema ante cualquier cambio normativo de SUNAT para que nunca dejes de facturar."
                    />
                </div>
            </ContentWidth>
        </section>
    );
}

function FeatureCard({ icon: Icon, title, desc }: any) {
    return (
        <div className="p-6 rounded-2xl bg-background border border-border/60 hover:border-emerald-500/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 mb-4">
                <Icon className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
        </div>
    );
}

function OperationalAdvantages() {
    return (
        <section className="py-24">
            <ContentWidth>
                <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
                    <div className="flex-1">
                        <Badge variant="secondary" className="mb-4 bg-slate-100 text-slate-700 hover:bg-slate-200">
                            Eficiencia
                        </Badge>
                        <h2 className="text-3xl font-bold mb-6">
                            El Portal SUNAT te limita. <br />
                            <span className="text-emerald-600">Nosotros te escalamos.</span>
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Deja de perder tiempo emitiendo una por una o sufriendo caídas del sistema a fin de mes.
                            Nuestra solución trabaja en segundo plano para que tú solo te preocupes por vender.
                        </p>

                        <div className="space-y-6">
                            <AdvantageRow
                                title="Personalización Total"
                                desc="Tus facturas no parecerán genéricas. Agregamos tu logo, colores corporativos y mensajes personalizados."
                            />
                            <AdvantageRow
                                title="Envío Automático al Cliente"
                                desc="El cliente recibe su factura en su correo (y opcionalmente WhatsApp) al instante de la compra."
                            />
                            <AdvantageRow
                                title="99.9% Uptime Garantizado"
                                desc="Nuestros servidores están replicados. Si SUNAT falla, nosotros guardamos la cola y reintentamos."
                            />
                        </div>
                    </div>

                    <div className="flex-1 w-full max-w-md relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-slate-500/20 rounded-full blur-[80px]" />

                        <div className="relative rounded-2xl bg-white border border-border shadow-2xl p-6 md:p-8">
                            <div className="flex justify-between items-start mb-8 border-b border-dashed border-slate-200 pb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold">
                                        S
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 text-sm">SERVITEC S.A.C.</p>
                                        <p className="text-[10px] text-slate-500">RUC: 20545355621</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-emerald-600 text-sm">FACTURA ELECTRÓNICA</p>
                                    <p className="text-xs text-slate-500">F001-4921</p>
                                </div>
                            </div>

                            <div className="space-y-3 mb-8">
                                <div className="flex justify-between text-xs font-medium text-slate-400 uppercase">
                                    <span>Descripción</span>
                                    <span>Total</span>
                                </div>
                                <div className="flex justify-between text-sm text-slate-700">
                                    <span>Servicio de Consultoría</span>
                                    <span className="font-medium">S/ 1,500.00</span>
                                </div>
                                <div className="flex justify-between text-sm text-slate-700">
                                    <span>Implementación Software</span>
                                    <span className="font-medium">S/ 3,200.00</span>
                                </div>
                            </div>

                            <div className="bg-slate-50 rounded-xl p-4 flex justify-between items-center">
                                <span className="text-sm font-medium text-slate-600">Total a Pagar</span>
                                <span className="text-xl font-bold text-slate-900">S/ 4,700.00</span>
                            </div>
                        </div>
                    </div>

                </div>
            </ContentWidth>
        </section>
    );
}

function AdvantageRow({ title, desc }: { title: string, desc: string }) {
    return (
        <div className="flex gap-4 group">
            <div className="mt-1 h-8 w-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 group-hover:bg-emerald-100 transition-colors">
                <Check className="h-4 w-4 text-emerald-600" />
            </div>
            <div>
                <h3 className="font-bold text-foreground text-base">{title}</h3>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{desc}</p>
            </div>
        </div>
    );
}

function CtaSection() {
    return (
        <section className="py-24 text-center relative overflow-hidden">
            <ContentWidth>
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl font-extrabold mb-6">
                        Formaliza y automatiza hoy
                    </h2>
                    <p className="text-lg text-muted-foreground mb-10">
                        Cumple con la ley sin complicaciones. Implementación rápida y segura para tu negocio.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button size="lg" className="rounded-full h-14 px-8 text-lg bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-500/20" asChild>
                            <Link href="https://wa.me/51941801827" target="_blank">Hablar con un asesor</Link>
                        </Button>
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
}