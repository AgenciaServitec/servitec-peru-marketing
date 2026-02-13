"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ContentWidth } from "@/components/ContentWidth";
import { Menu, Phone, ArrowRight } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const NAV = [
  // { label: "Portafolio", href: "/portfolio" },
  // { label: "Precios", href: "/prices" },
  { label: "Contacto", href: "/contact" },
];

const SERVICES_MENU = [
  {
    title: "Google Ads + Meta Ads",
    href: "/services/ads",
    description: "Campañas de performance para leads y ventas.",
  },
  {
    title: "SEO + SEO Local",
    href: "/services/seo",
    description: "Posicionamiento orgánico y Google Maps.",
  },
  {
    title: "Desarrollo Web",
    href: "/services/web",
    description: "Webs rápidas enfocadas en conversión.",
  },
  {
    title: "Desarrollo de Apps",
    href: "/services/apps",
    description: "Apps móviles para procesos y crecimiento.",
  },
  {
    title: "Facturación Electrónica",
    href: "/services/facturation",
    description: "Implementación e integración con sistemas.",
  },
  {
    title: "Analítica + Automatización",
    href: "/services/analytics",
    description: "Tracking, dashboards y automatizaciones.",
  },
];

export function HeaderLayout() {
  const pathname = usePathname();

  const isActive = (href: string) =>
      href === "/" ? pathname === "/" : pathname?.startsWith(href);

  const servicesActive =
      pathname === "/services" || pathname?.startsWith("/services/");

  return (
      <header className="sticky top-0 z-50 w-full">
        <div className="border-b border-border/60 bg-background/70 backdrop-blur-xl">
          <ContentWidth>
            <div className="h-16 flex items-center justify-between gap-3">
              <Link href="/" className="flex items-center gap-2 z-50">
                <img
                    className="h-8 w-auto md:h-9"
                    src="/logo-servitec-marketing.png"
                    alt="Servitec Google"
                />
              </Link>

              <div className="hidden md:flex items-center gap-1">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger
                          className={cn(
                              "h-auto px-3 py-2 rounded-full bg-transparent",
                              "text-sm font-normal",
                              "text-muted-foreground hover:text-foreground",
                              "hover:bg-muted/40",
                              servicesActive && "text-foreground"
                          )}
                      >
                        Servicios
                        {servicesActive && (
                            <span className="absolute left-1/2 -bottom-1 h-[2px] w-6 -translate-x-1/2 rounded-full bg-primary" />
                        )}
                      </NavigationMenuTrigger>

                      <NavigationMenuContent>
                        <div className="w-[420px] lg:w-[560px] p-3">
                          <div className="px-2 pt-2 pb-3">
                            <p className="text-sm font-semibold">Lista de servicios</p>
                            <p className="text-sm text-muted-foreground">
                              Elija un servicio
                            </p>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {SERVICES_MENU.map((item) => (
                                <ListItem
                                    key={item.href}
                                    href={item.href}
                                    title={item.title}
                                    description={item.description}
                                    active={isActive(item.href)}
                                />
                            ))}
                          </div>

                          <div className="mt-3 px-2">
                            <Button
                                variant="outline"
                                className="w-full rounded-full border-primary/30 hover:border-primary"
                                asChild
                            >
                              <Link href="/services">Ver todos los servicios</Link>
                            </Button>
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>

                {NAV.map((item) => (
                    <NavLink
                        key={item.href}
                        href={item.href}
                        active={isActive(item.href)}
                    >
                      {item.label}
                    </NavLink>
                ))}
              </div>

              <div className="hidden md:flex items-center gap-2">
                <Button
                    variant="outline"
                    className={cn(
                        "rounded-full",
                        "border-border/70 bg-background/60 hover:bg-muted/50"
                    )}
                    asChild
                >
                  <Link
                      href="https://api.whatsapp.com/send?phone=51941801827"
                      target="_blank"
                  >
                    Agendar llamada
                  </Link>
                </Button>

                <Button
                    className="rounded-full bg-primary text-primary-foreground hover:opacity-95"
                    asChild
                >
                  <Link
                      href="https://api.whatsapp.com/send?phone=51941801827"
                      target="_blank"
                  >
                    Cotizar
                  </Link>
                </Button>
              </div>

              {/* MOBILE NAV TOGGLE */}
              <div className="md:hidden">
                <MobileNav pathname={pathname} />
              </div>
            </div>
          </ContentWidth>

          <div className="h-[1px] w-full bg-gradient-to-r from-primary/60 via-secondary/60 to-accent/60 opacity-70" />
        </div>
      </header>
  );
}

function NavLink({
                   href,
                   active,
                   children,
                 }: {
  href: string;
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
      <Link
          href={href}
          className={cn(
              "relative px-3 py-2 text-sm rounded-full transition",
              "text-muted-foreground hover:text-foreground",
              "hover:bg-muted/40",
              active && "text-foreground"
          )}
      >
        {children}
        {active && (
            <span className="absolute left-1/2 -bottom-1 h-[2px] w-6 -translate-x-1/2 rounded-full bg-primary" />
        )}
      </Link>
  );
}

function ListItem({
                    href,
                    title,
                    description,
                    active,
                  }: {
  href: string;
  title: string;
  description: string;
  active?: boolean;
}) {
  return (
      <NavigationMenuLink asChild>
        <Link
            href={href}
            className={cn(
                "block rounded-2xl p-3 border transition",
                "border-transparent hover:border-border/70 hover:bg-muted/40",
                active && "border-border/70 bg-muted/40"
            )}
        >
          <div className="flex items-center justify-between gap-3">
            <p className={cn("font-semibold", active ? "text-primary" : "text-foreground")}>
              {title}
            </p>
          </div>
          <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
            {description}
          </p>
        </Link>
      </NavigationMenuLink>
  );
}

function MobileNav({ pathname }: { pathname: string }) {
  const [open, setOpen] = React.useState(false);
  const closeSheet = () => setOpen(false);

  return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Abrir menú</span>
          </Button>
        </SheetTrigger>

        <SheetContent side="right" className="w-[300px] sm:w-[350px] pr-0">
          <SheetHeader className="px-6 text-left">
            <SheetTitle asChild>
              <Link href="/" onClick={closeSheet} className="inline-block">
                <img
                    className="h-8 w-auto"
                    src="/logo-servitec-marketing.png"
                    alt="Servitec"
                />
              </Link>
            </SheetTitle>
          </SheetHeader>

          <div className="h-full overflow-y-auto px-6 pb-20 pt-8">
            <div className="flex flex-col gap-6">

              <div className="flex flex-col gap-4">
                <Link
                    href="/"
                    onClick={closeSheet}
                    className={cn(
                        "text-lg font-medium transition-colors hover:text-primary",
                        pathname === "/" ? "text-primary font-semibold" : "text-foreground"
                    )}
                >
                  Inicio
                </Link>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="services" className="border-none">
                    <AccordionTrigger className="py-0 text-lg font-medium hover:text-primary hover:no-underline data-[state=open]:text-primary">
                      Servicios
                    </AccordionTrigger>
                    <AccordionContent className="pb-0 pt-4">
                      <div className="flex flex-col gap-3 pl-4 border-l border-border/50">
                        {SERVICES_MENU.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={closeSheet}
                                className={cn(
                                    "text-sm transition-colors hover:text-primary py-1",
                                    pathname.startsWith(item.href) ? "text-primary font-medium" : "text-muted-foreground"
                                )}
                            >
                              {item.title}
                            </Link>
                        ))}
                        <Link
                            href="/services"
                            onClick={closeSheet}
                            className="text-sm font-semibold text-primary mt-2 flex items-center gap-1"
                        >
                          {"Ver Todo"}<ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {NAV.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeSheet}
                        className={cn(
                            "text-lg font-medium transition-colors hover:text-primary",
                            pathname.startsWith(item.href) ? "text-primary font-semibold" : "text-foreground"
                        )}
                    >
                      {item.label}
                    </Link>
                ))}
              </div>

              <div className="h-px w-full bg-border/60" />

              <div className="flex flex-col gap-3">
                <Button
                    className="w-full rounded-full bg-primary text-primary-foreground h-12 text-base shadow-lg shadow-primary/20"
                    asChild
                >
                  <Link
                      href="https://api.whatsapp.com/send?phone=51941801827"
                      target="_blank"
                  >
                    Solicitar cotización
                  </Link>
                </Button>

                <Button
                    variant="outline"
                    className="w-full rounded-full h-12 text-base border-primary/20 hover:bg-primary/5"
                    asChild
                >
                  <Link
                      href="https://api.whatsapp.com/send?phone=51941801827"
                      target="_blank"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Agendar llamada
                  </Link>
                </Button>
              </div>

              <div className="mt-auto pt-6 text-xs text-muted-foreground">
                <p>© {new Date().getFullYear()} Servitec.</p>
                <p>Todos los derechos reservados.</p>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
  );
}