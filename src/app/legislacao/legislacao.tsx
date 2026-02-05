"use client";

const links = {
  leiMunicipal: {
    titulo: "A. LEI MUNICIPAL E SUAS ALTERAÇÕES",
    links: [
      {
        texto: "Lei complementar nº 40.2021 - Reorganiza o RPPS - Consolidada com a LC nº 46.2023 e 53.2025",
        href: "Pdf/institucional/legislacao/1.1 Lei complementar nº 40.2021 -  Reorganiza o RPPS - Consolidada com a LC nº 46.2023 e 53.2025.pdf"
      },
      {
        texto: "Lei nº 108/2001 – Consolidada",
        href: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/11/Lei-108-2001-consolidada-WORD-com-a-LC40-2021.pdf"
      }
    ],
    alteracoes: [
      { texto: "Lei nº 102/2006", href: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/04/Lei_102-2006-1.pdf" },
      { texto: "Lei nº 153/2007", href: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/04/Lei-Ordinária-153-2007-de-Jaboatão-dos-Guararapes-PE.pdf" },
      { texto: "Lei nº 703/2011", href: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/04/Lei-Municipal-703-2011.pdf" },
      { texto: "Lei nº 1.265/2016", href: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/04/Lei-1265.2016.pdf" },
      { texto: "Lei nº 1.334/2017", href: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/04/LEI-N-1.334-2017.pdf" },
      { texto: "Lei nº 1.357/2018", href: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/04/Lei-municipal-1.357-2018-Alteração-Lei-108.pdf" },
      { texto: "Lei nº 1.404/2019", href: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/04/Lei-municipal-1.404-2019-Taxa-de-administração.pdf" },
      { texto: "Lei Complementar nº 39/2021 – Lei que institui o Regime de Previdência Complementar", href: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/10/Lei-Complementar-39-previdencia-complementar.pdf" },
      { texto: "Lei Complementar nº 43/2023", href: "Pdf/institucional/legislacao/1.1 Lei Complementar nº 46.2023.pdf" },
      { texto: "Lei Complementar nº 53/2025", href: "Pdf/institucional/legislacao/1.1 Lei Complementar nº 53.2025 e Anexos.pdf" }
    ]
  },
  codigoEtica: {
    titulo: "B. CÓDIGO DE ÉTICA",
    links: [
      { texto: "Código de ÉTICA", href: "Pdf/institucional/legislacao/Codigo_de_Etica_-_JaboataoPrev_-_2025_assinado.pdf" }
    ]
  },
  regimentos: {
    titulo: "C. REGIMENTOS INTERNO",
    links: [
      { texto: "Comitê de Investimento", href: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/07/REGIMENTO-INTERNO-COMITE-DE-INVESTIMENTOS.pdf" },
      { texto: "Conselho Deliberativo", href: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/09/REGIMENTO-INTERNO-Conselho-deliberativo-versao-OFICIAL.pdf" },
      { texto: "Conselho Fiscal", href: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/09/REGIMENTO-INTERNO-Conselho-fiscal.pdf" }
    ]
  },
  ldo: {
    titulo: "D. LOA – Lei Orçamentária Anual",
    links: [
      { texto: "LOA 2017 – Lei Orçamentária Anual Lei nº 1291/2016 e 1297/2016", href: "https://portaldatransparencia.jaboatao.pe.gov.br/uploads/2019/05/2017loa.pdf" },
      { texto: "LOA 2018 – Lei Orçamentária Anual Lei nº 1.337/2017", href: "https://portaldatransparencia.jaboatao.pe.gov.br/uploads/2019/05/2018loa.pdf" },
      { texto: "LOA 2019 – Lei Orçamentária Anual Lei nº 1.382/2018", href: "https://portaldatransparencia.jaboatao.pe.gov.br/uploads/2019/05/3.-LOA-2019-Lei-n%C2%BA-1.382-2018-Compatibilizada-LC-34.pdf" },
      { texto: "LOA 2020 – Lei Orçamentária Anual Lei nº 1435 de 12/12/2019", href: "https://portaldatransparencia.jaboatao.pe.gov.br/uploads/2020/01/LOA-2020-LEI-N%C2%BA-1435-2019.pdf" },
      { texto: "LOA 2021 – Lei Orçamentária Anual Lei Nº 1456/2020", href: "https://portaldatransparencia.jaboatao.pe.gov.br/uploads/2021/01/LEI%20N%C2%BA%201456-2020%20-%20LOA%202021.pdf" },
      { texto: "LOA 2021 – Lei Orçamentária Anual Lei Nº 1.456-27/2020 – Compatibilizada LC Nº 38 – 05_02_2021", href: "https://portaldatransparencia.jaboatao.pe.gov.br/uploads/2021/05/LOA%202021%20-%20LEI%20N%C2%BA%201.456-27_11_2021%20-%20COMPATIBILIZADA%20LC%20N%C2%BA%2038%20-%2005_02_2021.pdf" },
      { texto: "LOA 2022 - Lei Orçamentária Anual Lei nº 1.494.2021", href: "Pdf/legislacao/1.1_LOA_2022___Lei_Orcamentaria_Anual_Lei_n__1.494.2021.pdf" },
      { texto: "LOA 2023 - Lei Orçamentária Anual Lei nº 1.540.2022", href: "Pdf/legislacao/1.1_LOA_2023___Lei_Orcamentaria_Anual_Lei_n__1.540.2022.pdf" },
      { texto: "LOA 2024 - Lei Orçamentária Anual Lei nº 1.585.2023", href: "Pdf/legislacao/1.1_LOA_2024___Lei_Orcamentaria_Anual_Lei_n__1.585.2023.pdf" },
      { texto: "LOA 2025 - Lei Orçamentária Anual Lei nº 1.613.2024 - Compatibilizada LC nº 50.2024", href: "Pdf/legislacao/1.1_LOA_2025___Lei_Orcamentaria_Anual_Lei_n__1.613.2024___Compatibilizada_LC_n__50.2024.pdf" }
    ]
  },
  ppa: {
    titulo: "E. PPA – PLANO PLURIANUAL",
    links: [
      { texto: "PPA- Plano Plurianual 2014/2017 – Revisão 2017", href: "https://portaldatransparencia.jaboatao.pe.gov.br/uploads/2019/05/2017ppa.pdf" },
      { texto: "PPA- Plano Plurianual 2018/2021", href: "https://portaldatransparencia.jaboatao.pe.gov.br/uploads/2019/05/2018ppa.pdf#" },
      { texto: "PPA- Plano Plurianual 2018/2021 – Revisão 2019", href: "https://portaldatransparencia.jaboatao.pe.gov.br/uploads/2019/05/2.-PPA-2018-2021-REVIS%C3%83O-2019-Lei-n%C2%BA-1.381-2018-Compatibilizada-LC-34.pdf" },
      { texto: "PPA – Plano Plurianual 2018/2021 – Revisão 2020", href: "https://portaldatransparencia.jaboatao.pe.gov.br/uploads/2020/01/PPA-REVIS%C3%83O-2020-LEI-N%C2%BA-1.434-2019.pdf" },
      { texto: "PPA – Plano Plurianual 2022/2025", href: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/07/2022ppaanexo.pdf" },
      { texto: "PPA – Plano Plurianual 2022-2025 – Revisão 2025", href: "Pdf/legislacao/1.1_PPA___Plano_Plurianual_2002_2025___Revisao_2025.pdf" },
      { texto: "PPA – Plano Plurianual 2022-2025 – Revisão 2025 – Compatibilizada LC nº 50/2024", href: "Pdf/legislacao/1.1._PPA___Plano_Plurianual_2022._2025___Revisao_2025___Compatibilizada_LC_n__50.2024.pdf" },

    ]
  },
  ldoDiretrizes: {
    titulo: "F. LDO – LEI DE DIRETRIZES ORÇAMENTÁRIA",
    links: [
      { texto: "LDO 2017 – Lei nº 1291/2016 – 1297/2016", href: "https://portaldatransparencia.jaboatao.pe.gov.br/uploads/2019/05/2017ldo.pdf" },
      { texto: "LDO 2018 – Lei nº 1316/2018", href: "https://portaldatransparencia.jaboatao.pe.gov.br/uploads/2019/05/2018ldo.pdf" },
      { texto: "LDO 2019 – Lei nº 1374/2018", href: "https://portaldatransparencia.jaboatao.pe.gov.br/uploads/2019/05/1.-LDO-2019-Lei-n%C2%BA-1.374-2018.pdf" },
      { texto: "LDO 2020 – Lei nº 1.420/2019", href: "https://portaldatransparencia.jaboatao.pe.gov.br/uploads/2020/01/LDO-2020-LEI-N%C2%BA-1420-06-09-2019.pdf" },
      { texto: "LDO 2021 – Lei nº 1.448/2020", href: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/07/2021ldo.pdf" },
      { texto: "LDO 2022 – Lei nº 1.482/2021", href: "https://portaldatransparencia.jaboatao.pe.gov.br/uploads/2020/01/LDO-2020-LEI-N%C2%BA-1420-06-09-2019.pdf" },
      { texto: "LDO 2023 - Lei nº 1.532.2022", href: "Pdf/legislacao/1.1_LDO_2023___Lei_n__1.532.2022.pdf" },
      { texto: "LDO 2024 - Lei nº 1.570.2023", href: "Pdf/legislacao/1.1_LDO_2024___Lei_n__1.570.2023.pdf" },
      { texto: "LDO 2025 – Lei nº 1.610/2024", href: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/Lei-de-Diretrizes-Orcamentarias-LDO-2025.pdf" }
    ]
  },
  estruturaAdmin: {
    titulo: "G. ESTRUTURA ADMINISTRATIVA",
    links: [
      { texto: "Lei nº 50/2024 – Lei Complementar", href: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/Lei-Complementar-no-50.2024-de-31-de-dezembro-de-2024.pdf" },
      { texto: "Lei nº 38/2021 – Lei Complementar (Revogada pela Lei complementar n° 45/2023)", href: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/04/Lei-Complementar-n%C2%B0-38-2021-Estrutura-organizacional-da-administracao-direta-e-indireta-Jaboatao-06-DE-FEVEREIRO-DE-2021-%E2%80%93-XXXI-%E2%80%93-No-024-%E2%80%93-JABOATAO-DOS-GUARARAPES.pdf" },
      { texto: "Lei nº 34/2018 – Lei Complementar (Revogada pela Lei complementar n° 38/2021)", href: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/05/LC-34-2019-Lei-de-Estrutura-Administrativa.pdf" }
    ]
  },
  responsabilidadeFiscal: {
    titulo: "H. LEI DE RESPONSABILIDADE FISCAL – LC 101/2000",
    links: [
      { texto: "Lei n° 101/2000 – Lei Complementar", href: "http://www.planalto.gov.br/ccivil_03/leis/LCP/Lcp101.htm" }
    ]
  },
  acessoInformacao: {
    titulo: "I. LEI DE ACESSO À INFORMAÇÃO",
    links: [
      { texto: "Lei nº 853/2013 – Lei de Acesso à Informação", href: "https://portaldatransparencia.jaboatao.pe.gov.br/uploads/2019/05/LEI-N%C2%BA-853-LAI.pdf" }
    ]
  },
  controleInterno: {
    titulo: "J. LEI DE CRIAÇÃO DO CONTROLE INTERNO – Lei 407-A/2010",
    links: [
      { texto: "Lei nº 407A/2010 – Cria o controle Interno", href: "Pdf/legislacao/1.1_Lei_407_A_2010_CONTROLE_INTERNO.pdf" }
    ]
  },
  estatutoServidor: {
    titulo: "K. ESTATUTO DO SERVIDOR PÚBLICO MUNICIPAL – Lei n° 224/96",
    links: [
      { texto: "Lei nº 224/1996 – Estatuto do servidor público municipal", href: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/06/LEI-N%C2%BA-224-96-u%CC%81ltima-atualizac%CC%A7a%CC%83o-2020.pdf" }
    ]
  },
  normasRpps: {
    titulo: "L. NORMAS FEDERAIS RPPS CONSOLIDADA",
    links: [
      { texto: "Consolidação da Legislação Federal", href: "https://www.gov.br/trabalho-e-previdencia/pt-br/assuntos/previdencia-no-servico-publico/legislacao-dos-rpps/leis-1/consolidacao-legislacao-rpps-atualizada-ate-28-de-junho-de-2021-isp.pdf" },
      { texto: "Portaria MTP nº 1.467/2022 de 02 de Junho de 2022", href: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/08/PORTARIA-MTP-No-1.467-2022.pdf" },
      { texto: "Portaria MTP nº 3.803/2022 de 16 de Novembro de 2022", href: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/08/PORTARIA-MTP-No-1.467-2022.pdf" }
    ]
  },
  decretosCenso: {
    titulo: "M. DECRETOS CENSO PREVIDENCIÁRIO",
    links: [
      { texto: "Decreto n° 01, de 07 de janeiro de 2022", href: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/07/DECRETO-CENSO-PREVIDENCIARIO-8-DE-JANEIRO-DE-2022-%E2%80%93-XXXI-%E2%80%93-No-5-%E2%80%93-JABOATAO-DOS-GUARARAPES.pdf" },
      { texto: "Decreto n° 41, de 08 de abril de 2022", href: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/07/DECRETO-PRORROGACAO-DO-CENSO-PREVIDENCIARIO-09-DE-ABRIL-DE-2022-%E2%80%93-XXXI-%E2%80%93-No-70-%E2%80%93-JABOATAO-DOS-GUARARAPES-%E2%80%93-Diario-Oficial.pdf" },
      { texto: "Decreto n° 46, de 12 de maio de 2022", href: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/07/DECRETO-PRORROGACAO-FINAL-CENSO-PREVIDENCIARIO-13-DE-MAIO-DE-2022-%E2%80%93-XXXI-%E2%80%93-No-89-%E2%80%93-JABOATAO-DOS-GUARARAPES-Diario-Oficial.pdf" },
      { texto: "Decreto n° 75, de 22 de junho de 2022", href: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/07/23-DE-JUNHO-DE-2022-%E2%80%93-XXXI-%E2%80%93-No-118-%E2%80%93-JABOATAO-DOS-GUARARAPES-Diario-Oficial.pdf" }
    ]
  },
  normasInvestimentos: {
    titulo: "N. NORMAS INVESTIMENTOS",
    links: [
      { texto: "Resolução CMN nº 4.963/2021", href: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/08/RESOLUCAO-CMN-No-4.963-DE-25-DE-NOVEMBRO-DE-2021.pdf" }
    ]
  },
  segurancaInfo: {
    titulo: "O. POLÍTICA DE SEGURANÇA DA INFORMAÇÃO",
    links: [
      { texto: "Política de Segurança da Informação", href: "Pdf/institucional/legislacao/2.1_POLITICA_DE_SEGURANCA_DA_INFORMACAO_E_COMUNICACOES.pdf" }
    ]
  },
  legislacaoPccv: {
    titulo: "P. LEGISLAÇÃO PCCV",
    links: [
      { texto: "Lei n° 1.600/2024, de 16 de Maio de 2024", href: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/Lei-no-1.600.2024-De-16-de-Maio-de-2024.pdf" },
      { texto: "Lei n° 1.594/2024, de 05 de Abril de 2024", href: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/LEI-No-1.594.2024-De-05-de-abril-de-2024.pdf" },
      { texto: "Lei n° 1.597/2024, de 05 de Abril de 2024", href: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/LEI-N-1597-05-ABRIL-2024_compressed-1.pdf" }
    ]
  }
};

const Links = () => (
  <div className="mx-auto max-w-6xl p-6 h-auto py-20">
    <div>
      {/* Lei Municipal */}
      <h1 className="text-2xl font-bold mb-4 uppercase text-blue-900 leading-tight">
        {links.leiMunicipal.titulo}
      </h1>
      <ul className="list-disc pl-5 text-[#122162] text-xl">
        {links.leiMunicipal.links.map((link, index) => (
          <li key={index} className="py-2">
            <a href={link.href} target="_blank" className="text-blue-600 hover:underline">
              {link.texto}
            </a>
          </li>
        ))}
        <p className="py-7">Alterações:</p>
        <ul className="pl-8 list-disc">
          {links.leiMunicipal.alteracoes.map((link, index) => (
            <li key={index}>
              <a href={link.href} target="_blank" className="text-blue-600 hover:underline">
                {link.texto}
              </a>
            </li>
          ))}
        </ul>

        {/* Demais seções */}
        {Object.entries(links).slice(1).map(([key, secao]) => (
          <div key={key}>
            <p className="text-blue-900 font-bold py-7">{secao.titulo}</p>
            <ul className="pl-8 list-disc">
              {secao.links.map((link, index) => (
                <li key={index}>
                  <a href={link.href} target="_blank" className="text-blue-600 hover:underline">
                    {link.texto}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </ul>
    </div>
  </div>
);

const Legislacao = () => {
  return (
    <div className="flex flex-col">
      <Links />
    </div>
  );
};

export default Legislacao;