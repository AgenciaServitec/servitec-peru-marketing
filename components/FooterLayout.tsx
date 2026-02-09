import Link from "next/link";
import {Button} from "@/components/ui/button";
import {ContentWidth} from "@/components/ContentWidth";
import * as React from "react";

const FOOTER_LINKS = {
  Servicios: [
    { label: "SEO & Ads", href: "/services/seo-ads" },
    { label: "Web & Landing Pages", href: "/services/web" },
    { label: "E-commerce", href: "/services/ecommerce" },
    { label: "Branding", href: "/services/branding" },
  ],
  Empresa: [
    { label: "Nosotros", href: "/about" },
    { label: "Portafolio", href: "/portfolio" },
    { label: "Precios", href: "/prices" },
    { label: "Contacto", href: "/contact" },
  ],
  Recursos: [
    { label: "Blog", href: "/blog" },
    { label: "Preguntas frecuentes", href: "/faq" },
    { label: "Políticas", href: "/policies" },
  ],
};

export function FooterLayout() {
  const year = new Date().getFullYear();

  return (
      <footer className="border-t border-border/60 bg-background pt-10">
        <ContentWidth>
          <div className="rounded-3xl border border-border/60 bg-card/50 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5 overflow-hidden relative">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/15 blur-2xl" />
            <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-secondary/15 blur-2xl" />

            <div className="max-w-xl">
              <p className="text-sm text-muted-foreground">Listo para crecer</p>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                Lanza tu próxima campaña o web con un equipo serio.
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Estrategia + ejecución: anuncios, SEO, webs rápidas y medición clara.
              </p>
            </div>

            <div className="flex gap-2">
              <Button
                  variant="outline"
                  className="rounded-full border-primary/30 hover:border-primary"
                  asChild
                  size="lg"
              >
                <Link href="/portfolio">Ver trabajos</Link>
              </Button>
              <Button className="rounded-full bg-primary text-primary-foreground hover:opacity-95" asChild size="lg">
                <Link href="/cotizar">Solicitar cotización</Link>
              </Button>
            </div>
          </div>

        <div className="py-10">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2">
                <Link href="/" className="flex items-center gap-2">
                  <img
                      className="h-8 w-auto md:h-9"
                      src="/logo-servitec-marketing.png"
                      alt="Servitec Google"
                  />
                </Link>
              </div>

              <p className="mt-4 text-sm text-muted-foreground max-w-md">
                Enfocados en resultados: presencia digital, performance, automatización y
                experiencias web modernas.
              </p>

              <div className="mt-4 flex items-center gap-3 text-sm">
              <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-3 py-1">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Lima, Perú
              </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-3 py-1">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Atención Lun–Vie
              </span>
              </div>
            </div>

            {Object.entries(FOOTER_LINKS).map(([title, links]) => (
                <div key={title}>
                  <p className="font-semibold">{title}</p>
                  <ul className="mt-3 space-y-2">
                    {links.map((l) => (
                        <li key={l.href}>
                          <Link
                              href={l.href}
                              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {l.label}
                          </Link>
                        </li>
                    ))}
                  </ul>
                </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-border/60 pt-6">
            <p className="text-xs text-muted-foreground">
              © {year} Servitec. Todos los derechos reservados.
            </p>

            <div className="flex flex-wrap gap-3 text-xs">
              <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                Términos
              </Link>
              <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                Privacidad
              </Link>
              <Link href="/cookies" className="text-muted-foreground hover:text-foreground">
                Cookies
              </Link>
            </div>
          </div>
        </div>
        </ContentWidth>
      </footer>
  );
}
