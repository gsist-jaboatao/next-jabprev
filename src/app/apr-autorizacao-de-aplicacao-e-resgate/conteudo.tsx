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
        name: "APR – Janeiro – 2025",
        url: "/Pdf/investimentos/Arp/5.1_APR_JANEIRO.pdf",
      },
      {
        name: "APR – Fevereiro – 2025",
        url: "/Pdf/investimentos/Arp/5.1_APR_FEVEREIRO.pdf",
      },
      {
        name: "APR – Março – 2025",
        url: "/Pdf/investimentos/Arp/3.1_APR_MARCO.pdf",
      },
      {
        name: "APR – Abril – 2025",
        url: "/Pdf/investimentos/Arp/3.1_APR_ABRIL.pdf",
      },
      {
        name: "APR – Maio – 2025",
        url: "/Pdf/investimentos/Arp/4.1___APR_MAIO.pdf",
      },
      {
        name: "APR – Junho – 2025",
        url: "/Pdf/investimentos/Arp/3.1_ARP___JUNHO_2025.pdf",
      },
      {
        name: "APR – Julho – 2025",
        url: "/Pdf/investimentos/Arp/2.1_APR_JULHO.pdf",
      },
      {
        name: "APR – Agosto – 2025",
        url: "/Pdf/investimentos/Arp/5.1_APR_AGOSTO.pdf",
      },
      {
        name: "APR – Setembro – 2025",
        url: "/Pdf/investimentos/Arp/4.1._APR___SETEMBRO.pdf",
      },
      {
        name: "APR – Outubro – 2025",
        url: "/Pdf/investimentos/Arp/3.1_APR_OUTUBRO.pdf",
      },
      {
        name: "APR – Novembro – 2025",
        url: "/Pdf/investimentos/Arp/3.1_APR_NOVEMBRO.pdf",
      },
    ],
  },

  "2024": {
    title: "2024",
    reports: [
      {
        name: "APR – Janeiro – 2024",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/06/01.-APR-JANEIRO.pdf",
      },
      {
        name: "APR – Fevereiro – 2024",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/06/02.-APR-FEVEREIRO.pdf",
      },
      {
        name: "APR – Março – 2024",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/07/03.-APR-MARCO.pdf",
      },
      {
        name: "APR – Abril – 2024",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/07/04.-APR-ABRIL.pdf",
      },
      {
        name: "APR – Maio – 2024",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/07/05.-APR-MAIO.pdf",
      },
      {
        name: "APR – Junho – 2024",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/07/06.-APR-JUNHO.pdf",
      },
      {
        name: "APR – Julho – 2024",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/08/07.-APR-JULHO.pdf",
      },
      {
        name: "APR – Agosto – 2024",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/09/08.-APR-AGOSTO.pdf",
      },
      {
        name: "APR – Setembro – 2024",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/10/09.-APR-SETEMBRO.pdf",
      },
      {
        name: "APR – Outubro – 2024",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/11/10.-APR-OUTUBRO.pdf",
      },
      {
        name: "APR – Novembro – 2024",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/01/11.-APR-NOVEMBRO.pdf",
      },
      {
        name: "APR – Dezembro – 2024",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/01/12.-APR-DEZEMBRO.pdf",
      },
    ],
  },

  "2023": {
    title: "2023",
    reports: [
      {
        name: "APR – Janeiro – 2023",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/03/APR-Janeiro-2023.pdf",
      },
      {
        name: "APR – Fevereiro – 2023",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/04/02.-APR-FEVEREIRO.pdf",
      },
      {
        name: "APR – Março – 2023",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/05/03.-APR-MARCO.pdf",
      },
      {
        name: "APR – Abril – 2023",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/06/04.-APR-ABRIL.pdf",
      },
      {
        name: "APR – Maio – 2023",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/06/05.-APR-MAIO.pdf",
      },
      {
        name: "APR – Junho – 2023",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/07/APRs-DE-JUNHO.pdf",
      },
      {
        name: "APR – Julho – 2023",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/08/APR-JULHO-2023-1.pdf",
      },
      {
        name: "APR – Agosto – 2023",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/10/08.-APR-AGOSTO-2023.pdf",
      },
      {
        name: "APR – Setembro – 2023",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/10/09.-APR-SETEMBRO-2023.pdf",
      },
      {
        name: "APR – Outubro – 2023",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/01/10.-APR-OUTUBRO-2023.pdf",
      },
      {
        name: "APR – Novembro – 2023",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/01/11.-APR-NOVEMBRO-2023.pdf",
      },
      {
        name: "APR – Dezembro – 2023",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/01/12.-APR-DEZEMBRO-2023.pdf",
      },
    ],
  },

  "2022": {
    title: "2022",
    reports: [
      { name: "APR – Janeiro – 2022", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/07/APR-JANEIRO-2022.pdf" },
      { name: "APR – Fevereiro – 2022", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/07/APR-FEVEREIRO-2022.pdf" },
      { name: "APR – Março – 2022", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/07/APR-DE-MARCO.pdf" },
      { name: "APR – Abril – 2022", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/07/APR-DE-ABRIL.pdf" },
      { name: "APR – Maio – 2022", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/07/APR-DE-MAIO.pdf" },
      { name: "APR – Junho – 2022", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/08/APR-DE-JUNHO.pdf" },
      { name: "APR – Julho – 2022", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/09/APR-de-Julho-1.pdf" },
      { name: "APR – Agosto – 2022", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/01/APR-AGOSTO-2022.pdf" },
      { name: "APR – Setembro – 2022", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/01/APR-SETEMBRO-2022.pdf" },
      { name: "APR – Outubro – 2022", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/01/APR-OUTUBRO-2022.pdf" },
      { name: "APR – Novembro – 2022", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/01/APR-NOVEMBRO-2022.pdf" },
      { name: "APR – Dezembro – 2022", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/01/APR-DEZEMBRO-2022.pdf" },
    ],
  },

  "2021": {
    title: "2021",
    reports: [
      { name: "APR – Janeiro – 2021", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/10/01-APR-JANEIRO-2021_page-0001.pdf" },
      { name: "APR – Fevereiro – 2021", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/06/02-APR-FEVEREIRO-2021.pdf" },
      { name: "APR – Março – 2021", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/06/03-APR-MARCO-2021.pdf" },
      { name: "APR – Abril – 2021", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/06/04-APR-ABRIL-2021.pdf" },
      { name: "APR – Maio – 2021", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/05/05-APR-MAIO-2021.pdf" },
      { name: "APR – Junho – 2021", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/04/06-APR-JUNHO-2021.pdf" },
      { name: "APR – Julho – 2021", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/04/07-APR-JULHO-2021.pdf" },
      { name: "APR – Agosto – 2021", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/04/08-APR-AGOSTO-2021.pdf" },
      { name: "APR – Setembro – 2021", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/04/09-APR-SETEMBRO-2021.pdf" },
      { name: "APR – Outubro – 2021", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/04/10-APR-OUTUBRIO-2021.pdf" },
      { name: "APR – Novembro – 2021", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/05/11-APR-NOVEMBRO-2021.pdf" },
      { name: "APR – Dezembro – 2021", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/04/12-APR-DEZEMBRO-2021.pdf" },
    ],
  },

  "2020": {
    title: "2020",
    reports: [
      { name: "APR – Janeiro – 2020", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/06/APR-JANEIRO-2020.pdf" },
      { name: "APR – Fevereiro – 2020", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/06/APR-fevereiro-2020.pdf" },
      { name: "APR – Março – 2020", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/06/APR-MAR-2020.pdf" },
      { name: "APR – Abril – 2020", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/06/APR-ABRIL-2020.pdf" },
      { name: "APR – Maio – 2020", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/06/APR-MAIO-2020.pdf" },
      { name: "APR – Junho – 2020", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/07/APR-JUN-2020.pdf" },
      { name: "APR – Julho – 2020", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/08/APR-JUL-2020.pdf" },
      { name: "APR – Agosto – 2020", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/09/APR-AGO-2020.pdf" },
      { name: "APR – Setembro – 2020", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/10/APR-SET-2020.pdf" },
      { name: "APR – Outubro – 2020", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/11/APR-OUT-2020.pdf" },
      { name: "APR – Novembro – 2020", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/12/APR-NOV-2020.pdf" },
      { name: "APR – Dezembro – 2020", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/10/apr%20dez%202020.pdf" },
    ],
  },

  "2019": {
    title: "2019",
    reports: [
      { name: "APR – Janeiro – 2019", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/04/APR-2019-Jan-1-a-16.pdf" },
      { name: "APR – Fevereiro – 2019", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/04/APR-2019-Fev-17-a-34.pdf" },
      { name: "APR – Março – 2019", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2019/07/apr-mar%C3%A7o-2019.pdf" },
      { name: "APR – Abril – 2019", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2019/07/apr-abril-2019.pdf" },
      { name: "APR – Maio – 2019", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2019/07/apr-maio-2019.pdf" },
      { name: "APR – Junho – 2019", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2019/07/apr-junho-2019.pdf" },
      { name: "APR – Julho – 2019", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2019/10/apr-junho.pdf" },
      { name: "APR – Agosto – 2019", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2019/09/aqpr-agosto-2019.pdf" },
      { name: "APR – Setembro – 2019", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/01/APR-SETEMBRO-girado.pdf" },
      { name: "APR – Outubro – 2019", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/01/APR-OUTUBRO-girado.pdf" },
      { name: "APR – Novembro – 2019", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/01/APR-NOVEMBRO.pdf" },
      { name: "APR – Dezembro – 2019", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/01/APR-DEZEMBRO.pdf" },
    ],
  },

  "2018": {
    title: "2018",
    reports: [
      { name: "APR – Janeiro – 2018", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2018/03/apr-jan-18.pdf" },
      { name: "APR – Fevereiro – 2018", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2018/03/apr-fev-18.pdf" },
      { name: "APR – Março – 2018", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2018/05/apr-marc.pdf" },
      { name: "APR – Abril – 2018", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2018/05/apr-abril.pdf" },
      { name: "APR – Maio – 2018", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2018/07/apr-maio.pdf" },
      { name: "APR – Junho – 2018", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2018/11/APR-JUN.pdf" },
      { name: "APR – Julho – 2018", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2018/11/APR-JUL.pdf" },
      { name: "APR – Agosto – 2018", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2018/11/APR-AGO.pdf" },
      { name: "APR – Setembro – 2018", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2018/11/APR-Set.pdf" },
      { name: "APR – Outubro – 2018", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2018/12/APR-OUT.pdf" },
      { name: "APR – Novembro – 2018", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2018/12/relatorio-1.pdf" },
      { name: "APR – Dezembro – 2018", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2019/02/APR_DEZEMBRO_2018.pdf" },
    ],
  },

  "2017": {
    title: "2017",
    reports: [
      { name: "APR – Janeiro – 2017", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2017/11/APR-JAN-2017.pdf" },
      { name: "APR – Fevereiro – 2017", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2017/11/APR-FEV-2017.pdf" },
      { name: "APR – Março – 2017", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2017/11/APR-MAR-2017.pdf" },
      { name: "APR – Abril – 2017", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2017/11/APR-ABR-2017.pdf" },
      { name: "APR – Maio – 2017", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2017/11/APR-MAI-2017.pdf" },
      { name: "APR – Junho – 2017", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2017/11/APR-JUN-2017.pdf" },
      { name: "APR – Julho – 2017", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2017/11/APR-JUL-2017.pdf" },
      { name: "APR – Agosto – 2017", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2017/11/APR-AGO-2017.pdf" },
      { name: "APR – Setembro – 2017", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2017/11/APR-SET-2017.pdf" },
      { name: "APR – Outubro – 2017", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2017/12/APR-OUT.pdf" },
      { name: "APR – Novembro – 2017", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2017/12/APR-NOV.pdf" },
      { name: "APR – Dezembro – 2017", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2018/03/relatorio.pdf" },
    ],
  },

  "2016": {
    title: "2016",
    reports: [
      { name: "APR – Janeiro – 2016", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2016/02/APR-Janeiro-2016.pdf" },
      { name: "APR – Fevereiro – 2016", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2016/02/APR-Fevereiro-2016-1.pdf" },
      { name: "APR – Março – 2016", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2017/11/APR-MAR-2016.pdf" },
      { name: "APR – Abril – 2016", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2017/11/APR-ABR-2016.pdf" },
      { name: "APR – Maio – 2016", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2017/11/APR-MAI-2016.pdf" },
      { name: "APR – Junho – 2016", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2017/11/APR-JUN-2016.pdf" },
      { name: "APR – Julho – 2016", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2017/11/APR-JULHO-2016.pdf" },
      { name: "APR – Agosto – 2016", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2017/11/APR-AGO-2016.pdf" },
      { name: "APR – Setembro – 2016", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2017/11/APR-SET-2016.pdf" },
      { name: "APR – Outubro – 2016", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2017/11/APR-OUT-2016.pdf" },
      { name: "APR – Novembro – 2016", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2017/11/APR-NOV-2016.pdf" },
      { name: "APR – Dezembro – 2016", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2017/11/APR-DEZ-2016.pdf" },
    ],
  },

  "2015": {
    title: "2015",
    reports: [
      { name: "APR – Janeiro – 2015", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2016/02/APR-Janeiro-2015-1.pdf" },
      { name: "APR – Fevereiro – 2015", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2016/02/APR-Fevereiro-2015-1.pdf" },
      { name: "APR – Março – 2015", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2016/02/APR-Marco-2015.pdf" },
      { name: "APR – Abril – 2015", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2016/02/APR-Abril-2015-1.pdf" },
      { name: "APR – Maio – 2015", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2016/02/APR-Maio-2015-1.pdf" },
      { name: "APR – Junho – 2015", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2016/02/APR-Junho-2015-1.pdf" },
      { name: "APR – Julho – 2015", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2016/02/APR-Julho-2015-1.pdf" },
      { name: "APR – Agosto – 2015", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2016/02/APR-Agosto-2015-1.pdf" },
      { name: "APR – Setembro – 2015", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2016/02/APR-Setembro-2015-1.pdf" },
      { name: "APR – Outubro – 2015", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2016/02/APR-Outubro-2015-1.pdf" },
      { name: "APR – Novembro – 2015", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2016/02/APR-Novembro-2015-1.pdf" },
      { name: "APR – Dezembro – 2015", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2016/02/APR-Dezembro-2015-1.pdf" },
    ],
  },
};

const FinancialReports: React.FC = () => {
  return (
    <div className="h-auto bg-gradient-to-b from-[#ffffff] via-[#dcecff] to-[#cbe1fc] p-10">
      {Object.keys(reportsData)
        .sort((a, b) => Number(b) - Number(a))
        .map((year) => {
          const { title, reports } = reportsData[year];
          return (
            <div key={year} className="max-w-5xl mx-auto">
              <h2 className="text-5xl font-bold text-blue-900 mt-14">
                {title}
              </h2>
              <hr className="border-t-2 border-blue-900 w-16 mb-4" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {reports.map((report, index) => (
                  <a
                    key={report.url}
                    href={report.url}
                    className={`text-blue-900 text-xl hover:underline ${
                      index === 6 ? "text-blue-600" : ""
                    }`}
                  >
                    {report.name}
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
