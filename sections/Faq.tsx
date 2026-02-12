import {ContentWidth} from "@/components/ContentWidth";

export function Faq() {
    const faqs = [
        {
            q: "¿En cuánto tiempo se ven resultados?",
            a: "Depende del canal. En Ads puedes ver señales en días; en SEO normalmente toma semanas. Siempre arrancamos midiendo conversiones primero.",
        },
        {
            q: "¿Necesito tener web para hacer campañas?",
            a: "No necesariamente, pero ayuda mucho. Podemos empezar con una landing rápida enfocada en conversión para que Ads sea más rentable.",
        },
        {
            q: "¿Qué necesito entregarte para empezar?",
            a: "Accesos (si existen), info del negocio, servicios/productos, zonas de atención y objetivo. Si no tienes nada, igual podemos guiarte.",
        },
        {
            q: "¿Cómo reportan avances?",
            a: "Con un resumen simple: qué se hizo, qué cambió en métricas y cuál es el siguiente paso. Transparente y entendible.",
        },
    ] as const;

    return (
        <section className="relative my-20">
            <ContentWidth>
                <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
                    Preguntas frecuentes
                </h2>
                <p className="mt-3 max-w-2xl text-muted-foreground">
                    Resolvemos lo típico antes de que nos escribas.
                </p>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {faqs.map((f) => (
                        <div key={f.q} className="rounded-3xl border border-border/70 bg-card/50 backdrop-blur p-6">
                            <p className="font-semibold">{f.q}</p>
                            <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
                        </div>
                    ))}
                </div>
            </ContentWidth>
        </section>
    );
}
