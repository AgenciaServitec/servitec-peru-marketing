"use client";

import * as React from "react";
import Link from "next/link";
import {ContentWidth} from "@/components/ContentWidth";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {ArrowUpRight, Building2, CheckCircle2, Link2, Mail, Phone, Target, Timer,} from "lucide-react";

type Goal = "Leads" | "Ventas" | "Posicionamiento" | "Web/Sistema" | "Otro";
type Service =
    | "Google Ads + Meta Ads"
    | "SEO + SEO Local"
    | "Desarrollo Web"
    | "Desarrollo de Apps"
    | "Analítica + Automatización"
    | "Facturación Electrónica"
    | "Mix (varios)";
type Timeline = "Esta semana" | "Este mes" | "1–3 meses" | "Flexible";
type Budget =
    | "S/ 500 – 1,500"
    | "S/ 1,500 – 3,000"
    | "S/ 3,000 – 6,000"
    | "S/ 6,000+"
    | "Aún no definido";
type ContactPref = "WhatsApp" | "Email" | "Llamada";

type QuoteForm = {
    fullName: string;
    company: string;
    email: string;
    phone: string;

    goal: Goal;
    service: Service;
    timeline: Timeline;
    budget: Budget;

    website: string;
    socials: string;
    competitors: string;

    details: string;
    preference: ContactPref;

    hasWebsite: "Sí" | "No" | "En construcción";
    location: string;
};

const GOALS: Goal[] = ["Leads", "Ventas", "Posicionamiento", "Web/Sistema", "Otro"];
const SERVICES: Service[] = [
    "Google Ads + Meta Ads",
    "SEO + SEO Local",
    "Desarrollo Web",
    "Desarrollo de Apps",
    "Analítica + Automatización",
    "Facturación Electrónica",
    "Mix (varios)",
];
const TIMELINES: Timeline[] = ["Esta semana", "Este mes", "1–3 meses", "Flexible"];
const BUDGETS: Budget[] = [
    "S/ 500 – 1,500",
    "S/ 1,500 – 3,000",
    "S/ 3,000 – 6,000",
    "S/ 6,000+",
    "Aún no definido",
];
const PREFS: ContactPref[] = ["WhatsApp", "Email", "Llamada"];
const HAS_WEBSITE: QuoteForm["hasWebsite"][] = ["Sí", "No", "En construcción"];

const initial: QuoteForm = {
    fullName: "",
    company: "",
    email: "",
    phone: "",

    goal: "Leads",
    service: "Google Ads + Meta Ads",
    timeline: "Este mes",
    budget: "Aún no definido",

    website: "",
    socials: "",
    competitors: "",

    details: "",
    preference: "WhatsApp",

    hasWebsite: "Sí",
    location: "",
};

function isEmail(v: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

function isUrlLoose(v: string) {
    const s = v.trim();
    if (!s) return true;
    // acepta dominio sin https
    return /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/.*)?$/.test(s);
}

export default function Quote() {
    const [form, setForm] = React.useState<QuoteForm>(initial);
    const [errors, setErrors] = React.useState<Record<string, string>>({});
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState<string | null>(null);
    const [serverError, setServerError] = React.useState<string | null>(null);

    function setField<K extends keyof QuoteForm>(key: K, value: QuoteForm[K]) {
        setForm((p) => ({ ...p, [key]: value }));
        setErrors((e) => {
            const copy = { ...e };
            delete copy[key as string];
            return copy;
        });
    }

    function validate(v: QuoteForm) {
        const e: Record<string, string> = {};
        if (!v.fullName.trim() || v.fullName.trim().length < 3) e.fullName = "Ingresa tu nombre completo.";
        if (!v.company.trim() || v.company.trim().length < 2) e.company = "Ingresa tu empresa o nombre de negocio.";
        if (!v.email.trim() || !isEmail(v.email)) e.email = "Ingresa un correo válido.";
        if (!v.phone.trim() || v.phone.trim().length < 7) e.phone = "Ingresa un teléfono/WhatsApp válido.";

        if (!v.details.trim() || v.details.trim().length < 20) {
            e.details = "Describe el proyecto (mín. 20 caracteres).";
        }

        if (v.website && !isUrlLoose(v.website)) e.website = "URL no válida (puede ser dominio sin https).";
        if (v.socials && !isUrlLoose(v.socials)) e.socials = "URL no válida (puede ser dominio sin https).";

        return e;
    }

    async function onSubmit(ev: React.FormEvent) {
        ev.preventDefault();
        setSuccess(null);
        setServerError(null);

        const v = validate(form);
        setErrors(v);
        if (Object.keys(v).length) return;

        try {
            setLoading(true);
            const res = await fetch("/api/quote", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (!res.ok) {
                const payload = await res.json().catch(() => null);
                throw new Error(payload?.message ?? "No se pudo enviar. Intenta nuevamente.");
            }

            setSuccess("Cotización enviada ✅ Te contactaremos con el siguiente paso.");
            setForm(initial);
        } catch (err: any) {
            setServerError(err?.message ?? "Ocurrió un error. Intenta nuevamente.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="relative my-16 md:my-20">
            <ContentWidth>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div>
                        <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
                            Cuéntanos qué quieres lograr
                        </h1>
                        <p className="mt-4 max-w-2xl text-muted-foreground">
                            Con esta info te devolvemos una propuesta clara (alcance + tiempos + inversión).
                            Sin suposiciones.
                        </p>
                    </div>

                    <div className="flex gap-2">
                        <Button
                            variant="outline"
                            className="rounded-full border-primary/30 hover:border-primary"
                            asChild
                        >
                            <Link href="/contact">
                                Solo contacto <ArrowUpRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button className="rounded-full bg-primary text-primary-foreground hover:opacity-95" asChild>
                            <Link href="/services">
                                Ver servicios <ArrowUpRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                    {/* FORM */}
                    <section className="lg:col-span-8">
                        <div className="rounded-3xl border border-border/70 bg-card/50 backdrop-blur p-6 md:p-8">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <p className="text-sm font-semibold">Formulario de cotización</p>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        Completa lo esencial. Lo opcional ayuda a afinar la propuesta.
                                    </p>
                                </div>
                                <span className="hidden md:inline-flex text-xs font-semibold rounded-full px-3 py-1 border border-border/70 bg-background/60 text-muted-foreground">
                  3–4 min
                </span>
                            </div>

                            <form onSubmit={onSubmit} className="mt-6 space-y-6">
                                {/* Datos */}
                                <div className="space-y-3">
                                    <SectionTitle icon={<Building2 className="h-4 w-4" />} title="Datos de contacto" />
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <Field
                                            label="Nombres y apellidos"
                                            value={form.fullName}
                                            onChange={(v) => setField("fullName", v)}
                                            placeholder="Ej: Ángel Emilio Gala"
                                            error={errors.fullName}
                                            autoComplete="name"
                                        />
                                        <Field
                                            label="Empresa / negocio"
                                            value={form.company}
                                            onChange={(v) => setField("company", v)}
                                            placeholder="Ej: Servitec Perú"
                                            error={errors.company}
                                        />
                                        <Field
                                            label="Correo"
                                            value={form.email}
                                            onChange={(v) => setField("email", v)}
                                            placeholder="tucorreo@empresa.com"
                                            error={errors.email}
                                            type="email"
                                            autoComplete="email"
                                        />
                                        <Field
                                            label="Teléfono / WhatsApp"
                                            value={form.phone}
                                            onChange={(v) => setField("phone", v)}
                                            placeholder="Ej: 999 999 999"
                                            error={errors.phone}
                                            autoComplete="tel"
                                        />
                                    </div>
                                </div>

                                {/* Objetivo */}
                                <div className="space-y-3">
                                    <SectionTitle icon={<Target className="h-4 w-4" />} title="Objetivo y alcance" />
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <SelectField label="Objetivo principal" value={form.goal} onChange={(v) => setField("goal", v)} options={GOALS} />
                                        <SelectField label="Servicio" value={form.service} onChange={(v) => setField("service", v)} options={SERVICES} />
                                        <SelectField label="Plazo" value={form.timeline} onChange={(v) => setField("timeline", v)} options={TIMELINES} />
                                        <SelectField label="Presupuesto" value={form.budget} onChange={(v) => setField("budget", v)} options={BUDGETS} />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <SelectField
                                            label="¿Tienes web?"
                                            value={form.hasWebsite}
                                            onChange={(v) => setField("hasWebsite", v)}
                                            options={HAS_WEBSITE}
                                        />
                                        <Field
                                            label="Ciudad / zona (opcional)"
                                            value={form.location}
                                            onChange={(v) => setField("location", v)}
                                            placeholder="Ej: Lima, Chorrillos"
                                        />
                                    </div>
                                </div>

                                {/* Links */}
                                <div className="space-y-3">
                                    <SectionTitle icon={<Link2 className="h-4 w-4" />} title="Links (opcional, pero ayuda mucho)" />
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <Field
                                            label="Web / dominio"
                                            value={form.website}
                                            onChange={(v) => setField("website", v)}
                                            placeholder="Ej: mipagina.com"
                                            error={errors.website}
                                        />
                                        <Field
                                            label="Redes (Facebook/Instagram/LinkedIn)"
                                            value={form.socials}
                                            onChange={(v) => setField("socials", v)}
                                            placeholder="Ej: instagram.com/miempresa"
                                            error={errors.socials}
                                        />
                                    </div>

                                    <Field
                                        label="Competidores o referencias (opcional)"
                                        value={form.competitors}
                                        onChange={(v) => setField("competitors", v)}
                                        placeholder="Ej: marca1.com, marca2.com"
                                    />
                                </div>

                                {/* Detalles */}
                                <div className="space-y-3">
                                    <SectionTitle icon={<Timer className="h-4 w-4" />} title="Detalles del proyecto" />
                                    <TextArea
                                        label="Descripción"
                                        value={form.details}
                                        onChange={(v) => setField("details", v)}
                                        placeholder="Describe qué necesitas, qué problema quieres resolver y cómo mides el éxito (ventas/leads/citas/etc.)."
                                        error={errors.details}
                                        rows={7}
                                    />

                                    <SelectField
                                        label="Preferencia de contacto"
                                        value={form.preference}
                                        onChange={(v) => setField("preference", v)}
                                        options={PREFS}
                                    />
                                </div>

                                {/* Feedback */}
                                {success ? (
                                    <div className="rounded-2xl border border-border/70 bg-background/60 p-4 flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-accent mt-0.5" />
                                        <div>
                                            <p className="font-semibold">Enviado</p>
                                            <p className="text-sm text-muted-foreground">{success}</p>
                                        </div>
                                    </div>
                                ) : null}

                                {serverError ? (
                                    <div className="rounded-2xl border border-destructive/25 bg-destructive/5 p-4">
                                        <p className="text-sm font-semibold text-destructive">{serverError}</p>
                                    </div>
                                ) : null}

                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Button
                                        type="submit"
                                        className="rounded-full bg-primary text-primary-foreground hover:opacity-95"
                                        disabled={loading}
                                    >
                                        {loading ? "Enviando..." : "Enviar solicitud"}
                                        <ArrowUpRight className="ml-2 h-4 w-4" />
                                    </Button>

                                    <Button
                                        type="button"
                                        variant="outline"
                                        className="rounded-full border-primary/30 hover:border-primary"
                                        onClick={() => {
                                            setForm(initial);
                                            setErrors({});
                                            setSuccess(null);
                                            setServerError(null);
                                        }}
                                    >
                                        Limpiar
                                    </Button>
                                </div>

                                <p className="text-xs text-muted-foreground">
                                    Usamos esta información solo para preparar tu propuesta y contactarte.
                                </p>
                            </form>
                        </div>
                    </section>

                    {/* SIDEBAR */}
                    <aside className="lg:col-span-4">
                        <div className="rounded-3xl border border-border/70 bg-card/50 backdrop-blur p-6 md:p-8 lg:sticky lg:top-24">
                            <p className="text-sm font-semibold">Lo que recibirás</p>
                            <p className="mt-2 text-sm text-muted-foreground">
                                Una propuesta clara, aterrizada a tu objetivo y al contexto actual de tu negocio.
                            </p>

                            <div className="mt-5 space-y-3">
                                <MiniCard icon={<Target className="h-4 w-4" />} title="Alcance" desc="Qué incluye / qué no incluye." />
                                <MiniCard icon={<Timer className="h-4 w-4" />} title="Tiempos" desc="Fases y entregables." />
                                <MiniCard icon={<CheckCircle2 className="h-4 w-4" />} title="Plan de acción" desc="Primeros pasos y prioridades." />
                            </div>

                            <div className="mt-6 rounded-2xl border border-border/70 bg-background/60 p-4">
                                <p className="text-sm font-semibold">¿Prefieres escribir directo?</p>
                                <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                                    <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> contactos@servitec-peru.com</p>
                                    <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> 941 801 827</p>
                                </div>

                                <Button
                                    variant="outline"
                                    className="mt-4 w-full rounded-full border-primary/30 hover:border-primary"
                                    asChild
                                >
                                    <Link href="/contact">
                                        Ir a contacto <ArrowUpRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </aside>
                </div>
            </ContentWidth>
        </main>
    );
}

function SectionTitle({ icon, title }: { icon: React.ReactNode; title: string }) {
    return (
        <div className="flex items-center gap-2">
            <span className="text-accent">{icon}</span>
            <p className="text-sm font-semibold">{title}</p>
        </div>
    );
}

function Field({
                   label,
                   value,
                   onChange,
                   placeholder,
                   error,
                   type = "text",
                   autoComplete,
               }: {
    label: string;
    value: string;
    onChange: (v: string) => void;
    placeholder?: string;
    error?: string;
    type?: string;
    autoComplete?: string;
}) {
    return (
        <div>
            <label className="text-sm font-semibold">{label}</label>
            <input
                type={type}
                autoComplete={autoComplete}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className={cn(
                    "mt-2 w-full rounded-2xl border bg-background/60 px-4 py-3 text-sm outline-none",
                    "border-border/70 focus:border-primary/40 focus:ring-4 focus:ring-primary/10",
                    error && "border-destructive/40 focus:border-destructive/60 focus:ring-destructive/10"
                )}
            />
            {error ? <p className="mt-2 text-xs font-semibold text-destructive">{error}</p> : null}
        </div>
    );
}

function TextArea({
                      label,
                      value,
                      onChange,
                      placeholder,
                      error,
                      rows = 6,
                  }: {
    label: string;
    value: string;
    onChange: (v: string) => void;
    placeholder?: string;
    error?: string;
    rows?: number;
}) {
    return (
        <div>
            <label className="text-sm font-semibold">{label}</label>
            <textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                rows={rows}
                className={cn(
                    "mt-2 w-full resize-none rounded-2xl border bg-background/60 px-4 py-3 text-sm outline-none",
                    "border-border/70 focus:border-primary/40 focus:ring-4 focus:ring-primary/10",
                    error && "border-destructive/40 focus:border-destructive/60 focus:ring-destructive/10"
                )}
            />
            {error ? <p className="mt-2 text-xs font-semibold text-destructive">{error}</p> : null}
        </div>
    );
}

function SelectField<T extends string>({
                                           label,
                                           value,
                                           onChange,
                                           options,
                                       }: {
    label: string;
    value: T;
    onChange: (v: T) => void;
    options: readonly T[];
}) {
    return (
        <div>
            <label className="text-sm font-semibold">{label}</label>
            <select
                value={value}
                onChange={(e) => onChange(e.target.value as T)}
                className={cn(
                    "mt-2 w-full rounded-2xl border bg-background/60 px-4 py-3 text-sm outline-none",
                    "border-border/70 focus:border-primary/40 focus:ring-4 focus:ring-primary/10"
                )}
            >
                {options.map((o) => (
                    <option key={o} value={o}>
                        {o}
                    </option>
                ))}
            </select>
        </div>
    );
}

function MiniCard({
                      icon,
                      title,
                      desc,
                  }: {
    icon: React.ReactNode;
    title: string;
    desc: string;
}) {
    return (
        <div className="rounded-2xl border border-border/70 bg-background/60 p-4">
            <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-2xl border border-border/70 bg-background grid place-items-center text-muted-foreground">
                    {icon}
                </div>
                <div>
                    <p className="font-semibold">{title}</p>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
            </div>
        </div>
    );
}
