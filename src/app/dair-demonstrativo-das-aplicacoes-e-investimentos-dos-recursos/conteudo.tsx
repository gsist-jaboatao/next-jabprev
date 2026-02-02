"use client";
import React from "react";

interface Report {
  name: string;
  url: string;
}

interface ReportsByYear {
  [year: string]: {
    title: string;
    reports: Report[];
  };
}

const reportsData: ReportsByYear = {
  "2025": {
    title: "2025",
    reports: [
      {
        name: "Janeiro",
        url: "Pdf/cad-prev/dair/2.2_JANEIRO.pdf",
      },

      {
        name: "Fevereiro",
        url: "Pdf/cad-prev/dair/2.2_FEVEREIRO.pdf",
      },

      {
        name: "Março",
        url: "Pdf/cad-prev/dair/5.1_DAIR_MARCO.pdf",
      },

      {
        name: "Abril",
        url: "Pdf/cad-prev/dair/5.1_DAIR_ABRIL.pdf",
      }, 
      {
        name: "Maio",
        url: "Pdf/cad-prev/dair/5.2_DAIR_MAIO.pdf",
      },
      {
        name: "Junho",
        url: "Pdf/cad-prev/dair/4.2_DAIR_JUNHO.pdf",
      },
      {
        name: "Julho",
        url: "Pdf/cad-prev/dair/2.1_APR_JULHO.pdf",
      },
      {
        name: "Agosto",
        url: "Pdf/cad-prev/dair/6.2_DAIR_AGOSTO.pdf",
      },
      {
        name: "Setembro",
        url: "Pdf/cad-prev/dair/5.1_DAIR_SETEMBRO.pdf",
      },
      {
        name: "Outubro",
        url: "Pdf/cad-prev/dair/4.2_DAIR_OUTUBRO.pdf",
      },
      {
        name: "Novembro",
        url: "Pdf/cad-prev/dair/4.1_DAIR_NOVEMBRO.pdf",
      },
    ],
  },

  "2024": {
    title: "2024",
    reports: [
      {
        name: "Janeiro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/07/01.-DAIR-DE-JANEIRO.pdf",
      },

      {
        name: "Fevereiro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/07/02.-DAIR-DE-FEVEREIRO.pdf",
      },

      {
        name: "Março",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/07/03.-DAIR-DE-MARCO.pdf",
      },

      {
        name: "Abril",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/07/04.-DAIR-DE-ABRIL.pdf",
      },

      {
        name: "Maio",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/07/05.-DAIR-DE-MAIO.pdf ",
      },

      {
        name: "Junho",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/07/06.-DAIR-DE-JUNHO.pdf",
      },

      {
        name: "Julho",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/09/dair-07-CADPREV.pdf",
      },

      {
        name: "Agosto",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/09/08.-DAIR-DE-AGOSTO.pdf",
      },

      {
        name: "Setembro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/10/09.-DAIR-DE-SETEMBRO.pdf",
      },

      {
        name: "Outubro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/11/10.-DAIR-DE-OUTUBRO.pdf",
      },

      {
        name: "Novembro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/01/11.-DAIR-DE-NOVEMBRO.pdf",
      },

      {
        name: "Dezembro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/01/12.-DAIR-DE-DEZEMBRO.pdf",
      },
    ],
  },

  "2023": {
    title: "2023",
    reports: [
      {
        name: "Janeiro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/08/1.-DAIR-DE-JANEIRO-1.pdf",
      },

      {
        name: "Fevereiro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/08/2.-DAIR-DE-FEVEREIRO-1.pdf",
      },

      {
        name: "Março",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/08/3.-DAIR-DE-MARCO-1.pdf",
      },

      {
        name: "Abril",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/08/4.-DAIR-DE-ABRIL-1.pdf",
      },

      {
        name: "Maio",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/08/DAIR_20210826_MAIO.pdf",
      },

      {
        name: "Junho",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/08/DAIR_20210826_JUNHO.pdf",
      },

      {
        name: "Julho",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/08/7.-DAIR-DE-JULHO-1.pdf",
      },

      {
        name: "Agosto",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/10/8.-DAIR-DE-AGOSTO.pdf",
      },

      {
        name: "Setembro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/10/9.-DAIR-DE-SETEMBRO.pdf",
      },

      {
        name: "Outubro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/01/10.-DAIR-DE-OUTUBRO.pdf",
      },

      {
        name: "Novembro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/01/11.-DAIR-DE-NOVEMBRO.pdf",
      },

      {
        name: "Dezembro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/07/12.-DAIR-DE-DEZEMBRO.pdf",
      },
    ],
  },

  "2022": {
    title: "2022",
    reports: [
      {
        name: "Janeiro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/08/1.-DAIR-DE-JANEIRO.pdf",
      },

      {
        name: "Fevereiro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/06/DAIR_2020_FEV.pdf",
      },

      {
        name: "Março",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/08/3.-DAIR-DE-MARCO.pdf",
      },

      {
        name: "Abril",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/08/4.-DAIR-DE-ABRIL.pdf",
      },

      {
        name: "Maio",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/08/5.-DAIR-DE-MAIO.pdf",
      },

      {
        name: "Junho",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/08/6.-DAIR-DE-JUNHO.pdf",
      },

      {
        name: "Julho",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/08/7.-DAIR-DE-JULHO.pdf",
      },

      {
        name: "Agosto",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/08/8.-DAIR-DE-AGOSTO.pdf",
      },

      {
        name: "Setembro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/08/9.-DAIR-DE-SETEMBRO.pdf",
      },

      {
        name: "Outubro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/08/10.-DAIR-DE-OUTUBRO.pdf",
      },

      {
        name: "Novembro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/08/11.-DAIR-DE-NOVEMBRO.pdf",
      },

      {
        name: "Dezembro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/08/12.-DAIR-DE-DEZEMBRO.pdf",
      },
    ],
  },

  "2021": {
    title: "2021",
    reports: [
      {
        name: "Janeiro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/08/1.-DAIR-DE-JANEIRO.pdf",
      },

      {
        name: "Fevereiro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/08/DAIR_20210826_FEV.pdf",
      },

      {
        name: "Março",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/08/DAIR_20210826_MAR.pdf",
      },

      {
        name: "Abril",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/08/DAIR_20210826_ABRIL.pdf",
      },

      {
        name: "Maio",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/08/DAIR_20210826_MAIO.pdf",
      },

      {
        name: "Junho",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/08/DAIR_20210826_JUNHO.pdf",
      },

      {
        name: "Julho",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/08/DAIR_20210826_JULHO.pdf",
      },

      {
        name: "Agosto",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/02/DAIR_AGOSTO.pdf",
      },

      {
        name: "Setembro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/02/DAIR_SETEMBRO.pdf",
      },

      {
        name: "Outubro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/02/DAIR_OUTUBRO.pdf",
      },

      {
        name: "Novembro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/02/DAIR_NOVEMBRO.pdf",
      },

      {
        name: "Dezembro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/02/DAIR_DEZEMBRO.pdf",
      },
    ],
  },

  "2020": {
    title: "2020",
    reports: [
      {
        name: "Janeiro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/06/DAIR_20200_JAN.pdf",
      },

      {
        name: "Fevereiro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/06/DAIR_2020_FEV.pdf",
      },

      {
        name: "Março",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/06/DAIR_MARCO_2020.pdf",
      },

      {
        name: "Abril",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/07/04-DAIR_ABRIL.pdf",
      },

      {
        name: "Maio",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/07/05-DAIR_MAIO.pdf",
      },

      {
        name: "Junho",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/08/06-DAIR_JUNHO.pdf",
      },

      {
        name: "Julho",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/09/07-DAIR-Julho.pdf",
      },

      {
        name: "Agosto",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/10/08-DAIR_AGOSTO.pdf",
      },

      {
        name: "Setembro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/12/09-DAIR-SETEMBRO-2020.pdf",
      },

      {
        name: "Outubro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/02/DAIR_OUTUBRO_2020.pdf",
      },

      {
        name: "Novembro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/02/DAIR_NOVEMBRO_2020.pdf",
      },

      {
        name: "Dezembro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/02/DAIR_DEZEMBRO_2020.pdf",
      },
    ],
  },

  "2019": {
    title: "2019",
    reports: [
      {
        name: "Janeiro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/05/DAIR_JANEIRO_2019.pdf",
      },

      {
        name: "Fevereiro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/05/DAIR_FEVEREIRO_2019.pdf",
      },

      {
        name: "Março",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/06/DAIR_MARCO_2020.pdf",
      },

      {
        name: "Abril",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/05/DAIR_ABRIL_2019.pdf",
      },

      {
        name: "Maio",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/05/DAIR_MAIO_2019.pdf",
      },

      {
        name: "Junho",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/05/DAIR_JUNHO_2019.pdf",
      },

      {
        name: "Julho",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/05/DAIR_JULHO_2019.pdf",
      },

      {
        name: "Agosto",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/05/DAIR_AGOSTO_2019.pdf",
      },

      {
        name: "Setembro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/05/DAIR_SETEMBRO_2019.pdf",
      },

      {
        name: "Outubro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/05/DAIR_OUTUBRO_2019.pdf",
      },

      {
        name: "Novembro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/05/DAIR_NOVEMBRO_2019.pdf",
      },

      {
        name: "Dezembro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/05/DAIR_DEZEMBRO_2019.pdf",
      },
    ],
  },

  "2018": {
    title: "2018",
    reports: [
      {
        name: "Janeiro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2018/03/DAIR-JAN.pdf",
      },

      {
        name: "Fevereiro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2018/03/DECLARACAO_VERACIDADE_DAIR_2018_02.pdf",
      },

      {
        name: "Março",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2018/07/MAR-18.pdf",
      },

      {
        name: "Abril",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2018/07/ABR-18.pdf",
      },

      {
        name: "Maio",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2018/07/MAI-18.pdf",
      },

      {
        name: "Junho",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2018/07/JUN-18.pdf",
      },

      {
        name: "Julho",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2018/09/DECLARACAO_VERACIDADE_DAIR_2018_07.pdf",
      },

      {
        name: "Agosto",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2018/09/DECLARACAO_VERACIDADE_DAIR_2018_08.pdf",
      },

      {
        name: "Setembro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2018/10/DECLARACAO_VERACIDADE_DAIR_2018_09.pdf",
      },

      {
        name: "Outubro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2018/12/DAIR-OUTUBBRO-2018.pdf",
      },

      {
        name: "Novembro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2018/12/SCAN_20181210_132055992.pdf",
      },

      {
        name: "Dezembro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/06/DAIR_2018_DEZ.pdf",
      },
    ],
  },

  "2017": {
    title: "2017",
    reports: [
      {
        name: "Janeiro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2017/11/JAN-DAIR_20171122.pdf",
      },

      {
        name: "Fevereiro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2017/11/FEV-DAIR_20171122.pdf",
      },

      {
        name: "Março",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2017/11/MAR-DAIR_20171122.pdf",
      },

      {
        name: "Abril",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2017/11/ABR-DAIR_20171122.pdf",
      },

      {
        name: "Maio",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2017/11/JUN-MAI-DAIR_20171122.pdf",
      },

      {
        name: "Junho",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2017/11/JUN-MAI-DAIR_20171122.pdf",
      },

      {
        name: "Julho",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2017/11/JUL-DAIR_20171122-1.pdf",
      },

      {
        name: "Agosto",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2017/11/AGO-DAIR_20171122-1.pdf",
      },

      {
        name: "Setembro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2017/11/SET-DAIR_20171122-1.pdf",
      },

      {
        name: "Outubro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2017/12/DAIR-OUT.pdf",
      },

      {
        name: "Novembro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2017/12/DAIR-NOV.pdf",
      },

      {
        name: "Dezembro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2018/03/DECLARACAO_VERACIDADE_DAIR_2017_12.pdf",
      },
    ],
  },

  "2016": {
    title: "2016",
    reports: [
      {
        name: "Janeiro e Fevereiro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2016/02/DAIR-JAN.FEV-2016.pdf",
      },

      {
        name: "Março e Abril",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2016/02/DAIR-MAR.ABR-2016.pdf",
      }, 

      {
        name: "Julho e Agosto",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/carteira-de-investimento/jul-ago-2016/",
      }, 

      {
        name: "Setembro e Outubro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2017/11/set-out-dair.pdf",
      }, 

      {
        name: "Novembro e Dezembro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2017/11/nov-dez-dair.pdf",
      }, 
    ],
  },

  "2015": {
    title: "2015",
    reports: [
      {
        name: "Janeiro e Fevereiro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2016/02/relatorio10.pdf",
      },

      {
        name: "Março e Abril",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2016/02/relatorio9.pdf",
      }, 

      {
        name: "Maio e Junho",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2016/02/relatorio8.pdf",
      }, 

      {
        name: "Julho e Agosto",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2016/02/relatorio7.pdf",
      }, 

      {
        name: "Setembro e Outubro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2016/02/relatorio6.pdf",
      }, 

      {
        name: "Novembro e Dezembro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2016/02/relatorio11.pdf",
      }, 
    ],
  },

  "2014": {
    title: "2014",
    reports: [
      {
        name: "Janeiro e Fevereiro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2016/02/relatorio.pdf",
      },

      {
        name: "Março e Abril",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2016/02/relatorio1.pdf",
      }, 

      {
        name: "Maio e Junho",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2016/02/relatorio2.pdf",
      }, 

      {
        name: "Julho e Agosto",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2016/02/relatorio3.pdf",
      }, 

      {
        name: "Setembro e Outubro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2016/02/relatorio4.pdf",
      }, 

      {
        name: "Novembro e Dezembro",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2016/02/relatorio5.pdf",
      }, 
    ],
  },

};

const FinancialReports: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#ffffff] via-[#dcecff] to-[#cbe1fc] min-h-screen pb-10">

      {Object.keys(reportsData)
        .sort((a, b) => Number(b) - Number(a))
        .map((year) => {
          const { title, reports } = reportsData[year];
          return (
            <div key={year} className="max-w-5xl mx-auto lg:px-4 px-20 uppercase">
              <h2 className="text-5xl font-bold text-blue-900 mt-14">
                {title}
              </h2>
              <hr className="border-t-2 border-blue-900 w-16 mb-4" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 Montserrat-Medium">
                {reports.map((report, index) => (
                  <a
                    key={`${year}-${index}`}
                    href={report.url}
                    target={report.url === "#" ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    className={`text-xl flex justify-between p-2 rounded-lg transition ${
                      report.url === "#"
                        ? "text-gray-500 cursor-default pointer-events-none"
                        : "text-[#051f60] hover:underline"
                    }`}
                  >
                    <span>{report.name}</span>
                  </a>
                ))}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default FinancialReports;
