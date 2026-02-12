import {NextResponse} from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // Validación mínima
        const required = ["fullName", "company", "email", "phone", "details"];
        for (const k of required) {
            if (!body?.[k] || String(body[k]).trim().length === 0) {
                return NextResponse.json({ message: `Falta el campo: ${k}` }, { status: 400 });
            }
        }

        // TODO: aquí conectas tu correo/CRM/Firestore/Twilio
        // console.log("QUOTE_FORM:", body);

        return NextResponse.json({ ok: true });
    } catch {
        return NextResponse.json({ message: "Error procesando la solicitud." }, { status: 500 });
    }
}
