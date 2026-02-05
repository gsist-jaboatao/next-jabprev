import React from "react";

interface Report {
  title: string;
  url: string;
}

interface ReportsByYear {
  [year: string]: Report[];
}

const reportsData: ReportsByYear = {
  "2017": [
    {
      title: "ACORDO CADPREV 01757/2017",
      url: "Pdf/cad-prev/ap/ACORDO-CADPREV-01757-2017.pdf",
    },
    {
      title: "RELATÓRIO DE PAGAMENTO – ACORDO DE PARCELAMENTO",
      url: "Pdf/cad-prev/ap/Relatorio-de-Pagamento-Acordo-de-Parcelamento.pdf",
    },
  ],
};

const FinancialReports: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#ffffff] via-[#dcecff] to-[#cbe1fc] py-20 flex flex-wrap justify-center gap-10">
      {Object.keys(reportsData)
        .sort((a, b) => Number(b) - Number(a))
        .map((year) => (
          <div key={year} className="text-center">
            <h2 className="text-5xl font-bold text-blue-900 Montserrat-Bold">{year}</h2>
            <hr className="border-t-2 border-blue-900 w-20 my-2 mx-auto" />
            {reportsData[year].map((report, index) => (
              <div key={index} className="mt-4">
                <a
                  href={report.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-800 hover:underline text-2xl Montserrat-Medium"
                >
                  {report.title}
                </a>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

export default FinancialReports;
