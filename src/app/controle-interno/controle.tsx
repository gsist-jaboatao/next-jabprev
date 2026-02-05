"use client";

import React from "react";

const YearLinks = ({ year, links }: { year: string; links: Array<{ href: string; text: string }> }) => (
  <div>
    <h1 className="text-5xl font-bold mb-4 uppercase text-blue-900 leading-tight">{year}</h1>
    <ul className="list-disc pl-5 text-[#051f60] text-xl pb-20">
      {links.length === 0 ? (
        <li className="py-2">Nenhum relatório disponível para este ano.</li>
      ) : (
        links.map((link, index) => (
          <li key={index} className="py-2">
            <a href={link.href} target="_blank" className="text-blue-800 hover:underline">
              {link.text}
            </a>
          </li>
        ))
      )}
    </ul>
  </div>
);

const Links = () => (
  <div className="h-auto bg-gradient-to-b from-[#ffffff] via-[#dcecff] to-[#cbe1fc]">
    <div className="mx-auto max-w-6xl p-6 py-20">
      {/* Links do ano de 2025 (vazio) */}
      <YearLinks year="2025"
      links={[
        {
          href: "Pdf/institucional/controle-interno/Plano_Anual_de_Controle_Interno_2025_-_JABOATAOPREV_assinado.pdf",
          text: "PACI - Plano Anual de Controle Interno 2025",
        },
        {
          href: "Pdf/institucional/controle-interno/1.3_Relatorio_Trimestral_de_Controle_Interno___1__TRIMESTRE___2025___JABOATAOPREV.pdf",
          text: "Relatório de Controle Interno – 1º Trimestre",
        },
        {
          href: "Pdf/institucional/controle-interno/1.1_Relatorio_Trimestral_de_Controle_Interno___2__TRIMESTRE___2025___JABOATAOPREV.pdf",
          text: "Relatório de Controle Interno – 2º Trimestre",
        },
        {
          href: "Pdf/institucional/controle-interno/1.1_Relatorio_Trimestral_de_Controle_Interno___3__TRIMESTRE___2025___JABOATAOPREV.pdf",
          text: "Relatório de Controle Interno – 3º Trimestre",
        },
      
      ]} />

      {/* Links do ano de 2024 */}
      <YearLinks
        year="2024"
        links={[
          {
            href: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/09/Relatorio-de-Controle-Interno-1o-Trimestre-2024.pdf",
            text: "Relatório Mensal Controle – 1º Trimestre",
          },
          {
            href: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/09/Relatorio-de-Controle-Interno-2o-Trimestre-2024-2.pdf",
            text: "Relatório Mensal Controle – 2º Trimestre",
          },
          {
            href: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/12/Relatorio-de-Controle-Interno-3o-Trimestre-2024.pdf",
            text: "Relatório Mensal Controle – 3º Trimestre",
          },
          {
            href: "/Pdf/institucional/controle-interno/1.5_Relatorio_de_Controle_Interno___4__Trimestre_2024.pdf",
            text: "Relatório Mensal Controle – 4º Trimestre",
          },
        ]}
      />

      {/* Links do ano de 2023 */}
      <YearLinks
        year="2023"
        links={[
          {
            href: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/09/Relatorio-Mensal-Controle-Marco-2023-1.pdf",
            text: "Relatório do Controle Interno – 1° Trimestre",
          },
          {
            href: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/09/Relatorio-Mensal-Controle-Junho-2023.pdf",
            text: "Relatório do Controle Interno – 2° Trimestre",
          },
          {
            href: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/12/Relatorio-Mensal-Controle-Setembro-2023.pdf",
            text: "Relatório do Controle Interno – 3° Trimestre",
          },
          {
            href: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/01/Relatorio-Trimestral-Controle-Dezembro-2023.pdf",
            text: "Relatório do Controle Interno – 4° Trimestre",
          },
        ]}
      />

      {/* Links do ano de 2022 */}
      <YearLinks
        year="2022"
        links={[
          {
            href: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/09/Relatorio-Mensal-Controle-Marco-de-2022-2.pdf",
            text: "Relatório Mensal Controle – 1º Trimestre",
          },
          {
            href: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/11/Relatorio-Trimestral-Controle-Junho-de-2022.pdf",
            text: "Relatório Mensal Controle – 2º Trimestre",
          },
          {
            href: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/03/Relatorio-Mensal-Controle-Setembro-de-2022-Word.pdf",
            text: "Relatório Mensal Controle – 3º Trimestre",
          },
          {
            href: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/03/Relatorio-Mensal-Controle-Dezembro-de-2022-Word.pdf",
            text: "Relatório Mensal Controle – 4º Trimestre",
          },
        ]}
      />

      {/* Links do ano de 2021 */}
      <YearLinks
        year="2021"
        links={[
          {
            href: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/09/Relatorio-Mensal-Controle-Dezembro-de-2021.pdf",
            text: "Relatório de Controle Interno",
          },
        ]}
      />
    </div>
  </div>
);

const Legislacao = () => {
  return (
    <div className="flex flex-col">
      <Links />
    </div>
  );
};

export default Legislacao;
