"use client";

import * as React from "react";
import Link from "next/link";
import {ContentWidth} from "@/components/ContentWidth";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {ArrowUpRight, CheckCircle2, Mail, MessageCircle, Phone,} from "lucide-react";

type ServiceType =
    | "Google Ads + Meta Ads"
    | "SEO + SEO Local"
    | "Desarrollo Web"
    | "Desarrollo de Apps"
    | "Analítica + Automatización"
    | "Facturación Electrónica"
    | "Otro";

type ContactPref = "WhatsApp" | "Email" | "Llamada";

type FormState = {
    fullName: string;
    email: string;
    phone: string;
    service: ServiceType;
    preference: ContactPref;
    budget: string; // optional
    timeline: string; // optional
    message: string;
};

const SERVICES: ServiceType[] = [
    "Google Ads + Meta Ads",
    "SEO + SEO Local",
    "Desarrollo Web",
    "Desarrollo de Apps",
    "Analítica + Automatización",
    "Facturación Electrónica",
    "Otro",
];

const BUDGETS = [
    "Aún no definido",
    "S/ 500 – 1,500",
    "S/ 1,500 – 3,000",
    "S/ 3,000 – 6,000",
    "S/ 6,000+",
];

const TIMELINES = ["Esta semana", "Este mes", "1–3 meses", "Flexible"];

const initialState: FormState = {
    fullName: "",
    email: "",
    phone: "",
    service: "Google Ads + Meta Ads",
    preference: "WhatsApp",
    budget: "Aún no definido",
    timeline: "Este mes",
    message: "",
};

function isEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export default function Contact() {
    const [form, setForm] = React.useState<FormState>(initialState);
    const [errors, setErrors] = React.useState<Record<string, string>>({});
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState<string | null>(null);
    const [serverError, setServerError] = React.useState<string | null>(null);

    function setField<K extends keyof FormState>(key: K, value: FormState[K]) {
        setForm((p) => ({ ...p, [key]: value }));
        setErrors((e) => {
            const copy = { ...e };
            delete copy[key as string];
            return copy;
        });
    }

    function validate(values: FormState) {
        const e: Record<string, string> = {};

        if (!values.fullName.trim() || values.fullName.trim().length < 3) {
            e.fullName = "Ingresa tu nombre completo.";
        }
        if (!values.email.trim() || !isEmail(values.email)) {
            e.email = "Ingresa un correo válido.";
        }
        if (!values.phone.trim() || values.phone.trim().length < 7) {
            e.phone = "Ingresa un teléfono/WhatsApp válido.";
        }
        if (!values.message.trim() || values.message.trim().length < 12) {
            e.message = "Cuéntanos un poco más (mín. 12 caracteres).";
        }

        return e;
    }

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        setSuccess(null);
        setServerError(null);

        const v = validate(form);
        setErrors(v);
        if (Object.keys(v).length) return;

        try {
            setLoading(true);

            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (!res.ok) {
                const payload = await res.json().catch(() => null);
                throw new Error(payload?.message ?? "No se pudo enviar. Intenta nuevamente.");
            }

            setSuccess("Listo ✅ Te contactaremos en breve.");
            setForm(initialState);
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
                            Hablemos de tu proyecto
                        </h1>
                        <p className="mt-4 max-w-2xl text-muted-foreground">
                            Envíanos tu consulta y te respondemos con el siguiente paso: llamada breve o propuesta.
                            Sin vueltas.
                        </p>
                    </div>

                    <div className="flex gap-2">
                        <Button
                            variant="outline"
                            className="rounded-full border-primary/30 hover:border-primary"
                            asChild
                        >
                            <Link href="/services">
                                Ver servicios <ArrowUpRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button className="rounded-full bg-primary text-primary-foreground hover:opacity-95" asChild>
                            <Link href="/quote">
                                Solicitar cotización <ArrowUpRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                    {/* Form */}
                    <section className="lg:col-span-7">
                        <div className="rounded-3xl border border-border/70 bg-card/50 backdrop-blur p-6 md:p-8">
                            <div className="flex items-center justify-between gap-3">
                                <div>
                                    <p className="text-sm font-semibold">Formulario</p>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        Completa lo básico. Te respondemos por el canal que prefieras.
                                    </p>
                                </div>
                                <span className="hidden md:inline-flex text-xs font-semibold rounded-full px-3 py-1 border border-border/70 bg-background/60 text-muted-foreground">
                  1–2 min
                </span>
                            </div>

                            <form onSubmit={onSubmit} className="mt-6 space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Field
                                        label="Nombres y apellidos"
                                        placeholder="Ej: Ángel Emilio Gala"
                                        value={form.fullName}
                                        onChange={(v) => setField("fullName", v)}
                                        error={errors.fullName}
                                        autoComplete="name"
                                    />
                                    <Field
                                        label="Correo"
                                        placeholder="tucorreo@empresa.com"
                                        value={form.email}
                                        onChange={(v) => setField("email", v)}
                                        error={errors.email}
                                        autoComplete="email"
                                        type="email"
                                    />
                                    <Field
                                        label="Teléfono / WhatsApp"
                                        placeholder="Ej: 999 999 999"
                                        value={form.phone}
                                        onChange={(v) => setField("phone", v)}
                                        error={errors.phone}
                                        autoComplete="tel"
                                    />

                                    <SelectField<ServiceType>
                                        label="Servicio"
                                        value={form.service}
                                        onChange={(v) => setField("service", v)}
                                        options={SERVICES}
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <SelectField<ContactPref>
                                        label="Preferencia de contacto"
                                        value={form.preference}
                                        onChange={(v) => setField("preference", v)}
                                        options={["WhatsApp", "Email", "Llamada"]}
                                    />
                                    <SelectField
                                        label="Plazo (opcional)"
                                        value={form.timeline}
                                        onChange={(v) => setField("timeline", v)}
                                        options={TIMELINES}
                                    />
                                </div>

                                <SelectField
                                    label="Presupuesto (opcional)"
                                    value={form.budget}
                                    onChange={(v) => setField("budget", v)}
                                    options={BUDGETS}
                                />

                                <TextArea
                                    label="Descripción del proyecto"
                                    placeholder="Cuéntanos qué necesitas, tu objetivo (leads/ventas/posicionamiento/web) y qué ya tienes hoy."
                                    value={form.message}
                                    onChange={(v) => setField("message", v)}
                                    error={errors.message}
                                />

                                {success ? (
                                    <div className="rounded-2xl border border-border/70 bg-background/60 p-4 flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-accent mt-0.5" />
                                        <div>
                                            <p className="font-semibold">Mensaje enviado</p>
                                            <p className="text-sm text-muted-foreground">{success}</p>
                                        </div>
                                    </div>
                                ) : null}

                                {serverError ? (
                                    <div className="rounded-2xl border border-destructive/25 bg-destructive/5 p-4">
                                        <p className="text-sm font-semibold text-destructive">
                                            {serverError}
                                        </p>
                                    </div>
                                ) : null}

                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Button
                                        type="submit"
                                        className="rounded-full bg-primary text-primary-foreground hover:opacity-95"
                                        disabled={loading}
                                    >
                                        {loading ? "Enviando..." : "Enviar mensaje"}
                                        <ArrowUpRight className="ml-2 h-4 w-4" />
                                    </Button>

                                    <Button
                                        type="button"
                                        variant="outline"
                                        className="rounded-full border-primary/30 hover:border-primary"
                                        onClick={() => {
                                            setForm(initialState);
                                            setErrors({});
                                            setSuccess(null);
                                            setServerError(null);
                                        }}
                                    >
                                        Limpiar
                                    </Button>
                                </div>

                                <p className="text-xs text-muted-foreground">
                                    Al enviar aceptas que te contactemos por el medio elegido. No hacemos spam.
                                </p>
                            </form>
                        </div>
                    </section>

                    {/* Side info */}
                    <aside className="lg:col-span-5">
                        <div className="rounded-3xl border border-border/70 bg-card/50 backdrop-blur p-6 md:p-8 lg:sticky lg:top-24">
                            <p className="text-sm font-semibold">Canales directos</p>
                            <p className="mt-2 text-sm text-muted-foreground">
                                Si prefieres, también puedes escribirnos directo. Te respondemos en horario laboral.
                            </p>

                            <div className="mt-5 space-y-3">
                                <QuickLink
                                    icon={<MessageCircle className="h-4 w-4" />}
                                    title="WhatsApp"
                                    desc="Respuesta más rápida"
                                    href="/contact" // cámbialo a tu wa.me si quieres
                                />
                                <QuickLink
                                    icon={<Mail className="h-4 w-4" />}
                                    title="Email"
                                    desc="Para enviar detalles"
                                    href="/contact"
                                />
                                <QuickLink
                                    icon={<Phone className="h-4 w-4" />}
                                    title="Llamada"
                                    desc="Agenda una llamada breve"
                                    href="/contact"
                                />
                            </div>

                            <div className="mt-6 rounded-2xl border border-border/70 bg-background/60 p-4">
                                <p className="text-sm font-semibold">¿Qué pasa después?</p>
                                <ol className="mt-2 space-y-2 text-sm text-muted-foreground list-decimal pl-5">
                                    <li>Revisamos tu mensaje y tu objetivo.</li>
                                    <li>Te respondemos con preguntas puntuales (si aplica).</li>
                                    <li>Proponemos una llamada corta o una propuesta.</li>
                                </ol>
                            </div>
                        </div>
                    </aside>
                </div>
            </ContentWidth>
        </main>
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
                  }: {
    label: string;
    value: string;
    onChange: (v: string) => void;
    placeholder?: string;
    error?: string;
}) {
    return (
        <div>
            <label className="text-sm font-semibold">{label}</label>
            <textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                rows={6}
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

function QuickLink({
                       icon,
                       title,
                       desc,
                       href,
                   }: {
    icon: React.ReactNode;
    title: string;
    desc: string;
    href: string;
}) {
    return (
        <Link
            href={href}
            className="block rounded-2xl border border-border/70 bg-background/60 p-4 hover:bg-muted/40 transition-colors"
        >
            <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-2xl border border-border/70 bg-background grid place-items-center text-muted-foreground">
                    {icon}
                </div>
                <div>
                    <p className="font-semibold">{title}</p>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
            </div>
        </Link>
    );
}
