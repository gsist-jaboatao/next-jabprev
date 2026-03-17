"use client";

import React from "react";

const data: Record<string, { date: string; url: string }[]> = {
  "2026": [
    {
      date: "22 de Janeiro de 2026",
      url: "/Pdf/administrativo/atas/deliberativo/1.1conselho-deliberativo-22dejaneirode2026.pdf",
    },
    {
      date: "12 de Fevereiro de 2026",
      url: "/Pdf/administrativo/atas/deliberativo/1.1conselho-deliberativo-12defevereirode2026.pdf",
    },
  ],
  "2025": [
    {
      date: "30 de Janeiro de 2025",
      url: "/Pdf/administrativo/atas/deliberativo/01-ATA-30.01.2025-CONSELHO-DELIBERATIVO.pdf",
    },
    {
      date: "20 de Fevereiro de 2025",
      url: "/Pdf/administrativo/atas/deliberativo/02-ATA-CONSELHO-DELIBERATIVO-20.02.2025.pdf",
    },
    {
      date: "25 de Fevereiro de 2025 (Reunição Extraordinária)",
      url: "/Pdf/administrativo/atas/deliberativo/03-ATA-25.02.2025-CONJUNTA-CONSELHO-FISCAL-E-DELIBERATIVO-ATUARIO.pdf",
    },
    {
      date: "21 de Março de 2025",
      url: "/Pdf/administrativo/atas/deliberativo/2.1_ATA_CONSELHO_DELIBERATIVO___21_de_marco_de_2025.pdf",
    },
    {
      date: "24 de abril de2025",
      url: "/Pdf/administrativo/atas/deliberativo/2.1___24_DE_ABRIL_DE_2025___CONSELHO_DELIBERATIVO.pdf",
    },
    {
      date: "15 de maio de 2025",
      url: "/Pdf/administrativo/atas/deliberativo/2.1___15_DE_MAIO_DE_2025___CONSELHO_DELIBERATIVO.pdf",
    },
    {
      date: "19 de Junho de 2025",
      url: "/Pdf/administrativo/atas/deliberativo/2.1___ATA_19.06.2025___CONSELHO_DELIBERATIVO.pdf",
    },
    {
      date: "15 de julho de 2025",
      url: "/Pdf/administrativo/atas/deliberativo/2.1_Conselho_Deliberativo___Ata_de_15_de_julho_de_2025.pdf",
    },
    {
      date: "01 de agosto de 2025 – (Reunião Extraordinária)",
      url: "/Pdf/administrativo/atas/deliberativo/2.1_Conselho_Deliberativo___Ata_de_01_de_agosto_de_2025____Reuniao_Extraordinaria_.pdf",
    },
    {
      date: "21 de agosto de 2025",
      url: "/Pdf/administrativo/atas/deliberativo/2.1_Conselho_Deliberativo___Ata_de_21_de_agosto_de_2025.pdf",
    },
    {
      date: "18 de setembro de 2025",
      url: "/Pdf/administrativo/atas/deliberativo/2.1___Conselho_Deliberativo___Ata_18_de_setembro_de_2025.pdf",
    },
    {
      date: "20 de outubro de 2025",
      url: "/Pdf/administrativo/atas/deliberativo2.1___Conselho_Deliberativo___Ata_20_de_outubro_de_2025.pdf",
    },
    {
      date: "19 de Novembro de 2025",
      url: "/Pdf/administrativo/atas/deliberativo/1.1_Conselho_Deliberativo___19_de_novembro_de_2025.pdf",
    },
    {
      date: "Conjunta Conselho Fiscal e Deliberativo - 17 de dezembro de 2025",
      url: "/Pdf/administrativo/atas/deliberativo/1.1_Conjunta_Conselho_Fiscal_e_Deliberativo___17_de_dezembro_de_2025.pdf",
    },
  ],
  "2024": [
    {
      date: "25 de Janeiro de 2024",
      url: "/Pdf/administrativo/atas/deliberativo/01-ATA-25.01.2024-CONSELHO-DELIBERATIVO.pdf",
    },
    {
      date: "22 de Julho 2024",
      url: "/Pdf/administrativo/atas/deliberativo/07_-_ATA_22.07.2024_-_CONSELHO_DELIBERATIVO_assinado_assinado_assinado_assinado-assinado_assinado_assinado.pdf",
    },
    {
      date: "19 de Fevereiro de 2024",
      url: "/Pdf/administrativo/atas/deliberativo/02-ATA-19.02.2024-CONSELHO-DELIBERATIVO.pdf",
    },
    {
      date: "15 de Agosto de 2024",
      url: "/Pdf/administrativo/atas/deliberativo/08-ATA-15.08.2024-CONSELHO-DELIBERATIVO.pdff",

    },
    {
      date: "25 de Março de 2024",
      url: "/Pdf/administrativo/atas/deliberativo/03-ATA-25.03.2024-CONSELHO-DELIBERATIVO.pdf",

    },
    {
      date: "19 de Abril de 2024",
      url: "/Pdf/administrativo/atas/deliberativo/04-ATA-19.04.2024-CONJUNTA-CONSELHO-FISCAL-E-DELIBERATIVO.pdf",
    },
    {
      date: "17 de Outubro de 2024",
      url: "/Pdf/administrativo/atas/deliberativo/10-ATA-17.10.2024-CONJUNTA-CONSELHO-FISCAL-E-DELIBERATIVO.pdf",
    },
    {
      date: "16 de Maio de 2024",
      url: "/Pdf/administrativo/atas/deliberativo/05-ATA-16.05.2024-CONJUNTA-CONSELHO-FISCAL-E-DELIBERATIVO.pdf",
    },
    {
      date: "21 de Novembro de 2024",
      url: "/Pdf/administrativo/atas/deliberativo/11-ATA-21.11.2024-CONJUNTA-CONSELHO-FISCAL-E-DELIBERATIVO.pdf",
    },
    {
      date: "20 de Junho de 2024",
      url: "/Pdf/administrativo/atas/deliberativo/06-ATA-20.06.2024-CONJUNTA-CONSELHO-FISCAL-E-DELIBERATIVO.pdf",
    },
    {
      date: "19 de Dezembro de 2024",
      url: "/Pdf/administrativo/atas/deliberativo/12-ATA-21.12.2024-CONSELHO-DELIBERATIVO.pdf",
    },
  
  ],
  "2023": [
    {
      date: "30 de Janeiro de 2023",
      url: "/Pdf/administrativo/atas/deliberativo/ATA_30-01-2023_assinado1.pdf",
    },
    {
      date: "28 de Julho de 2023",
      url: "/Pdf/administrativo/atas/deliberativo/ATA_28-02-2023_assinado1.pdf",
    },
    {
      date: "28 de Fevereiro de 2023",
      url: "/Pdf/administrativo/atas/deliberativo/07-ATA-28.07.2023-CONSELHO-DELIBERATIVO.pdf",
    },
    {
      date: "10 de Agosto de 2023",
      url: "/Pdf/administrativo/atas/deliberativo/06-ATA-CONJUNTA-CONSELHO-FISCAL-E-DELIBERATIVO-10.08.2023.pdf",
    },
    {
      date: "16 de Março de 2023",
      url: "/Pdf/administrativo/atas/deliberativo/03.ATA_16-03-2023-ass.pdf",
    },
    {
      date: "21 de Setembro de 2023",
      url: "/Pdf/administrativo/atas/deliberativo/09-ATA-21.09.2023-CONSELHO-DELIBERATIVO.pdf",
    },
    {
      date: "28 de Abril de 2023",
      url: "/Pdf/administrativo/atas/deliberativo/04.ATA_28-04-2023-ass.pdf",
    },
    {
      date: "19 de Outubro de 2023",
      url: "/Pdf/administrativo/atas/deliberativo/10-ATA-19.10.2023-CONSELHO-DELIBERATIVO.pdf",
    },
    {
      date: "18 de Maio de 2023",
      url: "/Pdf/administrativo/atas/deliberativo/05-ATA-18.05.2023-CONSELHO-DELIBERATIVO.pdf",
    },
    {
      date: "14 de Novembro de 2023",
      url: "/Pdf/administrativo/atas/deliberativo/11-ATA-14.11.2023-CONJUNTA-CONSELHO-FISCAL-E-DELIBERATIVO.pdf",
    },
    {
      date: "28 de Junho de 2023",
      url: "/Pdf/administrativo/atas/deliberativo/06-ATA-28.06.2023-CONSELHO-DELIBERATIVO.pdf",
    },
    {
      date: "21 de Dezembro de 2023",
      url: "/Pdf/administrativo/atas/deliberativo/12-ATA-21.12.2023-CONSELHO-DELIBERATIVO.pdf",
    },
  ],
  "2022": [
    {
      date: "17 de Janeiro de 2022",
      url: "/Pdf/administrativo/atas/deliberativo/01-17-de-janeiro-2022.pdf",
    },
    {
      date: "25 de Agosto de 2022",
      url: "/Pdf/administrativo/atas/deliberativo/09-ATA-25.08.2022-CONSELHO-DELIBERATIVO.pdf",
    },
    {
      date: "17 de Fevereiro de 2022",
      url: "/Pdf/administrativo/atas/deliberativo/02-ATA-17.02.2022-CONSELHO-DELIBERATIVO.pdf",
    },
    {
      date: "15 de Setembro de 2022",
      url: "/Pdf/administrativo/atas/deliberativo/10-ATA-15.09.2022-CONSELHO-DELIBERATIVO.pdf",
    },
    {
      date: "17 de Março de 2022",
      url: "/Pdf/administrativo/atas/deliberativo/03-ATA-17.03.2022-CONSELHO-DELIBERATIVO.pdf",
    },
    {
      date: "20 de Setembro de 2022 (Extraordinária)",
      url: "/Pdf/administrativo/atas/deliberativo/11-ATA-20.09.2022-CONSELHO-DELIBERATIVO-EXTRAORDINARIA.pdf",
    },
    {
      date: "28 de Abril de 2022",
      url: "/Pdf/administrativo/atas/deliberativo/04-ATA-28.04.2022-CONSELHO-DELIBERATIVO-E-FISCAL.pdf",
    },
    {
      date: "20 de Outubro de 2022",
      url: "/Pdf/administrativo/atas/deliberativo/12-ATA-20.10.2022-CONSELHO-DELIBERATIVO.pdf",
    },
    {
      date: "19 de Maio de 2022",
      url: "/Pdf/administrativo/atas/deliberativo/05-ATA-19.05.2022-CONSELHO-DELIBERATIVO.pdf",
    },
    {
      date: "17 de Novembro de 2022",
      url: "/Pdf/administrativo/atas/v13-ATA-17.11.2022-CONSELHO-DELIBERATIVO.pdf",
    },
    {
      date: "28 de Junho de 2022",
      url: "/Pdf/administrativo/atas/deliberativo/07-ATA-28.06.2022-CONSELHO-DELIBERATIVO.pdf",
    },
    {
      date: "20 de Dezembro de 2022 (Reunião conjunta)",
      url: "/Pdf/administrativo/atas/deliberativo/14-ATA-20.12.2022-CONSELHO-DELIBERATIVO-FISCAL-E-COMITE-DE-INVEST.pdf",
    },
    {
      date: "21 de Julho 2022",
      url: "/Pdf/administrativo/atas/deliberativo/08-ATA-21.07.2022-CONSELHO-DELIBERATIVO.pdf",
    },
  ], 
  "2021": [
    {
      date: "22 de Abril de 2021",
      url: "/Pdf/administrativo/atas/deliberativo/01-22-DE-ABRIL-2021.pdf",
    },
    {
      date: "25 de Maio de 2021",
      url: "/Pdf/administrativo/atas/deliberativo/02-25-de-maio-2021.pdf",
    },
    {
      date: "09 de Junho de 2021",
      url: "/Pdf/administrativo/atas/deliberativo/03-09-de-junho-de-2021.pdf",
    },
    {
      date: "03 de Agosto de 2021",
      url: "/Pdf/administrativo/atas/deliberativo/04-03-de-agosto-de-2021.pdf",
    },
    {
      date: "19 de Agosto de 2021",
      url: "/Pdf/administrativo/atas/deliberativo/05-19-de-agosto-de-2021.pdf",
    },
    {
      date: "31 de Agosto de 2021",
      url: "/Pdf/administrativo/atas/deliberativo/06-31-de-agosto-de-2021.pdf",
    },
    {
      date: "21 de Setembro de 2021",
      url: "/Pdf/administrativo/atas/deliberativo/07-21-de-setembro-de-2021.pdf",
    },
    {
      date: "16 de Dezembro de 2021",
      url: "/Pdf/administrativo/atas/deliberativo/08-16-de-dezembro-2021.pdf",
    },
  ],
  "2020": [
    {
      date: "10 de Setembro de 2020",
      url: "/Pdf/administrativo/atas/deliberativo/ATA-10.09.2020-CONSELHO-ADM.pdf",
    },
    {
      date: "17 de Setembro de 2020",
      url: "/Pdf/administrativo/atas/deliberativo/ATA-17.09.2020-CONSELHO-ADM.pdf",
    },
    {
      date: "16 de Dezembro 2020 (Política de Investimentos)",
      url: "/Pdf/administrativo/atas/ATA-16.12.2020-CONSELHO-ADM.pdf",
    },
  ],
  "2019": [
    {
      date: "14 de Maio de 2019",
      url: "/Pdf/administrativo/atas/deliberativo/ATA-14.05.2019-ADM.pdf",
    },
    {
      date: "04 de Junho de 2019",
      url: "/Pdf/administrativo/atas/deliberativo/02-ATA-ADM-04-06-19.pdf",
    },
    {
      date: "02 de Julho de 2019",
      url: "/Pdf/administrativo/atas/deliberativo/03-ATA-ADM-02-07-19.pdf",
    },
    {
      date: "08 de Agosto de 2019",
      url: "/Pdf/administrativo/atas/deliberativo/04-ATA-ADM-08-08-19.pdf",
    },
    {
      date: "23 de Outubro de 2019",
      url: "/Pdf/administrativo/atas/deliberativo/05-ATA-ADM-23-10-19.pdf",
    },
    {
      date: "14 de Novembro de 2019",
      url: "/Pdf/administrativo/atas/deliberativo/06-ATA-ADM-14-11-19.pdf",
    },
    {
      date: "04 de Dezembro de 2019",
      url: "/Pdf/administrativo/atas/deliberativo/07-ATA-ADM-04-12-19.pdf",
    },
  ],
  "2018": [
    {
      date: "26 de Janeiro 2018",
      url: "/Pdf/administrativo/atas/deliberativo/ATA-26-01-2018-ADM-E-FISC.pdf",
    },
    {
      date: "27 de Abril de 2018",
      url: "/Pdf/administrativo/atas/deliberativo/ATA-27-04-2018-ADM.pdf",
    },
    {
      date: "10 de maio de 2018 (Ratificação Política de Investimento)",
      url: "/Pdf/administrativo/atas/deliberativo/ATA-ADM-10-05-2018.pdf",
    },
    {
      date: "27 de julho de 2018",
      url: "/Pdf/administrativo/atas/deliberativo/ATA-27-07-2018-ADM.pdf",
    },
    {
      date: "26 de Setembro de 2018",
      url: "/Pdf/administrativo/atas/deliberativo/ATA-26.09.2018-ADM-N-merged.pdf",
    },
    {
      date: "18 de Outubro de 2018 (Política de Investimento 2019)",
      url: "/Pdf/administrativo/atas/deliberativo/CONSELHO-DE-ADM-ATA-DA-REUNIAO-18_10_2018-páginas-1-7.pdf",
    },
    {
      date: "28 de Novembro de 2018",
      url: "/Pdf/administrativo/atas/deliberativo/SCAN_20181203_091948304.pdf",
    },
  ],
  "De 2014 a 2017 - Administrativo e Fiscal (reuniões conjuntas)": [
    {
      date: "Atas de 2017 – Conselho de Administração (Aprovação Política de Investimento 2018)",
      url: "/Pdf/administrativo/atas/deliberativo/ATA-REUNIÃO-15-12-2017-APROVAÇÃO-POLITICA.pdf",
    },
    {
      date: "Atas de 2017 – Conselho de Administração e Fiscal",
      url: "/Pdf/administrativo/atas/deliberativo/ATAS-2017.pdf",
    },
    {
      date: "Atas de 2017 – Conselho de Administração e Fiscal",
      url: "/Pdf/administrativo/atas/deliberativo/Item-m-Ata-reunião-conselho-2016.pdf",
    },
    {
      date: "Atas de 2017 – Conselho de Administração e Fiscal",
      url: "/Pdf/administrativo/atas/deliberativo/merged.pdf",
    },
    {
      date: "Atas de 2017 – Conselho de Administração e Fiscal",
      url: "/Pdf/administrativo/atas/deliberativo/Atas-de-2014-Conselho-de-Administracao-e-Fiscal.pdf",
    },
  ],
  "De 2010 a 2013": [
    {
      date: "Atas de 2013",
      url: "/Pdf/administrativo/atas/deliberativo/Atas-de-2013-Conselho-de-Administracao.pdf",
    },
    {
      date: "Atas de 2013",
      url: "/Pdf/administrativo/atas/deliberativo/Atas-de-2012-Conselho-de-Administracao.pdf",
    },
    {
      date: "Atas de 2013",
      url: "/Pdf/administrativo/atas/deliberativo/Atas-de-2011-Conselho-de-Administracao.pdf",
    },
    {
      date: "Atas de 2013",
      url: "/Pdf/administrativo/atas/deliberativo/Atas-de-2010-Conselho-de-Administracao.pdf",
    },
  ],
  "2022 Boletim": [
    {
      date: "Boletim n° 03 – Apresentação de CTC na instrução do processo de aposentadoria",
      url: "/Pdf/administrativo/atas/deliberativo/Boletim-previdenciario-03-22-CTC.pdf",
    },
    {
      date: "Boletim n° 02 – Nova norma de investimentos",
      url: "/Pdf/administrativo/atas/deliberativo/Boletim-previdenciario-Investimentos2022.pdf",
    },
    {
      date: "Boletim n° 01- Censo previdenciário",
      url: "/Pdf/administrativo/atas/deliberativo/Boletim previdenciário - 01-22 - censo.pdf",
    },
  ],
};

const Links = () => (
  <div className="h-auto bg-gradient-to-b from-[#ffffff] via-[#dcecff] to-[#cbe1fc]">
    <div className="mx-auto max-w-6xl p-6 py-20">
      {Object.entries(data)
        .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA)) // Ordena os anos em ordem decrescente
        .map(([year, entries]) => (
          <div key={year}>
            <h1 className="text-5xl font-bold mb-4 uppercase text-blue-900 leading-tight">
              {year}
            </h1>
            <ul className="list-disc pl-5 text-[#051f60] text-xl pb-20 grid grid-cols-2">
              {entries.map((entry, idx) => (
                <li key={idx} className="py-2">
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
