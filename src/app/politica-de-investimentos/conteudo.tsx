import React from "react";

const investmentPolicies = [
  { year: 2026, link:"Pdf/investimentos/politica-de-investimentos/3.3_POLITICA_DE_INVESTIMENTOS_2026.pdf" },
  { year: 2025, link:"Pdf/investimentos/politica-de-investimentos/5.2_POLITICA_DE_INVESTIMENTOS_2025.pdf" },
  { year: 2024, link: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/02/POLITICA_DE_INVESTIMENTOS_2024_ASSINADA.pdf" },
  { year: 2023, link: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/03/Politica-de-Investimentos-2023-Versao-Final.pdf" },
  { year: 2022, link: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/03/Politica-Investimento-2022.pdf" },
  { year: 2021, link: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/02/Politica-de-investimento-2021.pdf" },
  { year: 2020, link: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/06/DPIN-2020-alta-resolu%C3%A7%C3%A3o.pdf" },
  { year: 2019, link: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2018/11/sejda-EVM.pdf" },
  { year: 2018, link: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2017/12/Politica-de-Investimento-2018.pdf" },
  { year: 2017, link: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2016/06/Pol%C3%ADtica-de-Investimentos-2017.pdf" },
  { year: 2016, link: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2016/06/Politica-de-Investimentos-2016.pdf" },
  { year: 2015, link: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2016/06/Politica-de-Investimentos-2015-1.pdf" },
];

const InvestmentPolicies: React.FC = () => {
  return (
    <div className="h-auto bg-gradient-to-b from-[#ffffff] via-[#dcecff] to-[#cbe1fc] p-6 sm:p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto py-11">
        {investmentPolicies.map((policy, index) => (
          <div
            key={policy.year}
            className={`p-6 text-center bg-amber-400 border-2 border-blue-900 shadow-md rounded-lg ${
              index === 0 ? "sm:col-span-2 md:col-span-3" : ""
            }`}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">{policy.year}</h2>
            <hr className="border-t-2 border-blue-900 w-16 mx-auto my-2" />
            <a href={policy.link} className="text-blue-700 text-lg hover:underline">
              Política de Investimento
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};


export default InvestmentPolicies;
