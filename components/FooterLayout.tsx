import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ContentWidth } from "@/components/ContentWidth";
import * as React from "react";

const FOOTER_LINKS = {
  Servicios: [
    { label: "Google Ads + Meta Ads", href: "/services/ads" },
    { label: "SEO + SEO Local", href: "/services/seo" },
    { label: "Desarrollo Web", href: "/services/web" },
    { label: "Desarrollo de Apps", href: "/services/apps" },
    { label: "Facturación Electrónica", href: "/services/facturation" },
    { label: "Analítica + Automatización", href: "/services/analytics" }
  ],
  Empresa: [
    { label: "Inicio", href: "/#" },
    { label: "Contacto", href: "/contact" },
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

            <div className="max-w-xl relative z-10">
              <p className="text-sm text-muted-foreground font-medium">Listo para crecer</p>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                Lanza tu próxima campaña o web con un equipo serio.
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Estrategia + ejecución: anuncios, SEO, webs rápidas y medición clara.
              </p>
            </div>

            <div className="flex gap-2 relative z-10">
              <Button className="rounded-full bg-primary text-primary-foreground hover:opacity-95 shadow-lg shadow-primary/20" asChild size="lg">
                <Link href="https://api.whatsapp.com/send?phone=51941801827" target="_blank">
                  Solicitar cotización
                </Link>
              </Button>
            </div>
          </div>

          <div className="py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-10">
              <div className="md:col-span-2 lg:col-span-3">
                <Link href="/" className="inline-block">
                  <img
                      className="h-8 w-auto md:h-9"
                      src="/logo-servitec-marketing.png"
                      alt="Servitec Google"
                  />
                </Link>

                <div className="mt-4 space-y-2">
                  <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
                    Enfocados en resultados: presencia digital, performance, automatización y
                    experiencias web modernas.
                  </p>
                  <p className="text-xs font-mono text-muted-foreground/80">
                    RUC: 20545355621
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
                <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-3 py-1">
                  <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                  Lima, Perú
                </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-3 py-1">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Atención Lun–Vie
                </span>
                </div>
              </div>
              {Object.entries(FOOTER_LINKS).map(([title, links]) => (
                  <div key={title} className="flex flex-col">
                    <p className="font-semibold text-foreground">{title}</p>
                    <ul className="mt-4 space-y-3">
                      {links.map((l) => (
                          <li key={l.href}>
                            <Link
                                href={l.href}
                                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                              {l.label}
                            </Link>
                          </li>
                      ))}
                    </ul>
                  </div>
              ))}
            </div>
            <div className="mt-12 text-center justify-between gap-4 border-t border-border/60 pt-8">
              <p className="text-xs text-muted-foreground">
                © {year} Servitec. Todos los derechos reservados.
              </p>

              {/*<div className="flex flex-wrap gap-6 text-xs font-medium">*/}
              {/*  <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">*/}
              {/*    Términos*/}
              {/*  </Link>*/}
              {/*  <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">*/}
              {/*    Privacidad*/}
              {/*  </Link>*/}
              {/*  <Link href="/cookies" className="text-muted-foreground hover:text-foreground transition-colors">*/}
              {/*    Cookies*/}
              {/*  </Link>*/}
              {/*</div>*/}
            </div>
          </div>
        </ContentWidth>
      </footer>
  );
}