import React from "react";

interface Exercise {
  year: string;
  content: { text: string; url?: string }[];
}

const exercises: Exercise[] = [
  {
    year: "2024",
    content: [
      { text: "PRESTAÇÃO DE CONTAS", url: "https://etce.tce.pe.gov.br/epp/ConsultaPublica/listView.seam" },
      { text: "Prestação de Contas aguardando verificação de conformidade pelo Tribunal de Contas-PE", url: "/Pdf/financeiro/prestacoes-de-contas/3.2_Resolucao_270_2024_do_TCEPE_PE.pdf" },

    ],
  },

  {
    year: "2023",
    content: [
      { text: "PRESTAÇÃO DE CONTAS", url: "https://etce.tce.pe.gov.br/epp/ConsultaPublica/listView.seam" },
      { text: "Prestação de Contas aguardando verificação de conformidade pelo Tribunal de Contas-PE.", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/09/RESOLUCAO-TC-No-205-DE-21-DE-JUNHO-DE-2023.pdf" },
    ],
  },
  {
    year: "2022",
    content: [
      { text: "PRESTAÇÃO DE CONTAS", url: "https://etce.tce.pe.gov.br/epp/ConsultaPublica/listView.seam" },
      { text: "Prestação de Contas aguardando verificação de conformidade pelo Tribunal de Contas-PE.", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/09/RESOLUCAO-TC-No-205-DE-21-DE-JUNHO-DE-2023.pdf" },
    ],
  },
  {
    year: "2021",
    content: [
      { text: "PRESTAÇÃO DE CONTAS", url: "https://etce.tce.pe.gov.br/epp/ConsultaPublica/listView.seam" },
      { text: "Prestação de contas arquivada temporariamente pelo TCE, na forma da Resolução TCE-PE nº 205/2023.", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/09/RESOLUCAO-TC-No-205-DE-21-DE-JUNHO-DE-2023.pdf" },
    ],
  },
  {
    year: "2020",
    content: [
      { text: "PRESTAÇÃO DE CONTAS", url: "https://etce.tce.pe.gov.br/epp/ConsultaPublica/listView.seam" },
      { text: "Prestação de contas arquivada temporariamente pelo TCE, na forma da Resolução TCE-PE nº 205/2023.", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/09/RESOLUCAO-TC-No-205-DE-21-DE-JUNHO-DE-2023.pdf" },
    ],
  },
  {
    year: "2019",
    content: [
      { text: "PRESTAÇÃO DE CONTAS", url: "https://etce.tce.pe.gov.br/epp/ConsultaPublica/listView.seam" },
      { text: "Prestação de contas arquivada temporariamente pelo TCE, na forma da Resolução TCE-PE nº 205/2023.", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/09/RESOLUCAO-TC-No-205-DE-21-DE-JUNHO-DE-2023.pdf" },
    ],
  },
  {
    year: "2018",
    content: [
      { text: "PRESTAÇÃO DE CONTAS", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/08/MPCO_ContasPrefeitos-2018.pdf" },
      { text: "Prestação de contas arquivada temporariamente pelo TCE, na forma da Resolução TCE-PE nº 205/2023.", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/09/RESOLUCAO-TC-No-205-DE-21-DE-JUNHO-DE-2023.pdf" },
    ],
  },
  {
    year: "2017",
    content: [
      { text: "PRESTAÇÃO DE CONTAS", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/08/MPCO_ContasPrefeitos-2017.pdf" },
      { text: "Prestação de contas arquivada temporariamente pelo TCE, na forma da Resolução TCE-PE nº 205/2023.", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/09/RESOLUCAO-TC-No-205-DE-21-DE-JUNHO-DE-2023.pdf" },
    ],
  },
];

const FinancialExercises: React.FC = () => {
  return (
    <div className="h-auto bg-gradient-to-b from-[#ffffff] via-[#dcecff] to-[#cbe1fc] p-10">
      {exercises.map(({ year, content }) => (
        <div key={year} className="space-y-4 mb-10 max-w-5xl mx-auto">
          {/* Título do exercício */}
          <h2 className="text-3xl Montserrat-Bold  text-blue-900">
            EXERCÍCIO {year}
          </h2>
          <hr className="border-t-2 border-blue-900 w-16" />

          {/* Conteúdo com links apenas no hover */}
          {content.map((item, index) =>
            item.url ? (
              <p key={index} className="text-blue-900 montserrat-medium text-lg">
                <a href={item.url} className="hover:underline">
                  {item.text}
                </a>
              </p>
            ) : (
              <p key={index} className="text-blue-900">{item.text}</p>
            )
          )}
        </div>
      ))}
    </div>
  );
};

export default FinancialExercises;
