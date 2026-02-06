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
      <header>
        <div className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/70 backdrop-blur-xl">
          <ContentWidth>
            <div className="container-custom h-16 flex items-center justify-between gap-3">
              <Link href="/" className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-secondary shadow-primary"/>
                <div className="leading-tight">
                  <p className="text-sm font-semibold tracking-tight font-roboto">Servitec</p>
                  <p className="text-xs text-muted-foreground -mt-0.5">
                    Marketing & Desarrollo
                  </p>
                </div>
              </Link>

              <nav
                  className="hidden md:flex items-center gap-1 rounded-full border border-border/70 bg-card/60 px-2 py-1">
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
                              "px-3 py-2 text-sm rounded-full transition-colors",
                              "hover:bg-muted/70 hover:text-foreground",
                              active
                                  ? "bg-muted text-foreground"
                                  : "text-muted-foreground",
                          )}
                      >
                        {item.label}
                      </Link>
                  );
                })}
              </nav>

              <div className="flex items-center gap-2">
                <Button
                    variant="outline"
                    className="hidden sm:inline-flex rounded-full border-primary/30 hover:border-primary"
                    asChild
                >
                  <Link href="/contacto">Agendar llamada</Link>
                </Button>

                <Button className="rounded-full bg-primary text-primary-foreground hover:opacity-95" asChild>
                  <Link href="/cotizar">Solicitar cotización</Link>
                </Button>
              </div>
            </div>

          </ContentWidth>
            <div className="h-[2px] w-full bg-gradient-to-r from-primary/60 via-secondary/60 to-accent/60"/>
        </div>
      </header>
  );
}
