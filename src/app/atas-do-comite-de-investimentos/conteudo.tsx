"use client";

import React from "react";

// Interfaces para tipagem
interface Link {
  date: string;
  path: string;
}

interface LinksByYear {
  [year: number]: Link[];
}

interface LinksListProps {
  links: Link[];
}

interface YearTitleProps {
  year: string | number;
}

// Dados organizados por ano
const linksByYear: LinksByYear = {
  2025: [
    { date: "31 de janeiro de 2025", path: "Pdf/administrativo/atas/investimento/2.1_ATA_DO_COMITE_DE_INVESTIMENTOS___31_de_janeiro_de_2025.pdf" },
    { date: "26 de Fevereiro de 2025", path: "Pdf/administrativo/atas/investimento/2.1_ATA_DO_COMITE_DE_INVESTIMENTOS___26_de_fevereiro_de_2025.pdf" },
    { date: "20 de março de 2025", path: "Pdf/administrativo/atas/investimento/3.1_ATA_DO_COMITE_DE_INVESTIMENTOS___20_de_Marco_de_2025.pdf" },
    { date: "30 de abril de 2025", path: "Pdf/administrativo/atas/investimento/2.1___30_DE_ABRIL_DE_2025___COMITE_DE_INVESTIMENTOS.pdf" },
    { date: "28 de maio de 2025", path: "Pdf/administrativo/atas/investimento/2.1_Ata_de_Reuniao_do_Comite_de_Investimentos_28.05.2025.pdf" },
    { date: "27 de junho de 2025", path: "Pdf/administrativo/atas/investimento/2.1_Comite_de_Investimentos___Ata_de_27_de_junho_de_2025.pdf" },
    { date: "31 de julho de 2025", path: "Pdf/administrativo/atas/investimento/2.1_Comite_de_Investimentos___Ata_de_31_de_julho_de_2025.pdf" },
    { date: "28 de agosto de 2025", path: "Pdf/administrativo/atas/investimento/1.1_Comite_de_Investimentos___Ata_de_28_de_agosto_de_2025.pdf" },
    { date: "29 de Setembro de 2025", path: "Pdf/administrativo/atas/investimento/1.1_Comite_de_Investimentos___29_de_setembro_de_2025.pdf" },
    { date: "30 de Outubro de 2025", path: "Pdf/administrativo/atas/investimento/1.1_Comite_de_Investimentos_30.10.2025.pdf" },
    { date: "28 de novembro de 2025", path: "Pdf/administrativo/atas/investimento/1.1_Comite_de_Investimentos___Ata_de_28_de_novembro_de_2025.pdf" },
    { date: "29 de Dezembro de 2025", path: "Pdf/administrativo/atas/investimento/1.1_Comite_de_Investimentos___Ata_de_29_de_dezembro_de_2025.pdf" },
  ],
  2024: [
    { date: "19 de Janeiro de 2024", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/04/01.-Reuniao-do-Comite-de-Investimentos-19.01.2024.pdf" },
    { date: "23 de Fevereiro de 2024", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/07/02.-Reuniao-do-Comite-de-Investimentos-23.02.2024.pdf" },
    { date: "25 de Março de 2024", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/07/03.-Reuniao-do-Comite-de-Investimentos-25.03.2024.pdf" },
    { date: "22 de Abril de 2024", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/07/04.-Reuniao-do-Comite-de-Investimentos-22.04.2024.pdf" },
    { date: "10 de Maio de 2024", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/07/05.-Reuniao-do-Comite-de-Investimentos-10.05.2024.pdf" },
    { date: "20 de Junho de 2024", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/08/06.-Reuniao-do-Comite-de-Investimentos-20.06.2024.pdf" },
    { date: "24 de Julho de 2024", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/08/07.-Reuniao-do-Comite-de-Investimentos-24.07.2024.pdf" },
    { date: "22 de Agosto de 2024", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/10/08.-Reuniao-do-Comite-de-Investimentos-22.08.2024.pdf" },
    { date: "23 de Setembro de 2024", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/10/ATA-SETEMBRO-COMITE-DE-INVESTIMENTO.pdf" },
    { date: "16 de Outubro de 2024", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/11/10.-Reuniao-do-Comite-de-Investimentos-16.10.2024.pdf" },
    { date: "12 de novembro de 2024", path: "Pdf/administrativo/atas/investimento/11. Reunião do Comitê de Investimentos 11.2024.pdf" },
    { date: "04 de dezembro de 2024", path: "Pdf/administrativo/atas/investimento/12. Reunião do Comitê de Investimentos 12.2024.pdf" }
  ],
  2023: [
    { date: "31 de Janeiro de 2023", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/05/01.-Ata-do-Comite-de-Investimentos.pdf" },
    { date: "28 de Fevereiro de 2023", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/05/02.-Ata-do-Comite-de-Investimentos.pdf" },
    { date: "31 de Março de 2023", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/05/03.-Ata-do-Comite-de-Investimentos.pdf" },
    { date: "28 de Abril de 2023", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/05/04.-Ata-do-Comite-de-Investimentos.pdf" },
    { date: "09 de Maio de 2023", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/07/05.-Ata-do-Comite-de-Investimentos.pdf" },
    { date: "27 de Junho de 2023", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/07/06.-Ata-do-Comite-de-Investimentos.pdf" },
    { date: "25 de Julho de 2023", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/08/07.-Ata-do-Comite-de-Investimentos-1.pdf" },
    { date: "11 de Agosto de 2023", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/01/08.-Reuniao-do-Comite-de-Investimentos-11.08.2023.pdf" },
    { date: "25 de Setembro de 2023", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/01/09.-Reuniao-do-Comite-de-Investimentos-25.09.2023.pdf" },
    { date: "31 de Outubro de 2023", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/01/10.-Reuniao-do-Comite-de-Investimentos-31.10.2023.pdf" },
    { date: "29 de Novembro de 2023", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/02/11.-Reuniao-do-Comite-de-Investimentos-29.11.2023-1.pdf" },
    { date: "27 de Dezembro de 2023", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/02/12.-Reuniao-do-Comite-de-Investimentos-27.12.2023-1.pdf" }
  ],
  2022: [
    { date: "10 de Janeiro de 2022", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/03/Ata-00-10-de-Janeiro-2022.pdf" },
    { date: "28 de Fevereiro de 2022", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/03/Ata-01-28-de-Janeiro-2022.pdf" },
    { date: "25 de Fevereiro de 2022", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/03/Ata-02-25-de-Fevereiro-2022.pdf" },
    { date: "21 de Março de 2022", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/08/3.-Reuniao-do-Comite-de-Investimentos-21.03.2022.pdf" },
    { date: "22 de Abril de 2022", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/08/4.-Reuniao-do-Comite-de-Investimentos-22.04.2022.pdf" },
    { date: "20 de Maio de 2022", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/08/5.-Reuniao-do-Comite-de-Investimentos-20.05.2022.pdf" },
    { date: "14 de Junho de 2022", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/12/6.-Reuniao-do-Comite-de-Investimentos-14.06.2022.pdf" },
    { date: "29 de Julho de 2022", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/12/7.-Reuniao-do-Comite-de-Investimentos-29.07.2022.pdf" },
    { date: "08 de Agosto de 2022", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/12/8.-Reuniao-Extraordinaria-do-Comite-de-Investimentos-08.08.2022.pdf" },
    { date: "31 de Agosto de 2022", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/12/9.-Reuniao-do-Comite-de-Investimentos-31.08.2022.pdf" },
    { date: "19 de Setembro de 2022", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/07/10.-Reuniao-do-Comite-de-Investimentos-19.09.2022.pdf" },
    { date: "27 de Outubro de 2022", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/12/11.-Reuniao-do-Comite-de-Investimentos-27.10.2022.pdf" },
    { date: "09 de Novembro de 2022", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/12/12.-Reuniao-do-Comite-de-Investimentos-09.11.2022.pdf" },
    { date: "20 de Dezembro de 2022", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/03/13-Reuniao-conjunta-Comite-de-Investimentos-e-Conselhos-Deliberativo-e-Fiscal-20.12.2022.pdf" }
  ],
  2021: [
    { date: "31 de Março de 2021", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/09/31-de-Marco-de-2021.pdf" },
    { date: "20 de Abril de 2021", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/09/20-de-Abril-de-2021.pdf" },
    { date: "19 de Maio de 2021", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/09/19-de-Maio-de-2021.pdf" },
    { date: "28 de Junho de 2021", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/09/28-de-junho-de-2021.pdf" },
    { date: "26 de Julho de 2021", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/09/26-de-Julho-de-2021.pdf" },
    { date: "18 de Agosto de 2021", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/09/18-de-Agosto-de-2021.pdf" },
    { date: "20 de Setembro de 2021", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/02/Reuniao-do-Comite-de-Investimentos-20.09.2021.pdf" },
    { date: "26 de Outubro de 2021", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/02/Reuniao-do-Comite-de-Investimentos-26.10.2021.pdf" },
    { date: "07 de Dezembro de 2021", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/09/9.-Reuniao-do-Comite-de-Investimentos-07.12.2021.pdf" }
  ],
  2020: [
    { date: "21 de Fevereiro de 2020", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/12/ata-comite-janeiro-2020.pdf" },
    { date: "27 de Março de 2020", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/12/ata-comite-fevereiro-2020.pdf" },
    { date: "29 de Abril de 2020", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/12/ata-comite-marco-2020.pdf" },
    { date: "27 de Maio de 2020", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/12/ata-comite-abril-2020.pdf" },
    { date: "26 de Junho de 2020", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/12/ata-comite-maio-2020.pdf" },
    { date: "31 de Julho de 2020", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/12/ata-comite-junho-2020.pdf" },
    { date: "09 de Outubro de 2020", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/12/ata-comite-julho-2020.pdf" },
    { date: "16 de Novembro de 2020", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/12/ata-comite-agosto-2020.pdf" },
    { date: "25 de Novembro de 2020", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/12/ata-comite-setembro-2020.pdf" },
    { date: "30 de Novembro de 2020", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/12/ata-comite-outubro-2020.pdf" }
  ],
  2019: [
    { date: "21 de Março de 2019", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/05/ata_comite_21_03_2019.pdf" },
    { date: "11 de Junho de 2019", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/05/ata_comite_11_06_2019.pdf" },
    { date: "11 de Setembro de 2019", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/05/ata_comite_11_09_2019.pdf" },
    { date: "20 de Setembro de 2019", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/05/ata_comite_20_09_2019.pdf" },
    { date: "21 de Novembro de 2019", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/05/ata_comite_21_11_2019.pdf" },
    { date: "31 de Janeiro de 2020", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/12/ata-comite-dezembro-2019.pdf" }
  ],
  2018: [
    { date: "04 de Setembro de 2018", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2018/10/ATA-DE-REUNIAO-04-09-10.pdf" },
    { date: "05 de Outubro de 2018", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2018/10/ATA-DE-REUNI%C3%83O-05-10-10.pdf" },
    { date: "16 de Outubro de 2018", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2018/10/REUNI%C3%83O-16-10-2018-COMIT%C3%8A.pdf" },
    { date: "04 de Dezembro de 2018", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2018/12/SCAN_20181205_101534317.pdf" }
  ],
  2017: [
    { date: "24 de Julho de 2017", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2017/11/ATA-COMITE-24-07-17.pdf" },
    { date: "30 de Agosto de 2017", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2017/11/ATA-COMITE-30-08-17.pdf" },
    { date: "03 de Outubro de 2017", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2017/11/ATA-COMITE-03-10-17.pdf" },
    { date: "17 de Outubro de 2017", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2017/11/ATA-COMITE-17-10-17.pdf" }
  ],
  2016: [
    { date: "19 de Fevereiro de 2016", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2019/06/ATA-19-02-16-COMITE.pdf" },
    { date: "24 de Maio de 2016", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2019/06/ATA-24-05-16-COMITE.pdf" },
    { date: "10 de Junho de 2016", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2019/06/ATA-10-06-16-COMITE.pdf" },
    { date: "29 de Junho de 2016", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2019/06/ATA-26-06-16-COMITE-1-1.pdf" },
    { date: "01 de Julho de 2016", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2019/06/ATA-01-07-16-COMITE.pdf" },
    { date: "07 de Julho de 2016", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2016/12/Reuniao-de-07072016.pdf" },
    { date: "11 de Julho de 2016", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2019/06/ATA-11-07-16-COMITE.pdf" },
    { date: "05 de Agosto de 2016", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2016/12/Reuniao-de-05082016.pdf" }
  ],
  2015: [
    { date: "06 de Abril de 2015", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2019/06/ATA-06-04-15-COMITE.pdf" },
    { date: "28 de Abril de 2015", path: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2019/06/ATA-05-08-15-COMITE.pdf" }
  ]
};

// Componente para renderizar uma lista de links
const LinksList: React.FC<LinksListProps> = ({ links }) => (
  <ul className="list-disc pl-5 text-[#051f60] text-xl pb-20 grid lg:grid-cols-2 gap-5">
    {links.map((link: Link, index: number) => (
      <li key={index} className="py-2">
        <a
          href={link.path}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-800 hover:underline transition-colors duration-200"
        >
          {link.date}
        </a>
      </li>
    ))}
  </ul>
);

// Componente para renderizar o título do ano
const YearTitle: React.FC<YearTitleProps> = ({ year }) => (
  <h1 className="text-5xl font-bold mb-4 uppercase text-blue-900 leading-tight">
    {year}
  </h1>
);

// Componente principal
const Legislacao = () => {
  return (
    <div className="flex flex-col">
      <div className="h-auto bg-gradient-to-b from-[#ffffff] via-[#dcecff] to-[#cbe1fc]">
        <div className="mx-auto max-w-6xl p-6 py-20">
          {Object.entries(linksByYear)
            .sort(([a], [b]) => parseInt(b) - parseInt(a)) // Ordena por ano decrescente
            .map(([year, links]) => (
              <div key={year}>
                <YearTitle year={year} />
                <LinksList links={links} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Legislacao;