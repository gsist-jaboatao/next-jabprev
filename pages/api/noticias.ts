// pages/api/noticias.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const wordpressUrl = process.env.NEXT_PUBLIC_WORDPRESS ?? "";

    const response = await fetch(`${wordpressUrl}/wp-json/wp/v2/posts`);
    const data = await response.json();

    res.status(200).json(data);
  } catch {
    res.status(500).json({ message: "Erro ao buscar notícias" });
  }
}
