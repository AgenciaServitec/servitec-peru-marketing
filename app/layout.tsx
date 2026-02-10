import "./globals.css";
import {HeaderLayout} from "@/components/HeaderLayout";
import {FooterLayout} from "@/components/FooterLayout";
import {Metadata} from "next";
import {CustomCursor} from "@/components/CustomCursor";
import {AmbientMotion} from "@/components/AmbientMotion";

export const metadata: Metadata = {
    title: "Servitec Publicidad Digital",
    description: "Markting y Desarrollo Web",
    icons: {
        icon: "/logo-servitec-marketing.png",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es">
        <body className="min-h-screen">
        <div className="relative overflow-x-hidden">
            {/*<AmbientMotion />*/}
            <CustomCursor />
            <HeaderLayout />
            <main className="page-content">{children}</main>
            <FooterLayout />
        </div>
        </body>
        </html>
    );
}
