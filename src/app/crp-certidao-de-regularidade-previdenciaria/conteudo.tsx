import React from "react";

interface ReportsByYear {
  [year: string]: {
    title: string;
    certificates: {
      name: string;
      url: string;
    }[];
  };
}

const reportsData: ReportsByYear = {
  "2025": {
    title: "2025",
    certificates: [
      {
        name: "CRP – Certificado de Regularidade Previdenciária",
        url: "Pdf/cad-prev/crp/5.1_CRP___VENCIMENTO_26.01.26.pdf",
      },
    ],
  },
};

const FinancialReports: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#ffffff] via-[#dcecff] to-[#cbe1fc] pb-20 flex flex-wrap justify-center gap-10 py-20">
      {Object.keys(reportsData)
        .sort((a, b) => Number(b) - Number(a))
        .map((year) => {
          const { title, certificates } = reportsData[year];
          return (
            <div key={year} className="text-center">
              <h2 className="text-5xl font-bold text-blue-900 Montserrat-Bold">{title}</h2>
              <hr className="border-t-2 border-blue-900 w-20 my-2 mx-auto" />
              {certificates.map((certificate, index) => (
                <a
                  key={index}
                  href={certificate.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-800 hover:underline text-2xl Montserrat-Medium block mb-2"
                >
                  {certificate.name}
                </a>
              ))}
            </div>
          );
        })}
    </div>
  );
};

export default FinancialReports;
