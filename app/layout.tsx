import "./globals.css";
import {HeaderLayout} from "@/components/HeaderLayout";
import {FooterLayout} from "@/components/FooterLayout";
import {Metadata} from "next";

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
        <div className="" />
        <div className="relative overflow-x-hidden">
            <HeaderLayout />
            <main>{children}</main>
            <FooterLayout />
        </div>
        </body>
        </html>
    );
}
