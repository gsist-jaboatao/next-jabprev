"use client";

import React from "react";

const data: Record<string, { date: string; url: string }[]> = {
  "2025": [
    {
      date: "Informativo Previdenciário nº 05.2025 - ABONO DE PERMANENCIA",
      url: "/Pdf/institucional/informativos/2.3_Informativo_Previdenciario_n__05.2025___ABONO_DE_PERMANENCIA.pdf",
    },
    {
      date: "Informativo nº 04.2025 – Aliquota",
      url: "/Pdf/institucional/informativos/INFORMATIVO-no-004-2025-ALIQUOTA.pdf",
    },
    {
      date: "Informativo nº 03.2025 – Mercado Financeiro 2024 vs Meta Atuarial",
      url: "/Pdf/institucional/informativos/Boletim-Informativo-no-05.2024-Meta-atuarial-vs-Mercado-Financeiro-2024.pdf",
    },
    {
      date: "Informativo nº 02.2025 – Prova de Vida",
      url: "/Pdf/institucional/informativos/Informativo-no-002-2025-PROVA-DE-VIDA-1.pdf",
    },
    {
      date: "Informativo nº 01.2025 – Pensão por Morte",
      url: "/Pdf/institucional/informativos/Informativo-no-01.2025-Pensao-por-morte-1.pdf",
    },
    {
      date: "Informativo nº 006/2025 – Segregação de Massa",
      url: "/Pdf/institucional/informativos/Informativo_Previdenciario_n__06.2025___SEGREGACAO_DE_MASSA.pdf",
    },
    {
      date: "Informativo Previdenciário nº 007/2025 - Base de Cálculo Beneficio Previdenciário",
      url: "/Pdf/institucional/informativos/1.1_Informativo_Previdenciario_n__07.2025___Base_de_Calculo.pdf",
    },
    {
      date: "Informativo Previdenciário nº 08.2025 - Renda Fixa",
      url: "/Pdf/institucional/informativos/1.2_Informativo_Previdenciario_n__08.2025___Renda_Fixa.pdf",
    },
  ],
  "2024": [
    {
      date: "Boletim Informativo nº 04.2024 – Aposentadoria Especial de Magistério",
      url: "/Pdf/institucional/informativos/Boletim-Informativo-no-04.2024-Aposentadoria-Especial-de-Magisterio-1.pdf",
    },
    {
      date: "Boletim Informativo nº 03.2024 – Emissão de CTC",
      url: "/Pdf/institucional/informativos/Boletim-Informativo-no-03.2024-Emissao-de-CTC.pdf",
    },
    {
      date: "Boletim Informativo nº 02.2024 – Documentos Para pensão",
      url: "/Pdf/institucional/informativos/Boletim-Informativo-no-02.2024-Documentos-Para-pensao.pdf",
    },
    {
      date: "Boletim Informativo nº 01.2024 – Documentos Para Aposentadoria",
      url: "/Pdf/institucional/informativos/Boletim-Informativo-no-01.2024-Documentos-Para-Aposentadoria.pdf",
    },
  ],
  "2022": [
    {
      date: "Boletim n° 03 – Apresentação de CTC na instrução do processo de aposentadoria",
      url: "/Pdf/institucional/informativos/Boletim-previdenciario-03-22-CTC.pdf",
    },
    {
      date: "Boletim n° 02 – Nova norma de investimentos",
      url: "/Pdf/institucional/informativos/Boletim-previdenciario-Investimentos2022.pdf",
    },
    {
      date: "Boletim n° 01- Censo previdenciário",
      url: "/Pdf/institucional/informativos/Boletim previdenciário - 01-22 - censo.pdf",
    },
  ],
  "2021": [
    {
      date: "Boletim n° 02 – Taxa de juros parâmetro (Avaliações atuariais)",
      url: "/Pdf/institucional/informativos/Boletim-previdenciario-01-2021-responsabilidades-1.pdf",
    },
    {
      date: "Boletim n° 01 – Requisitos mínimos exigidos para gestores do RPPS-JG",
      url: "/Pdf/institucional/informativos/Boletim-previdenciario-01-2021-responsabilidades-1.pdf",
    },
  ],
};

const Links = () => (
  <div className="h-auto bg-gradient-to-b from-[#ffffff] via-[#dcecff] to-[#cbe1fc]">
    <div className="mx-auto max-w-full sm:max-w-4xl md:max-w-6xl p-6 py-12 sm:py-16 md:py-20">
      {Object.entries(data)
        .sort(([yearA], [yearB]) => yearB.localeCompare(yearA, "pt-BR", { numeric: true }))
        .map(([year, entries]) => (
          <div key={year}>
            <h1 className="lg:text-5xl text-4xl font-bold mb-4 uppercase text-blue-900 leading-tight">
              {year}
            </h1>
            <ul className="list-disc pl-5 text-[#051f60] text-xl pb-20 grid lg:grid-cols-2 gap-5">
              {entries.map((entry, index) => (
                <li key={index} className="py-2">
                  <a
                    href={entry.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-800 hover:underline"
                  >
                    {entry.date}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  </div>
);

const Legislacao = () => (
  <div className="flex flex-col">
    <Links />
  </div>
);

export default Legislacao;
