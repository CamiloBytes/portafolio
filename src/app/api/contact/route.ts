import { NextResponse } from "next/server";
import { Resend } from "resend";
import { generateContactEmailHtml } from "../../../components/emails/ContactEmailTemplate";
import { contactSchema } from "../../../utils/validation";

export async function POST(req: Request) {
  try {
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { error: "El cuerpo de la solicitud no contiene un JSON válido." },
        { status: 400 }
      );
    }

    const validationResult = contactSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { error: validationResult.error.issues[0]?.message || "Los datos no son válidos." },
        { status: 400 }
      );
    }

    const { name, email, message } = validationResult.data;
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      // Simulación segura si el usuario aún no configuró su clave en .env.local
      console.warn(
        "⚠️ [API Contact] RESEND_API_KEY no encontrada en variables de entorno. Operando en modo simulación."
      );
      return NextResponse.json({
        success: true,
        simulated: true,
        message:
          "Packet transmitido en modo simulación (configura RESEND_API_KEY en .env.local para envíos reales).",
      });
    }

    const resend = new Resend(apiKey);
    const toEmail = process.env.CONTACT_EMAIL || "delivered@resend.dev";
    const fromEmail =
      process.env.RESEND_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

    const timestamp = new Date().toLocaleString("es-ES", {
      timeZone: "America/Bogota",
      dateStyle: "medium",
      timeStyle: "short",
    });

    const emailHtml = generateContactEmailHtml({
      name,
      email,
      message,
      timestamp,
    });

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `[Portfolio Session] Packet de: ${name}`,
      text: `Has recibido un nuevo mensaje desde la sesión remota de tu portafolio:\n\nRemitente: ${name}\nCorreo de respuesta: ${email}\n\nPayload:\n${message}\n\n---\nTimestamp: ${timestamp}`,
      html: emailHtml,
    });

    if (error) {
      console.error("Error al enviar correo con Resend:", error);
      return NextResponse.json(
        { error: error.message || "Error al procesar el envío de correo." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data,
      message: "Packet enviado y confirmado con éxito (ACK 200).",
    });
  } catch (err: unknown) {
    console.error("Excepción en /api/contact:", err);
    const errorMessage =
      err instanceof Error ? err.message : "Error interno del servidor.";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
