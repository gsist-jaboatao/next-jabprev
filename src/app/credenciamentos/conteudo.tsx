import React from "react";

interface Credenciamento {
  ano: string;
  tipo: string;
  instituicao: string;
  tipoInstituicao: string;
  dataCredenciamento: string;
  dataValidade: string;
  downloadLink: string;
}

const dados: Credenciamento[] = [
  {
    ano: "2023.2",
    tipo: "Inciso I, do § 2º, do art. 21 da Res CMN nº 4.963/2021",
    instituicao:
      "BB GESTÃO DE RECURSOS - DISTRIBUIDORA DE TÍTULOS E VALORES MOBILIÁRIOS",
    tipoInstituicao: "ADMINISTRADOR",
    dataCredenciamento: "31/12/2025",
    dataValidade: "31/12/2027",
    downloadLink: "#",
  },
  {
    ano: "2023.2",
    tipo: "-",
    instituicao: "BNY MELLON SERVIÇOS FINANCEIROS DTVM S.A.",
    tipoInstituicao: "ADMINISTRADOR",
    dataCredenciamento: "30/09/2024",
    dataValidade: "30/09/2026",
    downloadLink: "#",
  },
  {
    ano: "2023.2",
    tipo: "Inciso I, do § 2º, do art. 21 da Res CMN nº 4.963/2021",
    instituicao: "INTRAG DISTRIBUIDORA DE TÍTULOS E VALORES MOBILIÁRIOS LTDA",
    tipoInstituicao: "ADMINISTRADOR",
    dataCredenciamento: "01/11/2025",
    dataValidade: "01/11/2027",
    downloadLink: "#",
  },
  {
    ano: "2023.2",
    tipo: "Inciso I, do § 2º, do art. 21 da Res CMN nº 4.963/2021",
    instituicao: "CAIXA ECONÔMICA FEDERAL",
    tipoInstituicao: "ADMINISTRADOR",
    dataCredenciamento: "01/08/2023",
    dataValidade: "01/08/2025",
    downloadLink: "#",
  },
  {
    ano: "2021.2",
    tipo: "Inciso I, do § 2º, do art. 21 da Res CMN nº 4.963/2021",
    instituicao: "CAIXA DISTRIBUIDOR DE VALORES MOBILIÁRIOS",
    tipoInstituicao: "DISTRIBUIDOR",
    dataCredenciamento: "07/08/2023",
    dataValidade: "07/08/2025",
    downloadLink: "#",
  },
  {
    ano: "2021.2",
    tipo: "-",
    instituicao: "RJI CTVM LTDA",
    tipoInstituicao: "ADMINISTRADOR",
    dataCredenciamento: "07/08/2023",
    dataValidade: "07/08/2025",
    downloadLink: "#",
  },
  {
    ano: "2021.2",
    tipo: "-",
    instituicao: "BRPP GESTÃO DE PRODUTOS ESTRUTURADOS LTDA",
    tipoInstituicao: "GESTOR",
    dataCredenciamento: "30/09/2024",
    dataValidade: "30/09/2026",
    downloadLink: "#",
  },
  {
    ano: "2023.2",
    tipo: "-",
    instituicao: "GRAPHEN INVESTIMENTOS LTDA",
    tipoInstituicao: "GESTOR",
    dataCredenciamento: "01/08/2023",
    dataValidade: "01/08/2025",
    downloadLink: "#",
  },
  {
    ano: "2023.2",
    tipo: "-",
    instituicao: "FINACAP INVESTIMENTOS LTDA",
    tipoInstituicao: "GESTOR",
    dataCredenciamento: "31/12/2025",
    dataValidade: "31/12/2027",
    downloadLink: "#",
  },
  {
    ano: "2023.2",
    tipo: "-",
    instituicao: "ARRECIFE AGENTE AUTÔNOMO DE INVESTIMENTOS S/S LTDA",
    tipoInstituicao: "DISTRIBUIDOR",
    dataCredenciamento: "07/08/2023",
    dataValidade: "07/08/2025",
    downloadLink: "#",
  },
  {
    ano: "2023.2",
    tipo: "Inciso I, do § 2º, do art. 21 da Res CMN nº 4.963/2021",
    instituicao: "SANTANDER CACEIS BRASIL DTVM",
    tipoInstituicao: "ADMINISTRADOR",
    dataCredenciamento: "09/08/2023",
    dataValidade: "09/08/2025",
    downloadLink: "#",
  },
  {
    ano: "2021.2",
    tipo: "Inciso I, do § 2º, do art. 21 da Res CMN nº 4.963/2021",
    instituicao: "BANCO DO BRASIL S.A.",
    tipoInstituicao: "DISTRIBUIDOR",
    dataCredenciamento: "07/08/2023",
    dataValidade: "07/08/2025",
    downloadLink: "#",
  },

  {
    ano: "2022.1",
    tipo: "Inciso I, do § 2º, do art. 21 da Res CMN nº 4.963/2021",
    instituicao: "BANCO BRADESCO S/A",
    tipoInstituicao: "ADMINISTRADOR",
    dataCredenciamento: "26/04/2024",
    dataValidade: "30/09/2026",
    downloadLink: "#",
  },

  {
    ano: "2022.1",
    tipo: "Inciso I, do § 2º, do art. 21 da Res CMN nº 4.963/2021",
    instituicao: "BEM DTVM LTDA",
    tipoInstituicao: "ADMINISTRADOR",
    dataCredenciamento: "04/04/2024",
    dataValidade: "30/09/2026",
    downloadLink: "#",
  },

  {
    ano: "2022.1",
    tipo: "Inciso I, do § 2º, do art. 21 da Res CMN nº 4.963/2021",
    instituicao: "BANCO BNP PARIBAS BRASIL S.A. ",
    tipoInstituicao: "ADMINISTRADOR",
    dataCredenciamento: "05/04/2024",
    dataValidade: "09/30/2026",
    downloadLink: "#",
  },

  {
    ano: "2022.1",
    tipo: "Inciso I, do § 2º, do art. 21 da Res CMN nº 4.963/2021",
    instituicao: "ITAÚ UNIBANCO S.A.",
    tipoInstituicao: "ADMINISTRADOR",
    dataCredenciamento: "05/04/2024",
    dataValidade: "09/30/2026",
    downloadLink: "#",
  },

  {
    ano: "2022.1",
    tipo: "Inciso I, do § 2º, do art. 21 da Res CMN nº 4.963/2021",
    instituicao: "BTG PACTUAL SERVIÇOS FINANCEIROS S.A DTVM",
    tipoInstituicao: "ADMINISTRADOR",
    dataCredenciamento: "05/04/2024",
    dataValidade: "09/30/2026",
    downloadLink: "#",
  },

  {
    ano: "2022.1",
    tipo: "Inciso I, do § 2º, do art. 21 da Res CMN nº 4.963/2021",
    instituicao: "BNP PARIBAS ASSET MANAGEMENT BRASIL LTDA.",
    tipoInstituicao: "GESTOR",
    dataCredenciamento: "05/04/2024",
    dataValidade: "30/09/2026",
    downloadLink: "#",
  },

  {
    ano: "2022.1",
    tipo: "Inciso I, do § 2º, do art. 21 da Res CMN nº 4.963/2021",
    instituicao: "BRAM - BRADESCO ASSET MANAGEMENT S.A. - DTVM",
    tipoInstituicao: "GESTOR",
    dataCredenciamento: "26/04/2024",
    dataValidade: "30/09/2026",
    downloadLink: "#",
  },

  {
    ano: "2021.2",
    tipo: "Inciso I, do § 2º, do art. 21 da Res CMN nº 4.963/2021",
    instituicao: "BTG PACTUAL ASSET MANAGEMENT S.A. DTVM",
    tipoInstituicao: "GESTOR",
    dataCredenciamento: "05/04/2024",
    dataValidade: "30/09/2026",
    downloadLink: "#",
  },

  {
    ano: "2021.2",
    tipo: "Inciso I, do § 2º, do art. 21 da Res CMN nº 4.963/2021",
    instituicao: "BTG PACTUAL WM GESTAO DE RECURSOS LTDA.",
    tipoInstituicao: "GESTOR",
    dataCredenciamento: "05/04/2024",
    dataValidade: "03/04/2026",
    downloadLink: "#",
  },

  {
    ano: "2022.1",
    tipo: "-",
    instituicao: "ICATU VANGUARDA GESTÃO DE RECURSOS LTDA.",
    tipoInstituicao: "GESTOR",
    dataCredenciamento: "12/04/2024",
    dataValidade: "12/04/2026",
    downloadLink: "#",
  },

  {
    ano: "2022.1",
    tipo: "-",
    instituicao: "AZ QUEST INVESTIMENTOS LTDA",
    tipoInstituicao: "GESTOR",
    dataCredenciamento: "04/04/2024",
    dataValidade: "03/04/2026",
    downloadLink: "#",
  },

  {
    ano: "2022.1",
    tipo: "-",
    instituicao: "SOMMA INVESTIMENTOS S.A",
    tipoInstituicao: "GESTOR",
    dataCredenciamento: "10/05/2024",
    dataValidade: "30/09/2026",
    downloadLink: "#",
  },

  {
    ano: "2022.1",
    tipo: "Inciso I, do § 2º, do art. 21 da Res CMN nº 4.963/2021",
    instituicao: "XP ALLOCATION ASSET MANAGEMENT LTDA",
    tipoInstituicao: "GESTOR",
    dataCredenciamento: "12/04/2023",
    dataValidade: "11/04/2025",
    downloadLink: "#",
  },

  {
    ano: "2022.1",
    tipo: "Inciso I, do § 2º, do art. 21 da Res CMN nº 4.963/2021",
    instituicao: "XP GESTÃO DE RECURSOS LTDA",
    tipoInstituicao: "GESTOR",
    dataCredenciamento: "12/04/2023",
    dataValidade: "11/04/2025",
    downloadLink: "#",
  },

  {
    ano: "2022.1",
    tipo: "-",
    instituicao: " XP GESTÃO DE RECURSOS LTDA",
    tipoInstituicao: "CUSTODIANTE",
    dataCredenciamento: "11/04/2025",
    dataValidade: "11/04/2025",
    downloadLink: "#",
  },

  {
    ano: "2022.1",
    tipo: "-",
    instituicao: "GRID AGENTE AUTONOMO DE INVESTIMENTO LTDA",
    tipoInstituicao: "DISTRIBUIDOR",
    dataCredenciamento: "12/04/2024",
    dataValidade: "13/04/2026",
    downloadLink: "#",
  },

  {
    ano: "2022.1",
    tipo: "-",
    instituicao: " PRIVATIZA AGENTES AUTÔNOMOS DE INVESTIMENTOS",
    tipoInstituicao: "DISTRIBUIDOR",
    dataCredenciamento: "04/04/2024",
    dataValidade: "30/09/2026",
    downloadLink: "#",
  },

  {
    ano: "2022.1",
    tipo: "Inciso I, do § 2º, do art. 21 da Res CMN nº 4.963/2021",
    instituicao:
      "XP INVESTIMENTOS CORRETORA DE CAMBIO, TITULOS E VALORES MOBILIARIOS S/A",
    tipoInstituicao: "DISTRIBUIDOR",
    dataCredenciamento: "12/04/2024",
    dataValidade: "11/04/2026",
    downloadLink: "#",
  },

  {
    ano: "2022.2",
    tipo: "-",
    instituicao: "PERFORME AGENTES AUTÔNOMOS DE INVESTIMENTOS LTDA",
    tipoInstituicao: "DISTRIBUIDOR",
    dataCredenciamento: "28/07/2024",
    dataValidade: "30/09/2026",
    downloadLink: "#",
  },

  {
    ano: "2020.2",
    tipo: "-",
    instituicao: "MULTINVEST CAPITAL ADM DE RECURSOS LTDA",
    tipoInstituicao: "GESTOR",
    dataCredenciamento: "30/09/2024",
    dataValidade: "30/09/2026",
    downloadLink: "#",
  },

  {
    ano: "2024.2",
    tipo: "-",
    instituicao: "RIO BRAVO INVESTIMENTOS",
    tipoInstituicao: "GESTOR",
    dataCredenciamento: "01/07/2024",
    dataValidade: "30/06/2026",
    downloadLink: "#",
  },

  {
    ano: "2024.2",
    tipo: "-",
    instituicao: "BANCO SANTANDER",
    tipoInstituicao: "EMISSOR",
    dataCredenciamento: "01/10/2024'",
    dataValidade: "01/10/2026",
    downloadLink: "#",
  },

  {
    ano: "2024.2",
    tipo: "-",
    instituicao: "BANCO DO NORDESTE DO BRASIL S/A",
    tipoInstituicao: "GESTOR",
    dataCredenciamento: "01/11/2024",
    dataValidade: "01/11/2026",
    downloadLink: "#",
  },

  {
    ano: "2025.1",
    tipo: "-",
    instituicao: "4UM GESTAO DE RECURSOS LTDA",
    tipoInstituicao: "GESTOR",
    dataCredenciamento: "03/02/2025",
    dataValidade: "03/02/2027",
    downloadLink: "#",
  },

  {
    ano: "2025.1",
    tipo: "-",
    instituicao: "Sul América Investimentos Gestora de Recursos S.A.",
    tipoInstituicao: "GESTOR",
    dataCredenciamento: "03/02/2025",
    dataValidade: "03/02/2027",
    downloadLink: "#",
  },

  {
    ano: "2022.1",
    tipo: "-",
    instituicao: "RENASCENÇA DISTRIBUIDORA DE TÍTULOS E VALORES",
    tipoInstituicao: "CORRETORA",
    dataCredenciamento: "10/05/2024",
    dataValidade: "30/05/2026",
    downloadLink: "#",
  },
];

const TabelaCredenciamento: React.FC = () => {
  return (
    <div className="overflow-x-auto p-10">
      <table className="w-full border-collapse border border-gray-300 text-sm text-left ">
        <thead className="bg-blue-900 text-white">
          <tr>
            <th className="border border-gray-300 p-2">ANO</th>
            <th className="border border-gray-300 p-2">TIPO</th>
            <th className="border border-gray-300 p-2">
              INSTITUIÇÕES CREDENCIADAS
            </th>
            <th className="border border-gray-300 p-2">TIPO DE INSTITUIÇÃO</th>
            <th className="border border-gray-300 p-2">
              DATA DO CREDENCIAMENTO
            </th>
            <th className="border border-gray-300 p-2">DATA DE VALIDADE</th>
            <th className="border border-gray-300 p-2">DOWNLOAD</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item, index) => (
            <tr key={index} className="odd:bg-gray-100 even:bg-white">
              <td className="border border-gray-300 p-2">{item.ano}</td>
              <td className="border border-gray-300 p-2">{item.tipo}</td>
              <td className="border border-gray-300 p-2">{item.instituicao}</td>
              <td className="border border-gray-300 p-2">
                {item.tipoInstituicao}
              </td>
              <td className="border border-gray-300 p-2">
                {item.dataCredenciamento}
              </td>
              <td className="border border-gray-300 p-2">
                {item.dataValidade}
              </td>
              <td className="border border-gray-300 p-2">
                <a
                  href={item.downloadLink}
                  className="text-blue-500 hover:underline"
                >
                  TERMO DE CREDENCIAMENTO
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaCredenciamento;
