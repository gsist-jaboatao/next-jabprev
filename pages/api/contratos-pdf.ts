import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

// Função para calcular similaridade entre strings (Levenshtein distance)
function levenshteinDistance(a: string, b: string): number {
  const matrix: number[][] = [];

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }

  return matrix[b.length][a.length];
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { numero, ano } = req.query;

  if (!numero || !ano) {
    return res.status(400).json({ error: 'Parâmetros numero e ano são necessários' });
  }

  try {
    const contractDir = path.join(process.cwd(), 'public', 'Pdf', 'administrativo', 'contratos');
    
    // Lista todos os arquivos no diretório
    const files = fs.readdirSync(contractDir).filter(file => file.toLowerCase().endsWith('.pdf'));
    
    if (files.length === 0) {
      return res.status(404).json({ error: 'Nenhum PDF encontrado no diretório' });
    }

    // Normaliza número e ano para busca
    const searchNumber = String(numero).toLowerCase();
    const searchYear = String(ano);

    // 1. Primeira tentativa: busca exata por padrão
    const exactPattern = new RegExp(`\\b${searchNumber}[\\s_/-]*${searchYear}\\b`, 'i');
    let matchedFile = files.find(file => exactPattern.test(file));

    // 2. Se não encontrar, tenta buscar apenas por número e ano separadamente
    if (!matchedFile) {
      const numberPattern = new RegExp(`\\b${searchNumber}\\b`, 'i');
      const yearPattern = new RegExp(searchYear);
      
      const candidates = files.filter(file => 
        numberPattern.test(file) && yearPattern.test(file)
      );
      
      if (candidates.length > 0) {
        matchedFile = candidates[0];
      }
    }

    // 3. Se ainda não encontrar, usa busca fuzzy nos arquivos que contêm o ano
    if (!matchedFile) {
      const filesWithYear = files.filter(file => file.includes(searchYear));
      
      if (filesWithYear.length > 0) {
        // Encontra o arquivo mais similar baseado no número do contrato
        let bestMatch = filesWithYear[0];
        let bestScore = Infinity;

        filesWithYear.forEach(file => {
          const distance = levenshteinDistance(searchNumber, file.toLowerCase());
          if (distance < bestScore) {
            bestScore = distance;
            bestMatch = file;
          }
        });

        // Se a similaridade for razoável (menos de 50% de diferença em comprimento)
        if (bestScore < searchNumber.length) {
          matchedFile = bestMatch;
        }
      }
    }

    // 4. Última tentativa: busca fuzzy em todos os arquivos
    if (!matchedFile) {
      let bestMatch = files[0];
      let bestScore = Infinity;

      files.forEach(file => {
        const distance = levenshteinDistance(searchNumber, file.toLowerCase());
        if (distance < bestScore) {
          bestScore = distance;
          bestMatch = file;
        }
      });

      if (bestScore < searchNumber.length * 0.7) {
        matchedFile = bestMatch;
      }
    }

    if (!matchedFile) {
      return res.status(404).json({ 
        error: `PDF não encontrado para o contrato ${numero}/${ano}`,
        availableFiles: files.slice(0, 5) // Retorna os 5 primeiros arquivos para debug
      });
    }

    // Retorna o caminho relativo do arquivo
    const filePath = `/Pdf/administrativo/contratos/${encodeURIComponent(matchedFile)}`;
    res.status(200).json({ filePath, fileName: matchedFile });

  } catch (error) {
    console.error('Erro ao buscar PDF:', error);
    res.status(500).json({ error: 'Erro interno ao buscar o PDF' });
  }
}
