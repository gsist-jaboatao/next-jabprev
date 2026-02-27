"use client";

import React from "react";

const planos = [
  {
    ano: 2025,
    link: "/Pdf/administrativo/plano-de-acao/2.8_Plano_de_Acao___JaboataoPrev_2025.pdf",
  },
  {
    ano: 2024,
    link: "/Pdf/administrativo/plano-de-acao/Plano_de_Acao___JaboataoPrev_2024.pdf",
  },
  {
    ano: 2023,
    link: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/09/Plano-de-Acao-JaboataoPrev-2023.pdf",
  },
  {
    ano: 2022,
    link: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/10/Plano-de-Acao-2022.pdf",
  },
  {
    ano: 2021,
    link: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/10/Plano-de-acao-2021.pdf ",
  },
];

const PlanosAcao: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-b from-[#ffffff] to-[#01580e] text-white">


      <div className="text-center px-4 max-w-4xl py-28">
        <h2 className="Montserrat-SemiBold text-xl md:text-2xl font-light mb-10 uppercase text-green-900">
          Os documentos publicados estão em formato PDF. Clique nos botões
          abaixo para visualizar os arquivos em PDF.
        </h2>
        <div className="w-full max-w-lg space-y-4 mx-auto pb-7">
          {planos.map((plano) => (
            <a
              key={plano.ano}
              href={plano.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-900 border border-transparent hover:bg-[#156720] hover:border-2 hover:border-yellow-500 hover:text-yellow-500 transition-colors text-center py-3 rounded-lg shadow-md text-lg font-semibold"
            >
              PLANO DE AÇÃO {plano.ano}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlanosAcao;
