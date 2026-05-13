import "./globals.css";
import {HeaderLayout} from "@/components/HeaderLayout";
import {FooterLayout} from "@/components/FooterLayout";
import {Metadata} from "next";
import {CustomCursor} from "@/components/CustomCursor";
import Script from "next/script";

export const metadata: Metadata = {
    metadataBase: new URL("https://servitec.site"),
    title: {
        default: "Servitec | Publicidad Digital & Desarrollo Web",
        template: "%s | Servitec",
    },
    description: "Especialistas en Marketing Digital, Desarrollo Web y soluciones tecnológicas avanzadas para empresas en crecimiento.",
    keywords: ["Marketing Digital", "Desarrollo Web", "SaaS", "Publicidad Digital", "Software Lima"],
    authors: [{ name: "Servitec Perú Group" }],

    icons: {
        icon: "/favicon.png",
        shortcut: "/favicon.png",
        apple: "/favicon.png",
    },

    openGraph: {
        type: "website",
        locale: "es_PE",
        url: "https://servitec.site",
        title: "Servitec | Publicidad Digital & Desarrollo Web",
        description: "Transformamos tu presencia digital con tecnología de vanguardia y estrategias de marketing efectivas.",
        siteName: "Servitec Publicidad Digital",
        images: [
            {
                url: "/og-default.png",
                width: 1200,
                height: 630,
                alt: "Servitec Publicidad Digital",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Servitec | Publicidad Digital",
        description: "Marketing y Desarrollo Web de alto impacto.",
        images: ["/og-default.png"],
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es" className="scroll-smooth">
        <head>
            <Script
                id="gtm-script"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','GTM-M6GH3T2F');
                        `,
                }}
            />
        </head>
        <body className="min-h-screen antialiased">
        <noscript>
            <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-M6GH3T2F"
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
            />
        </noscript>

        <div className="relative flex min-h-screen flex-col overflow-x-hidden">
            <CustomCursor />
            <HeaderLayout />

            <main className="page-content grow outline-none">
                {children}
            </main>

            <FooterLayout />
        </div>
        </body>
        </html>
    );
}