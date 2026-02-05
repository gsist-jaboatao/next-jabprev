"use client";
import { useEffect, useState } from "react";
import FaleConosco from "../components/Home/FaleConosco";
import React from "react";
import Image from "next/image";

const pdfUrl = "/Pdf/institucional/Organograma-2025-Site.pdf";

const Sobre = () => (
  <div
    id="sobre"
    className="bg flex flex-col md:flex-row items-center mx-auto max-w-7xl p-6 h-auto xl:py-32 py-10"
  >
    <div className="flex-1 text-center md:text-left">
      <h1 className="xl:text-5xl text-4xl font-bold mb-4 uppercase text-green-900 leading-tight">
        O que é Jaboatãoprev?
      </h1>
      <p className="text-[#083516] text-xl">
        É uma Autarquia, criada pela Lei Municipal nº108/2001 e alterações
        posteriores, que tem por objetivo assegurar aos servidores do município
        do Jaboatão dos Guararapes, e seus dependentes, os benefícios de
        aposentadoria e pensão por morte.
      </p>
    </div>
    <div className="flex-1 flex justify-center mt-4 md:mt-0">
      <Image
        src="/images/Instituicao/fachada.jpeg"
        alt="Jaboatãoprev"
        width={320} // Equivalente a "w-80" no Tailwind
        height={200} // Ajuste conforme necessário
        className="max-w-md rounded-xl shadow-md"
      />
    </div>
  </div>
);

const MissaoVisaoValores = () => (
  <div id="missao" className="bg-gradient-to-b from-[#ffffff] to-[#b4c9e2]">
    <div className="flex items-center justify-center h-auto py-20 bg-[#083516] rounded-[50px] min-h-[750px]">
      <div className="mx-auto max-w-[1600px] px-8 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20 w-full">
          <div className="bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-xl text-center min-h-[300px] flex flex-col items-center gap-6">
            <h2 className="text-2xl md:text-4xl font-bold text-yellow-400">
              Nossa Missão
            </h2>
            <p className="text-white text-lg md:text-xl leading-relaxed">
              Fazer um gerenciamento de excelência, para garantir o cumprimento
              das obrigações previdenciárias do JaboatãoPrev.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-xl text-center min-h-[300px] flex flex-col items-center gap-6">
            <h2 className="text-2xl md:text-4xl font-bold text-yellow-400">
              Nossa Visão
            </h2>
            <p className="text-white text-lg md:text-xl leading-relaxed">
              Ser reconhecida como uma Instituição de excelência, equilibrada
              financeira e atuarialmente.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-xl text-center min-h-[300px] flex flex-col items-center gap-6">
            <h2 className="text-2xl md:text-4xl font-bold text-yellow-400">
              Nossos Valores
            </h2>
            <p className="text-white text-lg md:text-xl leading-relaxed">
              Privilegiar os princípios da transparência, probidade, ética e
              eficiência, observando o arcabouço normativo que rege o sistema
              previdenciário e a gestão pública; contribuindo com os órgãos de
              controle, para oferecer um serviço público de qualidade e honesto.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Equipe = () => (
  <div
    id="equipe"
    className="flex flex-col items-center bg-[#b4c9e2] py-32 w-full h-auto pb-32 rounded-b-[50px] xl:px-72 md:px-32 px-8"
  >
    <h1 className="xl:text-5xl md:text-4xl text-3xl font-bold text-blue-900 text-center mb-8 xl:pb-12">
      A EQUIPE DO JABOATÃOPREV
    </h1>

    {/* Grid responsivo para os itens da equipe */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 text-blue-900 text-xl gap-4 text-center xl:text-left pb-20">
      <div>
        <p>
          <strong>Gerente Administrativa e Financeiro</strong>
          <br />
          Mayara Lima
        </p>
        <p className="pt-4">
          <strong>Contadora</strong>
          <br />
          Caroline Costa
        </p>
        <p className="pt-4">
          <strong>Servidora Cedida da Prefeitura de Jaboatão dos Guararapes</strong>
          <br />
          Katia Cyntia
        </p>
        <p className="pt-4">
          <strong>Coordenadora da Folha de Pagamento</strong>
          <br />
          Manuela Araújo
        </p>
      </div>

      <div>
        <p>
          <strong>Gerente de Investimentos</strong>
          <br />
          Pierre Leon
        </p>
        <p className="pt-4">
          <strong>Assessor de Investimentos</strong>
          <br />
          Ícaro Santos
        </p>
        <p className="pt-4">
          <strong>Gerente Jurídica</strong>
          <br />
          Rafaela Bezerra
        </p>
        <p className="pt-4">
          <strong>Assessora Jurídica</strong>
          <br />
          Taís Cavalcante
        </p>
        <p className="pt-4">
          <strong>Assessora Jurídica</strong>
          <br />
          Julyana Porto
        </p>
      </div>

      <div>
        <p>
          <strong>Gerente de Benefícios</strong>
          <br />
          Karla Ramires
        </p>
        <p className="pt-4">
          <strong>Coordenadora de Benefícios</strong>
          <br />
          Ângela Maria
        </p>
        <p className="pt-4">
          <strong>Assessora da Presidente</strong>
          <br />
          Izabeli Cynthia
        </p>
        <p className="pt-4">
          <strong>
            Coordenadora de Planejamento, Monitoramento e Controle Interno
          </strong>
          <br />
          Mayara Mendes
        </p>
      </div>
    </div>

    {/* Seção com imagem e descrição */}
    <div className="flex flex-col xl:flex-row items-center justify-center w-full max-w-7xl mx-auto gap-8 px-3">
      <div className="flex justify-center w-full xl:w-1/2">
        <Image
          src="/images/Instituicao/luci.jpeg"
          alt="Jaboatãoprev"
          className="w-7/12 h-100 max-w-md rounded-xl shadow-md object-cover"
          width={1200}
          height={800}
        />
      </div>

      <div className="bg-white  px-20 py-10 rounded-3xl w-full xl:w-1/2">
        <h2 className="text-2xl font-semibold text-cyan-400 uppercase text-center pb-5">
          Luci Lopes
        </h2>
        <h3 className="text-xl text-slate-700 text-center pb-3">
          Presidente do JaboatãoPrev
        </h3>
        <p className="text-xl text-slate-900 text-justify leading-relaxed">
          Lucileide Ferreira Lopes, formada em Direito pela Universidade
          Paulista, em São Paulo, com MBA em Gestão de Ensino Superior pela
          Faculdade Maurício de Nassau. Iniciou vida pública em 2009, na
          Controladoria Geral do Estado de Pernambuco, onde atuou na área de
          orientação ao gestor público até o final de 2015; quando então, foi
          convidada a assumir a Presidência do RPPS de Gravatá, por ocasião da
          Intervenção Estadual. Em 2017 assumiu a Ouvidoria Geral do Município
          do Jaboatão dos Guararapes e em 2019, a Presidência do JaboataoPrev.
          Possui certificação de Dirigente de RPPS pelo Instituto TOTUM.
        </p>
      </div>
    </div>
  </div>
);

const Organograma = () => (
  <div
    id="organograma"
    className="flex flex-col items-center h-auto py-32 bg-white"
  >
    <div className="mx-auto max-w-6xl p-10 rounded-xl">
      <h2 className="text-3xl text-slate-500 text-center pb-10">
        O documento publicado. Caso não consiga abrir o arquivo,{" "}
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 underline"
        >
          clique aqui para fazer o download do arquivo em PDF.
        </a>
      </h2>
    </div>
    <div className="flex items-center justify-center w-full max-w-4xl mx-auto">
      <div className="flex justify-center">
        <Image
          src="/images/Instituicao/download.png"
          alt="Jaboatãoprev"
          className="w-11/12 max-w-md rounded-xl shadow-2xl"
          layout="intrinsic" // Ajusta a imagem para manter a proporção
          width={500} // Proporção da largura
          height={333} // Proporção da altura (ajuste conforme necessário)
        />
      </div>
    </div>
  </div>
);

const Instituicao = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Evita renderizar no servidor e previne erros
  return (
    <div className="flex flex-col">
      <Sobre />
      <MissaoVisaoValores />
      <Equipe />
      <Organograma />
      <FaleConosco />
    </div>
  );
};

export default Instituicao;
