"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ContentWidth } from "@/components/ContentWidth";
import {
    AppWindow,
    ArrowRight,
    Check,
    Code2,
    Layers,
    LayoutDashboard,
    Smartphone,
    Store,
    Tablet,
    Zap,
} from "lucide-react";

export default function AppsServicePage() {
    return (
        <main className="min-h-screen bg-background relative overflow-hidden">
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-20" />
            </div>

            <AppsHero />
            <UseCasesSection />
            <TechStackSection />
            <ProcessSection />
            <DeliverablesSection />
            <CtaSection />
        </main>
    );
}
function AppsHero() {
    return (
        <section className="relative pt-24 pb-20 md:pt-32 md:pb-24">
            <ContentWidth>
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    <div className="flex-1 text-center lg:text-left z-10 order-2 lg:order-1">
                        <Badge variant="outline" className="mb-6 py-1.5 px-4 text-sm border-violet-500/30 bg-violet-500/10 text-violet-500 rounded-full">
                            <Smartphone className="w-3.5 h-3.5 mr-2" />
                            Desarrollo Mobil
                        </Badge>

                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
                            Lleva tu negocio al <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500">
                bolsillo de tus clientes
              </span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            Desarrollamos aplicaciones nativas e híbridas (iOS y Android) diseñadas para
                            <strong className="text-foreground"> retener usuarios</strong> o
                            <strong className="text-foreground"> automatizar a tu equipo de campo</strong>.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button size="lg" className="rounded-full h-12 px-8 text-base shadow-lg shadow-violet-500/20" asChild>
                                <Link href="https://wa.me/51941801827" target="_blank">
                                    Cotizar mi App <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" className="rounded-full h-12 px-8 text-base border-border/60" asChild>
                                <Link href="#use-cases">Ver tipos de Apps</Link>
                            </Button>
                        </div>

                        <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            <span>iOS Ready</span>
                            <span className="h-1 w-1 rounded-full bg-border" />
                            <span>Android Ready</span>
                            <span className="h-1 w-1 rounded-full bg-border" />
                            <span>Panel Web Admin</span>
                        </div>
                    </div>

                    <div className="flex-1 w-full flex justify-center order-1 lg:order-2 relative perspective-1000">
                        <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/30 to-cyan-500/30 blur-[60px] rounded-full transform scale-75" />

                        <div className="relative w-[300px] h-[600px] bg-background border-[8px] border-foreground/10 rounded-[3rem] shadow-2xl overflow-hidden transform rotate-y-[-10deg] rotate-x-[5deg] transition-transform duration-500 hover:rotate-0">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-foreground/10 rounded-b-xl z-20" />
                            <div className="absolute right-[-10px] top-24 w-1 h-12 bg-foreground/20 rounded-r-md" />
                            <div className="absolute left-[-10px] top-24 w-1 h-8 bg-foreground/20 rounded-l-md" />

                            <div className="w-full h-full bg-background flex flex-col relative z-10">
                                <div className="h-20 bg-card/50 border-b border-border/50 flex items-end pb-3 px-6 justify-between">
                                    <div className="w-8 h-8 rounded-full bg-violet-500/20" />
                                    <div className="w-24 h-3 rounded-full bg-foreground/10" />
                                    <div className="w-6 h-6 rounded-full bg-foreground/5" />
                                </div>

                                <div className="flex-1 p-6 space-y-4 overflow-hidden">
                                    <div className="w-full h-32 rounded-2xl bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 border border-violet-500/20 p-4 flex flex-col justify-between">
                                        <div className="w-16 h-2 rounded-full bg-foreground/10" />
                                        <div className="flex gap-2">
                                            <div className="h-8 w-8 rounded-lg bg-violet-500/30" />
                                            <div className="h-8 w-16 rounded-lg bg-foreground/5" />
                                        </div>
                                    </div>

                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border/40">
                                            <div className="w-10 h-10 rounded-lg bg-foreground/5" />
                                            <div className="flex-1 space-y-2">
                                                <div className="w-24 h-2 rounded-full bg-foreground/10" />
                                                <div className="w-16 h-1.5 rounded-full bg-foreground/5" />
                                            </div>
                                        </div>
                                    ))}

                                    <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center shadow-lg">
                                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
}

function UseCasesSection() {
    return (
        <section id="use-cases" className="py-20 bg-card/30 backdrop-blur-sm border-y border-border/40">
            <ContentWidth>
                <div className="text-center mb-12 max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">No desarrollamos apps "porque sí"</h2>
                    <p className="text-muted-foreground">
                        Una app solo tiene sentido si resuelve un problema recurrente.
                        Nos especializamos en estos dos enfoques:
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="group relative rounded-3xl border border-border/60 bg-background/50 p-8 hover:border-violet-500/40 transition-all">
                        <div className="mb-6 inline-flex p-3 rounded-xl bg-violet-500/10 text-violet-500">
                            <Store className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Apps de Fidelización (B2C)</h3>
                        <p className="text-muted-foreground mb-6">
                            Para que tus clientes te lleven en el bolsillo. Ideal para e-commerce, reservas o programas de lealtad.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-violet-500" /> Notificaciones Push (Marketing directo)</li>
                            <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-violet-500" /> Compras en un clic</li>
                            <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-violet-500" /> Experiencia de usuario superior a la web</li>
                        </ul>
                    </div>

                    <div className="group relative rounded-3xl border border-border/60 bg-background/50 p-8 hover:border-cyan-500/40 transition-all">
                        <div className="mb-6 inline-flex p-3 rounded-xl bg-cyan-500/10 text-cyan-500">
                            <LayoutDashboard className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Apps de Operaciones (B2B/Internas)</h3>
                        <p className="text-muted-foreground mb-6">
                            Herramientas para tu equipo. Digitaliza procesos de campo, logística o ventas sin necesidad de internet constante.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-cyan-500" /> Funcionamiento Offline</li>
                            <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-cyan-500" /> Escaneo de QR / Códigos de barra</li>
                            <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-cyan-500" /> Geolocalización de personal</li>
                        </ul>
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
}

function TechStackSection() {
    return (
        <section className="py-24">
            <ContentWidth>
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold mb-6">Tecnología eficiente y escalable</h2>
                        <p className="text-lg text-muted-foreground mb-6">
                            Usamos tecnología híbrida moderna (React Native / Flutter) para escribir el código una vez y desplegarlo en ambas tiendas.
                        </p>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border/50">
                                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500"><Code2 className="w-6 h-6" /></div>
                                <div>
                                    <p className="font-bold">Ahorro de costos</p>
                                    <p className="text-sm text-muted-foreground">Desarrollamos para iOS y Android simultáneamente.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border/50">
                                <div className="p-2 bg-green-500/10 rounded-lg text-green-500"><Zap className="w-6 h-6" /></div>
                                <div>
                                    <p className="font-bold">Rendimiento Nativo</p>
                                    <p className="text-sm text-muted-foreground">60 FPS y acceso total al hardware (Cámara, GPS).</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 flex justify-center gap-6 opacity-80">
                        <TechBadge label="iOS" icon={Smartphone} />
                        <TechBadge label="Android" icon={Tablet} />
                        <TechBadge label="Web Admin" icon={AppWindow} />
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
}

function TechBadge({ label, icon: Icon }: any) {
    return (
        <div className="flex flex-col items-center gap-2">
            <div className="w-20 h-20 rounded-3xl bg-background border border-border shadow-lg flex items-center justify-center">
                <Icon className="w-8 h-8 text-foreground/80" />
            </div>
            <span className="text-sm font-semibold">{label}</span>
        </div>
    )
}

function ProcessSection() {
    const steps = [
        { title: "Diseño UX/UI", desc: "Creamos prototipos visuales (Figma) para que veas cómo será la app antes de escribir código." },
        { title: "Desarrollo & API", desc: "Programamos la app y el 'cerebro' (Backend) que conecta los datos." },
        { title: "Testing", desc: "Pruebas en dispositivos reales para asegurar que no haya errores." },
        { title: "Publicación", desc: "Gestionamos la burocracia de Apple App Store y Google Play Store por ti." },
    ];

    return (
        <section className="py-24 bg-card/20 border-t border-border/40">
            <ContentWidth>
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold">Del concepto a la tienda</h2>
                    <p className="mt-3 text-muted-foreground">Un proceso transparente donde tú tienes el control.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, i) => (
                        <div key={i} className="relative p-6 rounded-2xl border border-border/60 bg-background/40">
                            <div className="text-4xl font-extrabold text-foreground/5 mb-4 select-none">0{i+1}</div>
                            <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                            <p className="text-sm text-muted-foreground">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </ContentWidth>
        </section>
    );
}

function DeliverablesSection() {
    return (
        <section className="py-20">
            <ContentWidth>
                <div className="rounded-3xl bg-foreground text-background p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/20 rounded-full blur-[80px]" />

                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">¿Qué incluye el servicio?</h3>
                            <p className="text-background/80 max-w-lg mb-6">
                                No solo te entregamos el código. Te entregamos un producto funcionando y gestionable.
                            </p>
                            <Button variant="secondary" className="rounded-full" asChild>
                                <Link href="/quote">Solicitar estimación</Link>
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                            {[
                                "App nativa en iOS (iPhone)",
                                "App nativa en Android",
                                "Diseño de interfaz (UI/UX)",
                                "Panel administrativo Web",
                                "Publicación en Tiendas",
                                "Código fuente propiedad tuya"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-background/20 flex items-center justify-center">
                                        <Check className="w-3.5 h-3.5 text-background" />
                                    </div>
                                    <span className="font-medium text-sm md:text-base">{item}</span>
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
        <section className="py-24 text-center">
            <ContentWidth>
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                        ¿Tienes una idea de App?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-10">
                        Las apps son proyectos complejos. Hablemos para validar tu idea, definir el alcance y darte un presupuesto realista.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button size="lg" className="rounded-full h-14 px-8 text-lg shadow-xl" asChild>
                            <Link href="https://wa.me/51941801827" target="_blank">Whatsapp Directo</Link>
                        </Button>
                        {/*<Button variant="ghost" size="lg" className="rounded-full h-14 px-8 text-lg" asChild>*/}
                        {/*    <Link href="/portfolio">Ver portafolio</Link>*/}
                        {/*</Button>*/}
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
}