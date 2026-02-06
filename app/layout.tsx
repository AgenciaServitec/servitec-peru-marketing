import "./globals.css";
import {HeaderLayout} from "@/components/HeaderLayout";
import {FooterLayout} from "@/components/FooterLayout";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es">
        <body className="min-h-screen">
        <div className="global-background" />
        <div className="relative">
            <HeaderLayout />
            <main>{children}</main>
            <FooterLayout />
        </div>
        </body>
        </html>
    );
}
