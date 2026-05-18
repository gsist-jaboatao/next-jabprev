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
        name: "Janeiro",
        url: "/Pdf/previdencia/provisoes-matematicas/2026/2026JANEIRO.pdf",
      },

      {
        name: "Fevereiro",
        url: "/Pdf/previdencia/provisoes-matematicas/2026/2026FEVEREIRO.pdf",
      },

      {
        name: "Março",
        url: "/Pdf/previdencia/provisoes-matematicas/2026/2026MARCO.pdf",
      },

      {
        name: "Abril",
        url: "/Pdf/previdencia/provisoes-matematicas/2026/2026ABRIL.pdf",
      },
    ],
  },

  "2025": {
    title: "2025",
    reports: [
      {
        name: "Janeiro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/Jaboatao-dos-Guararapes-PE-provisoes-matematica_11_2024-JANEIRO_2025.pdf",
      },

      {
        name: "Fevereiro",
        url: "/Pdf/previdencia/provisoes-matematicas/2025/PROVISOES_MATEMATICAS___FEVEREIRO.2025.pdf",
      },

      {
        name: "Março",
        url: "/Pdf/previdencia/provisoes-matematicas/2025/PROVISOES_MATEMATICAS___MARCO.2025.pdf",
      },

      {
        name: "Abril",
        url: "/Pdf/previdencia/provisoes-matematicas/2025/PROVISOES_MATEMATICAS___ABRIL.2025.pdf",
      },

      {
        name: "Maio",
        url: "/Pdf/previdencia/provisoes-matematicas/2025/4.1_PROVISOES_MATEMATICAS___MAIO.2025.pdf",
      },

      {
        name: "Junho",
        url: "/Pdf/previdencia/provisoes-matematicas/2025/4.1_PROVISOES_MATEMATICAS___JUNHO.2025.pdf",
      },

      {
        name: "Julho ",
        url: "/Pdf/previdencia/provisoes-matematicas/2025/3.1_PROVISOES_MATEMATICAS___JULHO.2025.pdf",
      },

      {
        name: "Agosto",
        url: "/Pdf/previdencia/provisoes-matematicas/2025/2.1_PROVISOES_MATEMATICAS___AGOSTO.2025.pdf",
      },

      {
        name: "Setembro ",
        url: "/Pdf/previdencia/provisoes-matematicas/2025/4.1_PROVISOES_MATEMATICAS___SETEMBRO.2025.pdf",
      },

      {
        name: "Outubro",
        url: "/Pdf/previdencia/provisoes-matematicas/2025/2.1_PROVISOES_MATEMATICAS___OUTUBRO.2025.pdf",
      },

      {
        name: "Novembro",
        url: "/Pdf/previdencia/provisoes-matematicas/2025/2.1_PROVISOES_MATEMATICAS___Novembro",
      },

      {
        name: "Dezembro",
        url: "/Pdf/previdencia/provisoes-matematicas/2025/2.1_PROVISOES_MATEMATICAS___Dezembro",
      },
    ],
  },

  "2024": {
    title: "2024",
    reports: [
      {
        name: "Janeiro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/07/01-PROVISAO-MATEMATICA.pdf",
      },

      {
        name: "Fevereiro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/07/02-PROVISAO-MATEMATICA.pdf",
      },

      {
        name: "Março",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/07/03-PROVISAO-MATEMATICA.pdf",
      },

      {
        name: "Abril",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/07/04-PROVISAO-MATEMATICA.pdf",
      },

      {
        name: "Maio",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/07/05-PROVISAO-MATEMATICA.pdf",
      },

      {
        name: "Junho",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/08/Jaboatao-dos-Guararapes-PE-provisoes-matematica_06_2024.pdf",
      },

      {
        name: "Julho ",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/08/Jaboatao-dos-Guararapes-PE-provisoes-matematica_07_2024.pdf",
      },

      {
        name: "Agosto",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/09/08-provisoes-matematica.pdf",
      },

      {
        name: "Setembro ",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/10/09-PROVISAO-MATEMATICA-Set.24.pdf",
      },

      {
        name: "Outubro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/11/10-PROVISAO-MATEMATICA-Out.24.pdf",
      },

      {
        name: "Novembro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/12/11-NOVEMBRO-DESPESAS-ADM-2024.pdf",
      },

      {
        name: "Dezembro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/12-PROVISAO-MATEMATICA.pdf",
      },
    ],
  },

  "2023": {
    title: "2023",
    reports: [
      {
        name: "Janeiro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/04/01-JANEIRO-PROVISAO-MATEMATICA.pdf",
      },

      {
        name: "Fevereiro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/04/02-FEVEREIRO-PROVISAO-MATEMATICA.pdf",
      },

      {
        name: "Março",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/04/03-MARCO-PROVISAO-MATEMATICA.pdf",
      },

      {
        name: "Abril",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/07/04-ABRIL-PROVISAO-MATEMATICA.pdf",
      },

      {
        name: "Maio",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/11/05-AGOSTO-PROVISAO-MATEMATICA.pdf",
      },

      {
        name: "Junho",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/11/06-JUNHO-PROVISAO-MATEMATICA.pdf",
      },

      {
        name: "Julho ",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/11/07-AGOSTO-PROVISAO-MATEMATICA.pdf",
      },

      {
        name: "Agosto",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/11/08-AGOSTO-PROVISAO-MATEMATICA.pdf",
      },

      {
        name: "Setembro ",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/11/09-AGOSTO-PROVISAO-MATEMATICA.pdf",
      },

      {
        name: "Outubro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/11/10-AGOSTO-PROVISAO-MATEMATICA.pdf",
      },

      {
        name: "Novembro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/02/11-NOVEMBRO-PROVISAO-MATEMATICA.pdf",
      },

      {
        name: "Dezembro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/07/12-DEZEMBRO-PROVISAO-MATEMATICA.pdf",
      },
    ],
  },

  "2022": {
    title: "2022",
    reports: [
      {
        name: "Janeiro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/10/01-Provisoes-Matematicas.pdf",
      },

      {
        name: "Fevereiro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/10/02-Provisoes-Matematicas.pdf",
      },

      {
        name: "Março",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/10/03-Provisoes-Matematicas.pdf",
      },

      {
        name: "Abril",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/10/04-Provisoes-Matematicas.pdf",
      },

      {
        name: "Maio",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/10/05-Provisoes-Matematicas.pdf",
      },

      {
        name: "Junho",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/10/06-Provisoes-Matematicas.pdf",
      },

      {
        name: "Julho ",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/10/07-Provisoes-Matematicas.pdf",
      },

      {
        name: "Agosto",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/10/08-Provisoes-Matematicas.pdf",
      },

      {
        name: "Setembro ",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/10/09-Provisoes-Matematicas.pdf",
      },

      {
        name: "Outubro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/02/10-Provisoes-Matematicas.pdf",
      },

      {
        name: "Novembro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/03/CONSOLIDADO_JABOATAODOSGUARARAPESPE_PROVISAOMATEMATICA_11_2022.pdf",
      },

      {
        name: "Dezembro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/02/12-Provisoes-Matematicas.pdf",
      },
    ],
  },
};

const FinancialReports: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#ffffff] via-[#dcecff] to-[#cbe1fc] min-h-screen pb-10">
      <div className="relative w-full">
      </div>

      {Object.keys(reportsData)
        .sort((a, b) => Number(b) - Number(a))
        .map((year) => {
          const { title, reports } = reportsData[year];
          return (
            <div key={year} className="max-w-5xl mx-auto lg:px-4 px-20 uppercase">
              <h2 className="text-5xl font-bold text-blue-900 mt-14">
                {title}
              </h2>
              <hr className="border-t-2 border-blue-900 w-16 mb-4" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {reports.map((report, index) => (
                  <a
                    key={`${year}-${index}`}
                    href={report.url}
                    target={report.url === "#" ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    className={`text-xl flex justify-between p-2 rounded-lg transition ${
                      report.url === "#"
                        ? "text-gray-500 cursor-default pointer-events-none"
                        : "text-[#051f60] hover:underline"
                    }`}
                  >
                    <span>{report.name}</span>
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
