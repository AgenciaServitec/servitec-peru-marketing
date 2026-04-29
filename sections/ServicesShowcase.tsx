"use client";

import * as React from "react";
import Link from "next/link";
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
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ContentWidth } from "@/components/ContentWidth";


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
    ctaHref: string;
    IllusComponent: React.ComponentType;
    accentColor: string;
    accentLight: string;
};

function IllusAds() {
    return (
        <svg viewBox="0 0 720 340" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
            <defs>
                <linearGradient id="bg-ads" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#0f1a2e" />
                    <stop offset="100%" stopColor="#1a0d0d" />
                </linearGradient>
            </defs>
            <rect width="720" height="340" fill="url(#bg-ads)" rx="16" />

            {[80,160,240,320].map(y => (
                <line key={y} x1="0" y1={y} x2="720" y2={y} stroke="white" strokeOpacity="0.04" strokeWidth="1" />
            ))}
            {[144,288,432,576].map(x => (
                <line key={x} x1={x} y1="0" x2={x} y2="340" stroke="white" strokeOpacity="0.04" strokeWidth="1" />
            ))}

            <rect x="30" y="30" width="240" height="160" rx="12" fill="#111827" stroke="#EA4335" strokeWidth="0.8" strokeOpacity="0.5" />
            <rect x="30" y="30" width="240" height="42" rx="12" fill="#EA4335" fillOpacity="0.12" />
            <rect x="30" y="60" width="240" height="12" rx="0" fill="#EA4335" fillOpacity="0.12" />
            <rect x="42" y="40" width="56" height="16" rx="8" fill="#EA4335" fillOpacity="0.9" />
            <text x="70" y="52" textAnchor="middle" fill="white" fontSize="9" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">ANUNCIO</text>
            <text x="108" y="52" fill="#6ee7b7" fontSize="8" fontFamily="Plus Jakarta Sans,sans-serif">servitec.com</text>
            <text x="42" y="80" fill="white" fontSize="11" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">Marketing Digital en Lima</text>
            <rect x="42" y="88" width="200" height="6" rx="3" fill="white" fillOpacity="0.18" />
            <rect x="42" y="100" width="160" height="6" rx="3" fill="white" fillOpacity="0.12" />
            <rect x="42" y="116" width="90" height="26" rx="13" fill="#4285F4" />
            <text x="87" y="133" textAnchor="middle" fill="white" fontSize="9" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">Cotizar ahora →</text>
            <rect x="148" y="116" width="110" height="26" rx="13" fill="white" fillOpacity="0.06" stroke="white" strokeWidth="0.6" strokeOpacity="0.2" />
            <text x="203" y="129" textAnchor="middle" fill="#34A853" fontSize="8" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="600">↑ 2,840 clics/mes</text>

            <rect x="30" y="206" width="115" height="110" rx="12" fill="#111827" stroke="#1877F2" strokeWidth="0.8" strokeOpacity="0.5" />
            <rect x="30" y="206" width="115" height="32" rx="12" fill="#1877F2" fillOpacity="0.15" />
            <rect x="30" y="226" width="115" height="12" rx="0" fill="#1877F2" fillOpacity="0.15" />
            <text x="87" y="227" textAnchor="middle" fill="#60a5fa" fontSize="9" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">META ADS</text>
            <text x="87" y="248" textAnchor="middle" fill="white" fontSize="19" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="800">f</text>
            <rect x="42" y="262" width="75" height="18" rx="9" fill="#1877F2" fillOpacity="0.8" />
            <text x="79" y="275" textAnchor="middle" fill="white" fontSize="8" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">Audiencia: 180k</text>
            <rect x="42" y="284" width="75" height="18" rx="9" fill="white" fillOpacity="0.06" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />
            <text x="79" y="297" textAnchor="middle" fill="#93c5fd" fontSize="8" fontFamily="Plus Jakarta Sans,sans-serif">CPA: S/ 12.40</text>

            <rect x="155" y="206" width="115" height="110" rx="12" fill="#111827" stroke="#EA4335" strokeWidth="0.8" strokeOpacity="0.5" />
            <rect x="155" y="206" width="115" height="32" rx="12" fill="#EA4335" fillOpacity="0.1" />
            <rect x="155" y="226" width="115" height="12" rx="0" fill="#EA4335" fillOpacity="0.1" />
            <text x="212" y="227" textAnchor="middle" fill="#fca5a5" fontSize="9" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">GOOGLE ADS</text>
            <text x="195" y="252" fill="#EA4335" fontSize="14" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">G</text>
            <text x="209" y="252" fill="#4285F4" fontSize="14" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">o</text>
            <text x="221" y="252" fill="#FBBC05" fontSize="14" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">o</text>
            <text x="233" y="252" fill="#34A853" fontSize="14" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">g</text>
            <rect x="167" y="262" width="91" height="18" rx="9" fill="#EA4335" fillOpacity="0.8" />
            <text x="212" y="275" textAnchor="middle" fill="white" fontSize="8" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">ROAS: 4.2x</text>
            <rect x="167" y="284" width="91" height="18" rx="9" fill="white" fillOpacity="0.06" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />
            <text x="212" y="297" textAnchor="middle" fill="#fca5a5" fontSize="8" fontFamily="Plus Jakarta Sans,sans-serif">Leads: 340/mes</text>

            <rect x="295" y="30" width="395" height="290" rx="12" fill="#111827" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
            <text x="315" y="58" fill="white" fontSize="11" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">Rendimiento de campaña</text>
            <text x="665" y="58" textAnchor="end" fill="#34A853" fontSize="10" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="600">↑ +340% ROI</text>

            <line x1="330" y1="270" x2="670" y2="270" stroke="white" strokeOpacity="0.15" strokeWidth="1" />
            <line x1="330" y1="270" x2="330" y2="70" stroke="white" strokeOpacity="0.15" strokeWidth="1" />

            {[200,150,100].map((y,i) => (
                <React.Fragment key={y}>
                    <line x1="330" y1={y} x2="670" y2={y} stroke="white" strokeOpacity="0.06" strokeWidth="0.8" strokeDasharray="4 4" />
                    <text x="326" y={y+4} textAnchor="end" fill="white" fillOpacity="0.35" fontSize="8" fontFamily="Plus Jakarta Sans,sans-serif">{(3-i)*10}k</text>
                </React.Fragment>
            ))}

            <polygon
                points="338,258 365,248 392,235 420,218 448,198 476,172 504,148 532,120 560,95 588,74 616,55 644,42 672,30 672,270 338,270"
                fill="#34A853" fillOpacity="0.08"
            />
            <polyline
                points="338,258 365,248 392,235 420,218 448,198 476,172 504,148 532,120 560,95 588,74 616,55 644,42 672,30"
                fill="none" stroke="#34A853" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            />
            <polyline
                points="338,255 365,250 392,244 420,236 448,226 476,214 504,200 532,185 560,170 588,155 616,140 644,128 672,118"
                fill="none" stroke="#FBBC05" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="6 3"
            />

            <circle cx="672" cy="30" r="6" fill="#34A853" />
            <circle cx="672" cy="30" r="12" fill="#34A853" fillOpacity="0.2" />

            <circle cx="340" cy="292" r="4" fill="#34A853" />
            <text x="350" y="296" fill="white" fillOpacity="0.7" fontSize="9" fontFamily="Plus Jakarta Sans,sans-serif">Conversiones</text>
            <line x1="440" y1="292" x2="460" y2="292" stroke="#FBBC05" strokeWidth="2" strokeDasharray="4 2" />
            <text x="466" y="296" fill="white" fillOpacity="0.7" fontSize="9" fontFamily="Plus Jakarta Sans,sans-serif">Inversión</text>

            <rect x="598" y="38" width="94" height="46" rx="8" fill="#1f2937" stroke="#34A853" strokeWidth="0.8" />
            <text x="645" y="56" textAnchor="middle" fill="#34A853" fontSize="16" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="800">S/ 48k</text>
            <text x="645" y="70" textAnchor="middle" fill="white" fillOpacity="0.6" fontSize="8" fontFamily="Plus Jakarta Sans,sans-serif">ingresos generados</text>

            {["Ene","Feb","Mar","Abr","May","Jun","Jul"].map((m, i) => (
                <text key={m} x={338 + i * 56} y="284" fill="white" fillOpacity="0.35" fontSize="8" fontFamily="Plus Jakarta Sans,sans-serif">{m}</text>
            ))}
        </svg>
    );
}

function IllusSEO() {
    return (
        <svg viewBox="0 0 720 340" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
            <defs>
                <linearGradient id="bg-seo" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#0f1a0f" />
                    <stop offset="100%" stopColor="#1a1600" />
                </linearGradient>
            </defs>
            <rect width="720" height="340" fill="url(#bg-seo)" rx="16" />

            <rect x="30" y="30" width="280" height="280" rx="12" fill="#111827" stroke="#FBBC05" strokeWidth="0.8" strokeOpacity="0.4" />
            <rect x="44" y="44" width="252" height="28" rx="14" fill="#1f2937" stroke="#374151" strokeWidth="0.8" />
            <text x="170" y="63" textAnchor="middle" fill="#6b7280" fontSize="9" fontFamily="Plus Jakarta Sans,sans-serif">marketing digital lima peru</text>
            <circle cx="284" cy="58" r="8" fill="#4285F4" fillOpacity="0.8" />
            <text x="284" y="62" textAnchor="middle" fill="white" fontSize="9" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">↵</text>

            <rect x="44" y="82" width="252" height="70" rx="8" fill="#FBBC05" fillOpacity="0.06" stroke="#FBBC05" strokeWidth="1" strokeOpacity="0.6" />
            <rect x="50" y="88" width="32" height="14" rx="7" fill="#34A853" />
            <text x="66" y="99" textAnchor="middle" fill="white" fontSize="8" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="800">#1</text>
            <text x="90" y="99" fill="white" fontSize="10" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">Servitec Google</text>
            <text x="50" y="114" fill="#6ee7b7" fontSize="8" fontFamily="Plus Jakarta Sans,sans-serif">servitec.com › marketing › lima</text>
            <text x="50" y="128" fill="#d1d5db" fontSize="8.5" fontFamily="Plus Jakarta Sans,sans-serif">Expertos en marketing digital: Google Ads, SEO, Web...</text>
            {[0,1,2,3,4].map(i => (
                <text key={i} x={50 + i*12} y="144" fill="#FBBC05" fontSize="10" fontFamily="Plus Jakarta Sans,sans-serif">★</text>
            ))}
            <text x="118" y="144" fill="#9ca3af" fontSize="8" fontFamily="Plus Jakarta Sans,sans-serif">4.9 (128 reseñas)</text>

            <rect x="44" y="160" width="252" height="52" rx="8" fill="#1f2937" stroke="#374151" strokeWidth="0.5" />
            <text x="50" y="178" fill="#9ca3af" fontSize="9" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="600">Agencia Digital XYZ</text>
            <text x="50" y="190" fill="#6b7280" fontSize="8" fontFamily="Plus Jakarta Sans,sans-serif">agenciadigital.com › servicios</text>
            <rect x="50" y="196" width="180" height="5" rx="2.5" fill="#374151" />

            <rect x="44" y="220" width="252" height="52" rx="8" fill="#1f2937" stroke="#374151" strokeWidth="0.5" />
            <text x="50" y="238" fill="#9ca3af" fontSize="9" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="600">Marketing Pro Lima</text>
            <text x="50" y="250" fill="#6b7280" fontSize="8" fontFamily="Plus Jakarta Sans,sans-serif">marketingpro.pe › servicios</text>
            <rect x="50" y="256" width="160" height="5" rx="2.5" fill="#374151" />

            <rect x="44" y="280" width="252" height="20" rx="6" fill="#1f2937" stroke="#374151" strokeWidth="0.4" />
            <rect x="50" y="285" width="120" height="5" rx="2.5" fill="#374151" />

            <rect x="325" y="30" width="365" height="170" rx="12" fill="#111827" stroke="#34A853" strokeWidth="0.8" strokeOpacity="0.5" />
            <text x="345" y="56" fill="white" fontSize="11" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">Google Maps — Pack Local</text>

            <rect x="345" y="64" width="325" height="120" rx="8" fill="#1a2e1a" />
            <line x1="345" y1="104" x2="670" y2="104" stroke="#2d4a2d" strokeWidth="8" />
            <line x1="345" y1="144" x2="670" y2="144" stroke="#2d4a2d" strokeWidth="6" />
            <line x1="460" y1="64" x2="460" y2="184" stroke="#2d4a2d" strokeWidth="8" />
            <line x1="560" y1="64" x2="560" y2="184" stroke="#2d4a2d" strokeWidth="5" />
            <rect x="355" y="70" width="96" height="26" rx="3" fill="#243324" />
            <rect x="470" y="70" width="82" height="26" rx="3" fill="#243324" />
            <rect x="355" y="112" width="96" height="24" rx="3" fill="#243324" />
            <rect x="470" y="112" width="82" height="24" rx="3" fill="#243324" />
            <rect x="570" y="112" width="90" height="24" rx="3" fill="#243324" />
            <rect x="570" y="70" width="90" height="26" rx="3" fill="#243324" />
            <circle cx="462" cy="100" r="16" fill="#EA4335" fillOpacity="0.25" />
            <circle cx="462" cy="100" r="8" fill="#EA4335" />
            <text x="462" y="104" textAnchor="middle" fill="white" fontSize="9" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">S</text>
            <rect x="472" y="82" width="88" height="28" rx="6" fill="white" fillOpacity="0.92" />
            <text x="516" y="96" textAnchor="middle" fill="#1a1a1a" fontSize="8" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">Servitec Google</text>
            <text x="516" y="107" textAnchor="middle" fill="#34A853" fontSize="8" fontFamily="Plus Jakarta Sans,sans-serif">★ 4.9 · Abierto</text>

            <rect x="325" y="212" width="365" height="118" rx="12" fill="#111827" stroke="#FBBC05" strokeWidth="0.8" strokeOpacity="0.4" />
            <text x="345" y="234" fill="white" fontSize="11" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">Palabras clave posicionadas</text>

            {[
                { label: "marketing digital lima", pos: "#1", color: "#34A853", x: 345, y: 248 },
                { label: "google ads peru", pos: "#2", color: "#4285F4", x: 345, y: 272 },
                { label: "agencia seo lima", pos: "#1", color: "#34A853", x: 345, y: 296 },
                { label: "diseño web lima", pos: "#3", color: "#FBBC05", x: 530, y: 248 },
                { label: "meta ads peru", pos: "#2", color: "#4285F4", x: 530, y: 272 },
                { label: "facturación electrónica", pos: "#4", color: "#EA4335", x: 530, y: 296 },
            ].map(k => (
                <React.Fragment key={k.label}>
                    <rect x={k.x} y={k.y - 13} width={178} height={18} rx="6" fill={k.color} fillOpacity="0.08" />
                    <circle cx={k.x + 10} cy={k.y - 4} r="4" fill={k.color} />
                    <text x={k.x + 20} y={k.y} fill="#d1d5db" fontSize="8.5" fontFamily="Plus Jakarta Sans,sans-serif">{k.label}</text>
                    <text x={k.x + 168} y={k.y} textAnchor="end" fill={k.color} fontSize="8.5" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">{k.pos}</text>
                </React.Fragment>
            ))}

            <text x="345" y="320" fill="#6b7280" fontSize="8" fontFamily="Plus Jakarta Sans,sans-serif">↑ Orgánico · Sin pagar por clic</text>
        </svg>
    );
}

function IllusWeb() {
    return (
        <svg viewBox="0 0 720 340" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
            <defs>
                <linearGradient id="bg-web" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#0d1a2e" />
                    <stop offset="100%" stopColor="#0a0f1a" />
                </linearGradient>
            </defs>
            <rect width="720" height="340" fill="url(#bg-web)" rx="16" />

            <rect x="30" y="30" width="420" height="290" rx="14" fill="#111827" stroke="#4285F4" strokeWidth="0.8" strokeOpacity="0.5" />
            <rect x="30" y="30" width="420" height="40" rx="14" fill="#4285F4" fillOpacity="0.1" />
            <rect x="30" y="58" width="420" height="12" rx="0" fill="#4285F4" fillOpacity="0.1" />
            <circle cx="52" cy="50" r="6" fill="#EA4335" fillOpacity="0.8" />
            <circle cx="70" cy="50" r="6" fill="#FBBC05" fillOpacity="0.8" />
            <circle cx="88" cy="50" r="6" fill="#34A853" fillOpacity="0.8" />
            <rect x="106" y="41" width="280" height="18" rx="9" fill="#1f2937" />
            <circle cx="116" cy="50" r="3" fill="#34A853" />
            <text x="235" y="54" textAnchor="middle" fill="#6b7280" fontSize="9" fontFamily="Plus Jakarta Sans,sans-serif">servitec.com</text>

            <rect x="48" y="82" width="200" height="18" rx="5" fill="#4285F4" fillOpacity="0.6" />
            <rect x="48" y="106" width="160" height="10" rx="4" fill="white" fillOpacity="0.15" />
            <rect x="48" y="122" width="180" height="10" rx="4" fill="white" fillOpacity="0.1" />
            <rect x="48" y="138" width="150" height="10" rx="4" fill="white" fillOpacity="0.08" />

            <rect x="48" y="160" width="90" height="26" rx="13" fill="#4285F4" />
            <text x="93" y="177" textAnchor="middle" fill="white" fontSize="9" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">Cotizar ahora</text>
            <rect x="148" y="160" width="90" height="26" rx="13" fill="transparent" stroke="#4285F4" strokeWidth="1" />
            <text x="193" y="177" textAnchor="middle" fill="#60a5fa" fontSize="9" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">Ver servicios</text>

            <rect x="268" y="80" width="164" height="120" rx="8" fill="#1f2937" />
            <rect x="268" y="80" width="164" height="120" rx="8" fill="#4285F4" fillOpacity="0.05" />
            <circle cx="350" cy="130" r="34" fill="#4285F4" fillOpacity="0.12" />
            <circle cx="350" cy="130" r="22" fill="#4285F4" fillOpacity="0.12" />
            <text x="350" y="136" textAnchor="middle" fill="#60a5fa" fontSize="22" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="800">Sg</text>

            {[0,1,2].map(i => (
                <rect key={i} x={48 + i*126} y={222} width={116} height={70} rx="8" fill="#1f2937" stroke="#374151" strokeWidth="0.6" />
            ))}
            <rect x="54" y="230" width="40" height="8" rx="3" fill="#4285F4" fillOpacity="0.7" />
            <rect x="54" y="244" width="100" height="5" rx="2.5" fill="white" fillOpacity="0.1" />
            <rect x="54" y="254" width="80" height="5" rx="2.5" fill="white" fillOpacity="0.07" />
            <rect x="180" y="230" width="40" height="8" rx="3" fill="#34A853" fillOpacity="0.7" />
            <rect x="180" y="244" width="100" height="5" rx="2.5" fill="white" fillOpacity="0.1" />
            <rect x="306" y="230" width="40" height="8" rx="3" fill="#FBBC05" fillOpacity="0.7" />
            <rect x="306" y="244" width="100" height="5" rx="2.5" fill="white" fillOpacity="0.1" />

            <rect x="30" y="300" width="420" height="20" rx="0" fill="#1f2937" fillOpacity="0.5" />
            <rect x="30" y="308" width="420" height="12" rx="0" fill="#1f2937" fillOpacity="0.5" />

            <rect x="465" y="30" width="225" height="160" rx="12" fill="#111827" stroke="#34A853" strokeWidth="0.8" strokeOpacity="0.5" />
            <text x="485" y="56" fill="white" fontSize="10" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">Core Web Vitals</text>
            <circle cx="656" cy="50" r="8" fill="#34A853" fillOpacity="0.2" />
            <text x="656" y="54" textAnchor="middle" fill="#34A853" fontSize="9" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">✓</text>

            {[
                { label: "LCP", value: "1.2s", score: 96, color: "#34A853", y: 80 },
                { label: "FID", value: "12ms", score: 99, color: "#34A853", y: 110 },
                { label: "CLS", value: "0.03", score: 98, color: "#34A853", y: 140 },
            ].map(m => (
                <React.Fragment key={m.label}>
                    <text x="485" y={m.y} fill="#9ca3af" fontSize="9" fontFamily="Plus Jakarta Sans,sans-serif">{m.label}</text>
                    <text x="530" y={m.y} fill={m.color} fontSize="9" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">{m.value}</text>
                    <rect x="568" y={m.y - 10} width="100" height="10" rx="5" fill="#1f2937" />
                    <rect x="568" y={m.y - 10} width={m.score} height="10" rx="5" fill={m.color} fillOpacity="0.7" />
                    <text x="676" y={m.y} fill={m.color} fontSize="9" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">{m.score}</text>
                </React.Fragment>
            ))}

            <text x="485" y="168" fill="#4b5563" fontSize="8" fontFamily="Plus Jakarta Sans,sans-serif">Google PageSpeed Insights</text>

            <rect x="465" y="202" width="105" height="138" rx="14" fill="#111827" stroke="#4285F4" strokeWidth="0.8" strokeOpacity="0.5" />
            <rect x="465" y="202" width="105" height="28" rx="14" fill="#4285F4" fillOpacity="0.1" />
            <rect x="500" y="210" width="35" height="12" rx="6" fill="#1f2937" />
            <rect x="475" y="242" width="85" height="38" rx="6" fill="#1f2937" />
            <rect x="479" y="248" width="50" height="8" rx="3" fill="#4285F4" fillOpacity="0.6" />
            <rect x="479" y="262" width="70" height="5" rx="2.5" fill="white" fillOpacity="0.1" />
            <rect x="475" y="288" width="40" height="16" rx="8" fill="#4285F4" />
            <text x="495" y="300" textAnchor="middle" fill="white" fontSize="7" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">Ver más</text>
            <rect x="520" y="288" width="38" height="16" rx="8" fill="transparent" stroke="#4285F4" strokeWidth="0.8" />
            <rect x="475" y="312" width="85" height="20" rx="4" fill="#1f2937" />
            <rect x="479" y="317" width="50" height="4" rx="2" fill="white" fillOpacity="0.08" />
            <rect x="479" y="324" width="38" height="4" rx="2" fill="white" fillOpacity="0.05" />

            <rect x="580" y="202" width="110" height="138" rx="12" fill="#111827" stroke="#FBBC05" strokeWidth="0.8" strokeOpacity="0.4" />
            <text x="600" y="224" fill="white" fontSize="9" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">Integraciones</text>
            {[
                { label: "WhatsApp", color: "#25D366", y: 244 },
                { label: "Analytics", color: "#E8710A", y: 268 },
                { label: "CRM", color: "#4285F4", y: 292 },
                { label: "Formularios", color: "#34A853", y: 316 },
            ].map(it => (
                <React.Fragment key={it.label}>
                    <circle cx="598" cy={it.y - 4} r="5" fill={it.color} fillOpacity="0.8" />
                    <text x="610" y={it.y} fill="#d1d5db" fontSize="9" fontFamily="Plus Jakarta Sans,sans-serif">{it.label}</text>
                    <circle cx="678" cy={it.y - 4} r="4" fill={it.color} fillOpacity="0.3" />
                    <circle cx="678" cy={it.y - 4} r="2" fill={it.color} />
                </React.Fragment>
            ))}
        </svg>
    );
}

function IllusApps() {
    return (
        <svg viewBox="0 0 720 340" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
            <defs>
                <linearGradient id="bg-apps" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#1a0d2e" />
                    <stop offset="100%" stopColor="#0d1a2e" />
                </linearGradient>
            </defs>
            <rect width="720" height="340" fill="url(#bg-apps)" rx="16" />

            <rect x="30" y="20" width="150" height="300" rx="22" fill="#111827" stroke="#8b5cf6" strokeWidth="1" strokeOpacity="0.7" />
            <rect x="30" y="20" width="150" height="300" rx="22" fill="#8b5cf6" fillOpacity="0.04" />
            <rect x="75" y="28" width="60" height="12" rx="6" fill="#1f2937" />
            <rect x="40" y="52" width="130" height="252" rx="8" fill="#0f172a" />
            <rect x="40" y="52" width="130" height="36" rx="8" fill="#8b5cf6" fillOpacity="0.2" />
            <text x="68" y="72" fill="white" fontSize="10" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">Mi Negocio</text>
            <circle cx="156" cy="70" r="8" fill="#8b5cf6" fillOpacity="0.5" />
            <rect x="46" y="96" width="56" height="50" rx="8" fill="#1e1b4b" />
            <text x="74" y="118" textAnchor="middle" fill="#a78bfa" fontSize="16" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="800">24</text>
            <text x="74" y="130" textAnchor="middle" fill="#6b7280" fontSize="7" fontFamily="Plus Jakarta Sans,sans-serif">Pedidos</text>
            <rect x="108" y="96" width="56" height="50" rx="8" fill="#1e1b4b" />
            <text x="136" y="118" textAnchor="middle" fill="#34A853" fontSize="16" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="800">S/8k</text>
            <text x="136" y="130" textAnchor="middle" fill="#6b7280" fontSize="7" fontFamily="Plus Jakarta Sans,sans-serif">Ventas</text>
            {[0,1,2,3].map(i => (
                <React.Fragment key={i}>
                    <rect x="46" y={156 + i * 36} width="118" height="28" rx="6" fill="#1e1b4b" />
                    <circle cx="60" cy={170 + i * 36} r="7" fill="#8b5cf6" fillOpacity={0.6 - i * 0.1} />
                    <rect x="74" y={162 + i * 36} width="60" height="6" rx="3" fill="white" fillOpacity="0.15" />
                    <rect x="74" y={172 + i * 36} width="40" height="5" rx="2.5" fill="white" fillOpacity="0.08" />
                    <rect x="144" y={165 + i * 36} width="14" height="14" rx="4" fill="#34A853" fillOpacity={0.7 - i * 0.1} />
                </React.Fragment>
            ))}
            <rect x="40" y="288" width="130" height="16" rx="0" fill="#1e1b4b" />
            <rect x="40" y="296" width="130" height="8" rx="0" fill="#1e1b4b" />

            <rect x="200" y="20" width="310" height="300" rx="12" fill="#111827" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
            <text x="220" y="46" fill="white" fontSize="10" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">Arquitectura del MVP</text>

            {[
                { label: "App iOS/Android", x: 315, y: 86, color: "#8b5cf6" },
                { label: "API REST", x: 315, y: 162, color: "#4285F4" },
                { label: "Base de datos", x: 220, y: 238, color: "#34A853" },
                { label: "Analytics", x: 410, y: 238, color: "#FBBC05" },
            ].map(n => (
                <React.Fragment key={n.label}>
                    <rect x={n.x - 70} y={n.y - 20} width="140" height="38" rx="10" fill={n.color} fillOpacity="0.12" stroke={n.color} strokeWidth="0.8" strokeOpacity="0.5" />
                    <text x={n.x} y={n.y + 4} textAnchor="middle" fill={n.color} fontSize="9.5" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">{n.label}</text>
                </React.Fragment>
            ))}
            <line x1="315" y1="104" x2="315" y2="142" stroke="#4285F4" strokeWidth="1.5" strokeOpacity="0.5" />
            <polygon points="315,142 310,132 320,132" fill="#4285F4" fillOpacity="0.5" />
            <line x1="270" y1="178" x2="225" y2="218" stroke="#34A853" strokeWidth="1.5" strokeOpacity="0.5" />
            <polygon points="225,218 230,208 220,212" fill="#34A853" fillOpacity="0.5" />
            <line x1="360" y1="178" x2="405" y2="218" stroke="#FBBC05" strokeWidth="1.5" strokeOpacity="0.5" />
            <polygon points="405,218 400,208 410,212" fill="#FBBC05" fillOpacity="0.5" />

            <text x="220" y="286" fill="#6b7280" fontSize="8.5" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="600">Timeline</text>
            {[
                { label: "Diseño", w: 50, color: "#8b5cf6" },
                { label: "Dev", w: 80, color: "#4285F4" },
                { label: "QA", w: 40, color: "#FBBC05" },
                { label: "Deploy", w: 30, color: "#34A853" },
            ].reduce((acc, item, i) => {
                const x = i === 0 ? 220 : acc.x;
                return { nodes: [...acc.nodes, { ...item, x }], x: x + item.w + 4 };
            }, { nodes: [] as any[], x: 220 }).nodes.map((n: any) => (
                <React.Fragment key={n.label}>
                    <rect x={n.x} y={290} width={n.w} height={16} rx="4" fill={n.color} fillOpacity="0.7" />
                    <text x={n.x + n.w / 2} y={302} textAnchor="middle" fill="white" fontSize="7" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="600">{n.label}</text>
                </React.Fragment>
            ))}

            <rect x="525" y="20" width="170" height="145" rx="12" fill="#111827" stroke="#8b5cf6" strokeWidth="0.8" strokeOpacity="0.5" />
            <text x="545" y="46" fill="white" fontSize="10" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">Publicación</text>
            <rect x="539" y="58" width="66" height="80" rx="10" fill="#1f2937" stroke="#374151" strokeWidth="0.6" />
            <rect x="542" y="58" width="60" height="30" rx="10" fill="#0ea5e9" fillOpacity="0.3" />
            <text x="572" y="80" textAnchor="middle" fill="#38bdf8" fontSize="18" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">A</text>
            <text x="572" y="110" textAnchor="middle" fill="#9ca3af" fontSize="7.5" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="600">App Store</text>
            <rect x="572" y="122" width="28" height="10" rx="5" fill="#0ea5e9" />
            <text x="586" y="130" textAnchor="middle" fill="white" fontSize="6.5" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">Publicar</text>
            <rect x="615" y="58" width="66" height="80" rx="10" fill="#1f2937" stroke="#374151" strokeWidth="0.6" />
            <rect x="618" y="58" width="60" height="30" rx="10" fill="#34A853" fillOpacity="0.25" />
            <text x="648" y="80" textAnchor="middle" fill="#4ade80" fontSize="18" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">▶</text>
            <text x="648" y="110" textAnchor="middle" fill="#9ca3af" fontSize="7.5" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="600">Play Store</text>
            <rect x="634" y="122" width="28" height="10" rx="5" fill="#34A853" />
            <text x="648" y="130" textAnchor="middle" fill="white" fontSize="6.5" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">Publicar</text>
            <text x="610" y="152" textAnchor="middle" fill="#6b7280" fontSize="8" fontFamily="Plus Jakarta Sans,sans-serif">iOS + Android</text>

            <rect x="525" y="175" width="170" height="145" rx="12" fill="#111827" stroke="#34A853" strokeWidth="0.8" strokeOpacity="0.4" />
            <text x="545" y="198" fill="white" fontSize="10" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">Métricas en vivo</text>
            {[
                { label: "Usuarios activos", value: "1,284", color: "#8b5cf6", y: 220 },
                { label: "Sesiones/día", value: "3,420", color: "#4285F4", y: 244 },
                { label: "Retención 30d", value: "68%", color: "#34A853", y: 268 },
                { label: "Calificación", value: "4.8 ★", color: "#FBBC05", y: 292 },
            ].map(m => (
                <React.Fragment key={m.label}>
                    <text x="545" y={m.y} fill="#6b7280" fontSize="8.5" fontFamily="Plus Jakarta Sans,sans-serif">{m.label}</text>
                    <text x="685" y={m.y} textAnchor="end" fill={m.color} fontSize="9" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">{m.value}</text>
                    <line x1="545" y1={m.y + 4} x2="685" y2={m.y + 4} stroke={m.color} strokeWidth="0.4" strokeOpacity="0.2" />
                </React.Fragment>
            ))}
            <text x="545" y="308" fill="#4b5563" fontSize="7.5" fontFamily="Plus Jakarta Sans,sans-serif">Integrado con Firebase Analytics</text>
        </svg>
    );
}

function IllusInvoicing() {
    return (
        <svg viewBox="0 0 720 340" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
            <defs>
                <linearGradient id="bg-inv" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#0f1a14" />
                    <stop offset="100%" stopColor="#0a0d1a" />
                </linearGradient>
            </defs>
            <rect width="720" height="340" fill="url(#bg-inv)" rx="16" />

            <rect x="30" y="20" width="260" height="300" rx="12" fill="#111827" stroke="#34A853" strokeWidth="0.8" strokeOpacity="0.5" />
            <rect x="30" y="20" width="260" height="52" rx="12" fill="#34A853" fillOpacity="0.12" />
            <rect x="30" y="60" width="260" height="12" rx="0" fill="#34A853" fillOpacity="0.12" />
            <text x="50" y="42" fill="#4ade80" fontSize="9" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">FACTURA ELECTRÓNICA</text>
            <text x="50" y="56" fill="#6b7280" fontSize="8" fontFamily="Plus Jakarta Sans,sans-serif">F001 — 00004821</text>
            <rect x="234" y="34" width="44" height="16" rx="8" fill="#34A853" fillOpacity="0.7" />
            <text x="256" y="45" textAnchor="middle" fill="white" fontSize="7.5" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">VÁLIDA</text>
            <text x="50" y="86" fill="#9ca3af" fontSize="8" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="600">SUNAT ✓ Autorizada</text>
            <text x="256" y="86" textAnchor="end" fill="#4ade80" fontSize="8" fontFamily="Plus Jakarta Sans,sans-serif">CDR OK</text>

            <rect x="44" y="98" width="230" height="46" rx="6" fill="#1f2937" />
            <text x="54" y="114" fill="#9ca3af" fontSize="7.5" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="600">EMISOR</text>
            <text x="54" y="126" fill="white" fontSize="8.5" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="600">Servitec Google SAC</text>
            <text x="54" y="137" fill="#6b7280" fontSize="7.5" fontFamily="Plus Jakarta Sans,sans-serif">RUC: 20601234567</text>

            <rect x="44" y="152" width="230" height="46" rx="6" fill="#1f2937" />
            <text x="54" y="168" fill="#9ca3af" fontSize="7.5" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="600">RECEPTOR</text>
            <text x="54" y="180" fill="white" fontSize="8.5" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="600">Empresa Cliente ABC</text>
            <text x="54" y="191" fill="#6b7280" fontSize="7.5" fontFamily="Plus Jakarta Sans,sans-serif">RUC: 20712345678</text>

            <line x1="44" y1="208" x2="276" y2="208" stroke="#374151" strokeWidth="0.8" />
            <text x="50" y="222" fill="#9ca3af" fontSize="7.5" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="600">Descripción</text>
            <text x="242" y="222" textAnchor="end" fill="#9ca3af" fontSize="7.5" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="600">Total</text>
            <line x1="44" y1="228" x2="276" y2="228" stroke="#374151" strokeWidth="0.5" />
            {[
                { desc: "Campaña Google Ads — Oct", val: "S/ 1,200" },
                { desc: "SEO mensual", val: "S/ 800" },
                { desc: "Mantenimiento web", val: "S/ 400" },
            ].map((item, i) => (
                <React.Fragment key={item.desc}>
                    <text x="50" y={244 + i * 18} fill="#d1d5db" fontSize="8" fontFamily="Plus Jakarta Sans,sans-serif">{item.desc}</text>
                    <text x="270" y={244 + i * 18} textAnchor="end" fill="#4ade80" fontSize="8" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="600">{item.val}</text>
                </React.Fragment>
            ))}
            <line x1="44" y1="302" x2="276" y2="302" stroke="#374151" strokeWidth="0.8" />
            <text x="50" y="316" fill="white" fontSize="9" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">TOTAL (inc. IGV)</text>
            <text x="270" y="316" textAnchor="end" fill="#4ade80" fontSize="10" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="800">S/ 2,400</text>

            <rect x="306" y="20" width="389" height="300" rx="12" fill="#111827" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
            <text x="326" y="46" fill="white" fontSize="10" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">Flujo de emisión automática</text>

            {[
                { label: "Tu sistema / ERP", sub: "Genera la venta", color: "#4285F4", y: 90 },
                { label: "API Servitec", sub: "Valida y firma XML", color: "#8b5cf6", y: 168 },
                { label: "SUNAT", sub: "Autoriza el CDR", color: "#34A853", y: 246 },
            ].map((n, i) => (
                <React.Fragment key={n.label}>
                    {i > 0 && (
                        <>
                            <line x1="490" y1={n.y - 56} x2="490" y2={n.y - 20} stroke={n.color} strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="4 3" />
                            <polygon points={`490,${n.y-20} 485,${n.y-30} 495,${n.y-30}`} fill={n.color} fillOpacity="0.4" />
                        </>
                    )}
                    <rect x="396" y={n.y - 32} width="188" height="56" rx="12" fill={n.color} fillOpacity="0.1" stroke={n.color} strokeWidth="0.8" strokeOpacity="0.5" />
                    <text x="490" y={n.y - 8} textAnchor="middle" fill={n.color} fontSize="10" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">{n.label}</text>
                    <text x="490" y={n.y + 8} textAnchor="middle" fill="#9ca3af" fontSize="8.5" fontFamily="Plus Jakarta Sans,sans-serif">{n.sub}</text>
                </React.Fragment>
            ))}

            <path d="M584,246 Q640,246 640,168 Q640,90 584,90" fill="none" stroke="#34A853" strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="5 3" />
            <polygon points="584,90 594,85 594,95" fill="#34A853" fillOpacity="0.3" />
            <rect x="618" y="150" width="52" height="36" rx="6" fill="#1f2937" />
            <text x="644" y="167" textAnchor="middle" fill="#4ade80" fontSize="7.5" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">CDR</text>
            <text x="644" y="179" textAnchor="middle" fill="#4ade80" fontSize="7.5" fontFamily="Plus Jakarta Sans,sans-serif">OK ✓</text>

            <text x="326" y="284" fill="#6b7280" fontSize="8" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="600">Formatos soportados</text>
            {["Factura", "Boleta", "N. Crédito", "N. Débito"].map((f, i) => (
                <React.Fragment key={f}>
                    <rect x={326 + i * 86} y={292} width={78} height={20} rx="6" fill="#1f2937" stroke="#374151" strokeWidth="0.6" />
                    <text x={365 + i * 86} y={306} textAnchor="middle" fill="#d1d5db" fontSize="8" fontFamily="Plus Jakarta Sans,sans-serif">{f}</text>
                </React.Fragment>
            ))}
        </svg>
    );
}

function IllusAnalytics() {
    return (
        <svg viewBox="0 0 720 340" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
            <defs>
                <linearGradient id="bg-ana" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#0a0f1a" />
                    <stop offset="100%" stopColor="#0f1a14" />
                </linearGradient>
            </defs>
            <rect width="720" height="340" fill="url(#bg-ana)" rx="16" />

            <rect x="30" y="20" width="420" height="300" rx="14" fill="#111827" stroke="#E8710A" strokeWidth="0.8" strokeOpacity="0.5" />
            <rect x="30" y="20" width="420" height="42" rx="14" fill="#E8710A" fillOpacity="0.08" />
            <rect x="30" y="50" width="420" height="12" rx="0" fill="#E8710A" fillOpacity="0.08" />
            <text x="50" y="46" fill="white" fontSize="11" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">Dashboard Ejecutivo — Octubre 2024</text>
            <rect x="400" y="30" width="36" height="18" rx="9" fill="#34A853" fillOpacity="0.8" />
            <text x="418" y="43" textAnchor="middle" fill="white" fontSize="7.5" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">LIVE</text>

            {[
                { label: "Sesiones", value: "48,204", delta: "+22%", color: "#4285F4", x: 46 },
                { label: "Conversiones", value: "1,840", delta: "+38%", color: "#34A853", x: 152 },
                { label: "Ingresos", value: "S/84k", delta: "+31%", color: "#E8710A", x: 258 },
                { label: "ROAS", value: "4.8x", delta: "+12%", color: "#8b5cf6", x: 364 },
            ].map(k => (
                <React.Fragment key={k.label}>
                    <rect x={k.x} y={70} width={96} height={60} rx="10" fill="#1f2937" stroke={k.color} strokeWidth="0.6" strokeOpacity="0.4" />
                    <text x={k.x + 48} y={93} textAnchor="middle" fill="#9ca3af" fontSize="7.5" fontFamily="Plus Jakarta Sans,sans-serif">{k.label}</text>
                    <text x={k.x + 48} y={112} textAnchor="middle" fill={k.color} fontSize="14" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="800">{k.value}</text>
                    <rect x={k.x + 28} y={120} width={40} height={6} rx="3" fill={k.color} fillOpacity="0.25" />
                    <text x={k.x + 48} y={124} textAnchor="middle" fill={k.color} fontSize="6.5" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">{k.delta}</text>
                </React.Fragment>
            ))}

            <text x="46" y="152" fill="#9ca3af" fontSize="8.5" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="600">Embudo de conversión</text>
            {[
                { label: "Visitas", val: 48204, color: "#4285F4" },
                { label: "Prospectos", val: 8200, color: "#8b5cf6" },
                { label: "Leads", val: 2100, color: "#E8710A" },
                { label: "Clientes", val: 420, color: "#34A853" },
            ].map((f, i) => {
                const maxW = 340;
                const w = Math.round(maxW * (f.val / 48204));
                const x = 46 + (maxW - w) / 2;
                return (
                    <React.Fragment key={f.label}>
                        <rect x={x} y={162 + i * 32} width={w} height={22} rx="5" fill={f.color} fillOpacity="0.7" />
                        <text x={x + 8} y={177 + i * 32} fill="white" fontSize="8.5" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="600">{f.label}</text>
                        <text x={x + w - 8} y={177 + i * 32} textAnchor="end" fill="white" fontSize="8.5" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">{f.val.toLocaleString()}</text>
                    </React.Fragment>
                );
            })}

            <text x="46" y="296" fill="#9ca3af" fontSize="8.5" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="600">Tendencia 7 días</text>
            <polyline
                points="46,312 96,304 146,308 196,294 246,280 296,268 346,256 396,242 430,234"
                fill="none" stroke="#34A853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            />
            <polygon points="46,320 430,320 430,312 396,242 346,256 296,268 246,280 196,294 146,308 96,304 46,312"
                     fill="#34A853" fillOpacity="0.07" />

            <rect x="465" y="20" width="225" height="300" rx="12" fill="#111827" stroke="#8b5cf6" strokeWidth="0.8" strokeOpacity="0.5" />
            <text x="485" y="46" fill="white" fontSize="10" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">Automatizaciones</text>

            {[
                { trigger: "Nuevo lead", action: "WhatsApp inmediato", icon: "💬", color: "#25D366", y: 68 },
                { trigger: "Sin respuesta 24h", action: "Email de seguimiento", icon: "📧", color: "#4285F4", y: 138 },
                { trigger: "Cliente inactivo", action: "Oferta personalizada", icon: "🎯", color: "#E8710A", y: 208 },
                { trigger: "Venta cerrada", action: "CRM actualizado", icon: "✓", color: "#34A853", y: 278 },
            ].map(a => (
                <React.Fragment key={a.trigger}>
                    <rect x="481" y={a.y} width="190" height="56" rx="10" fill="#1f2937" stroke={a.color} strokeWidth="0.6" strokeOpacity="0.5" />
                    <rect x="481" y={a.y} width="190" height="26" rx="10" fill={a.color} fillOpacity="0.12" />
                    <rect x="481" y={a.y + 14} width="190" height="12" rx="0" fill={a.color} fillOpacity="0.12" />
                    <text x="494" y={a.y + 17} fill="#9ca3af" fontSize="7.5" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="600">TRIGGER</text>
                    <text x="663" y={a.y + 17} textAnchor="end" fill={a.color} fontSize="7.5" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">AUTO</text>
                    <text x="494" y={a.y + 32} fill="white" fontSize="8.5" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="600">{a.trigger}</text>
                    <text x="494" y={a.y + 47} fill={a.color} fontSize="8" fontFamily="Plus Jakarta Sans,sans-serif">→ {a.action}</text>
                    {a.y < 278 && (
                        <line x1="576" y1={a.y + 56} x2="576" y2={a.y + 68} stroke={a.color} strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3 2" />
                    )}
                </React.Fragment>
            ))}
        </svg>
    );
}

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
        IllusComponent: IllusAds,
        accentColor: "#EA4335",
        accentLight: "rgba(234,67,53,0.12)",
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
        IllusComponent: IllusSEO,
        accentColor: "#FBBC05",
        accentLight: "rgba(251,188,5,0.12)",
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
        IllusComponent: IllusWeb,
        accentColor: "#4285F4",
        accentLight: "rgba(66,133,244,0.12)",
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
        IllusComponent: IllusApps,
        accentColor: "#8b5cf6",
        accentLight: "rgba(139,92,246,0.12)",
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
        IllusComponent: IllusInvoicing,
        accentColor: "#34A853",
        accentLight: "rgba(52,168,83,0.12)",
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
        IllusComponent: IllusAnalytics,
        accentColor: "#E8710A",
        accentLight: "rgba(232,113,10,0.12)",
    },
];

export function ServicesShowcase() {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const active = SERVICES[activeIndex];

    const listId = "services-tablist";
    const panelId = `panel-${active.id}`;

    const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown") { e.preventDefault(); setActiveIndex((i) => (i + 1) % SERVICES.length); }
        if (e.key === "ArrowUp") { e.preventDefault(); setActiveIndex((i) => (i - 1 + SERVICES.length) % SERVICES.length); }
        if (e.key === "Home") { e.preventDefault(); setActiveIndex(0); }
        if (e.key === "End") { e.preventDefault(); setActiveIndex(SERVICES.length - 1); }
    };

    const { IllusComponent } = active;

    return (
        <section id="services" className="relative my-20 py-20">
            <ContentWidth>
                <div className="flex items-end justify-between gap-4">
                    <div>
                        <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
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
                                                    style={isActive ? { borderColor: s.accentColor + "40", background: s.accentLight } : {}}
                                                >
                                                    <Icon
                                                        className="h-5 w-5"
                                                        style={{ color: isActive ? s.accentColor : undefined }}
                                                    />
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
                                <div className="relative w-full aspect-[16/9] md:aspect-[2.2/1] overflow-hidden">
                                    <IllusComponent />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                                    <div
                                        className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full blur-3xl"
                                        style={{ background: active.accentColor + "20" }}
                                    />

                                    <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                                        <div className="max-w-xl">
                                            <h3 className="mt-2 text-white text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.0]">
                                                {active.title}
                                            </h3>
                                            <div className="mt-6 flex flex-col sm:flex-row gap-3">
                                                <Button
                                                    className="rounded-full bg-white text-foreground hover:bg-white/90"
                                                    asChild
                                                    size="lg"
                                                >
                                                    <Link href={active.ctaHref}>
                                                        Ver detalle <ArrowUpRight className="ml-2 h-4 w-4" />
                                                    </Link>
                                                </Button>
                                                <Button
                                                    variant="outline"
                                                    className="rounded-full border-white/35 hover:text-white hover:bg-white/10"
                                                    asChild
                                                    size="lg"
                                                >
                                                    <Link href="https://api.whatsapp.com/send?phone=51941801827" target="_blank">
                                                        Solicitar cotización
                                                    </Link>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="absolute left-5 top-5 h-3 w-3 rounded-full bg-white/80" />
                                </div>
                            </div>

                            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
                                {active.bullets.map((b) => (
                                    <div key={b} className="rounded-2xl border border-border/70 bg-background/60 p-4">
                                        <div className="flex items-start gap-2">
                                            <span className="mt-0.5" style={{ color: active.accentColor }}>
                                                <Check className="h-4 w-4" />
                                            </span>
                                            <p className="text-sm text-muted-foreground">{b}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                                <span className="h-2 w-2 rounded-full" style={{ background: active.accentColor }} />
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

function KpiCard({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) {
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