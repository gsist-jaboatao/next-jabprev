// pages/api/image-proxy.ts
import fetch from 'node-fetch';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url } = req.query;

  if (typeof url !== 'string') {
    return res.status(400).json({ error: 'URL é necessária e deve ser uma string' });
  }

  try {
    const response = await fetch(decodeURIComponent(url));

    if (!response.ok) {
      return res.status(response.status).json({ error: 'Erro ao buscar a imagem' });
    }

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const contentType = response.headers.get('content-type');
    if (contentType) {
      res.setHeader('Content-Type', contentType);
    }
    
    res.send(buffer);
  } catch (error) {
    console.error('Erro ao buscar a imagem:', error);
    res.status(500).json({ error: 'Erro interno ao buscar a imagem' });
  }
}
