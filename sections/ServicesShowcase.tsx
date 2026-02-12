"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
    ArrowUpRight,
    BarChart3,
    Check,
    Globe,
    LineChart,
    MapPin,
    Megaphone,
    Receipt,
    Smartphone,
    Sparkles,
} from "lucide-react";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {ContentWidth} from "@/components/ContentWidth";

type ServiceId =
    | "ads-performance"
    | "seo-local"
    | "web-dev"
    | "apps"
    | "invoicing"
    | "analytics-automation";

type Service = {
    id: ServiceId;
    title: string;
    short: string;
    bullets: readonly string[];
    tags: readonly string[];
    icon: React.ElementType;
    image?: string;
    ctaHref: string;
};

const SERVICES: readonly Service[] = [
    {
        id: "ads-performance",
        title: "Google Ads + Meta Ads",
        short: "Campañas de performance orientadas a leads y ventas.",
        bullets: [
            "Estructura y optimización de campañas",
            "Creatividades y anuncios que convierten",
            "Mejora de CPA/ROAS con testing continuo",
        ],
        tags: ["Paid Ads", "Performance"],
        icon: Megaphone,
        ctaHref: "/services/ads",
        image: "/services/google-ads.png",
    },
    {
        id: "seo-local",
        title: "SEO + SEO Local",
        short: "Posicionamiento en Google y Maps para captar clientes cercanos.",
        bullets: [
            "Optimización técnica + contenido",
            "Google Business Profile (Maps)",
            "Estrategia de keywords y enlaces",
        ],
        tags: ["SEO", "Maps"],
        icon: MapPin,
        ctaHref: "/services/seo",
        image: "/services/seo.png",
    },
    {
        id: "web-dev",
        title: "Desarrollo Web",
        short: "Webs rápidas, modernas y enfocadas en conversión.",
        bullets: [
            "Landing pages (Next.js) y sitios corporativos",
            "Optimización de velocidad (Core Web Vitals)",
            "Integraciones (forms, WhatsApp, CRM, analytics)",
        ],
        tags: ["Next.js", "Conversión"],
        icon: Globe,
        ctaHref: "/services/web",
        image: "/services/web-developer.png",
    },
    {
        id: "apps",
        title: "Desarrollo de Apps",
        short: "Aplicaciones móviles para procesos y crecimiento del negocio.",
        bullets: [
            "MVP rápido y escalable",
            "Integración con backend y analytics",
            "Publicación y soporte",
        ],
        tags: ["Mobile", "MVP"],
        icon: Smartphone,
        ctaHref: "/services/apps",
        image: "/services/app-developer.png",
    },
    {
        id: "invoicing",
        title: "Facturación Electrónica",
        short: "Implementación e integración con tus sistemas y procesos.",
        bullets: [
            "Flujos de emisión y validación",
            "Integración con ERP / sistemas internos",
            "Soporte y mantenimiento",
        ],
        tags: ["SUNAT", "Integración"],
        icon: Receipt,
        ctaHref: "/services/facturacion",
        image: "/services/electronic-facturation.png",
    },
    {
        id: "analytics-automation",
        title: "Analítica + Automatización",
        short: "Tracking, dashboards y automatizaciones para escalar.",
        bullets: [
            "Eventos, conversiones y embudos",
            "Dashboards + reportes ejecutivos",
            "Automatización (CRM, WhatsApp, email)",
        ],
        tags: ["Tracking", "Automations"],
        icon: LineChart,
        ctaHref: "/services/analitica",
        image: "/services/analytics-automation.png",
    },
];

export function ServicesShowcase() {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const active = SERVICES[activeIndex];

    const listId = "services-tablist";
    const panelId = `panel-${active.id}`;

    const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown") {
            e.preventDefault();
            setActiveIndex((i) => (i + 1) % SERVICES.length);
        }
        if (e.key === "ArrowUp") {
            e.preventDefault();
            setActiveIndex((i) => (i - 1 + SERVICES.length) % SERVICES.length);
        }
        if (e.key === "Home") {
            e.preventDefault();
            setActiveIndex(0);
        }
        if (e.key === "End") {
            e.preventDefault();
            setActiveIndex(SERVICES.length - 1);
        }
    };

    return (
        <section id="services" className="relative my-20 py-20">
            <ContentWidth>
                <div className="flex items-end justify-between gap-4">
                    <div>
                        <h2 data-snake-title className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
                            Servicios que impulsan tu crecimiento
                        </h2>
                        <p className="mt-3 max-w-2xl text-muted-foreground">
                            Elige un servicio y revisa qué incluye. Estrategia + ejecución + medición, con enfoque en resultados.
                        </p>
                    </div>

                    <Button
                        variant="outline"
                        className="hidden md:inline-flex rounded-full border-primary/30 hover:border-primary"
                        asChild
                        size="lg"
                    >
                        <Link href="/services">Ver todos</Link>
                    </Button>
                </div>

                <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                    <div className="lg:col-span-5">
                        <div
                            id={listId}
                            className="rounded-3xl border border-border/70 bg-card/50 backdrop-blur p-3 md:p-4 outline-none"
                            role="tablist"
                            aria-label="Lista de servicios"
                            tabIndex={0}
                            onKeyDown={onKeyDown}
                        >
                            <div className="px-2 pt-2 pb-3">
                                <p className="text-sm font-semibold">Lista de servicios</p>
                                <p className="text-sm text-muted-foreground">Elige un servicio</p>
                            </div>

                            <div className="space-y-1">
                                {SERVICES.map((s, idx) => {
                                    const isActive = idx === activeIndex;
                                    const Icon = s.icon;
                                    const tabId = `tab-${s.id}`;
                                    const thisPanelId = `panel-${s.id}`;

                                    return (
                                        <button
                                            key={s.id}
                                            id={tabId}
                                            type="button"
                                            onClick={() => setActiveIndex(idx)}
                                            role="tab"
                                            aria-selected={isActive}
                                            aria-controls={thisPanelId}
                                            className={cn(
                                                "w-full text-left rounded-2xl px-3 py-3 md:px-4 md:py-4",
                                                "border transition-all outline-none",
                                                "focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                                                isActive
                                                    ? "bg-muted/70 border-border/70 shadow-sm"
                                                    : "border-transparent hover:bg-muted/50"
                                            )}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className={cn(
                                                        "h-10 w-10 rounded-2xl grid place-items-center border",
                                                        isActive ? "bg-background border-border/70" : "bg-background/60 border-border/50"
                                                    )}
                                                >
                                                    <Icon className={cn("h-5 w-5", isActive ? "text-foreground" : "text-muted-foreground")} />
                                                </div>

                                                <div className="min-w-0 flex-1">
                                                    <div className="flex items-center justify-between gap-3">
                                                        <p className={cn("font-semibold truncate", !isActive && "text-muted-foreground")}>
                                                            {s.title}
                                                        </p>
                                                        <span className={cn("text-xs tabular-nums", isActive ? "text-foreground" : "text-muted-foreground")}>
                              {String(idx + 1).padStart(2, "0")}
                            </span>
                                                    </div>
                                                    <p className="mt-1 text-xs text-muted-foreground line-clamp-1">{s.short}</p>
                                                </div>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>

                            <div className="mt-4 px-2 pb-2 md:hidden">
                                <Button
                                    variant="outline"
                                    className="w-full rounded-full border-primary/30 hover:border-primary"
                                    asChild
                                >
                                    <Link href="/services">Ver todos</Link>
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="rounded-3xl border border-border/70 bg-card/50 backdrop-blur p-3 md:p-4">
                            <div
                                id={panelId}
                                role="tabpanel"
                                aria-labelledby={`tab-${active.id}`}
                                className="relative overflow-hidden rounded-2xl border border-border/60"
                            >
                                <div className="relative w-full aspect-[16/9] md:aspect-[2.2/1]">
                                    <Image
                                        src={active.image ?? ""}
                                        alt={active.title}
                                        fill
                                        className="object-cover"
                                        priority={false}
                                        sizes="(max-width: 1024px) 100vw, 60vw"
                                    />

                                    <div className="absolute inset-0 bg-black/25"/>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20"/>

                                    <div
                                        className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl"/>

                                    <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                                        <div className="max-w-xl">
                                            <p className="text-white/90 text-sm font-semibold">
                                                {active.tags.join(" • ")}
                                            </p>

                                            <h3 className="mt-2 text-white text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.0]">
                                                {active.title}
                                            </h3>

                                            <p className="mt-3 text-white/85 text-sm md:text-base">
                                                {active.short}
                                            </p>

                                            <div className="mt-5 flex flex-wrap gap-2">
                                                {active.tags.map((t) => (
                                                    <span
                                                        key={t}
                                                        className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white border border-white/20 backdrop-blur"
                                                    >
                            {t}
                          </span>
                                                ))}
                                            </div>

                                            <div className="mt-6 flex flex-col sm:flex-row gap-3">
                                                <Button
                                                    className="rounded-full bg-white text-foreground hover:bg-white/90"
                                                    asChild
                                                    size="lg"
                                                >
                                                    <Link href={active.ctaHref}>
                                                        Ver detalle <ArrowUpRight className="ml-2 h-4 w-4"/>
                                                    </Link>
                                                </Button>

                                                <Button
                                                    variant="outline"
                                                    className="rounded-full border-white/35 hover:text-white hover:bg-white/10"
                                                    asChild
                                                    size="lg"
                                                >
                                                    <Link href="https://api.whatsapp.com/send?phone=51941801827" target="_blank">Solicitar cotización</Link>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="absolute left-5 top-5 h-3 w-3 rounded-full bg-white/80"/>
                                </div>
                            </div>

                            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
                                {active.bullets.map((b) => (
                                    <div key={b} className="rounded-2xl border border-border/70 bg-background/60 p-4">
                                        <div className="flex items-start gap-2">
                      <span className="mt-0.5 text-primary">
                        <Check className="h-4 w-4" />
                      </span>
                                            <p className="text-sm text-muted-foreground">{b}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                                <span className="h-2 w-2 rounded-full bg-accent" />
                                <span>Si no sabes cuál elegir, te guiamos en una llamada breve.</span>
                            </div>
                        </div>

                        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
                            <KpiCard label="Estrategia" value="Plan claro" icon={<BarChart3 className="h-4 w-4" />} />
                            <KpiCard label="Ejecución" value="Velocidad" icon={<Sparkles className="h-4 w-4" />} />
                            <KpiCard label="Medición" value="Tracking" icon={<LineChart className="h-4 w-4" />} />
                            <KpiCard label="Soporte" value="Continuo" icon={<ArrowUpRight className="h-4 w-4" />} />
                        </div>
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
}

function KpiCard({
                     label,
                     value,
                     icon,
                 }: {
    label: string;
    value: string;
    icon: React.ReactNode;
}) {
    return (
        <div className="rounded-2xl border border-border/70 bg-card/40 backdrop-blur p-4">
            <div className="flex items-center justify-between">
                <p className="text-xs text-muted-foreground">{label}</p>
                <span className="text-muted-foreground">{icon}</span>
            </div>
            <p className="mt-2 font-semibold">{value}</p>
        </div>
    );
}
