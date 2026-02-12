import {ContentWidth} from "@/components/ContentWidth";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {ArrowUpRight} from "lucide-react";

export function FinalCTA() {
    return (
        <section className="relative my-20">
            <ContentWidth>
                <div
                    className={cn(
                        "rounded-3xl border border-border/70 backdrop-blur overflow-hidden",
                        "bg-primary/7"
                    )}
                >
                    <div className="p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <div className="max-w-2xl">
                            <p className="text-sm font-semibold text-muted-foreground">¿Listo para empezar?</p>
                            <p className="mt-2 text-2xl md:text-3xl font-extrabold tracking-tight leading-tight">
                                Te armamos un plan claro para tu objetivo (sin vueltas).
                            </p>
                            <p className="mt-3 text-sm md:text-base text-muted-foreground">
                                Cuéntanos tu caso y te respondemos con alcance, tiempos y propuesta.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <Button className="rounded-full bg-primary text-primary-foreground hover:opacity-95" asChild size="lg">
                                <Link href="/quote">
                                    Solicitar cotización <ArrowUpRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>

                            <Button
                                variant="outline"
                                className="rounded-full border-primary/30 hover:border-primary"
                                asChild
                                size="lg"
                            >
                                <Link href="/contact">
                                    Agendar llamada <ArrowUpRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
}
