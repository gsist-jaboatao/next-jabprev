"use client";

import React, { useEffect } from "react";

const Informacoes = () => {
  // Manipulador para encontrar os PDFs dinamicamente por contrato
  useEffect(() => {
    const handlePdfClick = (e: Event) => {
      const link = e.target as HTMLAnchorElement;
      
      // Verifica se o link é de PDF
      if (!link.href || !link.href.includes('/Pdf')) {
        return;
      }

      e.preventDefault();
      
      (async () => {
        try {
          // Encontra a célula do contrato (primeira coluna da mesma linha)
          const row = link.closest('tr');
          if (!row) {
            window.open(link.href, '_blank');
            return;
          }
          
          const contractCell = row.querySelector('td:first-child');
          if (!contractCell) {
            window.open(link.href, '_blank');
            return;
          }

          // Extrai número e ano do contrato (ex: "Nº 027/2022 - SAD" -> 027, 2022)
          const contractText = contractCell.textContent || '';
          const match = contractText.match(/(\d+)\/(\d{4})/);
          
          if (!match) {
            window.open(link.href, '_blank');
            return;
          }

          const [, numero, ano] = match;

          // Chama a API para encontrar o arquivo dinamicamente
          const response = await fetch(`/api/contratos-pdf?numero=${encodeURIComponent(numero)}&ano=${ano}`);
          
          if (response.ok) {
            const data = await response.json();
            window.open(data.filePath, '_blank');
          } else {
            // Se não encontrar via API, tenta abrir pela URL direta
            console.warn(`PDF não encontrado via API para contrato ${numero}/${ano}`);
            window.open(link.href, '_blank');
          }
        } catch (error) {
          console.error('Erro ao abrir PDF:', error);
          // Fallback: abre o link direto
          window.open(link.href, '_blank');
        }
      })();
    };

    // Adiciona event listener a todos os links de PDF
    const links = document.querySelectorAll('a[href*="/Pdf"]');
    links.forEach(link => {
      link.addEventListener('click', handlePdfClick);
    });

    // Limpeza
    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handlePdfClick);
      });
    };
  }, []);

  return (
  <div className="h-auto bg-gradient-to-b from-[#ffffff] via-[#dcecff] to-[#cbe1fc]">
    {/* Tabela completa */}
    <div className="container mx-auto p-6 text-center overflow-x-auto">
      <table className="w-full border-collapse border border-gray-400 text-left">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="border border-gray-400 px-4 py-2">CONTRATO</th>
            <th className="border border-gray-400 px-4 py-2">ADITIVO</th>
            <th className="border border-gray-400 px-4 py-2">CONTRATANTE</th>
            <th className="border border-gray-400 px-4 py-2">OBJETO</th>
            <th className="border border-gray-400 px-4 py-2">PROCESSO</th>
            <th className="border border-gray-400 px-4 py-2">NOME/RAZÃO SOCIAL</th>
            <th className="border border-gray-400 px-4 py-2">Nº DO CNPJ</th>
            <th className="border border-gray-400 px-4 py-2">VIGÊNCIA</th>
            <th className="border border-gray-400 px-4 py-2">VALOR R$</th>
            <th className="border border-gray-400 px-4 py-2">ESTÁGIO/SITUAÇÃO</th>
            <th className="border border-gray-400 px-4 py-2">TIPO/PROCESSO</th>
            <th className="border border-gray-400 px-4 py-2">OBS</th>
            <th className="border border-gray-400 px-4 py-2">DATA DA PUBLICAÇÃO (DIÁRIO OFICIAL)</th>
          </tr>
        </thead>
        <tbody>
          {/* 1 */}
          <tr className="bg-blue-100">
            <td className="border border-gray-400 px-4 py-2">Nº 027/2022 - SAD</td>
            <td className="border border-gray-400 px-4 py-2">4ª TERMO ADITIVO</td>
            <td className="border border-gray-400 px-4 py-2">
              INSTITUTO DE PREVIDÊNCIA DOS SERVIDORES PÚBLICOS - JABOATÃOPREV
            </td>
            <td className="border border-gray-400 px-4 py-2">Contratação da empresa especializada na PRESTAÇÃO DE SERVIÇOS DE LOCAÇÃO DE SOLUÇÃO INTEGRADA DE VIDEOMONITORAMENTO REMOTO E VIGILÂNCIA ELETRÔNICA</td>
            <td className="border border-gray-400 px-4 py-2"><a target="_blank" className="underline text-blue-600" href="/Pdf/administrativo/contratos/4º TERMO ADITIVO AO CONTRATO Nº 027.2022 - SAD.pdf">DISPENSA DE LICITAÇÃO - CHAMAMENTO PÚBLICO - PROCESSO ADMINISTRATIVO Nº 004/2022, (CONTRATO Nº 027/2022 – SAD – 4º T.A.)</a></td>
            <td className="border border-gray-400 px-4 py-2">M&A Monitoramento Eletrônico - EIRELI EPP</td>
            <td className="border border-gray-400 px-4 py-2">12.222.164/0001-42</td>
            <td className="border border-gray-400 px-4 py-2">18/07/2025 a 18/07/2026</td>
            <td className="border border-gray-400 px-4 py-2">R$ 8.540,16</td>
            <td className="border border-gray-400 px-4 py-2">Em execução/Regular</td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">Contratação: 12 meses</td>
            <td className="border border-gray-400 px-4 py-2">PUBLICADO NO DIÁRIO OFICIAL EM 09/08/2025</td>          
          </tr>

          {/* 2 */}
          <tr>
            <td className="border border-gray-400 px-4 py-2">Nº 001/2021 - SAD</td>
            <td className="border border-gray-400 px-4 py-2">10º TERMO ADITIVO</td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">Contratação de empresa especializada na terceirização de mão de obra para execução dos serviços de motorista, vigia diurno, copeira e auxiliar de serviços gerais.</td>
            <td className="border border-gray-400 px-4 py-2"><a target="_blank" className="underline text-blue-600" href="/Pdf/administrativo/contratos/10º TERMO ADITIVO AO CONTRATO Nº 001-2021 - SAD-12m.pdf">PROCESSO LICITATÓRIO N° 173.2020.PE.072.SAD.CPL4, PREGÃO ELETRÔNICO - CONTRATO Nº 001/2021 – SAD – 10º T.A.</a></td>
            <td className="border border-gray-400 px-4 py-2">ATIVA SERVIÇOS DE APOIO ADMINISTRATIVO EIRELI</td>
            <td className="border border-gray-400 px-4 py-2">22.778.636/0001-00</td>
            <td className="border border-gray-400 px-4 py-2">07/01/2026 a 07/07/2026</td>
            <td className="border border-gray-400 px-4 py-2">R$ 128.882,16</td>
            <td className="border border-gray-400 px-4 py-2">Em execução/Regular</td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">Contratação: 12 meses</td>
            <td className="border border-gray-400 px-4 py-2">PUBLICADO NO DIÁRIO OFICIAL EM 15/01/2026</td>
          </tr>

          {/* 3 */}
          <tr className="bg-blue-100">
            <td className="border border-gray-400 px-4 py-2">Nº 070/2022 - SAD</td>
            <td className="border border-gray-400 px-4 py-2">2º TERMO ADITIVO</td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">Contratação de empresa especializada em telecomunicações para provimento de serviços corporativos de internet.</td>
            <td className="border border-gray-400 px-4 py-2"><a target="_blank" className="underline text-blue-600" href="/Pdf/administrativo/contratos/CONTRATONº 070_2022 - SAD.pdf">PROCESSO ADMINISTRATIVO Nº 095.2021.PE.063SAD.CPL1- PREGÃO ELETRÔNICO Nº 063/2021 (CONTRATO Nº 070/2022 – SAD – 2º T.A.)</a></td>
            <td className="border border-gray-400 px-4 py-2">WORLDNET TELECOM COMERCIO E SERVIÇOS DE TELECOMUNICAÇÕES LTDA - EPP</td>
            <td className="border border-gray-400 px-4 py-2">05.773.360/0001-40</td>
            <td className="border border-gray-400 px-4 py-2">01/11/2025 a 01/11/2026</td>
            <td className="border border-gray-400 px-4 py-2">R$ 25.214,79</td>
            <td className="border border-gray-400 px-4 py-2">Em execução/Regular</td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">Contratação: 12 meses</td>
            <td className="border border-gray-400 px-4 py-2">PUBLICADO NO DOM EM 08 DE NOVEMBRO DE 2025</td>
          </tr>

          {/* 4 */}
          <tr>
            <td className="border border-gray-400 px-4 py-2">Nº 027/2024 – SAD</td>
            <td className="border border-gray-400 px-4 py-2">1º TERMO ADITIVO</td>
            <td className="border border-gray-400 px-4 py-2">SAD - INSTITUTO DE PREVIDÊNCIA DOS SERVIDORES PÚBLICOS - JABOATÃOPREV</td>
            <td className="border border-gray-400 px-4 py-2">Contratação de serviços de consultoria e assessoria técnica especializadas para apoiar o JaboatãoPREV no CRP (Certificado de Regularidade da Previdência)</td>
            <td className="border border-gray-400 px-4 py-2"><a target="_blank" className="underline text-blue-600" href="/Pdf/administrativo/contratos/1º TERMO ADITIVO AO CONTRATO Nº 027_2024 - SAD.pdf">CHAMAMENTO PÚBLICO - PROCESSO ADMINISTRATIVO 012/2024</a></td>
            <td className="border border-gray-400 px-4 py-2">CGPM CONSULTORIA CONTROLE E CAPACITAÇÃO – ME</td>
            <td className="border border-gray-400 px-4 py-2">12.762.609/0001-87</td>
            <td className="border border-gray-400 px-4 py-2">03/09/2025 a 03/09/2026</td>
            <td className="border border-gray-400 px-4 py-2">R$ 24.000,00</td>
            <td className="border border-gray-400 px-4 py-2">Em execução/Regular</td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">Contratação: 12 meses</td>
            <td className="border border-gray-400 px-4 py-2">PUBLICADO NO DIÁRIO OFICIAL EM 23/08/2025</td>
          </tr>

          {/* 5 */}
          <tr className="bg-blue-100">
            <td className="border border-gray-400 px-4 py-2">Nº 013/2024 - SAD</td>
            <td className="border border-gray-400 px-4 py-2">1º TRMO ADITIVO</td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">Contratação DIRETA de empresa especializada na prestação de serviços de Customização e Manutenção do Sistema Integrado de Informações Previdenciárias (SIPREV)...</td>
            <td className="border border-gray-400 px-4 py-2"><a target="_blank" className="underline text-blue-600" href="/Pdf/administrativo/contratos/1º TERMO ADITIVO AO CONTRATO Nº 013.2024-SAD.pdf">DISPENSA DE LICITAÇÃO - CHAMAMENTO PÚBLICO -Processo administrativo nº 002/2023</a></td>
            <td className="border border-gray-400 px-4 py-2">3IT CONSULTORIA</td>
            <td className="border border-gray-400 px-4 py-2">11.250.881/0001-15</td>
            <td className="border border-gray-400 px-4 py-2">16/04/2025 a 16/04/2026</td>
            <td className="border border-gray-400 px-4 py-2">R$ 37.623,60</td>
            <td className="border border-gray-400 px-4 py-2">Em execução/Regular</td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">Contratação: 12 meses</td>
            <td className="border border-gray-400 px-4 py-2">PUBLICADO NO DIÁRIO OFICIAL EM 02/04/2025</td>
          </tr>

          {/* 6 */}
          <tr>
            <td className="border border-gray-400 px-4 py-2">Nº 010/2020 SAD</td>
            <td className="border border-gray-400 px-4 py-2">6º TERMO ADITIVO</td>          
            <td className="border border-gray-400 px-4 py-2">INSTITUTO DE PREVIDÊNCIA DOS SERVIDORES PÚBLICOS – JABOATÃOPREV</td>
            <td className="border border-gray-400 px-4 py-2">Serviço De Agendamento De Passagens Aéreas Nacionais E Internacionais...</td>
            <td className="border border-gray-400 px-4 py-2"><a target="_blank" className="underline text-blue-600" href="/Pdf/administrativo/contratos/6º TERMO ADITIVO AO CONTRATO Nº 010_2020 - SAD.pdf">PROCESSO ADMINISTRATIVO Nº 003.2020.PREGÃO ELETRÔNICO.002.SDI.CPL6 - (CONTRATO Nº 010/2020 – SAD – 4º T.A.)</a></td>
            <td className="border border-gray-400 px-4 py-2">BRASLUSO TURISMO LTDA EPP</td>
            <td className="border border-gray-400 px-4 py-2">09.480.880/0001-15</td>
            <td className="border border-gray-400 px-4 py-2">24/08/2025 a 24/08/2026</td>
            <td className="border border-gray-400 px-4 py-2">R$ 37.500,00</td>
            <td className="border border-gray-400 px-4 py-2">Em execução/Regular</td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">Contratação: 12 meses</td>
            <td className="border border-gray-400 px-4 py-2">PUBLICADO NO DOM EM 14/08/2025</td>
          </tr>

          {/* 7 */}
          <tr className="bg-blue-100">
            <td className="border border-gray-400 px-4 py-2">Contratação Direta</td>
            <td className="border border-gray-400 px-4 py-2">Empenho substituiu o Contrato</td>
            <td className="border border-gray-400 px-4 py-2">INSTITUTO DE PREVIDÊNCIA DOS SERVIDORES PÚBLICOS - JABOATÃOPREV</td>
            <td className="border border-gray-400 px-4 py-2">Contratação de seguradora especializada em prestação de serviços de seguros patrimoniais</td>
            <td className="border border-gray-400 px-4 py-2"><a>Contratação Direta via Empenho</a></td>
            <td className="border border-gray-400 px-4 py-2">HDI SEGUROS</td>
            <td className="border border-gray-400 px-4 py-2">29.980.158/0001-57</td>
            <td className="border border-gray-400 px-4 py-2">02/12/2025 a 02/12/2026</td>
            <td className="border border-gray-400 px-4 py-2">R$ 1.329,60</td>
            <td className="border border-gray-400 px-4 py-2">Apólice Emitida</td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">Contínuo - 30/11/2023 a 30/11/2024</td>
            <td className="border border-gray-400 px-4 py-2">NÃO HOUVE PUBLICAÇÃO DE CONTRATO</td>
          </tr>

          {/* 8 */}
          <tr>
            <td className="border border-gray-400 px-4 py-2">Nº 073/2022</td>
            <td className="border border-gray-400 px-4 py-2">2º TERMO ADITIVO</td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">Contratação de empresa especializada na prestação de serviços de avaliação atuarial...</td>
            <td className="border border-gray-400 px-4 py-2"><a target="_blank" className="underline text-blue-600" href="/Pdf/administrativo/contratos/3º TERMO ADITIVO AO CONTRATO Nº 073-2022 - SAD.pdf">PROCESSO ADM/CHAMAMENTO PÚBLICO Nº 073/2022 (CONTRATO Nº 073/2022 - SAD)</a></td>
            <td className="border border-gray-400 px-4 py-2">ACTUARIAL - ASSESSORIA E CONSULTORIA ATUARIAL LTDA</td>
            <td className="border border-gray-400 px-4 py-2">00.767.919/0001-05</td>
            <td className="border border-gray-400 px-4 py-2">04/01/2026 A 04/01/2026</td>
            <td className="border border-gray-400 px-4 py-2">R$ 10.800,00</td>
            <td className="border border-gray-400 px-4 py-2">Em execução/Regular</td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">Contratação: 06 meses</td>
            <td className="border border-gray-400 px-4 py-2">PUBLICADO NO DIÁRIO OFICIAL EM 07/01/2026</td>
          </tr>

          {/* 9 */}
          <tr className="bg-blue-100">
            <td className="border border-gray-400 px-4 py-2">Nº 007003/2022.P</td>
            <td className="border border-gray-400 px-4 py-2">MÁTER</td>
            <td className="border border-gray-400 px-4 py-2">JABPREV</td>
            <td className="border border-gray-400 px-4 py-2">Prestação de serviços estratégicos de solução de tecnologia da informação (TI) pela DATAPREV - PARA COMPENSAÇÃO PREVIDENCIÁRIA - COMPREV</td>
            <td className="border border-gray-400 px-4 py-2"><a target="_blank" className="underline text-blue-600" href="/Pdf/administrativo/contratos/CONTRATO Nº 007003-2022.P - DATAPREV-COMPREV.pdf">PROCESSO ADMINISTRATIVO Nº. 217.2021.INEX.029.SAD.CPL4</a></td>
            <td className="border border-gray-400 px-4 py-2">DATAPREV-COMPREV</td>
            <td className="border border-gray-400 px-4 py-2">42.422.253/0001-01</td>
            <td className="border border-gray-400 px-4 py-2">20/01/2022 a 20/01/2027</td>
            <td className="border border-gray-400 px-4 py-2">R$ 33.600,00 (12 MESES)</td>
            <td className="border border-gray-400 px-4 py-2">Em execução/Regular</td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">Contratação: 60 meses</td>
            <td className="border border-gray-400 px-4 py-2">CONTRATAÇÃO DIRETA</td>
          </tr>

          {/* 10 */}
          <tr>
            <td className="border border-gray-400 px-4 py-2">Nº 020/2024.S</td>
            <td className="border border-gray-400 px-4 py-2">MÁTER</td>
            <td className="border border-gray-400 px-4 py-2">JABPREV</td>
            <td className="border border-gray-400 px-4 py-2">Prestação de serviços estratégicos de solução de tecnologia da informação (TI) para fornecimento do serviço de Batimento de Dados do Sistema de Informações do Registro Civil – SIRC pela DATAPREV.</td>
            <td className="border border-gray-400 px-4 py-2"><a target="_blank" className="underline text-blue-600" href="/Pdf/administrativo/contratos/2º TERMO ADITIVO AO CONTRATO Nº 020-2024.pdf">PROCESSO ADM Nº 020/2024.S</a></td>
            <td className="border border-gray-400 px-4 py-2">DATAPREV - SIRC</td>
            <td className="border border-gray-400 px-4 py-2">42.422.253/0001-01</td>
            <td className="border border-gray-400 px-4 py-2">23/07/2024 a 23/07/2029</td>
            <td className="border border-gray-400 px-4 py-2">DE ACORDO COM USO</td>
            <td className="border border-gray-400 px-4 py-2">Em execução/Regular</td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">Contratação: 12 meses</td>
            <td className="border border-gray-400 px-4 py-2">PUBLICADO NO DIÁRIO OFICIAL EM 19/03/2025</td>
          </tr>
     
          {/* 11 */}
          <tr className="bg-blue-100">
            <td className="border border-gray-400 px-4 py-2">nº 00233/2024 (LATTINE e JABOATÃOPREV)</td>
            <td className="border border-gray-400 px-4 py-2">MÁTER</td>
            <td className="border border-gray-400 px-4 py-2">LATTINE e JABOATÃOPREV</td>
            <td className="border border-gray-400 px-4 py-2">Aquisição de subscrições dos softwares Microsoft 365 Business Standard</td>
            <td className="border border-gray-400 px-4 py-2"><a target="_blank" className="underline text-blue-600" href="/Pdf/administrativo/contratos/CONTRATO Nº CS 561_2025.pdf">CHAMAMENTO PÚBLICO/PROCESSO ADM Nº 013/2024</a></td>
            <td className="border border-gray-400 px-4 py-2">LATTINE CONSULT LTDA – EPP</td>
            <td className="border border-gray-400 px-4 py-2">21.045.717/0001-20</td>
            <td className="border border-gray-400 px-4 py-2">16/10/2024 a 16/10/2026</td>
            <td className="border border-gray-400 px-4 py-2">R$ 3.900,55</td>
            <td className="border border-gray-400 px-4 py-2">Em execução/Regular</td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">Contratação: 12 meses</td>
            <td className="border border-gray-400 px-4 py-2">PUBLICADO NO DIÁRIO EM 23/10/2024</td>
          </tr>

          {/* 12 */}
          <tr>
            <td className="border border-gray-400 px-4 py-2">Nº 004/2023</td>
            <td className="border border-gray-400 px-4 py-2">2º TERMO ADITIVO</td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">Locação de veículo sem motorista e sem combustível</td>
            <td className="border border-gray-400 px-4 py-2"><a target="_blank" className="underline text-blue-600" href="/Pdf/administrativo/contratos/3º TERMO ADITIVO AO CONTRATO Nº 004-2023 - SAD.pdf">ATA DE REGISTRO DE PREÇOS Nº 069/2022 SAD (PROCESSO Nº 081.2022.PE.042.SAD.CPL4) (CONTRATO Nº 004/2023 – SAD – 2º T.A.)</a></td>
            <td className="border border-gray-400 px-4 py-2">H. LIRA & CIA LTDA</td>
            <td className="border border-gray-400 px-4 py-2">11.855.138/0001-99</td>
            <td className="border border-gray-400 px-4 py-2">09/02/2026 a 09/02/2027</td>
            <td className="border border-gray-400 px-4 py-2">R$ 31.084,44</td>
            <td className="border border-gray-400 px-4 py-2">Em execução/Regular</td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">Contratação: 12 meses</td>
            <td className="border border-gray-400 px-4 py-2">PUBLICADO NO DIÁRIO EM 25/01/2025</td>
          </tr>

          {/* 13 */}
          <tr className="bg-blue-100">
            <td className="border border-gray-400 px-4 py-2">Nº 014/2023</td>
            <td className="border border-gray-400 px-4 py-2">MÁTER</td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">Aquisição de microcomputadores</td>
            <td className="border border-gray-400 px-4 py-2"><a target="_blank" className="underline text-blue-600" href="/Pdf/administrativo/contratos/CONTRATO Nº 014_2023.pdf">ATA DE REGISTRO DE PREÇOS Nº 003/2023 SAD (PROCESSO Nº 119.2022.PE.053.SAD.CPL4) (CONTRATO Nº 014/2023 - SAD)</a></td>
            <td className="border border-gray-400 px-4 py-2">FATOR X TECNOLOGIA DIGITAL LTDA</td>
            <td className="border border-gray-400 px-4 py-2">31.216.370/00001-94</td>
            <td className="border border-gray-400 px-4 py-2">16/03/2023 a 16/03/2026</td>
            <td className="border border-gray-400 px-4 py-2">R$ 64.621,88</td>
            <td className="border border-gray-400 px-4 py-2">Em execução/Regular</td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">Contratação: 36 meses</td>
            <td className="border border-gray-400 px-4 py-2">PUBLICADO NO DIÁRIO EM 21/03/2023</td>
          </tr>

          {/* 14 */}
          <tr>
            <td className="border border-gray-400 px-4 py-2">Nº 015/2023</td>
            <td className="border border-gray-400 px-4 py-2">MÁTER</td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">Aquisição de microcomputadores</td>
            <td className="border border-gray-400 px-4 py-2"><a target="_blank" className="underline text-blue-600" href="/Pdf/administrativo/contratos/CONTRATO Nº 015_2023 - SAD.pdf">ATA DE REGISTRO DE PREÇOS Nº 004/2023 SAD (PROCESSO Nº 184.2022.PE.090.SAD.CPL3) (CONTRATO Nº 015/2023 - SAD)</a></td>
            <td className="border border-gray-400 px-4 py-2">INFOG LTDA</td>
            <td className="border border-gray-400 px-4 py-2">42.145.571/0001-64</td>
            <td className="border border-gray-400 px-4 py-2">20/03/2023 a 20/03/2026</td>
            <td className="border border-gray-400 px-4 py-2">R$ 4.544,00</td>
            <td className="border border-gray-400 px-4 py-2">Em execução/Regular</td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">Contratação: 36 meses</td>
            <td className="border border-gray-400 px-4 py-2">PUBLICADO NO DIÁRIO EM 22/03/2023</td>
          </tr>

          {/* 15 */}
          <tr className="bg-blue-100">
            <td className="border border-gray-400 px-4 py-2">Nº 020/2023</td>
            <td className="border border-gray-400 px-4 py-2">2º TERMO ADITIVO</td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">Locação de impressoras</td>
            <td className="border border-gray-400 px-4 py-2"><a target="_blank" className="underline text-blue-600" href="/Pdf/administrativo/contratos/2º TERMO ADITIVO AO CONTRATO Nº 020_2023 - SAD.pdf">ATA DE REGISTRO DE PREÇOS Nº SAD (PROCESSO Nº 166.2022.PE.080.SAD.CPL4) (CONTRATO Nº 020/2023 - SAD)</a></td>
            <td className="border border-gray-400 px-4 py-2">MAQ-LAREM</td>
            <td className="border border-gray-400 px-4 py-2">40.938.508/0001-50</td>
            <td className="border border-gray-400 px-4 py-2">02/06/2025 a 02/06/2026</td>
            <td className="border border-gray-400 px-4 py-2">R$ 9.493,44</td>
            <td className="border border-gray-400 px-4 py-2">Em execução/Regular</td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">Contratação: 12 meses</td>
            <td className="border border-gray-400 px-4 py-2">PUBLICADO NO DIÁRIO EM 27/05/2025</td>
          </tr>

          {/* 16 */}
          <tr>
            <td className="border border-gray-400 px-4 py-2">Nº 024/2023</td>
            <td className="border border-gray-400 px-4 py-2">2º TERMO ADITIVO</td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">Locação de impressoras</td>
            <td className="border border-gray-400 px-4 py-2"><a target="_blank" className="underline text-blue-600" href="/Pdf/administrativo/contratos/2º TERMO ADITIVO AO CONTRATO Nº 024.2023 - SAD.pdf">ATA DE REGISTRO DE PREÇOS Nº 007/2023 SAD Processo Administrativo nº 166.2022.PE.080.SAD.CPL4 (2º TERMO ADITIVO AO CONTRATO Nº 024/2023-SAD)</a></td>
            <td className="border border-gray-400 px-4 py-2">SOLIVETTI COMÉRCIO E SERVIÇOS LTDA</td>
            <td className="border border-gray-400 px-4 py-2">40.904.492/0001-64</td>
            <td className="border border-gray-400 px-4 py-2">14/07/2025 a 14/07/2026</td>
            <td className="border border-gray-400 px-4 py-2">R$ 12.386,00</td>
            <td className="border border-gray-400 px-4 py-2">Em execução/Regular</td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">Contratação: 12 meses</td>
            <td className="border border-gray-400 px-4 py-2">PUBLICADO NO DIÁRIO EM 17/05/2025</td>
          </tr>

          {/* 17 */}
          <tr className="bg-blue-100">
            <td className="border border-gray-400 px-4 py-2">Nº 027/2023</td>
            <td className="border border-gray-400 px-4 py-2">MÁTER</td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">Contratação de empresa especializada na prestação de Serviços de Auditoria de Certificação Inicial – Nível I e II</td>
            <td className="border border-gray-400 px-4 py-2"><a target="_blank" className="underline text-blue-600" href="/Pdf/administrativo/contratos/CONTRATO Nº 027_2023 - SAD.pdf">CHAMAMENTO PÚBLICO – PROCESSO ADM. Nº 004/2023</a></td>
            <td className="border border-gray-400 px-4 py-2">INSTITUTO DE CERTIFICAÇÃO QUALIDADE BRASIL - IQC</td>
            <td className="border border-gray-400 px-4 py-2">01.659.386/0001-00</td>
            <td className="border border-gray-400 px-4 py-2">14/07/2023 a 14/07/2026</td>
            <td className="border border-gray-400 px-4 py-2">R$ 11.325,00</td>
            <td className="border border-gray-400 px-4 py-2">Em execução/Regular</td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">Contratação: 36 meses</td>
            <td className="border border-gray-400 px-4 py-2">PUBLICADO EM DIÁRIO OFICIAL EM 18/07/2023</td>
          </tr>

          {/* 18 */}
          <tr>
            <td className="border border-gray-400 px-4 py-2">Nº 025/2023</td>
            <td className="border border-gray-400 px-4 py-2">2º TERMO ADITIVO</td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">Contratação de empresa especializada na prestação de Serviços de Apoio Administrativo</td>
            <td className="border border-gray-400 px-4 py-2"><a target="_blank" className="underline text-blue-600" href="/Pdf/administrativo/contratos/3º TERMO ADITIVO AO CONTRATO Nº 025.2023 - SAD.pdf">ATA DE REGISTRO DE PREÇOS Nº 002/2023 SAD (Processo Administrativo nº 146.2022.PE.068.SME.CPL3) (2º TERMO ADITIVO AO CONTRATO Nº 025/2023)</a></td>
            <td className="border border-gray-400 px-4 py-2">TOPPUS SERVIÇOS TERCEIRIZADOS LTDA</td>
            <td className="border border-gray-400 px-4 py-2">09.281.162/0001-10</td>
            <td className="border border-gray-400 px-4 py-2">17/07/2025 a 17/07/2026</td>
            <td className="border border-gray-400 px-4 py-2">R$ 108.357,84</td>
            <td className="border border-gray-400 px-4 py-2">Em execução/Regular</td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">Contratação: 12 meses</td>
            <td className="border border-gray-400 px-4 py-2">PUBLICADO EM DIÁRIO OFICIAL EM 04/07/2025</td>
          </tr>

          {/* 19 */}
          <tr className="bg-blue-100">
            <td className="border border-gray-400 px-4 py-2">Nº 003/2024 - SAD</td>
            <td className="border border-gray-400 px-4 py-2">MÁTER</td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">Contratação de Empresa Especializada no fornecimento e instalação de Película de proteção solar SMOKE Invertida 5...</td>
            <td className="border border-gray-400 px-4 py-2"><a target="_blank" className="underline text-blue-600" href="/Pdf/administrativo/contratos/CONTRATO Nº 003_2024 - SAD.pdf">DISPENSA DE LICITAÇÃO - PROCESSO ADM. Nº 002/2024</a></td>
            <td className="border border-gray-400 px-4 py-2">FIX FILM PELÍCULA DE CONTROLE SOLAR E VISUAL</td>
            <td className="border border-gray-400 px-4 py-2">16.517.374/0001-19</td>
            <td className="border border-gray-400 px-4 py-2">23/02/2024 a 23/03/2029</td>
            <td className="border border-gray-400 px-4 py-2">R$ 3.910,00</td>
            <td className="border border-gray-400 px-4 py-2">Em execução/Regular</td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">Contratação: 60 meses</td>
            <td className="border border-gray-400 px-4 py-2">PUBLICADO NO DIÁRIO OFICIAL EM 27/02/2024</td>
          </tr>

          {/* 20 */}
          <tr>
            <td className="border border-gray-400 px-4 py-2">Nº 004/2024 - SAD</td>
            <td className="border border-gray-400 px-4 py-2">1º TERMO ADITIVO</td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">Contratação de empresa especializada para prestação de serviço e controle de pragas e vetores...</td>
            <td className="border border-gray-400 px-4 py-2"><a target="_blank" className="underline text-blue-600" href="https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/InstrumentoContratual_assinado28luci29_assinado.pdf">DIPENSA DE LICITAÇÃO - PROCESSO ADM. Nº 011/2023</a></td>
            <td className="border border-gray-400 px-4 py-2">SANEL Saúde Ambiental Nordeste LTDAL</td>
            <td className="border border-gray-400 px-4 py-2">20.160.797/0001-00</td>
            <td className="border border-gray-400 px-4 py-2">27/02/2025 a 27/02/2026</td>
            <td className="border border-gray-400 px-4 py-2">R$ 1.252,71</td>
            <td className="border border-gray-400 px-4 py-2">Em execução/Regular</td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">Contratação: 12 meses</td>
            <td className="border border-gray-400 px-4 py-2">PUBLICADO NO DIÁRIO OFICIAL EM 07/02/2025</td>
          </tr>

          {/* 21 */}
          <tr className="bg-blue-100">
            <td className="border border-gray-400 px-4 py-2">Nº 025//2024-SAD</td>
            <td className="border border-gray-400 px-4 py-2">1º TERMO ADITIVO</td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">Contratação de Empresa Especializada de Locação de Aparelhos de Ar Condicionado do Tipo Split e do Tipo Janela, Novo…</td>
            <td className="border border-gray-400 px-4 py-2"><a target="_blank" className="underline text-blue-600" href="/Pdf/administrativo/contratos/1º TERMO ADITIVO AO CONTRATO Nº 025_2024 - SAD.pdf">PROCESSO ADM. Nº 028/.2024.PE.012.EPC.SAD.</a></td>
            <td className="border border-gray-400 px-4 py-2">COLORTEL LOCAÇÃO E ADMINISTRAÇÃO DE BENS PRÓPRIOS LTDA</td>
            <td className="border border-gray-400 px-4 py-2">42.287.193/0001-53</td>
            <td className="border border-gray-400 px-4 py-2">08/08/2025 a 08/08/2026</td>
            <td className="border border-gray-400 px-4 py-2">R$ 42.673,18</td>
            <td className="border border-gray-400 px-4 py-2">Em execução/Regular</td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">Contratação: 12 meses</td>
            <td className="border border-gray-400 px-4 py-2">PUBLICADO NO DIÁRIO OFICIAL EM 13/08/2025</td>
          </tr>

          {/* 22 */}
          <tr>
            <td className="border border-gray-400 px-4 py-2">Nº 028/2024-SAD</td>
            <td className="border border-gray-400 px-4 py-2">1º TERMO ADITIVO</td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">Água Mineral</td>
            <td className="border border-gray-400 px-4 py-2"><a target="_blank" className="underline text-blue-600" href="/Pdf/administrativo/contratos/1º TERMO ADITIVO AO CONTRATO Nº 028_2024 - SAD.pdf">PROCESSO ADM. Nº 068.2024.PE.019.EPC-SAD</a></td>
            <td className="border border-gray-400 px-4 py-2">MACHADO EMPREENDIMENTOS</td>
            <td className="border border-gray-400 px-4 py-2">45.904.437/0001-98</td>
            <td className="border border-gray-400 px-4 py-2">27/04/2025 a 27/09/2026</td>
            <td className="border border-gray-400 px-4 py-2">R$ 3.948,75</td>
            <td className="border border-gray-400 px-4 py-2">Em execução/Regular</td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">Contratação: 12 meses</td>
            <td className="border border-gray-400 px-4 py-2">PUBLICADO NO DIÁRIO OFICIAL EM 02/10/2024</td>
          </tr>

          {/* 23 */}
          <tr className="bg-blue-100">
            <td className="border border-gray-400 px-4 py-2">Nº 018/2025-SAD</td>
            <td className="border border-gray-400 px-4 py-2">MÁTER</td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">Papel Toalha</td>
            <td className="border border-gray-400 px-4 py-2"><a target="_blank" className="underline text-blue-600" href="/Pdf/administrativo/contratos/CONTRATO Nº 018_2025 - SAD.pdf">PROCESSO ADMINISTRATIVO Nº 091.2024.PE.027.EPC-SAD. 027/2024</a></td>
            <td className="border border-gray-400 px-4 py-2">AQUARELA LIVRARIA E PAPELARIA LTDA – ME</td>
            <td className="border border-gray-400 px-4 py-2">01.387.783/0001-70</td>
            <td className="border border-gray-400 px-4 py-2">07/04/2025 a 07/04/2026</td>
            <td className="border border-gray-400 px-4 py-2">R$ 608,00</td>
            <td className="border border-gray-400 px-4 py-2">Em execução/Regular</td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">Contratação: 12 meses</td>
            <td className="border border-gray-400 px-4 py-2">PUBLICADO NO DIÁRIO OFICIAL EM 24/04/2025</td>
          </tr>

          {/* 24 */}
          <tr>
            <td className="border border-gray-400 px-4 py-2">Nº 026/2025-SAD</td>
            <td className="border border-gray-400 px-4 py-2">MÁTER</td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">Rastreamento Veicular</td>
            <td className="border border-gray-400 px-4 py-2"><a target="_blank" className="underline text-blue-600" href="/Pdf/administrativo/contratos/CONTRATO Nº 026_2025 - SAD.pdf">PROCESSO ADMINISTRATIVO Nº 166.2024.PE.059.EPC-SAD. 059/2024</a></td>
            <td className="border border-gray-400 px-4 py-2">RADIONET LTDA</td>
            <td className="border border-gray-400 px-4 py-2">03.304.610/0001-77</td>
            <td className="border border-gray-400 px-4 py-2">16/04/2024 a 16/04/2026</td>
            <td className="border border-gray-400 px-4 py-2">R$ 406,80</td>
            <td className="border border-gray-400 px-4 py-2">Em execução/Regular</td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">Contratação: 12 meses</td>
            <td className="border border-gray-400 px-4 py-2">PUBLICADO NO DIÁRIO OFICIAL EM 24/04/2025</td>
          </tr>

          {/* 25 */}
          <tr className="bg-blue-100">
            <td className="border border-gray-400 px-4 py-2">Nº 031/2025</td>
            <td className="border border-gray-400 px-4 py-2">MÁTER</td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">BUFFET</td>
            <td className="border border-gray-400 px-4 py-2"><a target="_blank" className="underline text-blue-600" href="/Pdf/administrativo/contratos/CONTRATO Nº 031.2025 - SAD.pdf">ADESÃO ARP Nº 001/2024 - SDE</a></td>
            <td className="border border-gray-400 px-4 py-2">CONCAPE</td>
            <td className="border border-gray-400 px-4 py-2">09.246.068/0001-20</td>
            <td className="border border-gray-400 px-4 py-2">07/05/2025 a 07/05/2026</td>
            <td className="border border-gray-400 px-4 py-2">R$ 55.740,00</td>
            <td className="border border-gray-400 px-4 py-2">Em execução/Regular</td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">Contratação: 12 meses</td>
            <td className="border border-gray-400 px-4 py-2">PUBLICADO NO DIÁRIO OFICIAL EM 08/05/2025</td>
          </tr>

          {/* 26 */}
          <tr>
            <td className="border border-gray-400 px-4 py-2">Nº 030/2025</td>
            <td className="border border-gray-400 px-4 py-2">MÁTER</td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">Material de Expediente</td>
            <td className="border border-gray-400 px-4 py-2"><a target="_blank" className="underline text-blue-600" href="/Pdf/administrativo/contratos/CONTRATO Nº 030_2025 - SAD.pdf">Processo Administrativo nº 103.2024.PE.032.EPC.SAD - ATA DE REGISTRO DE PREÇOS N° 012/2025 - ARPCorp</a></td>
            <td className="border border-gray-400 px-4 py-2">MACHADO ARMARINHOS LTDA</td>
            <td className="border border-gray-400 px-4 py-2">24.174.062/0001-88</td>
            <td className="border border-gray-400 px-4 py-2">05/05/2025 a 05/05/2026</td>
            <td className="border border-gray-400 px-4 py-2">R$ 757,15</td>
            <td className="border border-gray-400 px-4 py-2">Em execução/Regular</td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">Contratação: 12 meses</td>
            <td className="border border-gray-400 px-4 py-2">PUBLICADO NO DIÁRIO OFICIAL EM 08/05/2025</td>
          </tr>

          {/* 27 */}
          <tr className="bg-blue-100">
            <td className="border border-gray-400 px-4 py-2">Nº 028/2025-SAD</td>
            <td className="border border-gray-400 px-4 py-2">MÁTER</td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">PAPEL TOALHA</td>
            <td className="border border-gray-400 px-4 py-2"><a target="_blank" className="underline text-blue-600" href="/Pdf/administrativo/contratos/CONTRATO Nº 028_2025 - SAD.pdf">Processo Administrativo nº 103.2024.PE.032.EPC.SAD</a></td>
            <td className="border border-gray-400 px-4 py-2">ANA PAULA DE SENA QUEIROZ</td>
            <td className="border border-gray-400 px-4 py-2">36.850.082/0001-00</td>
            <td className="border border-gray-400 px-4 py-2">23/04/2025 a 23/04/2026</td>
            <td className="border border-gray-400 px-4 py-2">R$ 1.044,80</td>
            <td className="border border-gray-400 px-4 py-2">Em execução/Regular</td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">Contratação: 12 meses</td>
            <td className="border border-gray-400 px-4 py-2">PUBLICADO NO DIÁRIO OFICIAL EM 26/04/2025</td>
          </tr>

          {/* 28 */}
          <tr>
            <td className="border border-gray-400 px-4 py-2">Nº 038/2025-SAD</td>
            <td className="border border-gray-400 px-4 py-2">MÁTER</td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">REVITALIZAÇÃO DO TELHADO</td>
            <td className="border border-gray-400 px-4 py-2"><a target="_blank" className="underline text-blue-600" href="/Pdf/administrativo/contratos/CONTRATO Nº 038_2025 - SAD.pdf">Processo Administrativo nº 003/2025</a></td>
            <td className="border border-gray-400 px-4 py-2">CV MANUTENÇÃO GERAL LTDA</td>
            <td className="border border-gray-400 px-4 py-2">40.799.500/0001-50</td>
            <td className="border border-gray-400 px-4 py-2">18/06/2025 a 18/06/2030</td>
            <td className="border border-gray-400 px-4 py-2">R$ 44.467,00</td>
            <td className="border border-gray-400 px-4 py-2">Em execução/Regular</td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">Contratação: 60 meses</td>
            <td className="border border-gray-400 px-4 py-2">PUBLICADO NO DIÁRIO OFICIAL EM 20/06/2025</td>
          </tr>

          {/* 29 */}
          <tr className="bg-blue-100">
            <td className="border border-gray-400 px-4 py-2">Nº 042/2025-SAD</td>
            <td className="border border-gray-400 px-4 py-2">MÁTER</td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">COMPUTADORES DESKTOP</td>
            <td className="border border-gray-400 px-4 py-2"><a target="_blank" className="underline text-blue-600" href="/Pdf/administrativo/contratos/CONTRATO Nº 042_2025 - SAD.pdf">Processo Administrativo nº 028.2025.PE.014.EPC-SAD</a></td>
            <td className="border border-gray-400 px-4 py-2">DATEN TECNOLOGIA LTDA</td>
            <td className="border border-gray-400 px-4 py-2">04.602.789/0001-01</td>
            <td className="border border-gray-400 px-4 py-2">21/07/2025 a 17/07/2026</td>
            <td className="border border-gray-400 px-4 py-2">R$ 20.975,00</td>
            <td className="border border-gray-400 px-4 py-2">Em execução/Regular</td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">Contratação: 12 meses</td>
            <td className="border border-gray-400 px-4 py-2">PUBLICADO NO DIÁRIO OFICIAL EM 23/07/2025</td>
          </tr>

          {/* 30 */}
          <tr>
            <td className="border border-gray-400 px-4 py-2">Nº 044/2025-SAD</td>
            <td className="border border-gray-400 px-4 py-2">MÁTER</td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">MONITOR</td>
            <td className="border border-gray-400 px-4 py-2"><a target="_blank" className="underline text-blue-600" href="/Pdf/administrativo/contratos/CONTRATO Nº 044_2025 - SAD.pdf">Processo Administrativo nº 028.2025.PE.014.EPC-SAD</a></td>
            <td className="border border-gray-400 px-4 py-2">MAIS DISTRIBUIÇÕES PB COMÉRCIO E SERVIÇOS</td>
            <td className="border border-gray-400 px-4 py-2">45.579.602/0001-83</td>
            <td className="border border-gray-400 px-4 py-2">21/07/2025 a 21/07/2026</td>
            <td className="border border-gray-400 px-4 py-2">R$ 5.518,00</td>
            <td className="border border-gray-400 px-4 py-2">Em execução/Regular</td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">Contratação: 12 meses</td>
            <td className="border border-gray-400 px-4 py-2">PUBLICADO NO DIÁRIO OFICIAL EM 25/07/2025</td>
          </tr>

          {/* 31 */}
          <tr className="bg-blue-100">
            <td className="border border-gray-400 px-4 py-2">Nº 043/2025-SAD</td>
            <td className="border border-gray-400 px-4 py-2">MÁTER</td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">NOTEBOOKS</td>
            <td className="border border-gray-400 px-4 py-2"><a target="_blank" className="underline text-blue-600" href="/Pdf/administrativo/contratos/CONTRATO Nº 043_2025 - SAD.pdf">Processo Administrativo nº 028.2025.PE.014.EPC-SAD</a></td>
            <td className="border border-gray-400 px-4 py-2">TGT CONSULTORIA E INFORMÁTICA LTDA</td>
            <td className="border border-gray-400 px-4 py-2">42.491.006/0001-59</td>
            <td className="border border-gray-400 px-4 py-2">14/07/2025 a 14/07/2026</td>
            <td className="border border-gray-400 px-4 py-2">R$ 12.210,00</td>
            <td className="border border-gray-400 px-4 py-2">Em execução/Regular</td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">Contratação: 12 meses</td>
            <td className="border border-gray-400 px-4 py-2">PUBLICADO NO DIÁRIO OFICIAL EM 16/07/2025</td>
          </tr>

          {/* 32 */}
          <tr>
            <td className="border border-gray-400 px-4 py-2">Nº 034/2025-SAD</td>
            <td className="border border-gray-400 px-4 py-2">MÁTER</td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">CESTA DE PREÇOS</td>
            <td className="border border-gray-400 px-4 py-2"><a target="_blank" className="underline text-blue-600" href="/Pdf/administrativo/contratos/CONTRATO N° 034_2025 - SAD.pdf">Processo Administrativo nº 199.2024.PE.071.EPC-SAD</a></td>
            <td className="border border-gray-400 px-4 py-2">PROMAXIMA GESTÃO EMPRESARIAL LTDA</td>
            <td className="border border-gray-400 px-4 py-2">16.538.909/0001-38</td>
            <td className="border border-gray-400 px-4 py-2">28/05/2025 a 28/05/2026</td>
            <td className="border border-gray-400 px-4 py-2">R$ 6.000,00</td>
            <td className="border border-gray-400 px-4 py-2">Em execução/Regular</td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">Contratação: 12 meses</td>
            <td className="border border-gray-400 px-4 py-2">PUBLICADO NO DIÁRIO OFICIAL EM 30/05/2025</td>
          </tr>

          {/* 33 */}
          <tr className="bg-blue-100">
            <td className="border border-gray-400 px-4 py-2">Nº 037/2025-SAD</td>
            <td className="border border-gray-400 px-4 py-2">MÁTER</td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">MATERIAIS DE LIMPEZA</td>
            <td className="border border-gray-400 px-4 py-2"><a target="_blank" className="underline text-blue-600" href="/Pdf/administrativo/contratos/CONTRATO Nº 037_2025 - SAD.pdf">Processo Administrativo nº 014.2024.PE.008.EPC-SAD</a></td>
            <td className="border border-gray-400 px-4 py-2">MAIS ESTOQUE COMÉRCIO E DISTRIBUIDORA LTDA</td>
            <td className="border border-gray-400 px-4 py-2">31.202.451/0001-35</td>
            <td className="border border-gray-400 px-4 py-2">26/06/2025 a 26/06/2026</td>
            <td className="border border-gray-400 px-4 py-2">R$ 2.404,56</td>
            <td className="border border-gray-400 px-4 py-2">Em execução/Regular</td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">Contratação: 12 meses</td>
            <td className="border border-gray-400 px-4 py-2">PUBLICADO NO DIÁRIO OFICIAL EM 04/07/2025</td>
          </tr>

          {/* 34 */}
          <tr>
            <td className="border border-gray-400 px-4 py-2">Nº 047/2025-SAD</td>
            <td className="border border-gray-400 px-4 py-2">MÁTER</td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">PAPEL HIGIÊNICO</td>
            <td className="border border-gray-400 px-4 py-2"><a target="_blank" className="underline text-blue-600" href="/Pdf/administrativo/contratos/CONTRATO Nº 047_2025 - SAD.pdf">Processo Administrativo nº 057.2024.PE.018.EPC-SAD</a></td>
            <td className="border border-gray-400 px-4 py-2">SUPRA DISTRIBUIDORA DE MATERIAIS HOSPITALARES LTDA</td>
            <td className="border border-gray-400 px-4 py-2">30.294.882/0001-06</td>
            <td className="border border-gray-400 px-4 py-2">28/08/2025 a 28/08/2026</td>
            <td className="border border-gray-400 px-4 py-2">R$ 808,00</td>
            <td className="border border-gray-400 px-4 py-2">Em execução/Regular</td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">Contratação: 12 meses</td>
            <td className="border border-gray-400 px-4 py-2">PUBLICADO NO DIÁRIO OFICIAL EM 29/08/2025</td>
          </tr>

          {/* 35 */}
          <tr className="bg-blue-100">
            <td className="border border-gray-400 px-4 py-2">Nº 039/2025-SAD</td>
            <td className="border border-gray-400 px-4 py-2">MÁTER</td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">contratação de empresa especializada no fornecimento de licença de uso de software de análise financeira, voltado para RPPS…</td>
            <td className="border border-gray-400 px-4 py-2"><a target="_blank" className="underline text-blue-600" href="/Pdf/administrativo/contratos/CONTRATO N° 039_2025 - SAD.pdf">Processo Administrativo nº 102.2025.INEX.066.EPC-SAD</a></td>
            <td className="border border-gray-400 px-4 py-2">PARAMITA TECNOLOGIA COSULTORIA FINANCEIRA LTDA</td>
            <td className="border border-gray-400 px-4 py-2">07.931.931/0001-52</td>
            <td className="border border-gray-400 px-4 py-2">20/08/2025 a 20/08/2026</td>
            <td className="border border-gray-400 px-4 py-2">R$ 48.992,88</td>
            <td className="border border-gray-400 px-4 py-2">Em execução/Regular</td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">Contratação: 12 meses</td>
            <td className="border border-gray-400 px-4 py-2">PUBLICADO NO DIÁRIO OFICIAL EM 25/08/2025</td>
          </tr>

          {/* 36 */}
          <tr>
            <td className="border border-gray-400 px-4 py-2">Nº 050/2025-SAD</td>
            <td className="border border-gray-400 px-4 py-2">MÁTER</td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">PAPEL TOALHA</td>
            <td className="border border-gray-400 px-4 py-2"><a target="_blank" className="underline text-blue-600" href="/Pdf/administrativo/contratos/CONTRATO Nº 050_2025 - SAD.pdf">Processo Administrativo nº 091.2024.PE.027.EPC-SAD</a></td>
            <td className="border border-gray-400 px-4 py-2">AQUARELA LIVRARIA E PAPELARIA LTDA – ME</td>
            <td className="border border-gray-400 px-4 py-2">01.387.783/0001-70</td>
            <td className="border border-gray-400 px-4 py-2">02/09/2025 a 02/09/2026</td>
            <td className="border border-gray-400 px-4 py-2">R$ 588,40</td>
            <td className="border border-gray-400 px-4 py-2">Em execução/Regular</td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">Contratação: 12 meses</td>
            <td className="border border-gray-400 px-4 py-2">PUBLICADO NO DIÁRIO OFICIAL EM 04/09/2025</td>
          </tr>

          {/* 37 */}
          <tr className="bg-blue-100">
            <td className="border border-gray-400 px-4 py-2">Nº 0542025-SAD</td>
            <td className="border border-gray-400 px-4 py-2">MÁTER</td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">MATERIAL DE LIMPEZA</td>
            <td className="border border-gray-400 px-4 py-2"><a target="_blank" className="underline text-blue-600" href="/Pdf/administrativo/contratos/CONTRATO Nº 054_2025 - SAD.pdf">Processo Administrativo nº 014.2024.PE.008.EPC-SAD</a></td>
            <td className="border border-gray-400 px-4 py-2">SUPRA DISTRIBUIDORA DE MATERIAIS HOSPITALARES LTDA</td>
            <td className="border border-gray-400 px-4 py-2">30.294.882/0001-06</td>
            <td className="border border-gray-400 px-4 py-2">23/09/2025 a 23/09/2026</td>
            <td className="border border-gray-400 px-4 py-2">R$ 575,84</td>
            <td className="border border-gray-400 px-4 py-2">Em execução/Regular</td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">Contratação: 12 meses</td>
            <td className="border border-gray-400 px-4 py-2">PUBLICADO NO DIÁRIO OFICIAL EM 08/10/2025</td>
          </tr>

          {/* 38 */}
          <tr>
            <td className="border border-gray-400 px-4 py-2">Nº 055/2025-SAD</td>
            <td className="border border-gray-400 px-4 py-2">MÁTER</td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">COMBUSTÍVEL</td>
            <td className="border border-gray-400 px-4 py-2"><a target="_blank" className="underline text-blue-600" href="/Pdf/administrativo/contratos/CONTRATO Nº 055_2025 - SAD.pdf">Processo Administrativo nº PA.033.AD.032.EPC-SAD</a></td>
            <td className="border border-gray-400 px-4 py-2">TICKET SOLUÇÕES HDFGT S/A</td>
            <td className="border border-gray-400 px-4 py-2">03.506.307/0001-57</td>
            <td className="border border-gray-400 px-4 py-2">24/10/2025 a 24/10/2027</td>
            <td className="border border-gray-400 px-4 py-2">R$ 7.512,00</td>
            <td className="border border-gray-400 px-4 py-2">Em execução/Regular</td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">Contratação: 12 meses</td>
            <td className="border border-gray-400 px-4 py-2">PUBLICADO NO DIÁRIO OFICIAL EM 30/10/2025</td>
          </tr>

          {/* 39 */}
          <tr className="bg-blue-100">
            <td className="border border-gray-400 px-4 py-2">Nº 056/2025-SAD</td>
            <td className="border border-gray-400 px-4 py-2">MÁTER</td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">SABONETE LÍQUIDO</td>
            <td className="border border-gray-400 px-4 py-2"><a target="_blank" className="underline text-blue-600" href="/Pdf/administrativo/contratos/CONTRATO Nº 056_2025.pdf">Processo Administrativo nº 091.2024.PE.027.EPC-SAD</a></td>
            <td className="border border-gray-400 px-4 py-2">MAIS ESTOQUE COMÉRCIO E DISTRIBUIDORA LTDA</td>
            <td className="border border-gray-400 px-4 py-2">31.202.451/0001-35</td>
            <td className="border border-gray-400 px-4 py-2">09/10/2025 a 09/10/2026</td>
            <td className="border border-gray-400 px-4 py-2">R$ 300,00</td>
            <td className="border border-gray-400 px-4 py-2">Em execução/Regular</td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">Contratação: 12 meses</td>
            <td className="border border-gray-400 px-4 py-2">PUBLICADO NO DIÁRIO OFICIAL EM 14/10/2025</td>
          </tr>

          {/* 40 */}
          <tr>
            <td className="border border-gray-400 px-4 py-2">Nº 057/2025-SAD</td>
            <td className="border border-gray-400 px-4 py-2">MÁTER</td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">ARQUIVO DESLIZANTE</td>
            <td className="border border-gray-400 px-4 py-2"><a target="_blank" className="underline text-blue-600" href="/Pdf/administrativo/contratos/CONTRATO Nº 057_2025 - SAD.pdf">Processo Administrativo n° PA.036.AD.036.EPC-SAD</a></td>
            <td className="border border-gray-400 px-4 py-2">ARTHCO COMÉRCIO DE MÓVEIS E MATERIAIS PARA ESCRITÓRIO LIMITADA</td>
            <td className="border border-gray-400 px-4 py-2">23.908.807/0001-22</td>
            <td className="border border-gray-400 px-4 py-2">09/10/2025 a 09/10/2026</td>
            <td className="border border-gray-400 px-4 py-2">R$ 76.230,00</td>
            <td className="border border-gray-400 px-4 py-2">Em execução/Regular</td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">Contratação: 12 meses</td>
            <td className="border border-gray-400 px-4 py-2">PUBLICADO NO DIÁRIO OFICIAL EM 16/10/2025</td>
          </tr>

          {/* 41 */}
          <tr className="bg-blue-100">
            <td className="border border-gray-400 px-4 py-2">Nº 064/2025-SAD</td>
            <td className="border border-gray-400 px-4 py-2">MÁTER</td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">CAPACITAÇÃO</td>
            <td className="border border-gray-400 px-4 py-2"><a target="_blank" className="underline text-blue-600" href="/Pdf/administrativo/contratos/CONTRATO N° 064_2025 - SAD.pdf">Processo Administrativo nº 235.2025.INEX.157.EPC-SAD</a></td>
            <td className="border border-gray-400 px-4 py-2">ANABELA DE QUINTAL RODRIGUES</td>
            <td className="border border-gray-400 px-4 py-2">33.940.486/0001-05</td>
            <td className="border border-gray-400 px-4 py-2">06/11/2025 a 06/05/2026</td>
            <td className="border border-gray-400 px-4 py-2">R$ 24.360,00</td>
            <td className="border border-gray-400 px-4 py-2">Em execução/Regular</td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">Contratação: 06 meses</td>
            <td className="border border-gray-400 px-4 py-2">PUBLICADO NO DIÁRIO OFICIAL EM 20/11/2025</td>
          </tr>

          {/* 42 */}
          <tr>
            <td className="border border-gray-400 px-4 py-2">Nº 068/2025</td>
            <td className="border border-gray-400 px-4 py-2">MÁTER</td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">Aquisição de PAPEL SULFITE, TAMANHO A4 (210X297MM), EXTRA BRANCO, ALCALINO, GRAMATURA 75G/M2, RESMA COM 500 FOLHAS</td>
            <td className="border border-gray-400 px-4 py-2"><a target="_blank" className="underline text-blue-600" href="/Pdf/administrativo/contratos/CONTRATO Nº 068_2025 - SAD.pdf">Processo Administrativo nº 179.2024.PE.064.EPC-SAD</a></td>
            <td className="border border-gray-400 px-4 py-2">COMODORO COMERCIAL E NUTRIÇÃO LTDA-ME</td>
            <td className="border border-gray-400 px-4 py-2">10.461.277/0001-75</td>
            <td className="border border-gray-400 px-4 py-2">19/12/2025 a 19/12/2026</td>
            <td className="border border-gray-400 px-4 py-2">R$ 3.298,50</td>
            <td className="border border-gray-400 px-4 py-2">Em execução/Regular</td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">Contratação: 12 meses</td>
            <td className="border border-gray-400 px-4 py-2">PUBLICADO NO DIÁRIO OFICIAL EM 23/12/2025</td>
          </tr>

          {/* 43 */}
          <tr className="bg-blue-100">
            <td className="border border-gray-400 px-4 py-2">Nº 561/2025-SAD</td>
            <td className="border border-gray-400 px-4 py-2">MÁTER</td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">Aquisição de subscrições dos sfotwares Microsoft 365 Business Standard</td>
            <td className="border border-gray-400 px-4 py-2"><a target="_blank" className="underline text-blue-600" href="/Pdf/administrativo/contratos/CONTRATO CS Nº 561_2025.pdf">Processo Administrativo nº 20251125012079/2025</a></td>
            <td className="border border-gray-400 px-4 py-2">LATTINE CONSULT LTDA - EPP</td>
            <td className="border border-gray-400 px-4 py-2">21.045.717/0001-20</td>
            <td className="border border-gray-400 px-4 py-2">27/11/2025 a 27/11/2026</td>
            <td className="border border-gray-400 px-4 py-2">R$ 4.171,45</td>
            <td className="border border-gray-400 px-4 py-2">Em execução/Regular</td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">Contratação: 12 meses</td>
            <td className="border border-gray-400 px-4 py-2">SEM PUBLICAÇÃO/CONTRATAÇÃO POR ADESÃO</td>
          </tr>

          {/* 44 */}
          <tr>
            <td className="border border-gray-400 px-4 py-2">Nº 018/2025</td>
            <td className="border border-gray-400 px-4 py-2">1º TERMO ADITIVO</td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">Contratação de empresa especializada para prestação de serviços de Tecnologia da Informação, para o licenciamento de uma Solução Integrada de Gestão de Pessoas Recursos Humanos - RH)...</td>
            <td className="border border-gray-400 px-4 py-2"><a target="_blank" className="underline text-blue-600" href="/Pdf/administrativo/contratos/1º TERMO ADITIVO AO CONTRATO Nº 018_2024.pdf">Processo Administrativo nº 20251125012079/2025</a></td>
            <td className="border border-gray-400 px-4 py-2">RAROTEC</td>
            <td className="border border-gray-400 px-4 py-2">29.448.657/0001-06</td>
            <td className="border border-gray-400 px-4 py-2">24/05/2025 a 24/05/2026</td>
            <td className="border border-gray-400 px-4 py-2">R$ 417.947,71</td>
            <td className="border border-gray-400 px-4 py-2">Em execução/Regular</td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">Contratação: 12 meses</td>
            <td className="border border-gray-400 px-4 py-2">PUBLICADO NO DIÁRIO OFICIAL EM 09/08/2025</td>
          </tr>

          {/* 45 */}
          <tr className="bg-blue-100">
            <td className="border border-gray-400 px-4 py-2">Nº 069/2025</td>
            <td className="border border-gray-400 px-4 py-2">MÁTER</td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">Contratação de Empresa Especializada em Agente de Integração para a prestação de serviços técnicos e administrativos de gestão do Programa de Estágio…</td>
            <td className="border border-gray-400 px-4 py-2"><a target="_blank" className="underline text-blue-600" href="/Pdf/administrativo/contratos/CONTRATO Nº 069_2025 - SAD.pdf">PROCESSO ADMINISTRATIVO Nº 005/2025, DISPENSA Nº 004/2025 - JPRE</a></td>
            <td className="border border-gray-400 px-4 py-2">CIEE</td>
            <td className="border border-gray-400 px-4 py-2">10.998.292/0001-57</td>
            <td className="border border-gray-400 px-4 py-2">05/01/2026 A A 05/01/2027</td>
            <td className="border border-gray-400 px-4 py-2">R$ 61.800,00</td>
            <td className="border border-gray-400 px-4 py-2">Em execução/Regular</td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">Contratação: 12 meses</td>
            <td className="border border-gray-400 px-4 py-2">PUBLICADO NO DIÁRIO OFICIAL EM 15.01.26</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="flex flex-col items-center py-20 text-blue-900">
      <h1 className="text-5xl font-bold mb-4 uppercase">LICITAÇÕES</h1>
      <a
        className="text-blue-600 hover:underline text-xl"
        href="https://portaldatransparencia.jaboatao.pe.gov.br/licitacoes/"
      >
        CLIQUE AQUI
      </a>
    </div>
  </div>
  );
};

const Content = () => {
  return (
    <div className="flex flex-col">
      <Informacoes />
    </div>
  );
};

export default Content;