"use client";
import React from "react";

interface Report {
  name: string;
  url: string;
}

interface ReportsByYear {
  [year: string]: {
    title: string;
    reports: Report[];
  };
}

const reportsData: ReportsByYear = {
  "2026": {
    title: "2026",
    reports: [
      {
        name: "Janeiro – 2026",
        url: "/Pdf/investimentos/relatorio-mensais/JANEIRO2026.pdf",
      },
      {
        name: "Fevereiro – 2026",
        url: "/Pdf/investimentos/relatorio-mensais/FEVEREIRO2026.pdf",
      },
    ],
  },

  "2025": {
    title: "2025",
    reports: [
      {
        name: "Janeiro – 2025",
        url: "/Pdf/investimentos/relatorio-mensais/5.4_JANEIRO_2025_compressed.pdf",
      },
      {
        name: "Fevereiro – 2025",
        url: "/Pdf/investimentos/relatorio-mensais/5.4_FEVEREIRO_2025_compressed.pdf",
      },
      {
        name: "Março – 2025",
        url: "/Pdf/investimentos/relatorio-mensais/5.4_MARCO_2025_compressed.pdf",
      },
      {
        name: "Abril – 2025",
        url: "/Pdf/investimentos/relatorio-mensais/3.2_ABRIL_2025_compressed.pdf",
      },
      {
        name: "Maio – 2025",
        url: "/Pdf/investimentos/relatorio-mensais/5.1_MAIO_2025.pdf",
      },
      {
        name: "Junho – 2025",
        url: "/Pdf/investimentos/relatorio-mensais/3.1_ARP___JUNHO_2025.pdf",
      },
      {
        name: "Julho – 2025",
        url: "/Pdf/investimentos/relatorio-mensais/7.JULHO 2025.pdf",
      },
      {
        name: "Agosto – 2025",
        url: "/Pdf/investimentos/relatorio-mensais/7. JULHO 2025.pdf",
      },
      {
        name: "Setembro – 2025",
        url: "/Pdf/investimentos/relatorio-mensais/2.1_SETEMBRO_2025.pdf",
      },
      {
        name: "Outubro – 2025",
        url: "/Pdf/investimentos/relatorio-mensais/2.1_OUTUBRO_2025.pptx.pdf",
      },
      {
        name: "Novembro – 2025",
        url: "/Pdf/investimentos/relatorio-mensais/3.2_NOVEMBRO_2025.pdf",
      },
      {
        name: "Dezembro – 2025",
        url: "/Pdf/investimentos/relatorio-mensais/3.2_DEZEMBRO_2025",
      },
    ],
  },

  "2024": {
    title: "2024",
    reports: [
      {
        name: "Janeiro – 2024",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/04/01.-JANEIRO-2024.pdf",
      },
      {
        name: "Fevereiro – 2024",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/04/02.-FEVEREIRO-2024.pdf",
      },
      {
        name: "Março – 2024",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/07/03.-MARCO-2024-1.pdf",
      },
      {
        name: "Abril – 2024",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/07/04.-ABRIL-2024.pptx",
      },
      {
        name: "Maio – 2024",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/07/05.-MAIO-2024.pptx",
      },
      {
        name: "Junho – 2024",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/07/06.-JUNHO-2024.pdf",
      },
      {
        name: "Julho – 2024",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/09/07.-JULHO-2024.pdf",
      },
      {
        name: "Agosto – 2024",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/09/08.-AGOSTO-2024.pdf",
      },
      {
        name: "Setembro – 2024",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/10/09.-SETEMBRO-2024.pdf",
      },
      {
        name: "Outubro – 2024",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/11/10.-OUTUBRO-2024.pdf",
      },
      {
        name: "Novembro – 2024",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/01/11.-NOVEMBRO-2024.pdf",
      },
      {
        name: "Dezembro – 2024",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/12.-DEZEMBRO-2024.pptx",
      },
    ],
  },

  "2023": {
    title: "2023",
    reports: [
      {
        name: "Janeiro – 2023",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/03/01.-JANEIRO-2023-1.pdf",
      },
      {
        name: "Fevereiro – 2023",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/04/02.-FEVEREIRO-2023.pdf",
      },
      {
        name: "Março – 2023",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/07/03.-MARCO-2023.pdf",
      },
      {
        name: "Abril – 2023",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/07/04.-ABRIL-2023.pdf",
      },
      {
        name: "Maio – 2023",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/07/05.-MAIO-2023.pdf",
      },
      {
        name: "Junho – 2023",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/08/06.-JUNHO-2023.pdf",
      },
      {
        name: "Julho – 2023",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/08/07.-JULHO-2023.pdf",
      },
      {
        name: "Agosto – 2023",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/10/08.-AGOSTO-2023.pdf",
      },
      {
        name: "Setembro – 2023",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/10/09.-SETEMBRO-2023.pdf",
      },
      {
        name: "Outubro – 2023",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/03/10.-OUTUBRO-2023.pdf",
      },
      {
        name: "Novembro – 2023",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/03/11.-NOVEMBRO-2023.pdf",
      },
      {
        name: "Dezembro – 2023",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/03/12.-DEZEMBRO-2023.pdf",
      },
    ],
  },

  "2022": {
    title: "2022",
    reports: [
      {
        name: "Janeiro – 2022",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/08/01.-Relatorio-Janeiro-2022.pdf",
      },
      {
        name: "Fevereiro – 2022",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/08/02.-Relatorio-de-Fevereiro-2022.pdf",
      },
      {
        name: "Março – 2022",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/08/03.-Relatorio-de-Marco-2022.pdf",
      },
      {
        name: "Abril – 2022",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/08/04.-Relatorio-de-Abril-2022.pdf",
      },
      {
        name: "Maio – 2022",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/08/05.-Relatorio-de-Maio-2022.pdf",
      },
      {
        name: "Junho – 2022",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/08/06.-Relatorio-de-Junho-2022.pdf",
      },
      {
        name: "Julho – 2022",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/09/07.-Relatorio-de-Julho-2022.pdf",
      },
      {
        name: "Agosto – 2022",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/10/08.-Relatorio-de-Agosto-2022.pdf",
      },
      {
        name: "Setembro – 2022",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/11/09.-Relatorio-de-Setembro-2022.pdf",
      },
      {
        name: "Outubro – 2022",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/12/10.-Relatorio-de-Outubro-2022_compressed.pdf",
      },
      {
        name: "Novembro – 2022",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/01/11.-Relatorio-de-Novembro-2022-1.pdf",
      },
      {
        name: "Dezembro – 2022",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/02/12.-Relatorio-de-Dezembro-2022.pptx.pdf",
      },
    ],
  },


  "2021": {
    title: "20213",
    reports: [
      {
        name: "Janeiro – 2021",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/08/1.-Relatorio-Janeiro.2021.pdf",
      },
      {
        name: "Fevereiro – 2021",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/08/2.-Relatorio-Fevereiro.2021.pdf",
      },
      {
        name: "Março – 2021",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/08/3.-Relatorio-Marco.2021.pdf",
      },
      {
        name: "Abril – 2021",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/08/4.-Relatorio-Abril.2021.pdf",
      },
      {
        name: "Maio – 2021",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/08/5.-Relatorio-Maio.2021.pdf",
      },
      {
        name: "Junho – 2021",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/09/6.-Relatorio-Junho.2021.pdf",
      },
      {
        name: "Julho – 2021",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/09/7.-Relatorio-Julho.2021.pdf",
      },
      {
        name: "Agosto – 2021",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/09/8.-Relatorio-Agosto.2021.pdf",
      },
      {
        name: "Setembro – 2021",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/11/9.-Relatorio-Setembro.2021.pdf",
      },
      {
        name: "Outubro – 2021",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/01/10.-Relatorio-Outubro-2021.pdf",
      },
      {
        name: "Novembro – 2021",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/01/11.-Relatorio-Novembro-2021.pdf",
      },
      {
        name: "Dezembro – 2021",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/02/12.-Relatorio-Dezembro-2021.pdf",
      },
    ],
  },


  "2020": {
    title: "2020",
    reports: [
      {
        name: "Janeiro – 2020",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/09/Relatorio-Mensal-de-Investimentos-2020-01-Jan.pdf",
      },
      {
        name: "Fevereiro – 2020",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/07/Relatorio-Mensal-de-Investimentos-2020-02-Fev.pdf",
      },
      {
        name: "Março – 2020",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/09/Relatorio-de-Investimentos-2020-03-Mar.pdf",
      },
      {
        name: "Abril – 2020",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/07/Relatorio-de-Investimentos-2020-04-Abr-1.pdf",
      },
      {
        name: "Maio – 2020",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/08/Relatorio-Mensal-de-Investimentos-2020-05-Mai.pdf",
      },
      {
        name: "Junho – 2020",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/08/Relatorio-Mensal-de-Investimentos-2020-06-Jun.pdf",
      },
      {
        name: "Julho – 2020",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/09/Relatorio-de-Investimentos-2020-07-Jul.pdf",
      },
      {
        name: "Agosto – 2020",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/02/Relatorio-de-Investimentos-08.2020-Revisada.pdf",
      },
      {
        name: "Setembro – 2020",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/02/Relatorio-de-Investimentos-09.2020-Revisado.pdf",
      },
      {
        name: "Outubro – 2020",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/06/Relatorio-Outubro.2020.pdf",
      },
      {
        name: "Novembro – 2020",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/06/Relatorio-Novembro.2020.pdf",
      },
      {
        name: "Dezembro – 2020",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/06/Relatorio-Dezembro.2020.pdf",
      },
    ],
  },


  "2019": {
    title: "2019",
    reports: [
      {
        name: "1ª trimestre ",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/06/Relatorio-Trimestral-de-Investimentos-1a-Trimestre-2019.pdf",
      },
      {
        name: "2ª trimestre ",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/06/Relatorio-Trimestral-de-Investimentos-2a-Trimestre-2019.pdf",
      },
      {
        name: "Julho – 2019",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/06/Relatorio-Mensal-de-Investimentos-2019-07-Jul.pdf",
      },
      {
        name: "Agosto – 2019",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/06/Relatorio-Mensal-de-Investimentos-2019-08-Ago.pdf",
      },
      {
        name: "Setembro – 2019",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/06/Relatorio-Mensal-de-Investimentos-2019-09-Set.pdf",
      },
      {
        name: "Outubro – 2019",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/06/Relatorio-Mensal-de-Investimentos-2019-10-Out.pdf",
      },
      {
        name: "Novembro – 2019",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/06/Relatorio-Mensal-de-Investimentos-2019-11-Nov.pdf",
      },
      {
        name: "Dezembro – 2019",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/06/Relatorio-Mensal-de-Investimentos-2019-12-Dez.pdf",
      },
      {
        name: "Relatório Anual",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/09/Relatorio-de-Rentabilidade-da-Carteira-de-Investimentos-de-2019.pdf",
      },
    ],
  },
};

const FinancialReports: React.FC = () => {
  return (
    <div className="h-auto bg-gradient-to-b from-[#ffffff] via-[#dcecff] to-[#cbe1fc] p-10">
      {Object.keys(reportsData)
        .sort((a, b) => Number(b) - Number(a))
        .map((year) => {
          const { title, reports } = reportsData[year];
          return (
            <div key={year} className="max-w-5xl mx-auto">
              <h2 className="text-5xl font-bold text-blue-900 mt-14">
                {title}
              </h2>
              <hr className="border-t-2 border-blue-900 w-16 mb-4" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {reports.map((report, index) => (
                  <a
                    key={report.url}
                    href={report.url}
                    className={`text-blue-900 text-xl hover:underline ${
                      index === 6 ? "text-blue-600" : ""
                    }`}
                  >
                    {report.name}
                  </a>
                ))}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default FinancialReports;
