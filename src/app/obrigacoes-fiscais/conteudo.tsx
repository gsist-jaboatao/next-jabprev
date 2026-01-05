"use client";

import React from "react";

const Links = () => (
  <div className="h-auto bg-gradient-to-b from-[#ffffff] via-[#dcecff] to-[#cbe1fc]">

    <div className="mx-auto max-w-6xl p-6 py-20">
      <h1 className="text-2xl font-bold mb-4 uppercase text-blue-950 leading-tight">
        CNPJ: 04.811.561/0001-21
      </h1>

      <ul className="pl-5 text-[#051f60] text-xl pb-20">

        <li className="py-2">
          <a
            href="Pdf/administrativo/obrigacoes-fiscais/3.5_Certidao_de_Regularidade_do_FGTS___De_abril_a_Maio.2025.pdf"
            target="_blank"
            className="text-blue-800 hover:underline"
          >
            Certidão de Regularidade do FGTS
          </a>
        </li>

        <li className="py-2">
          <a
            href="Pdf/administrativo/obrigacoes-fiscais/3.5_Certidao_de_Regularidade_da_Divida_Ativa_da_Uniao_e_do_INSS___De_abril_a_outubro.2025.pdf"
            target="_blank"
            className="text-blue-800 hover:underline"
          >
            Certidão de Regularidade da Divida Ativa da União e do INSS
          </a>
        </li>

        <li className="py-2">
          <a
            href="https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/07/COMPROVANTE-DO-CNPJ.pdf"
            target="_blank"
            className="text-blue-800 hover:underline"
          >
            Consultar CNPJ
          </a>
        </li>

        <li className="py-2">
          <a
            href="Pdf/administrativo/obrigacoes-fiscais/3.5_Certidao_Negativa_Estadual___De_Maio_a_junho.2025.pdf"
            target="_blank"
            className="text-blue-800 hover:underline"
          >
            Certidão Negativa Estadual
          </a>
        </li>

        <li className="py-2">
          <a
            href="Pdf/administrativo/obrigacoes-fiscais/CRF-20250307183.pdf"
            target="_blank"
            className="text-blue-800 hover:underline"
          >
            Certidão Negativa Municipal
          </a>
        </li>

        <li className="py-2">
          <a
            href="Pdf/administrativo/obrigacoes-fiscais/2.3_CERTIDAO_NEGATIVA_DE_DEBITOS_TRABALHISTAS___Maio.2026.pdf"
            target="_blank"
            className="text-blue-800 hover:underline"
          >
            Certidão Negativa de Débitos Trabalhistas
          </a>
        </li>
      </ul>
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
