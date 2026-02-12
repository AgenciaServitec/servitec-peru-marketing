import {ContentWidth} from "@/components/ContentWidth";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {ArrowUpRight, CheckCircle2} from "lucide-react";

export function Deliverables() {
    const blocks = [
        {
            title: "Google Ads + Meta Ads",
            items: [
                "Estructura de campañas + objetivos",
                "Creatividades y copies (base)",
                "Conversion tracking (GA4 + eventos)",
                "Optimización semanal (CPL/ROAS)",
            ],
        },
        {
            title: "SEO + SEO Local",
            items: [
                "Auditoría técnica (on-page)",
                "Google Business Profile (Maps)",
                "Plan de keywords por intención",
                "Contenido base + seguimiento",
            ],
        },
        {
            title: "Desarrollo Web",
            items: [
                "Landing o sitio (Next.js) enfocado en conversión",
                "Performance (Core Web Vitals)",
                "Formularios + WhatsApp + tracking",
                "Deploy + checklist QA",
            ],
        },
    ] as const;

    return (
        <section className="relative my-20">
            <ContentWidth>
                <div className="flex items-end justify-between gap-4">
                    <div>
                        <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
                            Qué incluye cada servicio
                        </h2>
                        <p className="mt-3 max-w-2xl text-muted-foreground">
                            Entregables claros para que sepas exactamente qué estás pagando.
                        </p>
                    </div>

                    <Button
                        variant="outline"
                        className="hidden md:inline-flex rounded-full border-primary/30 hover:border-primary"
                        asChild
                    >
                        <Link href="/quote">Cotizar ahora</Link>
                    </Button>
                </div>

                <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {blocks.map((b) => (
                        <div key={b.title} className="rounded-3xl border border-border/70 bg-card/50 backdrop-blur p-6 card-hover">
                            <p className="text-lg font-semibold">{b.title}</p>

                            <div className="mt-4 space-y-2">
                                {b.items.map((x) => (
                                    <div key={x} className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-accent mt-0.5" />
                                        <p className="text-sm text-muted-foreground">{x}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6">
                                <Button variant="link" className="px-0 text-primary" asChild>
                                    <Link href="/quote">
                                        Pedir propuesta <ArrowUpRight className="ml-1 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-6 md:hidden">
                    <Button
                        variant="outline"
                        className="w-full rounded-full border-primary/30 hover:border-primary"
                        asChild
                    >
                        <Link href="/quote">Cotizar ahora</Link>
                    </Button>
                </div>
            </ContentWidth>
        </section>
    );
}
