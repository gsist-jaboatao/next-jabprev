import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type RecipientEmails = {
  [key: string]: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message, subject } = req.body;

  if (!name || !email || !message || !subject) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const recipientEmails: RecipientEmails = {
    financeiro: "admfinanceiro@jaboataoprev.jaboatao.pe.gov.br",
    juridico: "juridico@jaboataoprev.jaboatao.pe.gov.br",
    beneficios: "beneficios@jaboataoprev.jaboatao.pe.gov.br",
    investimento: "investimentos@jaboataoprev.jaboatao.pe.gov.br",
    presidencia: "presidencia@jaboataoprev.jaboatao.pe.gov.br",
  };

  const recipientEmail = recipientEmails[subject];

  if (!recipientEmail) {
    return res.status(400).json({ message: "Invalid subject selected." });
  }

  const transporter = nodemailer.createTransport({
    host: "server18.mailgrid.com.br",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER as string,
      pass: process.env.SMTP_PASS as string,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Jaboatão PREV - Fale Conosco" <${process.env.SMTP_USER}>`,
      to: recipientEmail,
      subject: `Nova mensagem sobre ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
          <table style="width: 100%; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
            <tr>
              <td style="background-color: #003476; color: white; text-align: center; padding: 10px;">
                <h1 style="margin: 0;">Jaboatão PREV</h1>
              </td>
            </tr>
            <tr>
              <td style="padding: 20px;">
                <p><strong>Nome:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Assunto:</strong> ${subject}</p>
                <p><strong>Mensagem:</strong></p>
                <p>${message}</p>
              </td>
            </tr>
          </table>
        </div>
      `,
    });

    res.status(200).json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send message." });
  }
}
