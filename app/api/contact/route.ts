import {NextResponse} from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // Validación mínima server-side
        if (!body?.fullName || !body?.email || !body?.phone || !body?.message) {
            return NextResponse.json(
                { message: "Faltan campos obligatorios." },
                { status: 400 }
            );
        }

        // TODO: aquí conectas correo / CRM / DB
        // console.log("CONTACT_FORM:", body);

        return NextResponse.json({ ok: true });
    } catch {
        return NextResponse.json(
            { message: "Error procesando la solicitud." },
            { status: 500 }
        );
    }
}
