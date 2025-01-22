"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail") as string;
  const message = formData.get("message") as string;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "arizaserranojuanmaria@gmail.com",
    subject: "Mensaje de contacto",
    text: message,
    replyTo: senderEmail,
  });
};
