import { Resend } from "resend";
import { NextResponse } from "next/server";

// Inicializar de lado del servidor la llave
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
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
      to: ["hello@sorinlabs.dev"], // Envío desde .dev hacia .dev
      subject: `Nuevo mensaje de ${name} - Sorin Labs`,
      html: `
        <h2>Candidato interesado desde la web de Sorin Labs</h2>
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
      console.error("Error desde Resend:", error);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (err) {
    console.error("Error interno del API:", err);
    return NextResponse.json(
      { error: { message: "Error interno del servidor" } },
      { status: 500 },
    );
  }
}
