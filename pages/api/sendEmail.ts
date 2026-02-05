import { NextApiRequest, NextApiResponse } from "next";
import formidable, { IncomingForm } from "formidable";
import nodemailer from "nodemailer";

export const config = {
  api: {
    bodyParser: false, // Desativa o parser padrão para multipart/form-data
    sizeLimit: "50mb", // Limite de tamanho, se necessário
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const form = new IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Erro ao parsear o formulário:", err);
      return res.status(500).json({ message: "Erro ao processar o formulário" });
    }

    try {
      // Extração dos campos (se forem arrays, usa o primeiro valor)
      const nome = Array.isArray(fields.nome) ? fields.nome[0] : fields.nome;
      const matricula = Array.isArray(fields.matricula) ? fields.matricula[0] : fields.matricula;
      const telefone = Array.isArray(fields.telefone) ? fields.telefone[0] : fields.telefone;
      const email = Array.isArray(fields.email) ? fields.email[0] : fields.email;
      const orgao = Array.isArray(fields.orgao) ? fields.orgao[0] : fields.orgao;
      const dataEmissao = Array.isArray(fields.dataEmissao) ? fields.dataEmissao[0] : fields.dataEmissao;
      const dataExoneracao = Array.isArray(fields.dataExoneracao)
        ? fields.dataExoneracao[0]
        : fields.dataExoneracao;

      if (!nome || !matricula || !telefone || !orgao || !dataEmissao || !dataExoneracao) {
        return res.status(400).json({ message: "All fields are required." });
      }

      const recipientEmail = "beneficios@jaboataoprev.jaboatao.pe.gov.br";

      // Processa os arquivos para criar anexos, tratando a possibilidade de arrays
        const attachments: { filename: string; path: string }[] = Object.keys(files).map((key) => {
        const fileField = files[key];
        let file: formidable.File;
        if (Array.isArray(fileField)) {
          file = fileField[0];
        } else {
          file = fileField as unknown as formidable.File;
        }
        return {
          filename: file.originalFilename || "arquivo",
          path: file.filepath,
        };
      });

      const transporter = nodemailer.createTransport({
        host: "server18.mailgrid.com.br",
        port: 587,
        secure: false, // Use false se você estiver usando STARTTLS (não SSL)
        auth: {
          user: process.env.SMTP_USER as string, // Usuário do e-mail
          pass: process.env.SMTP_PASS as string, // Senha associada ao usuário
        },
      });
      

      await transporter.sendMail({
        from: `"Formulário de Requerimento CTC" <${process.env.SMTP_USER}>`,
        to: recipientEmail,
        subject: "Novo envio de formulário",
        html: `
          <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>Matrícula:</strong> ${matricula}</p>
            <p><strong>Telefone:</strong> ${telefone}</p>
            <p><strong>E-mail:</strong> ${email}</p>
            <p><strong>Órgão:</strong> ${orgao}</p>
            <p><strong>Data de Emissão:</strong> ${dataEmissao}</p>
            <p><strong>Data de Exoneração:</strong> ${dataExoneracao}</p>
            <p><strong>Arquivos:</strong> ${Object.keys(files).join(", ")}</p>
          </div>
        `,
        attachments,
      });

      res.status(200).json({ message: "Mensagem enviada com sucesso." });
    } catch (error) {
      console.error("Erro ao enviar o e-mail:", error);
      res.status(500).json({ message: "Falha ao enviar mensagem." });
    }
  });
}
