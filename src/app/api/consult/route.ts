import { NextRequest, NextResponse } from "next/server";
import { object, string } from "yup";
import { mailTemplate } from "../helpers/mail-template";
import { sendEmail } from "../helpers/mail.services";
import { envs } from "@/config/envs";

// Esquema de validación con Yup
const postSchema = object({
  name: string().required(),
  phone: string().required(),
  email: string().email().required(),
  message: string().required(),
});

export async function POST(request: NextRequest) {
  try {
    // Validar datos recibidos
    const { name, phone, email, message } = await postSchema.validate(
      await request.json()
    );

    // Generar cuerpo HTML del email
    const htmlBody = mailTemplate(name, phone, email, message);

    // Enviar correo
    await sendEmail({
      to: envs.MAILER_EMAIL, // Receptor del correo
      subject: "Nuevo mensaje de contacto",
      htmlBody: htmlBody,
    });

    // Respuesta de éxito
    return NextResponse.json({ message: "Email enviado exitosamente." });
  } catch (error) {
    console.error("Error al enviar el email:", error);

    // Respuesta de error
    return NextResponse.json(
      { error: "Hubo un problema al procesar la solicitud." },
      { status: 400 }
    );
  }
}
