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
  "2025": {
    title: "2025",
    reports: [
      {
        name: "Janeiro - Fevereiro",
        url: "Pdf/cad-prev/dipr/JANEIRO___FEVEREIRO_2025.pdf",
      },

      {
        name: "Março - Abril",
        url: "Pdf/cad-prev/dipr/5.1_MARCO___ABRIL_2025.pdf",
      },

      {
        name: "Maio - Junho",
        url: "Pdf/cad-prev/dipr/4.1_MAIO___JUNHO.pdf",
      },

      {
        name: "Julho -Agosto",
        url: "Pdf/cad-prev/dipr/6.1_DIPR___JULHO___AGOSTO_2025.pdf",
      },

      {
        name: "Setembro - Outubro",
        url: "Pdf/cad-prev/dipr/4.1_SETEMBRO___OUTUBRO.pdf",
      },

      {
        name: "Novembro- Dezembro",
        url: "Pdf/cad-prev/dipr/4.1_NOVEMBRO_DEZEMBRO_2025.pdf",
      },
    ],
  },

  "2024": {
    title: "2024",
    reports: [
      {
        name: "Janeiro - FEVEREIRO",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/07/DIPR_JAN-E-FEV_2024.pdf",
      },

      {
        name: "Março - abril",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/07/DIPR_MAR-E-ABR_2024.pdf",
      },

      {
        name: "Maio - junho",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/07/DIPR_MAI-E-JUN_2024.pdf",
      },

      {
        name: "Julho - agosto",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/10/DIPR_JUL-E-AGO_2024.pdf",
      },

      {
        name: "Setembro - outubro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/12/DIPR_SET-E-OUT_2024.pdf",
      },

      {
        name: "Novembro - dezembro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/DIPR_20250213.pdf",
      },
    ],
  },

  "2023": {
    title: "2023",
    reports: [
      {
        name: "Janeiro - fevereiro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/08/DIPR_JAN_FEV_2023.pdf",
      },

      {
        name: "Março - abril",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/08/DIPR_MAR_ABR_2023.pdf",
      },

      {
        name: "Maio - junho",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/08/DIPR_MAI_JUN_2023.pdf",
      },

      {
        name: "Julho - agosto",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/11/DIPR_20231127-jul.pdf",
      },

      {
        name: "Setembro - outubro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/11/DIPR_20231127.pdf",
      },

      {
        name: "Novembro - dezembro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/07/DIPR_20240709.pdf",
      },
    ],
  },

  "2022": {
    title: "2022",
    reports: [
      {
        name: "Janeiro - fevereiro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/07/DIPR_20220714.pdf",
      },

      {
        name: "Março - abril",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/07/DIPR_20220714-1.pdf",
      },

      {
        name: "Maio - junho",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/09/DIPR_20220930.pdf",
      },

      {
        name: "Julho - agosto",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/09/DIPR_20220930-1.pdf",
      },

      {
        name: "Setembro - outubro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/08/DIPR_SET_OUT_2022.pdf",
      },

      {
        name: "Novembro - dezembro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/08/DIPR_NOV_DEZ_2022.pdf",
      },
    ],
  },

  "2021": {
    title: "2021",
    reports: [
      {
        name: "Janeiro - fevereiro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/06/DIPR_JAN-FEV.pdf",
      },

      {
        name: "Março - abril",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/06/DIPR_MAR-ABR.pdf",
      },

      {
        name: "Maio - junho",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/08/DIPR_MAI_JUN_2020.pdf",
      },

      {
        name: "Julho - agosto",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/10/DIPR-JUL-AGO-2020.pdf",
      },

      {
        name: "Setembro - outubro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/02/SET_OUT.pdf",
      },

      {
        name: "Novembro - dezembro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/02/NOV_DEZ.pdf",
      },
    ],
  },

  "2020": {
    title: "2020",
    reports: [
      {
        name: "Janeiro - fevereiro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/06/DIPR_2020_JAN-FEV.pdf",
      },

      {
        name: "Março - abril",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/06/MAR-ABR.pdf",
      },

      {
        name: "Maio - junho",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/08/DIPR_MAI_JUN_2020.pdf",
      },

      {
        name: "Julho - agosto",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/10/DIPR-JUL-AGO-2020.pdf",
      },

      {
        name: "Setembro - outubro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/11/DIPR-SET-OUT-2020.pdf",
      },

      {
        name: "Novembro - dezembro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/02/DIPR_NOV-DEZ_2020-1.pdf",
      },
    ],
  },

  "2019": {
    title: "2019",
    reports: [
      {
        name: "Janeiro - fevereiro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2019/08/Relat%C3%B3rio-de-dados-DIPR-JAN-FEV.pdf",
      },

      {
        name: "Março - abril",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2019/07/MAR-ABR-Ass.pdf",
      },

      {
        name: "Maio - junho",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2019/08/Relat%C3%B3rio-dados-MAI-JUN.pdf",
      },

      {
        name: "Julho - agosto",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/01/JUL-AGO-DIPR.pdf",
      },

      {
        name: "Setembro - outubro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/01/SET-OUT-DIPR.pdf",
      },

      {
        name: "Novembro - dezembro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/05/DIPR_20200526-NOV-DEZ.pdf",
      },
    ],
  },

  "2018": {
    title: "2018",
    reports: [
      {
        name: "Janeiro - fevereiro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2019/08/fevereiro-janeiro-2018.pdf",
      },

      {
        name: "Março - abril",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2019/08/abril-mar%C3%A7o-2018.pdf",
      },

      {
        name: "Maio - junho",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2019/08/junho-maio-2018.pdf",
      },

      {
        name: "Julho - agosto",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/10/DIPR-JUL-AGO-2020.pdf",
      },

      {
        name: "Setembro - outubro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2019/08/agosto-julho-2018.pdf",
      },

      {
        name: "Novembro - dezembro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2019/08/dezembro-novembro-2018.pdf",
      },
    ],
  },

  "2017": {
    title: "2017",
    reports: [
      {
        name: "Janeiro - fevereiro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2019/08/fevereiro-janeiro-2017.pdf",
      },

      {
        name: "Março - abril",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2019/08/abril-mar%C3%A7o-2017.pdf",
      },

      {
        name: "Maio - junho",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2019/08/junho-maio-2017.pdf",
      },

      {
        name: "Julho - agosto",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2019/08/agosto-julho-2017.pdf",
      },

      {
        name: "Setembro - outubro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2019/08/outubro-setembro-2017.pdf",
      },

      {
        name: "Novembro - dezembro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2019/08/novembro-dezembro-2017.pdf",
      },
    ],
  },
};

const FinancialReports: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#ffffff] via-[#dcecff] to-[#cbe1fc] min-h-screen pb-10">

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
