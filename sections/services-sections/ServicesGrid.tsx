"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ContentWidth } from "@/components/ContentWidth";
import { cn } from "@/lib/utils";
import {
    ArrowRight,
    BarChart3,
    CheckCircle2,
    MapPin,
    Megaphone,
    Receipt,
    Smartphone,
    LayoutTemplate,
} from "lucide-react";

const SERVICES = [
    {
        title: "Google Ads + Meta Ads",
        description: "Deja de perseguir clics y empieza a capturar clientes. Campañas hiper-segmentadas enfocadas en ROI.",
        href: "/services/ads",
        icon: Megaphone,
        badge: "Performance",
        includes: ["Estrategia de palabras clave", "Diseño de creatividades", "Remarketing avanzado", "Reportes en tiempo real"],
    },
    {
        title: "SEO + SEO Local",
        description: "Domina tu zona y las búsquedas orgánicas. Optimizamos tu presencia para que Google te prefiera.",
        href: "/services/seo",
        icon: MapPin,
        badge: "Orgánico",
        includes: ["Auditoría técnica", "Google Business Profile", "Link Building ético", "Contenido estratégico"],
    },
    {
        title: "Desarrollo Web",
        description: "Webs que cargan rápido y venden mejor. Diseño moderno con arquitectura pensada en la conversión.",
        href: "/services/web",
        icon: LayoutTemplate,
        badge: "Conversión",
        includes: ["UX/UI Moderno", "Optimización Core Web Vitals", "Integración CRM/WhatsApp", "Landing Pages"],
    },
    {
        title: "Desarrollo de Apps",
        description: "Soluciones móviles nativas o híbridas para fidelizar usuarios o automatizar operaciones de campo.",
        href: "/services/apps",
        icon: Smartphone,
        badge: "Mobile",
        includes: ["iOS y Android", "Diseño de interfaz (UI)", "Panel administrativo", "Publicación en tiendas"],
    },
    {
        title: "Facturación Electrónica",
        description: "Integra la emisión de comprobantes directamente en tu software sin fricción ni errores.",
        href: "/services/facturation",
        icon: Receipt,
        badge: "Gestión",
        includes: ["Validación OSE/SUNAT", "Envío automático de PDFs", "Gestión de anulaciones", "Soporte técnico"],
    },
    {
        title: "Analítica + Automatización",
        description: "Transforma datos en decisiones. Dashboards claros y flujos que trabajan mientras duermes.",
        href: "/services/analytics",
        icon: BarChart3,
        badge: "Data",
        includes: ["Google Analytics 4 (GA4)", "Looker Studio Dashboards", "Integraciones (Zapier/Make)", "Tracking de eventos"],
    },
];

export function ServicesGrid() {
    return (
        <section className="py-20 relative">
            <ContentWidth>
                <div className="mb-12 md:text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                        Conoce nuestros Servicios
                    </h2>
                    <p className="mt-4 text-muted-foreground text-lg">
                        Soluciones técnicas y estratégicas bajo un mismo techo.
                        Sin intermediarios, sin teléfono malogrado.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SERVICES.map((service, index) => (
                        <div
                            key={index}
                            className={cn(
                                "group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/60 bg-card/40 backdrop-blur-sm p-6 md:p-8",
                                "transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
                            )}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border/50 bg-background/50 text-primary shadow-sm group-hover:scale-110 transition-transform duration-300">
                                        <service.icon className="h-6 w-6" />
                                    </div>
                                    <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                                        {service.badge}
                                    </Badge>
                                </div>

                                <h3 className="text-xl font-bold tracking-tight mb-3 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                    {service.description}
                                </p>

                                <div className="space-y-3 mb-8">
                                    <p className="text-xs font-semibold text-foreground/80 uppercase tracking-wider">
                                        Qué incluye:
                                    </p>
                                    <ul className="space-y-2">
                                        {service.includes.map((item) => (
                                            <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <Button
                                variant="outline"
                                className="w-full justify-between rounded-full border-border/60 hover:border-primary hover:text-primary hover:bg-primary/5 group-hover:translate-y-0 transition-all"
                                asChild
                            >
                                <Link href={service.href}>
                                    Ver detalles
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                        </div>
                    ))}
                </div>
            </ContentWidth>
        </section>
    );
}