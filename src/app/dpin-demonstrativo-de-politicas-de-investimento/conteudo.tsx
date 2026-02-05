import React from "react";


interface ReportsByYear {
  [year: string]: {
    title: string;
    url: string;
  };
} 

const reportsData: ReportsByYear = {
  "2025": { title: "2025", url: "Pdf/cad-prev/dpin/4.3_DPIN_2025.pdf" },
  "2024": { title: "2024", url: "Pdf/cad-prev/dpin/4.3_DPIN_2024.pdf" },
  "2023": { title: "2023", url: "Pdf/cad-prev/dpin/4.3_DPIN_2023.pdf" },
  "2022": { title: "2022", url: "Pdf/cad-prev/dpin/4.3_DPIN_2022.pdf" },
  "2021": { title: "2021", url: "Pdf/cad-prev/dpin/4.3_DPIN_2021.pdf" },
  "2020": { title: "2020", url: "Pdf/cad-prev/dpin/4.3_DPIN_2020.pdf" },
  "2019": { title: "2019", url: "Pdf/cad-prev/dpin/4.3_DPIN_2019.pdf" },
  "2018": { title: "2018", url: "Pdf/cad-prev/dpin/4.3_DPIN_2018.pdf" },
};

const FinancialReports: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#ffffff] via-[#dcecff] to-[#cbe1fc] py-20 flex flex-wrap justify-center gap-10">

      {Object.keys(reportsData)
        .sort((a, b) => Number(b) - Number(a))
        .map((year) => {
          const { title, url } = reportsData[year];
          return (
            <div key={year} className="text-center">
              <h2 className="text-5xl font-bold text-blue-900 Montserrat-Bold">{title}</h2>
              <hr className="border-t-2 border-blue-900 w-16 my-2 mx-auto" />
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 hover:underline text-2xl Montserrat-Medium"
              >
                DPIN – {title}
              </a>
            </div>
          );
        })}
    </div>
  );
};

export default FinancialReports;
