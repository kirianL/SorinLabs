import { Resend } from "resend";
import { NextResponse } from "next/server";

// Inicializar de lado del servidor la llave
export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is missing");
      return NextResponse.json(
        { error: { message: "Configuración de servidor incompleta (API Key)" } },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);
    const body = await request.json();
    const { name, email, company, service, message } = body;

    // Validación sencilla de que los campos vengan con datos
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: { message: "Faltan campos obligatorios" } },
        { status: 400 },
      );
    }

    // Enviar a través de Resend
    const { data, error } = await resend.emails.send({
      from: "Sorin Labs <hello@sorinlabs.dev>",
      to: ["hello@sorinlabs.dev"], 
      subject: `Nuevo mensaje de ${name} - Sorin Labs`,
      html: `
        <h2>Nuevo mensaje desde sorinlabs.dev</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Empresa:</strong> ${company || "No especificada"}</p>
        <p><strong>Servicio:</strong> ${service || "No especificado"}</p>
        <br/>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Error detallado de Resend:", error);
      return NextResponse.json(
        { error: { message: error.message || "Error al enviar el correo" } },
        { status: 500 },
      );
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (err: any) {
    console.error("Error interno del API:", err);
    return NextResponse.json(
      { error: { message: err?.message || "Error interno del servidor" } },
      { status: 500 },
    );
  }
}
