"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {ContentWidth} from "@/components/ContentWidth";

const NAV = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Portafolio", href: "/portafolio" },
  { label: "Precios", href: "/precios" },
  { label: "Contacto", href: "/contacto" },
];

export function HeaderLayout() {
  const pathname = usePathname();

  return (
      <header className="sticky top-0 z-50 w-full">
        <div className="border-b border-border/60 bg-background/70 backdrop-blur-xl">
          <ContentWidth>
            <div className="container-custom h-16 flex items-center justify-between gap-3">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2">
                <img
                    className="h-8 w-auto md:h-9"
                    src="/logo-servitec-marketing.png"
                    alt="Servitec Google"
                />
              </Link>

              {/* Nav (desktop) */}
              <nav className="hidden md:flex items-center gap-1">
                {NAV.map((item) => {
                  const active =
                      item.href === "/"
                          ? pathname === "/"
                          : pathname?.startsWith(item.href);

                  return (
                      <Link
                          key={item.href}
                          href={item.href}
                          className={cn(
                              "relative px-3 py-2 text-sm rounded-full transition",
                              "text-muted-foreground hover:text-foreground",
                              // Hover sutil (sin fondo pesado)
                              "hover:bg-muted/40",
                              active && "text-foreground"
                          )}
                      >
                        {item.label}

                        {/* Indicador activo sutil */}
                        {active && (
                            <span className="absolute left-1/2 -bottom-1 h-[2px] w-6 -translate-x-1/2 rounded-full bg-primary" />
                        )}
                      </Link>
                  );
                })}
              </nav>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <Button
                    variant="outline"
                    className={cn(
                        "hidden sm:inline-flex rounded-full",
                        "border-border/70 bg-background/60 hover:bg-muted/50"
                    )}
                    asChild
                >
                  <Link href="/contacto">Agendar llamada</Link>
                </Button>

                <Button
                    className="rounded-full bg-primary text-primary-foreground hover:opacity-95"
                    asChild
                >
                  <Link href="/cotizar">Solicitar cotización</Link>
                </Button>
              </div>
            </div>
          </ContentWidth>

          {/* Línea de marca (más sutil) */}
          <div className="h-[1px] w-full bg-gradient-to-r from-primary/60 via-secondary/60 to-accent/60 opacity-70" />
        </div>
      </header>
  );
}
