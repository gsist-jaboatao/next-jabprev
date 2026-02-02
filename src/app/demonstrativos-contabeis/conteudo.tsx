"use client";
import React from "react";
import { useEffect, useState } from "react";

interface Report {
  name: string;
  links: { text: string; url: string }[]; // Dois links separados
}

interface ReportsByYear {
  [year: string]: {
    title: string;
    quarterly?: Report[];
    general?: Report[];
  };
}

const reportsData: ReportsByYear = {
  "2025": {
    title: "DEMONSTRATIVOS 2025",
    quarterly: [
      {
        name: "1° Trimestre",
        links: [
          {
            text: "CAPITALIZADO",
            url: "/Pdf/financeiro/demonstrativos-contabeis/2025/4.2_Demonstrativo_Contabil___1__Trimestre___Capitalizado.pdf",
          },
          {
            text: "FINANCEIRO",
            url: "/Pdf/financeiro/demonstrativos-contabeis/2025/4.2_Demonstrativo_Contabil___1__Trimestre___Financeiro.pdf",
          },
        ],
      },

      {
        name: "2° Trimestre",
        links: [
          {
            text: "CAPITALIZADO",
            url: "/Pdf/financeiro/demonstrativos-contabeis/2025/3.2_Demonstrativo_Contabil___2__Trimestre___2025___Capitalizado.pdf",
          },
          {
            text: "FINANCEIRO",
            url: "/Pdf/financeiro/demonstrativos-contabeis/2025/3.2_Demonstrativo_Contabil___2__Trimestre___2025___Financeiro.pdf",
          },
        ],
      },

      {
        name: "3° Trimestre",
        links: [
          {
            text: "CAPITALIZADO",
            url: "/Pdf/financeiro/demonstrativos-contabeis/2025/3.2_Demonstrativo_Contavil___3__Trimestre___2025___Capitalizado.PDF",
          },
          {
            text: "FINANCEIRO",
            url: "/Pdf/financeiro/demonstrativos-contabeis/2025/3.2_Demonstrativo_Contavil___3__Trimestre___2025___Financeiro.PDF",
          },
        ],
      },

      {
        name: "4° Trimestre",
        links: [
          {
            text: "CAPITALIZADO",
            url: "/Pdf/financeiro/demonstrativos-contabeis/2025/2.2_Demonstrativo_Contabil___4__Trimestre___CAP",
          },
          {
            text: "FINANCEIRO",
            url: "/Pdf/financeiro/demonstrativos-contabeis/2025/2.2_Demonstrativo_Contabil___4__Trimestre___FIN",
          },
        ],
      },



    ],
  },
  "2024": {
    title: "DEMONSTRATIVOS 2024",
    quarterly: [
      {
        name: "1° Trimestre",
        links: [
          {
            text: "CAPITALIZADO",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/07/CAP-Posicao-de-01-01-2024-ate-31-03-2024.pdf",
          },
          {
            text: "FINANCEIRO",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/07/FIN-Posicao-de-01-01-2024-ate-31-03-2024.pdf",
          },
        ],
      },
      {
        name: "2° Trimestre",
        links: [
          {
            text: "CAPITALIZADO",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/07/CAP-Posicao-de-01-04-2024-ate-30-06-2024.pdf",
          },
          {
            text: "FINANCEIRO",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/07/FIN-Posicao-de-01-04-2024-ate-30-06-2024-.pdf",
          },
        ],
      },

      {
        name: "3° Trimestre",
        links: [
          {
            text: "CAPITALIZADO",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/10/CAP-RECEITA-ORCAMENTARIA.pdf",
          },
          {
            text: "FINANCEIRO",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/10/FIN-RECEITA-ORCAMENTARIA.pdf",
          },
        ],
      },

      {
        name: "4° Trimestre",
        links: [
          { text: "CAPITALIZADO", url: "#" },
          { text: "FINANCEIRO", url: "#" },
        ],
      },
    ],
  },
  "2023": {
    title: "DEMONSTRATIVOS 2023",
    quarterly: [
      {
        name: "1° Trimestre",
        links: [
          {
            text: "CAPITALIZADO",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/05/CAP-Balancete-Trimestral-de-Marco_2023.pdf",
          },
          {
            text: "FINANCEIRO",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/05/FIN-Balancete-Trimestral-de-Marco_2023.pdf",
          },
        ],
      },
      {
        name: "2° Trimestre",
        links: [
          {
            text: "CAPITALIZADO",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/09/CAP-Balancete-Trimestral-de-Junho-2023.pdf",
          },
          {
            text: "FINANCEIRO",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/09/FIN-Balancete-Trimestral-de-Junho-2023.pdf",
          },
        ],
      },
      {
        name: "3° Trimestre",
        links: [
          {
            text: "CAPITALIZADO",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/07/CAP-TRIMESTRE-JULHO-SET.pdf",
          },
          {
            text: "FINANCEIRO",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/07/FIN-TRIMESTRE-JULHO-SET.pdf",
          },
        ],
      },
      {
        name: "4° Trimestre",
        links: [
          {
            text: "CAPITALIZADO",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/07/CAP-TRIMESTRE-OUT-DEZ.pdf",
          },
          {
            text: "FINANCEIRO",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/07/FIN-TRIMESTRE-OUT-DEZ.pdf",
          },
        ],
      },
    ],
  },

  "2022": {
    title: "DEMONSTRATIVOS 2022",
    general: [
      {
        name: "Balancete Contábil",
        links: [
          {
            text: "Capitalizado",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/04/CAP-BALANCETE-2022.pdf",
          },
          {
            text: "Financeiro",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/04/FIN-BALANCETE-2022.pdf",
          },
        ],
      },
      {
        name: "Balanço Financeiro",
        links: [
          {
            text: "Abrir",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/04/Item-04-Balanco-Financeiro.pdf",
          },
        ],
      },
      {
        name: "Balanço Orçamentário",
        links: [
          {
            text: "Abrir",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/04/Item-03-Balanco-Orcamentario.pdf",
          },
        ],
      },
      {
        name: "Balanço Patrimonial",
        links: [
          {
            text: "Capitalizado",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/04/Item-05-Balanco-Patrimonial-CAP-reduzido-.pdf",
          },
          {
            text: "Financeiro",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/04/Item-05-Balanco-Patrimonial-FIN-ADICIONAL-.pdf",
          },
        ],
      },
      {
        name: "Dívida Flutuante",
        links: [
          {
            text: "Abrir",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/04/Item-09-Divida-Flutuante.pdf",
          },
        ],
      },
      {
        name: "Dívida Fundada",
        links: [
          {
            text: "Abrir",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/04/Item-08-Demonstrativo-da-Divida-Fundada..pdf",
          },
        ],
      },
      {
        name: "Variações Patrimoniais",
        links: [
          {
            text: "Abrir",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/04/Item-06-Demonstracao-das-Variacoes-Patrimoniais.pdf",
          },
        ],
      },
      {
        name: "Fluxo de Caixa",
        links: [
          {
            text: "Abrir",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/04/Item-07-Demonstracoes-dos-Fluxos-de-Caixas.pdf",
          },
        ],
      },
    ],
  },

  "2021": {
    title: "DEMONSTRATIVOS 2021",
    general: [
      {
        name: "Balancete Contábil",
        links: [
          {
            text: "Abrir",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/04/BALANCETE-CONTABIL-2021.pdf",
          },
        ],
      },
      {
        name: "Balanço Financeiro",
        links: [
          {
            text: "Abrir",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/04/Item-04-Balanco-Financeiro-CAP-e-FIN.pdf",
          },
        ],
      },
      {
        name: "Balanço Orçamentário",
        links: [
          {
            text: "Abrir",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/04/Item-03-Balanco-Orcamentario-CAP-e-FIN.pdf",
          },
        ],
      },
      {
        name: "Balanço Patrimonial",
        links: [
          {
            text: "Abrir",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/04/Item-05-Balanco-Patrimonial-CAP-e-FIN-.pdf",
          },
        ],
      },

      {
        name: "Dívida Flutuante",
        links: [
          {
            text: "Abrir",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/04/Item-09-Divida-Flutuante-CAP-e-FIN.pdf",
          },
        ],
      },
      {
        name: "Dívida Fundada",
        links: [
          {
            text: "Abrir",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/04/Item-08-Divida-FUNDADA-FIN-e-CAP.pdf",
          },
        ],
      },
      {
        name: "Variações Patrimoniais",
        links: [
          {
            text: "Abrir",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/04/Item-06-Demonstracao-das-Variacoes-Patrimoniais.pdf",
          },
        ],
      },
    ],
  },

  "2020": {
    title: "DEMONSTRATIVOS 2020",
    general: [
      {
        name: "Balancete Contábil",
        links: [
          {
            text: "Abrir",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/04/BALANCETE-CAP-e-FIN.pdf",
          },
        ],
      },

      {
        name: "Balanço Financeiro",
        links: [
          {
            text: "Abrir",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/07/BALAN%C3%87O%20FINANCEIRO%20CAP%20e%20FIN.pdf",
          },
        ],
      },

      {
        name: "Balanço Orçamentário",
        links: [
          {
            text: "Abrir",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/04/BALANCO-ORCAMENTARIO-CAP-e-FIN.pdf",
          },
        ],
      },

      {
        name: "Balanço Patrimonial",
        links: [
          {
            text: "Abrir",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/04/BALANCO-PATRIMONIAL-CAP-e-FIN.pdf",
          },
        ],
      },

      {
        name: "Dívida Flutuante",
        links: [
          {
            text: "Abrir",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/06/DIVIDA-FLUTUANTE-CAP-e-FIN.pdf",
          },
        ],
      },

      {
        name: "Dívida Fundada",
        links: [
          {
            text: "Abrir",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/06/DIVIDA-FUNDADA-CAP-e-FIN.pdf",
          },
        ],
      },

      {
        name: "Variações Patrimoniais",
        links: [
          {
            text: "Abrir",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/04/DVP-CAP-E-FIN.pdf",
          },
        ],
      },
    ],
  },

  "2019": {
    title: "DEMONSTRATIVOS 2019",
    general: [
      {
        name: "Balancete Contábil",
        links: [
          {
            text: "Abrir",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/04/01-BALANCETE-CONTABIL.pdf",
          },
        ],
      },

      {
        name: "Balanço Financeiro",
        links: [
          {
            text: "Abrir",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/04/02-Balan%C3%A7o-Financeiro.pdf",
          },
        ],
      },

      {
        name: "Balanço Orçamentário",
        links: [
          {
            text: "Abrir",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/04/03-Balan%C3%A7o-Orcament%C3%A1rio.pdf",
          },
        ],
      },

      {
        name: "Balanço Patrimonial",
        links: [
          {
            text: "Abrir",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/04/04-BALAN%C3%87O-PATRIMONIAL.pdf",
          },
        ],
      },

      {
        name: "Dívida Flutuante",
        links: [
          {
            text: "Abrir",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/04/05-D%C3%8DVIDA-FLUTUANTE.pdf",
          },
        ],
      },

      {
        name: "Dívida Fundada",
        links: [
          {
            text: "Abrir",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/04/06-D%C3%ADvida-Fundada.pdf",
          },
        ],
      },

      {
        name: "Nota Explicativa",
        links: [
          {
            text: "Abrir",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/04/07-NOTA-EXPLICATIVAS.pdf",
          },
        ],
      },

      {
        name: "Variações Patrimoniais",
        links: [
          {
            text: "Abrir",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/04/08-Varia%C3%A7%C3%B5es-Patrimoniais.pdf",
          },
        ],
      },
    ],
  },

  "2018": {
    title: "DEMONSTRATIVOS 2018",
    general: [
      {
        name: "Balancete Contábil",
        links: [
          {
            text: "Abrir",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2019/06/Balancete-Acumulado-at%C3%A9-Dezembro_2018.pdf",
          },
        ],
      },

      {
        name: "Balanço Financeiro",
        links: [
          {
            text: "Abrir",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2018/10/BALAN%C3%87O_FINANCEIRO_2018.1_.pdf",
          },
        ],
      },

      {
        name: "Balanço Orçamentário",
        links: [
          {
            text: "Abrir",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2018/10/BALANCO_ORCAMENTARIO_2018.pdf",
          },
        ],
      },

      {
        name: "Balanço Patrimonial",
        links: [
          {
            text: "Abrir",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2018/10/BALANCO_ORCAMENTARIO_PATRIMONIAL.pdf",
          },
        ],
      },

      {
        name: "Dívida Flutuante",
        links: [
          {
            text: "Abrir",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2018/10/BALANCO_ORCAMENTARIO_DIVIDA-FLUTUANTE.pdf",
          },
        ],
      },

      {
        name: "Dívida Fundada",
        links: [
          {
            text: "Abrir",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2018/10/BALANCO_ORCAMENTARIO_DIVIDA-INTERNA.pdf",
          },
        ],
      },

      {
        name: "Nota Explicativa",
        links: [
          {
            text: "Abrir",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2018/10/NOTA-EXPLICATIVA-1.pdf",
          },
        ],
      },

      {
        name: "Variações Patrimoniais",
        links: [
          {
            text: "Abrir",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2018/10/BALANCO_ORCAMENTARIO_VARIA%C3%87OES-PATRIMONIAIS.pdf",
          },
        ],
      },
    ],
  },

  "2017": {
    title: "DEMONSTRATIVOS 2017",
    general: [
      {
        name: "Balancete Contábil",
        links: [
          {
            text: "Abrir",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2017/11/Balancete-Contabil-2017-Jaboatao-dos-Guararapes.pdf",
          },
        ],
      },

      {
        name: "Balanço Financeiro",
        links: [
          {
            text: "Abrir",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2017/11/Balan%C3%A7o-Financeiro-2017-Jaboatao-dos-Guararapes.pdf",
          },
        ],
      },

      {
        name: "Balanço Orçamentário",
        links: [
          {
            text: "Abrir",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2017/11/Balan%C3%A7o-Or%C3%A7amentario-2017-Jaboatao-dos-Guararapes.pdf",
          },
        ],
      },

      {
        name: "Balanço Patrimonial",
        links: [
          {
            text: "Abrir",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2017/11/Balan%C3%A7o-Patrimonial-2017-Jaboatao-dos-Guararapes.pdf",
          },
        ],
      },

      {
        name: "Dívida Flutuante",
        links: [
          {
            text: "Abrir",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2017/11/Divida-Flutuante-2017-Jaboatao-dos-Guararapes.pdf",
          },
        ],
      },

      {
        name: "Dívida Fundada",
        links: [
          {
            text: "Abrir",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2017/11/Divida-Fundada-2017-Jaboatao-dos-Guararapes.pdf",
          },
        ],
      },

      {
        name: "Nota Explicativa",
        links: [
          {
            text: "Abrir",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2017/11/Nota-Explicativa-2017-Jaboatao-dos-Guararapes.pdf",
          },
        ],
      },

      {
        name: "Variações Patrimoniais",
        links: [
          {
            text: "Abrir",
            url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2017/11/Varia%C3%A7%C3%B5es-Patrimoniais-2017-Jaboatao-dos-Guararapes.pdf",
          },
        ],
      },
    ],
  },
};

const FinancialReports: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Definir para true após a montagem do componente no lado do cliente
  }, []);

  if (!mounted) {
    return null; // Evitar renderização antes da montagem do componente no cliente
  }

  return (
    <div className="h-auto bg-gradient-to-b from-[#ffffff] via-[#dcecff] to-[#cbe1fc] p-6 sm:p-10">
      {Object.keys(reportsData)
        .sort((a, b) => Number(b) - Number(a)) // Ordenação decrescente
        .map((year) => {
          const { title, quarterly, general } = reportsData[year];
          return (
            <div
              key={year}
              className="space-y-6 sm:space-y-8 mb-10 max-w-6xl mx-auto"
            >
              {/* Título do Ano */}
              <h2 className="Montserrat-Bold text-3xl sm:text-4xl font-bold text-blue-900 mb-4 py-4 uppercase text-center sm:text-left">
                {title}
              </h2>
              <hr className="border-t-2 border-blue-900 w-16 mx-auto sm:mx-0" />

              {/* Relatórios Trimestrais */}
              {quarterly && (
                <div className="space-y-2">
                  <p className="font-semibold text-lg sm:text-xl">
                    Relatório trimestral:
                  </p>
                  {quarterly.map((report, index) => (
                    <div
                      key={index}
                      className="flex flex-col sm:flex-row gap-2"
                    >
                      <span>{report.name}</span>
                      {report.links.map((link, i) => (
                        <a
                          key={i}
                          href={link.url}
                          className="text-blue-600 hover:underline font-semibold text-lg sm:text-xl"
                        >
                          {link.text}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              )}

              {/* Relatórios Gerais */}
              {general && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-md text-lg sm:text-xl">
                  {general.map((report, index) => (
                    <div key={index}>
                      <p className="text-blue-800 font-semibold">
                        {report.name}
                      </p>
                      {report.links.map((link, i) => (
                        <a
                          key={i}
                          href={link.url}
                          className="block text-blue-600 hover:underline"
                        >
                          {link.text}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default FinancialReports;
