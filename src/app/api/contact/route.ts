import { NextResponse } from "next/server";
import { Resend } from "resend";
import { generateContactEmailHtml } from "../../../components/emails/ContactEmailTemplate";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Todos los campos (nombre, correo y mensaje) son requeridos." },
        { status: 400 }
      );
    }

    // Validación básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "El correo electrónico ingresado no es válido." },
        { status: 400 }
      );
    }

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
