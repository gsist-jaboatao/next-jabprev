import React from "react";

const FinancialReports: React.FC = () => {
  return (
    <div className="h-auto py-44 flex items-center justify-center bg-gradient-to-b from-[#ffffff] to-green-900">
      <a
        href="Pdf/investimentos/alm/RELATORIO-DE-ALM.pdf"
        target="_blank"
        rel="noopener noreferrer"
        title="Abrir Relatório de ALM 2022"
        className="w-1/3 py-4 bg-green-900 text-white text-lg montserrat-regular rounded-lg shadow-xl border-2 hover:border-yellow-400 hover:bg-[#115d1b] hover:text-yellow-500 transition duration-300 text-center"
      >
        RELATÓRIO DE ALM 2022
      </a>
    </div>
  );
};

export default FinancialReports;
