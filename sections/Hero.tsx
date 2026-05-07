"use client";

import {useEffect, useRef} from "react";
import Link from "next/link";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {ContentWidth} from "@/components/ContentWidth";
import {useTypewriter} from "@/hooks/useTypewriter";
import {DM_Serif_Display, Plus_Jakarta_Sans} from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
});

const dmSerif = DM_Serif_Display({
    subsets: ["latin"],
    weight: ["400"],
    style: ["normal", "italic"],
});

const phrases = [
    "campañas de anuncios que generan leads",
    "SEO que posiciona negocios locales",
    "webs rápidas enfocadas en conversión",
    "publicidad en Google y Meta Ads",
    "estrategia digital con resultados medibles",
];

function IllusAds() {
    return (
        <svg
            viewBox="0 0 340 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            aria-hidden="true"
        >
            <rect width="340" height="200" fill="#fff8f7" rx="12" />

            <rect x="20" y="18" width="180" height="110" rx="10" fill="white" stroke="#EA4335" strokeWidth="0.8" strokeOpacity="0.3" />
            <rect x="20" y="18" width="180" height="36" rx="10" fill="#EA4335" fillOpacity="0.07" />
            <rect x="32" y="29" width="56" height="14" rx="7" fill="#EA4335" fillOpacity="0.85" />
            <text x="60" y="40" textAnchor="middle" fill="white" fontSize="8" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">ANUNCIO</text>
            <rect x="32" y="62" width="150" height="6" rx="3" fill="#1a1a1a" fillOpacity="0.12" />
            <rect x="32" y="74" width="118" height="5" rx="2.5" fill="#1a1a1a" fillOpacity="0.07" />
            <rect x="32" y="84" width="134" height="5" rx="2.5" fill="#1a1a1a" fillOpacity="0.07" />
            <rect x="32" y="99" width="64" height="18" rx="9" fill="#4285F4" />
            <text x="64" y="112" textAnchor="middle" fill="white" fontSize="8" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">Cotizar ahora</text>

            <polyline
                points="210,175 225,148 240,155 255,124 268,132 282,100 296,108 312,74 326,55"
                fill="none" stroke="#34A853" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            />
            <circle cx="326" cy="55" r="5" fill="#34A853" />

            <rect x="272" y="22" width="60" height="22" rx="11" fill="white" stroke="#FBBC05" strokeWidth="1" />
            <text x="302" y="37" textAnchor="middle" fill="#b8860b" fontSize="9" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">ROI +340%</text>

            <circle cx="242" cy="160" r="16" fill="#1877F2" fillOpacity="0.9" />
            <text x="242" y="165" textAnchor="middle" fill="white" fontSize="14" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">f</text>
            <circle cx="278" cy="160" r="16" fill="white" stroke="#e0e0e0" strokeWidth="1" />
            <text x="278" y="165" textAnchor="middle" fill="#EA4335" fontSize="13" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">G</text>

            <text x="206" y="180" fill="#34A853" fontSize="8" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="600" fillOpacity="0.7">Conversiones</text>
        </svg>
    );
}

function IllusBranding() {
    return (
        <svg
            viewBox="0 0 340 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            aria-hidden="true"
        >
            <rect width="340" height="200" fill="#f5f8ff" rx="12" />

            <rect x="18" y="14" width="220" height="150" rx="10" fill="white" stroke="#4285F4" strokeWidth="0.8" strokeOpacity="0.35" />
            <rect x="18" y="14" width="220" height="30" rx="10" fill="#4285F4" fillOpacity="0.06" />
            <circle cx="34" cy="29" r="5" fill="#EA4335" fillOpacity="0.7" />
            <circle cx="48" cy="29" r="5" fill="#FBBC05" fillOpacity="0.7" />
            <circle cx="62" cy="29" r="5" fill="#34A853" fillOpacity="0.7" />
            <rect x="78" y="22" width="142" height="14" rx="7" fill="#f0f0f0" />
            <text x="149" y="32" textAnchor="middle" fill="#9ca3af" fontSize="7.5" fontFamily="Plus Jakarta Sans,sans-serif">servitec.com</text>

            <rect x="28" y="54" width="100" height="12" rx="4" fill="#4285F4" fillOpacity="0.55" />
            <rect x="28" y="72" width="75" height="6" rx="3" fill="#1a1a1a" fillOpacity="0.1" />
            <rect x="28" y="82" width="88" height="6" rx="3" fill="#1a1a1a" fillOpacity="0.07" />
            <rect x="28" y="98" width="62" height="20" rx="10" fill="#4285F4" />
            <text x="59" y="112" textAnchor="middle" fill="white" fontSize="8" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">Contáctanos</text>
            <rect x="100" y="98" width="62" height="20" rx="10" fill="transparent" stroke="#4285F4" strokeWidth="1" />
            <text x="131" y="112" textAnchor="middle" fill="#4285F4" fontSize="8" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">Servicios</text>

            <rect x="148" y="50" width="80" height="90" rx="8" fill="#4285F4" fillOpacity="0.08" stroke="#4285F4" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="188" cy="80" r="22" fill="#4285F4" fillOpacity="0.12" />
            <text x="188" y="85" textAnchor="middle" fill="#4285F4" fontSize="18" fontFamily="DM Serif Display,serif" fontStyle="italic">Sg</text>

            <rect x="250" y="30" width="74" height="130" rx="12" fill="white" stroke="#4285F4" strokeWidth="0.8" strokeOpacity="0.4" />
            <rect x="250" y="30" width="74" height="24" rx="12" fill="#4285F4" fillOpacity="0.06" />
            <rect x="258" y="64" width="58" height="32" rx="5" fill="#4285F4" fillOpacity="0.1" />
            <rect x="258" y="102" width="40" height="5" rx="2.5" fill="#1a1a1a" fillOpacity="0.12" />
            <rect x="258" y="112" width="52" height="5" rx="2.5" fill="#1a1a1a" fillOpacity="0.08" />
            <rect x="258" y="126" width="42" height="14" rx="7" fill="#4285F4" />
            <text x="279" y="137" textAnchor="middle" fill="white" fontSize="7" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">Ver más</text>

            <circle cx="254" cy="175" r="10" fill="#EA4335" fillOpacity="0.85" />
            <circle cx="273" cy="175" r="10" fill="#4285F4" fillOpacity="0.85" />
            <circle cx="292" cy="175" r="10" fill="#FBBC05" fillOpacity="0.85" />
            <circle cx="311" cy="175" r="10" fill="#34A853" fillOpacity="0.85" />
            <text x="254" y="179" textAnchor="middle" fill="white" fontSize="7" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">R</text>
            <text x="273" y="179" textAnchor="middle" fill="white" fontSize="7" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">B</text>
            <text x="292" y="179" textAnchor="middle" fill="white" fontSize="7" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">Y</text>
            <text x="311" y="179" textAnchor="middle" fill="white" fontSize="7" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">G</text>
        </svg>
    );
}

function IllusSEO() {
    return (
        <svg
            viewBox="0 0 340 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            aria-hidden="true"
        >
            <rect width="340" height="200" fill="#fffcf0" rx="12" />

            <rect x="16" y="14" width="180" height="170" rx="10" fill="white" stroke="#FBBC05" strokeWidth="0.8" strokeOpacity="0.4" />

            <rect x="24" y="22" width="164" height="18" rx="9" fill="#f9f9f9" stroke="#e5e7eb" strokeWidth="0.8" />
            <text x="106" y="34" textAnchor="middle" fill="#9ca3af" fontSize="7.5" fontFamily="Plus Jakarta Sans,sans-serif">marketing digital lima</text>

            <rect x="24" y="48" width="164" height="52" rx="6" fill="#FBBC05" fillOpacity="0.08" stroke="#FBBC05" strokeWidth="1" strokeOpacity="0.5" />
            <rect x="28" y="52" width="28" height="12" rx="6" fill="#34A853" fillOpacity="0.9" />
            <text x="42" y="61" textAnchor="middle" fill="white" fontSize="7" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">#1</text>
            <text x="64" y="62" fill="#1a1a1a" fontSize="8.5" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">Servitec Google</text>
            <text x="28" y="76" fill="#6b7280" fontSize="7" fontFamily="Plus Jakarta Sans,sans-serif">servitec.com · Lima, Perú</text>
            <text x="28" y="88" fill="#374151" fontSize="7" fontFamily="Plus Jakarta Sans,sans-serif">Marketing digital y desarrollo web...</text>

            <rect x="24" y="106" width="164" height="36" rx="6" fill="white" stroke="#e5e7eb" strokeWidth="0.6" />
            <rect x="28" y="110" width="110" height="6" rx="3" fill="#1a1a1a" fillOpacity="0.15" />
            <rect x="28" y="120" width="80" height="5" rx="2.5" fill="#1a1a1a" fillOpacity="0.08" />
            <rect x="28" y="129" width="95" height="5" rx="2.5" fill="#1a1a1a" fillOpacity="0.06" />

            <rect x="24" y="148" width="164" height="28" rx="6" fill="white" stroke="#e5e7eb" strokeWidth="0.6" />
            <rect x="28" y="153" width="90" height="6" rx="3" fill="#1a1a1a" fillOpacity="0.1" />
            <rect x="28" y="163" width="70" height="5" rx="2.5" fill="#1a1a1a" fillOpacity="0.07" />

            <polyline
                points="210,185 222,162 234,154 246,136 258,118 270,96 282,78 296,54 312,38"
                fill="none" stroke="#FBBC05" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            />
            <circle cx="312" cy="38" r="5" fill="#FBBC05" />

            <polygon
                points="210,185 222,162 234,154 246,136 258,118 270,96 282,78 296,54 312,38 312,185"
                fill="#FBBC05" fillOpacity="0.08"
            />

            <text x="206" y="196" fill="#b8860b" fontSize="7.5" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="600" fillOpacity="0.8">Tráfico orgánico ↑</text>

            <rect x="208" y="50" width="72" height="16" rx="8" fill="white" stroke="#FBBC05" strokeWidth="0.8" />
            <text x="244" y="61" textAnchor="middle" fill="#b8860b" fontSize="7.5" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="600">SEO · Keywords</text>
            <rect x="258" y="72" width="64" height="16" rx="8" fill="white" stroke="#34A853" strokeWidth="0.8" />
            <text x="290" y="83" textAnchor="middle" fill="#166534" fontSize="7.5" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="600">Contenido</text>
            <rect x="218" y="94" width="58" height="16" rx="8" fill="white" stroke="#4285F4" strokeWidth="0.8" />
            <text x="247" y="105" textAnchor="middle" fill="#1e40af" fontSize="7.5" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="600">Backlinks</text>
        </svg>
    );
}

const cardsData = [
    {
        tone: "primary" as const,
        accent: "red" as const,
        title: "Publicidad digital",
        subtitle: "Campañas en Google y Meta enfocadas en leads y ventas.",
        rightTag: "01",
        imageUrl: "/services/google-ads.png",
        IllusComponent: IllusAds,
    },
    {
        tone: "neutral" as const,
        accent: "blue" as const,
        title: "Branding y diseño web",
        subtitle: "Identidad visual y sitios web rápidos, claros y optimizados.",
        rightTag: "02",
        imageUrl: "/services/web-developer.png",
        IllusComponent: IllusBranding,
    },
    {
        tone: "warm" as const,
        accent: "yellow" as const,
        title: "SEO y contenido estratégico",
        subtitle: "Posicionamiento orgánico pensado para atraer clientes.",
        rightTag: "03",
        imageUrl: "/services/seo.png",
        IllusComponent: IllusSEO,
    },
];

export function Hero() {
    const typedText = useTypewriter(phrases);
    const sliderRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (sliderRef.current) {
            const scrollAmount = 356;
            sliderRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (sliderRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
                if (scrollLeft + clientWidth >= scrollWidth - 10) {
                    sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
                } else {
                    scroll("right");
                }
            }
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
            <section id="hero" className={cn("relative overflow-hidden w-full", jakarta.className)}>

                <div className="absolute inset-0 z-0">
                    <Image
                        src="/hero-image.jpeg"
                        alt=""
                        fill
                        className="object-cover object-center"
                        priority
                    />
                </div>

        <ContentWidth className="relative z-10">
                <div className="pt-16">
                    <div className="mx-auto max-w-4xl text-center">
                        <h1 className="mt-2 tracking-tight leading-[0.95] text-[clamp(2.4rem,5vw,4.5rem)] text-black">
    <span className="drop-shadow-[2px_2px_0_white]">
        Marketing digital y{" "}
    </span>
                            <em className="not-italic" style={{
                                WebkitBackgroundClip: "text",
                                backgroundClip: "text",
                                filter: "drop-shadow(2px 2px 0 white)"
                            }}>
                                desarrollo web
                            </em>
                        </h1>

                        <p className="mt-3 text-lg md:text-xl font-medium text-black drop-shadow-[1px_1px_0_white]">
                            para{" "}
                            <span className="relative px-2 py-0.5 font-bold">
                                <span className="absolute inset-0 bg-white/60 blur-xl -z-10 rounded-full" />
        <span className="text-primary relative z-10">
            {typedText}
            <span className="animate-pulse">|</span>
        </span>
    </span>
                        </p>

                        <div className="mt-7 flex flex-col sm:flex-row sm:justify-center gap-3">
                            <Button className="rounded-full bg-primary text-primary-foreground hover:opacity-95 font-semibold" asChild>
                                <Link href="https://wa.me/51941801827" target="_blank">
                                    Solicitar cotización
                                </Link>
                            </Button>
                            <Button variant="outline" className="rounded-full border-primary/30 hover:border-primary font-semibold bg-white/50" asChild>
                                <Link href="/services">Ver servicios</Link>
                            </Button>
                        </div>
                    </div>

                    <div className="mt-10 md:mt-14 relative group">

                        <div className="rounded-3xl border border-border/70 bg-card/50 backdrop-blur p-3 md:p-4 shadow-sm relative">
                            <div
                                ref={sliderRef}
                                className={cn(
                                    "flex flex-row gap-3 md:gap-4 pb-2",
                                    "overflow-x-auto snap-x snap-mandatory [-webkit-overflow-scrolling:touch]",
                                    "scrollbar-hide"
                                )}
                                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                            >
                                {cardsData.map((card, index) => (
                                    <div key={index} className="snap-start shrink-0 w-[85vw] sm:w-[340px]">
                                        <HeroCard {...card} className="w-full h-full" />
                                    </div>
                                ))}

                                <div className="snap-start shrink-0 w-[85vw] sm:w-[280px]">
                                    <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-background p-5 w-full h-full min-h-[200px] lg:min-h-[350px]">
                                        <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#34A853]/15 blur-2xl" />
                                        <div className="flex flex-col h-full">
                                            <div className="flex items-start justify-between gap-4">
                                                <p className="text-xs text-muted-foreground font-semibold">
                                                    Proyectos entregados
                                                </p>
                                                <Link
                                                    href="/services"
                                                    className="text-xs text-muted-foreground hover:text-foreground transition font-semibold"
                                                >
                                                    Ver todo →
                                                </Link>
                                            </div>
                                            <div className="mt-auto pt-10 lg:pt-0">
                                                <p className={cn("text-4xl lg:text-5xl font-extrabold tracking-tight", dmSerif.className)}>
                                                    4.9 ★
                                                </p>
                                                <p className="mt-1 text-sm text-muted-foreground font-medium">
                                                    valoración promedio
                                                </p>
                                            </div>
                                            <div className="mt-5 lg:mt-7 flex items-center gap-2">
                                                <span className="h-2 w-2 rounded-full bg-[#34A853]" />
                                                <p className="text-xs text-muted-foreground font-medium">
                                                    Resultados medibles desde el inicio
                                                </p>
                                            </div>
                                        </div>
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

function HeroCard({
                      title,
                      subtitle,
                      rightTag,
                      className,
                      accent = "blue",
                      imageUrl,
                      IllusComponent,
                  }: {
    tone: "primary" | "neutral" | "warm";
    title: string;
    subtitle: string;
    rightTag: string;
    className?: string;
    accent?: "red" | "blue" | "green" | "yellow";
    imageUrl?: string;
    IllusComponent?: React.ComponentType;
}) {
    const accentStyles = {
        red: {
            shell: "border-red-500/20 hover:border-red-500/40",
            dot: "bg-[#EA4335]",
            glow: "bg-[#EA4335]/15",
            pill: "bg-[#EA4335]/10 border-[#EA4335]/20 text-foreground/80 hover:bg-[#EA4335]/20",
        },
        blue: {
            shell: "border-blue-500/20 hover:border-blue-500/40",
            dot: "bg-[#4285F4]",
            glow: "bg-[#4285F4]/15",
            pill: "bg-[#4285F4]/10 border-[#4285F4]/20 text-foreground/80 hover:bg-[#4285F4]/20",
        },
        green: {
            shell: "border-emerald-500/20 hover:border-emerald-500/40",
            dot: "bg-[#34A853]",
            glow: "bg-[#34A853]/15",
            pill: "bg-[#34A853]/10 border-[#34A853]/20 text-foreground/80 hover:bg-[#34A853]/20",
        },
        yellow: {
            shell: "border-yellow-500/20 hover:border-yellow-500/40",
            dot: "bg-[#FBBC05]",
            glow: "bg-[#FBBC05]/15",
            pill: "bg-[#FBBC05]/10 border-[#FBBC05]/20 text-foreground/80 hover:bg-[#FBBC05]/20",
        },
    }[accent];

    return (
        <div
            className={cn(
                "group relative overflow-hidden rounded-2xl border p-5 transition-all duration-300",
                "min-h-[200px] lg:min-h-[350px] bg-card",
                accentStyles.shell,
                className
            )}
        >
            {imageUrl && (
                <div className="absolute inset-0 z-0 opacity-40 transition-opacity duration-500 group-hover:opacity-80">
                    <Image src={imageUrl} alt={title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                </div>
            )}

            {IllusComponent && !imageUrl && (
                <div className="absolute inset-0 z-0 opacity-60 transition-opacity duration-500 group-hover:opacity-90">
                    <IllusComponent />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                </div>
            )}

            {IllusComponent && imageUrl && (
                <div className="relative z-10 mb-4 rounded-xl overflow-hidden h-32 lg:h-40 -mx-1 -mt-1 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    <IllusComponent />
                </div>
            )}

            <div
                className={cn(
                    "pointer-events-none absolute -right-16 -top-16 z-0 h-56 w-56 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-70",
                    accentStyles.glow
                )}
            />

            <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-start justify-between gap-3">
                    <p className="text-xs font-semibold text-foreground/80">{subtitle}</p>
                    <span className="text-xs font-bold text-foreground/60">{rightTag}</span>
                </div>

                <div className="mt-auto pt-10 lg:mt-7 lg:pt-0">
                    <p className="whitespace-pre-line text-2xl lg:text-3xl font-extrabold leading-[1.02] tracking-tight text-foreground drop-shadow-md">
                        {title}
                    </p>

                    <div className="mt-4 flex items-center gap-2">
                        <span className={cn("h-2 w-2 rounded-full", accentStyles.dot)} />
                        <p className="text-xs font-semibold text-foreground/75 drop-shadow-md">
                            Estrategia · Diseño · Performance
                        </p>
                    </div>
                </div>

                <div className="mt-6 lg:absolute lg:left-5 lg:bottom-5">
                    <Button
                        className={cn(
                            "inline-flex items-center rounded-full px-4 py-1.5 text-xs font-bold backdrop-blur border transition-colors",
                            accentStyles.pill
                        )}
                        asChild
                    >
                        <Link href="/services">Ver más →</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}