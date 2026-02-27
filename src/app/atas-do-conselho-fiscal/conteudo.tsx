"use client";

import React from "react";

const data: Record<string, { date: string; url: string }[]> = {
  "2025": [
    {
      date: "30 de Janeiro de 2025",
      url: "/Pdf/administrativo/atas/fiscal/01-ATA-CONSELHO-FISCAL-30.01.2025.pdf",
    },
    {
      date: "20 de Janeiro de 2025",
      url: "/Pdf/administrativo/atas/fiscal/02-ATA-CONSELHO-FISCAL-20.02.2025.pdf",
    },
    {
      date: "25 de Fevereiro de 2025 (Reunião Extraordinária)",
      url: "/Pdf/administrativo/atas/fiscal/03-ATA-25.02.2025-CONJUNTA-CONSELHO-FISCAL-E-DELIBERATIVO-ATUARIO.pdf",
    },
    {
      date: "20 de Março de 2025",
      url: "/Pdf/administrativo/atas/fiscal/ATA_CONSELHO_FISCAL___20_de_marco_de_2025.pdf",
    },
    {
      date: "24 de abril de2025",
      url: "/Pdf/administrativo/atas/fiscal/2.1___24_DE_ABRIL_DE_2025___CONSELHO_FISCAL.pdf",
    },
    {
      date: "15 de maio de 2025",
      url: "/Pdf/administrativo/atas/fiscal/2.1___ATA_CONSELHO_FISCAL_15.05.2025.pdf",
    },
    {
      date: "19 de junho de 2025",
      url: "/Pdf/administrativo/atas/fiscal/2.1___ATA_19.06.2025___CONSELHO_FISCAL.pdf",
    },
    {
      date: "17 de julho de 2025",
      url: "/Pdf/administrativo/atas/fiscal/2.1_Conselho_Fiscal___Ata_de_17_de_julho_de_2025.pdf",
    },
    {
      date: "22 de agosto de 2025",
      url: "/Pdf/administrativo/atas/fiscal/1.1_Conselho_Fiscal___Ata_de_22_de_agosto_de_2025.pdf",
    },
    {
      date: "18 de setembro de 2025",
      url: "/Pdf/administrativo/atas/fiscal/1.1_CONSELHO_FISCAL___Ata_de_18_de_setembro_de_2025.pdf",
    },
    {
      date: "16 de outubro de 2025",
      url: "/Pdf/administrativo/atas/fiscal/1.1_CONSELHO_FISCAL___Ata_de_16_de_outubro_de_2025.pdf",
    },
    {
      date: "Conjunta Conselho Fiscal e Deliberativo - 17 de dezembro de 2025",
      url: "/Pdf/administrativo/atas/deliberativo/1.1_Conjunta_Conselho_Fiscal_e_Deliberativo___17_de_dezembro_de_2025.pdf",
    },
  ],
  "2024": [
    {
      date: "26 de Janeiro de 2024",
      url: "/Pdf/administrativo/atas/fiscal/01-ATA-CONSELHO-FISCAL-26.01.2024.pdf",
    },
    {
      date: "16 de Fevereiro de 2024",
      url: "/Pdf/administrativo/atas/fiscal/02-ATA-CONSELHO-FISCAL-16.02.2024.pdf",
    },
    {
      date: "26 de Março de 2024",
      url: "/Pdf/administrativo/atas/fiscal/02-ATA-CONSELHO-FISCAL-16.02.2024 (1).pdf",
    },
    {
      date: "19 de Abril de 2024",
      url: "/Pdf/administrativo/atas/fiscal/04-ATA-19.04.2024-CONJUNTA-CONSELHO-FISCAL-E-DELIBERATIVO.pdf",
    },
    {
      date: "16 de Janeiro de 2024",
      url: "/Pdf/administrativo/atas/fiscal/05-ATA-16.05.2024-CONJUNTA-CONSELHO-FISCAL-E-DELIBERATIVO.pdf",
    },
    {
      date: "20 de Julho de 2024",
      url: "/Pdf/administrativo/atas/fiscal/06-ATA-20.06.2024-CONJUNTA-CONSELHO-FISCAL-E-DELIBERATIVO.pdf",
    },
    {
      date: "19 de Julho de 2024",
      url: "/Pdf/administrativo/atas/fiscal/07-ATA-CONSELHO-FISCAL-19.07.2024.pdf",
    },
    {
      date: "16 de Agosto de 2024",
      url: "/Pdf/administrativo/atas/fiscal/08-ATA-CONSELHO-FISCAL-16.08.2024.pdf",
    },
    {
      date: "20 de Setembro de 2024",
      url: "/Pdf/administrativo/atas/fiscal/Conselho-Deliberativo-09-ATA-19.09.2024.pdf",
    },
    {
      date: "17 de Outubro de 2024",
      url: "/Pdf/administrativo/atas/fiscal/10-ATA-17.10.2024-CONJUNTA-CONSELHO-FISCAL-E-DELIBERATIVO.pdf",
    },
    {
      date: "21 de Novembro de 2024",
      url: "/Pdf/administrativo/atas/fiscal/11-ATA-21.11.2024-CONJUNTA-CONSELHO-FISCAL-E-DELIBERATIVO.pdf",
    },
    {
      date: "20 de Dezembro de 2024",
      url: "/Pdf/administrativo/atas/fiscal/12-ATA-CONSELHO-FISCAL-20.12.2024.pdf",
    },
  ],
  "2023": [
    {
      date: "31 de Janeiro de 2023",
      url: "/Pdf/administrativo/atas/fiscal/REUNIAO-DIA-31-DE-JANEIRO-2023.pdf",
    },
    {
      date: "28 de Fevereiro de 2023",
      url: "/Pdf/administrativo/atas/fiscal/REUNIAO-DIA-28-DE-FEVEREIRO-2023.pdf",
    },
    {
      date: "17 de Março de 2023",
      url: "/Pdf/administrativo/atas/fiscal/REUNIAO-DIA-17-DE-MARCO-2023.pdf",
    },
    {
      date: "27 de Abril de 2023",
      url: "/Pdf/administrativo/atas/fiscal/04-ATA-CONSELHO-FISCAL-27-04-2023.pdf",
    },
    {
      date: "19 de Maio de 2023",
      url: "/Pdf/administrativo/atas/fiscal/05-ATA-CONSELHO-FISCAL-19-05-2023publi-site.pdf",
    },
    {
      date: "21 de Junho de 2023",
      url: "/Pdf/administrativo/atas/fiscal/06-ATA-CONSELHO-FISCAL-21.06.2023.pdf",
    },
    {
      date: "21 de Junho de 2023",
      url: "/Pdf/administrativo/atas/fiscal/06-ATA-CONSELHO-FISCAL-21.06.2023 (1).pdf",
    },
    {
      date: "21 de Julho de 2023",
      url: "/Pdf/administrativo/atas/fiscal/07-ATA-CONSELHO-FISCAL-21.07.2023.pdf",
    },
    {
      date: "10 de Agosto de 2023",
      url: "/Pdf/administrativo/atas/fiscal/06-ATA-CONJUNTA-CONSELHO-FISCAL-E-DELIBERATIVO-10.08.2023.pdf",
    },
    {
      date: "22 de Setembro de 2023",
      url: "/Pdf/administrativo/atas/fiscal/09-ATA-CONSELHO-FISCAL-22-09-2023.pdf",
    },
    {
      date: "20 de Outubro de 2023",
      url: "/Pdf/administrativo/atas/fiscal/10-ATA-CONSELHO-FISCAL-20-10-2023.pdf",
    },
    {
      date: "14 de Novembro de 2023",
      url: "/Pdf/administrativo/atas/fiscal/11-ATA-14.11.2023-CONJUNTA-CONSELHO-FISCAL-E-DELIBERATIVO.pdf",
    },
    {
      date: "22 de Dezembro de 2023",
      url: "/Pdf/administrativo/atas/fiscal/12-ATA-CONSELHO-FISCAL-22.12.2023.pdf",
    },
  ],
  "2022": [
    {
      date: "21 de Janeiro de 2022",
      url: "/Pdf/administrativo/atas/fiscal/01-ATA-CONSELHO-FISCAL-21-01-2022.pdf",
    },
    {
      date: "18 de Fevereiro de 2022",
      url: "/Pdf/administrativo/atas/fiscal/02-ATA-CONSELHO-FISCAL-18-02-2022.pdf",
    },
    {
      date: "18 de Março de 2022",
      url: "/Pdf/administrativo/atas/fiscal/03-ATA-CONSELHO-FISCAL-18-03-2022.pdf",
    },
    {
      date: "28 de Abril de 2022",
      url: "/Pdf/administrativo/atas/fiscal/04-ATA-28.04.2022-CONSELHO-DELIBERATIVO-E-FISCAL.pdf",
    },
    {
      date: "20 de Maio de 2022",
      url: "/Pdf/administrativo/atas/fiscal/05-ATA-CONSELHO-FISCAL-20-05-2022.pdf",
    },
    {
      date: "29 de Junho de 2022",
      url: "/Pdf/administrativo/atas/fiscal/06-ATA-CONSELHO-FISCAL-29-06-2022.pdf",
    },
    {
      date: "22 de Julho de 2022",
      url: "/Pdf/administrativo/atas/fiscal/07-ATA-CONSELHO-FISCAL-22-07-2022.pdf",
    },
    {
      date: "16 de Setembro de 2022",
      url: "/Pdf/administrativo/atas/fiscal/08-ATA-CONSELHO-FISCAL-16-09-2022.pdf",
    },
    {
      date: "26 de Outubro de 2022",
      url: "/Pdf/administrativo/atas/fiscal/09-ATA-CONSELHO-FISCAL-26-10-2022.pdf",
    },
    {
      date: "18 de Novembro de 2022",
      url: "/Pdf/administrativo/atas/fiscal/10-ATA-CONSELHO-FISCAL-18-11-2022.pdf",
    },
    {
      date: "20 de Dezembro de 2022 (Reunião conjunta)",
      url: "/Pdf/administrativo/atas/fiscal/14-ATA-20.12.2022-CONSELHO-DELIBERATIVO-FISCAL-E-COMITE-DE-INVEST.pdf",
    },
  ],
  "2021": [
    {
      date: "27 de Abril de 2021",
      url: "/Pdf/administrativo/atas/fiscal/27-Abril-2021.pdf",
    },
    {
      date: "21 de Maio de 2021",
      url: "/Pdf/administrativo/atas/fiscal/21-de-Maio-2021.pdf",
    },
    {
      date: "29 de Junho de 2021",
      url: "/Pdf/administrativo/atas/fiscal/29-Junho-de-2021.pdf",
    },
    {
      date: "27 de Julho de 2021",
      url: "/Pdf/administrativo/atas/fiscal/27-Julho-de-2021.pdf",
    },
    {
      date: "27 de Agosto de 2021",
      url: "/Pdf/administrativo/atas/fiscal/27-Agosto-de-2021.pdf",
    },
    {
      date: "17 de Setembro de 2021",
      url: "/Pdf/administrativo/atas/fiscal/17-Setembro-de-2021.pdf",
    },
    {
      date: "22 de Outubro de 2021",
      url: "/Pdf/administrativo/atas/fiscal/22-Outubro-de-2021-compactado.pdf",
    },
    {
      date: "08 de Novembro de 2021",
      url: "/Pdf/administrativo/atas/fiscal/08-Novembro-de-2021.pdf",
    },
    {
      date: "17 de Dezembro de 2021",
      url: "/Pdf/administrativo/atas/fiscal/17-de-Dezembro-de-2021.pdf",
    },
  ],
  "2020": [
    {
      date: "20 de Fevereiro de 2020",
      url: "/Pdf/administrativo/atas/fiscal/01-ATA-CONSELHO-FISCAL-20-02-2020.pdf",
    },
    {
      date: "11 de Março de 2020",
      url: "/Pdf/administrativo/atas/fiscal/02-ATA-CONSELHO-FISCAL-11-03-2020.pdf",
    },
    {
      date: "19 de Agosto de 2020",
      url: "/Pdf/administrativo/atas/fiscal/03-ATA-CONSELHO-FISCAL-19-08-2020.pdf",
    },
    {
      date: "31 de Agosto de 2020",
      url: "/Pdf/administrativo/atas/fiscal/04-ATA-CONSELHO-FISCAL-31-08-2020.pdf",
    },
    {
      date: "10 de Setembro de 2020",
      url: "/Pdf/administrativo/atas/fiscal/05-ATA-CONSELHO-FISCAL-10-09-2020.pdf",
    },
    {
      date: "08 de Outubro de 2020",
      url: "/Pdf/administrativo/atas/fiscal/06-ATA-CONSELHO-FISCAL-08-10-2020.pdf",
    },
  ],
  "2019": [
    {
      date: "21 de Maio de 2019",
      url: "/Pdf/administrativo/atas/fiscal/ATA-CONSELHO-FISCAL-21-05-2019.pdf",
    },
    {
      date: "05 de Junho de 2019",
      url: "/Pdf/administrativo/atas/fiscal/02-ATA-FISC-05-06-19.pdf",
    },
    {
      date: "23 de Setembro de 2019",
      url: "/Pdf/administrativo/atas/fiscal/03-ATA-FISC-23-09-19..pdf",
    },
    {
      date: "05 de Dezembro de 2019",
      url: "/Pdf/administrativo/atas/fiscal/04-ATA-FISC-05-12-19.pdf",
    },
  ],
  "2018": [
    {
      date: "29 de Novembro de 2018",
      url: "/Pdf/administrativo/atas/fiscal/SCAN_20181203_091859632.pdf",
    },
    {
      date: "29 de Junho de 2018",
      url: "/Pdf/administrativo/atas/fiscal/ATA-29-06-2018-FISC.pdf",
    },
    {
      date: "19 de Abril de 2018",
      url: "/Pdf/administrativo/atas/fiscal/ATA-19-04-2018-FISC.pdf",
    },
    {
      date: "13 de Abril de 2018",
      url: "/Pdf/administrativo/atas/fiscal/ATA-13-04.pdf",
    },
    {
      date: "26 de Janeiro de 2018",
      url: "/Pdf/administrativo/atas/fiscal/ATA-26-01-2018-ADM-E-FISC.pdf",
    },
  ],
  "2014 a 2017": [
    {
      date: "Atas de 2017 – Conselho de Administração e Fiscal",
      url: "/Pdf/administrativo/atas/fiscal/ATAS-2017.pdf",
    },
    {
      date: "Atas de 2016 – Conselho de Administração e Fiscal",
      url: "/Pdf/administrativo/atas/fiscal/Item-m-Ata-reunião-conselho-2016.pdf",
    },
    {
      date: "Atas de 2015 – Conselho de Administração e Fiscal",
      url: "/Pdf/administrativo/atas/fiscal/merged.pdf",
    },
    {
      date: "Atas de 2014 – Conselho de Administração e Fiscal",
      url: "/Pdf/administrativo/atas/fiscal/Atas-de-2014-Conselho-de-Administracao-e-Fiscal.pdf",
    },
  ],
  "2010 a 2013": [
    {
      date: "Atas de 2013",
      url: "/Pdf/administrativo/atas/fiscal/Atas-de-2013-Conselho-Fiscal.pdf",
    },
    {
      date: "Atas de 2012",
      url: "/Pdf/administrativo/atas/fiscal/Atas-de-2012-Conselho-Fiscal.pdf",
    },
    {
      date: "Atas de 2011",
      url: "/Pdf/administrativo/atas/fiscal/Atas-de-2011-Conselho-Fiscal.pdf",
    },
    {
      date: "Atas de 2010",
      url: "/Pdf/administrativo/atas/fiscal/Atas-de-2010-Conselho-Fiscal.pdf",
    },
  ],
};

const Links = () => (
  <div className="h-auto bg-gradient-to-b from-[#ffffff] via-[#dcecff] to-[#cbe1fc]">
    <div className="mx-auto max-w-full sm:max-w-4xl md:max-w-6xl p-6 py-12 sm:py-16 md:py-20">
      {Object.entries(data)
        .sort(([yearA], [yearB]) => yearB.localeCompare(yearA, "pt-BR", { numeric: true }))
        .map(([year, entries]) => (
          <div key={year}>
            <h1 className="lg:text-5xl text-4xl font-bold mb-4 uppercase text-blue-900 leading-tight">
              {year}
            </h1>
            <ul className="list-disc pl-5 text-[#051f60] text-2xl pb-20 grid lg:grid-cols-2">
              {entries.map((entry, index) => (
                <li key={index} className="py-2">
                  <a
                    href={entry.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-800 hover:underline"
                  >
                    {entry.date}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  </div>
);

const Legislacao = () => (
  <div className="flex flex-col">
    <Links />
  </div>
);

export default Legislacao;
