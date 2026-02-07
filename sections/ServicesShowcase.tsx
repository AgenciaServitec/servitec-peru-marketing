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

type Service = {
    id: string;
    title: string;
    short: string;
    bullets: string[];
    tags: string[];
    icon: React.ReactNode;
    // Puedes usar image o gradient. Si no tienes imágenes aún, deja gradient.
    image?: string;
    gradientClass: string;
    ctaHref: string;
};

const PLACEHOLDER_IMAGE =
    "https://images.unsplash.com/photo-1582005450386-52b25f82d9bb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const SERVICES: Service[] = [
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
        icon: <Megaphone className="h-5 w-5" />,
        gradientClass: "from-primary/90 via-secondary/70 to-accent/60",
        ctaHref: "/servicios/ads",
        image: PLACEHOLDER_IMAGE
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
        icon: <MapPin className="h-5 w-5" />,
        gradientClass: "from-accent/85 via-primary/55 to-secondary/55",
        ctaHref: "/servicios/seo",
        image: PLACEHOLDER_IMAGE
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
        tags: ["Next.js", "Conversion"],
        icon: <Globe className="h-5 w-5" />,
        gradientClass: "from-secondary/90 via-primary/60 to-accent/55",
        ctaHref: "/servicios/web",
        image: PLACEHOLDER_IMAGE
    },
    {
        id: "apps",
        title: "Desarrollo de APPS",
        short: "Aplicaciones móviles para procesos y crecimiento del negocio.",
        bullets: [
            "MVP rápido y escalable",
            "Integración con backend y analytics",
            "Publicación y soporte",
        ],
        tags: ["Mobile", "MVP"],
        icon: <Smartphone className="h-5 w-5" />,
        gradientClass: "from-primary/85 via-accent/55 to-secondary/70",
        ctaHref: "/servicios/apps",
        image: PLACEHOLDER_IMAGE
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
        icon: <Receipt className="h-5 w-5" />,
        gradientClass: "from-accent/70 via-secondary/55 to-primary/60",
        ctaHref: "/servicios/facturacion",
        image: PLACEHOLDER_IMAGE
    },
    {
        id: "announce",
        title: "Anuncia en Internet",
        short: "Estrategia publicitaria para visibilidad inmediata y demanda.",
        bullets: [
            "Campañas por objetivo (leads/ventas)",
            "Segmentación y audiencias",
            "Optimización semanal y reportes",
        ],
        tags: ["Visibilidad", "Leads"],
        icon: <ArrowUpRight className="h-5 w-5" />,
        gradientClass: "from-primary/85 via-primary/50 to-secondary/60",
        ctaHref: "/servicios/anuncios",
        image: PLACEHOLDER_IMAGE
    },
    {
        id: "digital-campaign",
        title: "Campaña Digital",
        short: "Plan completo: creatividad + pauta + contenido + medición.",
        bullets: [
            "Plan mensual y calendario de contenido",
            "Creatividades y copies",
            "Métricas claras y mejoras continuas",
        ],
        tags: ["Estrategia", "Contenido"],
        icon: <Sparkles className="h-5 w-5" />,
        gradientClass: "from-secondary/85 via-accent/50 to-primary/60",
        ctaHref: "/servicios/campanas",
        image: PLACEHOLDER_IMAGE
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
        icon: <LineChart className="h-5 w-5" />,
        gradientClass: "from-accent/80 via-secondary/55 to-primary/55",
        ctaHref: "/servicios/analitica",
        image: PLACEHOLDER_IMAGE
    },
];

export function ServicesShowcase() {
    const [activeId, setActiveId] = React.useState(SERVICES[0].id);
    const active = React.useMemo(
        () => SERVICES.find((s) => s.id === activeId) ?? SERVICES[0],
        [activeId],
    );

    return (
        <section className="relative">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-28 -left-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
            </div>

            <div className="container-custom section-padding relative">
                <div className="flex items-end justify-between gap-4">
                    <div>
                        <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">Servicios que impulsan tu crecimiento</h2>
                        <p className="mt-3 max-w-2xl text-muted-foreground">
                            Elige un servicio y revisa qué incluye. Estrategia + ejecución +
                            medición, con enfoque en resultados.
                        </p>
                    </div>

                    <Button
                        variant="outline"
                        className="hidden md:inline-flex rounded-full border-primary/30 hover:border-primary"
                        asChild
                    >
                        <Link href="/servicios">Ver todos</Link>
                    </Button>
                </div>

                {/* Content */}
                <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                    {/* Left list */}
                    <div className="lg:col-span-5">
                        <div className="rounded-3xl border border-border/70 bg-card/50 backdrop-blur p-3 md:p-4">
                            <div className="px-2 pt-2 pb-3">
                                <p className="text-sm font-semibold">Lista de servicios</p>
                                <p className="text-sm text-muted-foreground">Elija un servicio</p>
                            </div>

                            <div className="space-y-1">
                                {SERVICES.map((s, idx) => {
                                    const isActive = s.id === activeId;
                                    return (
                                        <button
                                            key={s.id}
                                            type="button"
                                            onClick={() => setActiveId(s.id)}
                                            className={cn(
                                                "w-full text-left rounded-2xl px-3 py-3 md:px-4 md:py-4",
                                                "border border-transparent transition-all",
                                                "hover:bg-muted/50",
                                                isActive &&
                                                "bg-muted/70 border-border/70 shadow-sm",
                                            )}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className={cn(
                                                        "h-10 w-10 rounded-2xl grid place-items-center border",
                                                        isActive
                                                            ? "bg-background border-border/70"
                                                            : "bg-background/60 border-border/50",
                                                    )}
                                                >
                          <span
                              className={cn(
                                  "text-muted-foreground",
                                  isActive && "text-foreground",
                              )}
                          >
                            {s.icon}
                          </span>
                                                </div>

                                                <div className="min-w-0 flex-1">
                                                    <div className="flex items-center justify-between gap-3">
                                                        <p
                                                            className={cn(
                                                                "font-semibold truncate",
                                                                !isActive && "text-muted-foreground",
                                                            )}
                                                        >
                                                            {s.title}
                                                        </p>
                                                        <span
                                                            className={cn(
                                                                "text-xs tabular-nums",
                                                                isActive
                                                                    ? "text-foreground"
                                                                    : "text-muted-foreground",
                                                            )}
                                                        >
                              {String(idx + 1).padStart(2, "0")}
                            </span>
                                                    </div>
                                                    <p className="mt-1 text-xs text-muted-foreground line-clamp-1">
                                                        {s.short}
                                                    </p>
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
                                    <Link href="/servicios">Ver todos</Link>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Right preview */}
                    {/* Right preview */}
                    <div className="lg:col-span-7">
                        <div className="rounded-3xl border border-border/70 bg-card/50 backdrop-blur p-3 md:p-4">
                            <div className="relative overflow-hidden rounded-2xl border border-border/60">
                                <div className="relative w-full aspect-[16/9] md:aspect-[2.2/1]">
                                    {/* Imagen */}
                                    <Image
                                        src={active.image!}
                                        alt={active.title}
                                        fill
                                        className="object-cover"
                                        priority={false}
                                        sizes="(max-width: 1024px) 100vw, 60vw"
                                    />

                                    {/* Overlay oscuro para legibilidad */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />

                                    {/* Contenido */}
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
                                                    className="rounded-full bg-white text-foreground hover:opacity-95"
                                                    asChild
                                                >
                                                    <Link href={active.ctaHref}>
                                                        Ver detalle <ArrowUpRight className="ml-2 h-4 w-4" />
                                                    </Link>
                                                </Button>

                                                <Button
                                                    variant="outline"
                                                    className="rounded-full border-white/35 text-white hover:bg-white/10"
                                                    asChild
                                                >
                                                    <Link href="/cotizar">Solicitar cotización</Link>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Puntito decorativo (como el modelo) */}
                                    <div className="absolute left-5 top-5 h-3 w-3 rounded-full bg-white/80" />
                                </div>
                            </div>

                            {/* bullets row */}
                            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
                                {active.bullets.map((b) => (
                                    <div
                                        key={b}
                                        className="rounded-2xl border border-border/70 bg-background/60 p-4"
                                    >
                                        <div className="flex items-start gap-2">
            <span className="mt-0.5 text-primary">
              <Check className="h-4 w-4" />
            </span>
                                            <p className="text-sm text-muted-foreground">{b}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* tiny note */}
                            <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                                <span className="h-2 w-2 rounded-full bg-accent" />
                                <span>Si no sabes cuál elegir, te guiamos en una llamada breve.</span>
                            </div>
                        </div>

                        {/* KPI cards */}
                        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
                            <KpiCard label="Estrategia" value="Plan claro" icon={<BarChart3 className="h-4 w-4" />} />
                            <KpiCard label="Ejecución" value="Velocidad" icon={<Sparkles className="h-4 w-4" />} />
                            <KpiCard label="Medición" value="Tracking" icon={<LineChart className="h-4 w-4" />} />
                            <KpiCard label="Soporte" value="Continuo" icon={<ArrowUpRight className="h-4 w-4" />} />
                        </div>
                    </div>

                </div>
            </div>
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
