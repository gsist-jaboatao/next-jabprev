"use client";
import React from "react";

interface ProcessoData {
  processo: string;
  juizo: string;
  assunto: string;
}

const processos: ProcessoData[] = [
  {
    processo: "0029010-16.2024.8.17.2810",
    juizo: "2ª VARA DA FAZENDA PÚBLICA DA COMARCA DE JABOATÃO DOS GUARARAPES",
    assunto: "DESCONTOS PREVIDENCIÁRIOS",
  },
  {
    processo: "0009958-34.2024.8.17.2810",
    juizo: "2ª VARA DA FAZENDA PÚBLICA DA COMARCA DE JABOATÃO DOS GUARARAPES",
    assunto: "PENSÃO POR MORTE",
  },
  {
    processo: "0011415-43.2020.8.17.2810",
    juizo: "2ª VARA DA FAZENDA PÚBLICA DA COMARCA DE JABOATÃO DOS GUARARAPES",
    assunto: "TERÇO DE FÉRIAS",
  },
  {
    processo: "0031571-13.2024.8.17.2810",
    juizo: "2ª VARA DA FAZENDA PÚBLICA DA COMARCA DE JABOATÃO DOS GUARARAPES",
    assunto: "PENSÃO POR MORTE",
  },
  {
    processo: "0031779-94.2024.8.17.2810",
    juizo: "1ª VARA DA FAZENDA PÚBLICA DA COMARCA DE JABOATÃO DOS GUARARAPES",
    assunto: "LICENÇA PRÊMIO",
  },
  {
    processo: "0027683-36.2024.8.17.2810",
    juizo: "2ª VARA DA FAZENDA PÚBLICA DA COMARCA DE JABOATÃO DOS GUARARAPES",
    assunto: "PENSÃO POR MORTE",
  },
  {
    processo: "0031042-91.2024.8.17.2810",
    juizo: "1ª VARA DA FAZENDA PÚBLICA DA COMARCA DE JABOATÃO DOS GUARARAPES",
    assunto: "LICENÇA PRÊMIO",
  },
  {
    processo: "0000589-79.2025.8.17.2810",
    juizo: "1ª VARA DA FAZENDA PÚBLICA DA COMARCA DE JABOATÃO DOS GUARARAPES",
    assunto: "LICENÇA PRÊMIO",
  },
  {
    processo: "0005845-03.2025.8.17.2810",
    juizo: "2ª VARA DA FAZENDA PÚBLICA DA COMARCA DE JABOATÃO DOS GUARARAPES",
    assunto: "MANDADO DE SEGURANÇA",
  },
  {
    processo: "0061728-03.2023.8.17.2810",
    juizo: "2ª VARA DA FAZENDA PÚBLICA DA COMARCA DE JABOATÃO DOS GUARARAPES",
    assunto: "PENSÃO POR MORTE",
  },
  {
    processo: "0031046-31.2024.8.17.2810",
    juizo: "2ª VARA DA FAZENDA PÚBLICA DA COMARCA DE JABOATÃO DOS GUARARAPES",
    assunto: "LICENÇA PRÊMIO",
  },
  {
    processo: "0000590-64.2025.8.17.2810",
    juizo: "2ª VARA DA FAZENDA PÚBLICA DA COMARCA DE JABOATÃO DOS GUARARAPES",
    assunto: "LICENÇA PRÊMIO",
  },
  {
    processo: "0000699-78.2025.8.17.2810",
    juizo: "2ª VARA DA FAZENDA PÚBLICA DA COMARCA DE JABOATÃO DOS GUARARAPES",
    assunto: "LICENÇA PRÊMIO",
  },
  {
    processo: "0027004-36.2024.8.17.2810",
    juizo: "2ª VARA DA FAZENDA PÚBLICA DA COMARCA DE JABOATÃO DOS GUARARAPES",
    assunto: "ISENÇÃO - IR",
  },
  {
    processo: "0029403-09.2022.8.17.2810",
    juizo: "1ª VARA DA FAZENDA PÚBLICA DA COMARCA DE JABOATÃO DOS GUARARAPES",
    assunto: "PENSÃO POR MORTE",
  },
  {
    processo: "0039463-46.2019.8.17.2810",
    juizo: "2ª VARA DA FAZENDA PÚBLICA DA COMARCA DE JABOATÃO DOS GUARARAPES",
    assunto: "LIQUIDAÇÃO DE SENTENÇA",
  },
  {
    processo: "0126989-77.2024.8.17.2001",
    juizo: "2ª VARA DA FAZENDA PÚBLICA DA COMARCA DE JABOATÃO DOS GUARARAPES",
    assunto: "DEFESA - DECLARAÇÃO DE ISENÇÃO DE IR C/C REPETIÇÃO DE INDÉBITO",
  },
];

const JudicialReportTable: React.FC = () => {
  return (
    <div className="py-14 max-w-[1500px] mx-auto">

      <div className="w-full overflow-x-auto">
        <div className="min-w-[768px]">
          <table className="w-full border border-gray-300">
            <thead className="bg-[#3498db] text-white text-base md:text-lg uppercase">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">
                  Processo
                </th>
                <th className="border border-gray-300 px-3 py-2 text-left">
                  Juízo
                </th>
                <th className="border border-gray-300 px-3 py-2 text-left">
                  Assunto
                </th>
              </tr>
            </thead>
            <tbody className="text-sm md:text-base text-gray-800">
              {processos.map((item, index) => (
                <tr key={index} className="even:bg-gray-100">
                  <td className="border border-gray-300 px-3 py-2">
                    {item.processo}
                  </td>
                  <td className="border border-gray-300 px-3 py-2">
                    {item.juizo}
                  </td>
                  <td className="border border-gray-300 px-3 py-2">
                    {item.assunto}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default JudicialReportTable;
