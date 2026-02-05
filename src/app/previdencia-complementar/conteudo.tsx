import React from "react";


const FinancialReports: React.FC = () => {
  return (
    <div className="h-auto  items-center justify-center bg-gradient-to-b from-[#ffffff] to-[#b4f7cc]"> 
      <div className="lg:py-32 py-14 max-w-5xl mx-auto lg:px-4 px-14">

        <p className="text-[#122162] text-xl pb-10 font-bold">
          O Regime de Previdência Complementar – RPC visa complementar a renda
          do servidor no momento de sua aposentadoria, proporcionando uma
          proteção previdenciária adicional àquela oferecida pelo Regime Próprio
          de Previdência Social. Possibilita renda extra ao servidor, como
          também, a concessão de outros benefícios, a exemplo de pensão por
          morte, mediante a realização de contribuições para uma entidade
          gestora.
          <br /><br />
          Com o advento da Emenda Constitucional nº. 103/2019, tornou-se
          obrigatória a instituição do Regime de Previdência Complementar para
          os entes federativos que possuam o Regime Próprio de Previdência
          Social – RPPS, no prazo máximo de 02 anos, para que haja a limitação
          dos valores dos benefícios de aposentadoria e pensão concedidos pelo
          RPPS ao limite máximo estabelecido para os benefícios do Regime Geral
          de Previdência – RGPS.
          <br /><br />
          O Regime de Previdência Complementar dos servidores públicos
          municipais do Jaboatão dos Guararapes foi instituído através da Lei
          Complementar nº. 039 de 17 de agosto de 2021, publicada no DOM de
          18/08/2021.
        </p>

        <div className="flex flex-col items-center ">
          <h2 className="text-[#122162] text-2xl pb-10 font-bold uppercase">
            DOWNLOADS
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
            {[
              { title: "RESULTADO DAS PROPOSTAS", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/11/Propostas-EFPC.pdf" },
              { title: "PRORROGAÇÃO DO PRAZO PARA PROPOSTAS", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/10/Prorrogacao-do-prazo-para-propostas.pdf" },
              { title: "PO CONJUNTA SAD / JABOATÃOPREV / PGM N° 01/2021", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/10/31-DE-AGOSTO-DE-2021-%E2%80%93-XXXI-%E2%80%93-No-164-%E2%80%93-JABOATAO-DOS-GUARARAPES.pdf" },
              { title: "EDITAL / EFPC - N° 01/2021", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/10/001-SELECAO-PUBLICA-chamamento-geral-Jaboatao-REVISADA-13.10.pdf" },
              { title: "LEI COMPLEMENTAR N° 039/2021", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/10/001-SELECAO-PUBLICA-chamamento-geral-Jaboatao-REVISADA-13.10.pdf" },
              { title: "ANEXO I - CARGOS", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/10/ANEXO-I-CARGOS.pdf" },
              { title: "ANEXO II - CRITÉRIOS", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/10/Anexo-II-criterios.pdf" },
              { title: "ANEXO III - MODELO DE PROPOSTA TÉCNICA", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/10/Anexo-III-Modelo-de-Proposta-Tecnica.pdf" },
              { title: "RELATÓRIO FINAL DE SELEÇÃO DA EFPC", url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/11/Relatorio-Final.pdf" }
            ].map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                title={item.title}
                className="w-full py-4 bg-[#204a97] text-white text-lg font-medium rounded-lg shadow-xl border hover:bg-[#335CA8] hover:text-yellow-400 transition duration-300 text-center"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default FinancialReports;
