"use client";

import React from "react";

const Informacoes = () => (
  <div className="h-auto bg-gradient-to-b from-[#ffffff] via-[#dcecff] to-[#cbe1fc]">
    {/* Tabela completa */}
    <div className="container mx-auto p-6 text-center overflow-x-auto">
      <table className="w-full border-collapse border border-gray-400 text-left">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="border border-gray-400 px-4 py-2">CONTRATO</th>
            <th className="border border-gray-400 px-4 py-2">CONTRATANTE</th>
            <th className="border border-gray-400 px-4 py-2">OBJETO</th>
            <th className="border border-gray-400 px-4 py-2">PROCESSO</th>
            <th className="border border-gray-400 px-4 py-2">
              NOME/RAZÃO SOCIAL
            </th>
            <th className="border border-gray-400 px-4 py-2">VIGÊNCIA</th>
            <th className="border border-gray-400 px-4 py-2">VALOR R$</th>
            <th className="border border-gray-400 px-4 py-2">
              ESTÁGIO/SITUAÇÃO
            </th>
            <th className="border border-gray-400 px-4 py-2">TIPO/PROCESSO</th>
            <th className="border border-gray-400 px-4 py-2">OBS</th>
          </tr>
        </thead>
        <tbody>
          {/* 1 */}
          <tr className="bg-blue-100">
            <td className="border border-gray-400 px-4 py-2">
              Nº 027/2022 - SAD
            </td>
            <td className="border border-gray-400 px-4 py-2">
              INSTITUTO DE PREVIDÊNCIA DOS SERVIDORES PÚBLICOS - JABOATÃOPREV
            </td>
            <td className="border border-gray-400 px-4 py-2">
              Contratação da empresa especializada na PRESTAÇÃO DE SERVIÇOS DE
              LOCAÇÃO DE SOLUÇÃO INTEGRADA DE VIDEOMONITORAMENTO REMOTO E
              VIGILÂNCIA ELETRÔNICA
            </td>
            <td className="border border-gray-400 px-4 py-2">
              <a
                target="_blank"
                className="underline text-blue-600"
                href="https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/2o-TA-AO-CONTRATO-027-2022-BBC-ASSINADO.pdf"
              >
                DISPENSA DE LICITAÇÃO - CHAMAMENTO PÚBLICO - PROCESSO
                ADMINISTRATIVO Nº 004/2022, (CONTRATO Nº 027/2022 – SAD – 2º
                T.A.)
              </a>
            </td>
            <td className="border border-gray-400 px-4 py-2">
              M&amp;A Monitoramento Eletrônico - EIRELI EPP
            </td>
            <td className="border border-gray-400 px-4 py-2">
              18/07/2024 a 18/07/2025
            </td>
            <td className="border border-gray-400 px-4 py-2">R$ 7.205,61</td>
            <td className="border border-gray-400 px-4 py-2">
              Em execução/Regular
            </td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">
              Contratação: 12 meses
            </td>
          </tr>

          {/* 2 */}
          <tr>
            <td className="border border-gray-400 px-4 py-2">
              Nº 001/2021 - SAD
            </td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">
              Contratação de empresa especializada na terceirização de mão de
              obra para execução dos serviços de motorista, vigia diurno,
              copeira e auxiliar de serviços gerais.
            </td>
            <td className="border border-gray-400 px-4 py-2">
              <a
                target="_blank"
                className="underline text-blue-600"
                href="https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/8o-TERMO-ADITIVO-AO-CONTRATO-No-001.2021-SAD-assinado_assessor.pdf"
              >
                PROCESSO LICITATÓRIO N° 173.2020.PE.072.SAD.CPL4, PREGÃO
                ELETRÔNICO - CONTRATO Nº 001/2021 – SAD – 8º T.A.)
              </a>
            </td>
            <td className="border border-gray-400 px-4 py-2">
              ATIVA SERVIÇOS DE APOIO ADMINISTRATIVO EIRELI
            </td>
            <td className="border border-gray-400 px-4 py-2">
              07/01/2025 a 07/01/2026
            </td>
            <td className="border border-gray-400 px-4 py-2">R$ 239.428,92</td>
            <td className="border border-gray-400 px-4 py-2">
              Em execução/Regular
            </td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">
              Contratação: 12 meses
            </td>
          </tr>

          {/* 3 */}
          <tr className="bg-blue-100">
            <td className="border border-gray-400 px-4 py-2">
              Nº 070/2022 - SAD
            </td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">
              Contratação de empresa especializada em telecomunicações para
              provimento de serviços corporativos de internet.
            </td>
            <td className="border border-gray-400 px-4 py-2">
              <a
                target="_blank"
                className="underline text-blue-600"
                href="https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/1_TA_WORLDNET_assinado_.pdf"
              >
                PROCESSO ADMINISTRATIVO Nº 095.2021.PE.063SAD.CPL1- PREGÃO
                ELETRÔNICO Nº 063/2021 (CONTRATO Nº 070/2022 – SAD – 1º T.A.)
              </a>
            </td>
            <td className="border border-gray-400 px-4 py-2">
              WORLDNET TELECOM COMERCIO E SERVIÇOS DE TELECOMUNICAÇÕES LTDA -
              EPP
            </td>
            <td className="border border-gray-400 px-4 py-2">
              01/11/2024 a 01/11/2025
            </td>
            <td className="border border-gray-400 px-4 py-2">R$ 25.214,79</td>
            <td className="border border-gray-400 px-4 py-2">
              Em execução/Regular
            </td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">
              Contratação: 12 meses
            </td>
          </tr>

          {/* 4 */}
          <tr>
            <td className="border border-gray-400 px-4 py-2">
              Nº 027/2024 – SAD
            </td>
            <td className="border border-gray-400 px-4 py-2">
              SAD - INSTITUTO DE PREVIDÊNCIA DOS SERVIDORES PÚBLICOS -
              JABOATÃOPREV
            </td>
            <td className="border border-gray-400 px-4 py-2">
              Contratação de serviços de consultoria e assessoria técnica
              especializadas para apoiar o JaboatãoPREV no CRP (Certificado de
              Regularidade da Previdência)
            </td>
            <td className="border border-gray-400 px-4 py-2">
              <a
                target="_blank"
                className="underline text-blue-600"
                href="https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/1_TA_WORLDNET_assinado_.pdf"
              >
                CHAMAMENTO PÚBLICO - PROCESSO ADMINISTRATIVO 012/2024
              </a>
            </td>
            <td className="border border-gray-400 px-4 py-2">
              CGPM CONSULTORIA CONTROLE E CAPACITAÇÃO – ME
            </td>
            <td className="border border-gray-400 px-4 py-2">
              03/09/2024 a 03/09/2025
            </td>
            <td className="border border-gray-400 px-4 py-2">R$ 24.000,00</td>
            <td className="border border-gray-400 px-4 py-2">
              Em execução/Regular
            </td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">
              Contratação: 12 meses
            </td>
          </tr>

          {/* 5 */}
          <tr className="bg-blue-100">
            <td className="border border-gray-400 px-4 py-2">
              Nº 013/2024 - SAD
            </td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">
              Contratação DIRETA de empresa especializada na prestação de
              serviços de Customização e Manutenção do Sistema Integrado de
              Informações previdenciárias (SIPREV)...
            </td>
            <td className="border border-gray-400 px-4 py-2">
              <a
                target="_blank"
                className="underline text-blue-600"
                href="https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/CONTRATO-013-2024-SAD-3IT-ASSINADO.pdf"
              >
                DISPENSA DE LICITAÇÃO - CHAMAMENTO PÚBLICO -Processo
                administrativo nº 002/2023
              </a>
            </td>
            <td className="border border-gray-400 px-4 py-2">
              3IT CONSULTORIA
            </td>
            <td className="border border-gray-400 px-4 py-2">
              16/04/2024 a 16/04/2025
            </td>
            <td className="border border-gray-400 px-4 py-2">R$ 36.000,00</td>
            <td className="border border-gray-400 px-4 py-2">
              Em execução/Regular
            </td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">
              Contratação: 12 meses
            </td>
          </tr>

          {/* 6 */}
          <tr>
            <td className="border border-gray-400 px-4 py-2">
              Pregão Eletrônico Contrato nº 010/2020 SAD
            </td>
            <td className="border border-gray-400 px-4 py-2">
              INSTITUTO DE PREVIDÊNCIA DOS SERVIDORES PÚBLICOS – JABOATÃOPREV
            </td>
            <td className="border border-gray-400 px-4 py-2">
              Serviço De Agendamento De Passagens Aéreas Nacionais E
              Internacionais...
            </td>
            <td className="border border-gray-400 px-4 py-2">
              <a
                target="_blank"
                className="underline text-blue-600"
                href="https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/4BA_TERMO_ADITIVO_AO_CT_010.2020.assinado_assinado_assessor.pdf"
              >
                PROCESSO ADMINISTRATIVO Nº 003.2020.PREGÃO
                ELETRÔNICO.002.SDI.CPL6 - (CONTRATO Nº 010/2020 – SAD – 4º T.A.)
              </a>
            </td>
            <td className="border border-gray-400 px-4 py-2">
              BRASLUSO TURISMO LTDA EPP
            </td>
            <td className="border border-gray-400 px-4 py-2">
              24/08/2024 a 24/08/2025
            </td>
            <td className="border border-gray-400 px-4 py-2">R$ 30.000,00</td>
            <td className="border border-gray-400 px-4 py-2">
              Em execução/Regular
            </td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">
              Contratação: 12 meses
            </td>
          </tr>

          {/* 7 */}
          <tr className="bg-blue-100">
            <td className="border border-gray-400 px-4 py-2">
              Pregão Eletrônico Contrato nº 011/2019 SEGADM
            </td>
            <td className="border border-gray-400 px-4 py-2">SEGADM</td>
            <td className="border border-gray-400 px-4 py-2">
              Contratação De Empresa Especializada Na Prestação De Serviço
              Telefônico Fixo Comutado - Stfc (Fixo-Fixo E Fixo-Móvel), ...
            </td>
            <td className="border border-gray-400 px-4 py-2">
              <a>
                Processo Administrativo n.º 017.2019.AD.015.SEGAD.CPL3- PREGÃO
                PRESENCIAL Nº 162/2018-(CONTRATO Nº 011/2019 - SEGADM - 7º T.A.)
              </a>
            </td>
            <td className="border border-gray-400 px-4 py-2">
              TELEMAR NORTE LESTE S/A
            </td>
            <td className="border border-gray-400 px-4 py-2">
              01/07/2024 a 01/07/2025
            </td>
            <td className="border border-gray-400 px-4 py-2">R$ 3.564,00</td>
            <td className="border border-gray-400 px-4 py-2">
              Em execução/Regular
            </td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">
              Contratação: Acréscimo de 06 meses
            </td>
          </tr>

          {/* 8 */}
          <tr>
            <td className="border border-gray-400 px-4 py-2">
              Contratação Direta
            </td>
            <td className="border border-gray-400 px-4 py-2">
              INSTITUTO DE PREVIDÊNCIA DOS SERVIDORES PÚBLICOS - JABOATÃOPREV
            </td>
            <td className="border border-gray-400 px-4 py-2">
              Contratação de seguradora especializada em prestação de serviços
              de seguros patrimoniais
            </td>
            <td className="border border-gray-400 px-4 py-2">
              <a>Contratação Direta via Empenho</a>
            </td>
            <td className="border border-gray-400 px-4 py-2">HDI SEGUROS</td>
            <td className="border border-gray-400 px-4 py-2">
              02/12/2024 a 02/12/2025
            </td>
            <td className="border border-gray-400 px-4 py-2">R$ 1.330,78</td>
            <td className="border border-gray-400 px-4 py-2">
              Em execução/Regular
            </td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">
              Contínuo - 30//11/2023 a 30/11/2024
            </td>
          </tr>

          {/* 9 */}
          <tr className="bg-blue-100">
            <td className="border border-gray-400 px-4 py-2">Nº 073/2022</td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">
              Contratação de empresa especializada na prestação de serviços de
              avaliação atuarial...
            </td>
            <td className="border border-gray-400 px-4 py-2">
              <a
                target="_blank"
                className="underline text-blue-600"
                href="https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/CONTRATO_ACTUARIAL___JABOATAO_PREV_202212271553113934140-assinado_assessor.pdf"
              >
                PROCESSO ADM/CHAMAMENTO PÚBLICO Nº 073/2022 (CONTRATO Nº
                073/2022 - SAD)
              </a>
            </td>
            <td className="border border-gray-400 px-4 py-2">
              ACTUARIAL - ASSESSORIA E CONSULTORIA ATUARIAL LTDA
            </td>
            <td className="border border-gray-400 px-4 py-2">
              04/01/2025 A 04/01/2026
            </td>
            <td className="border border-gray-400 px-4 py-2">R$ 21.600,00</td>
            <td className="border border-gray-400 px-4 py-2">
              Em execução/Regular
            </td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">
              Contratação: 12 meses
            </td>
          </tr>

          {/* 10 */}
          <tr>
            <td className="border border-gray-400 px-4 py-2">
              Nº 013/2021 – SAD
            </td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">
              Contratação de empresa especializada no fornecimento de licença de
              uso de software de análise financeira...
            </td>
            <td className="border border-gray-400 px-4 py-2">
              <a
                target="_blank"
                className="underline text-blue-600"
                href="https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/3oAditivo_Paramita_Jaboataoprev.assinado_assinado_assessoer.pdf"
              >
                PROCESSO ADM Nº 126.2021.INEX.006.SAD.CPL1 (CONTRATO Nº 013/2021
                SAD - 3º TA)
              </a>
            </td>
            <td className="border border-gray-400 px-4 py-2">
              PARAMITA TECNOLOGIA COSULTORIA FINANCEIRA LTDA
            </td>
            <td className="border border-gray-400 px-4 py-2">
              21/09/2024 a 21/09/2025
            </td>
            <td className="border border-gray-400 px-4 py-2">R$ 25.816,32</td>
            <td className="border border-gray-400 px-4 py-2">
              Em execução/Regular
            </td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">
              Contratação: 12 meses
            </td>
          </tr>

          {/* 11 */}
          <tr className="bg-blue-100">
            <td className="border border-gray-400 px-4 py-2">
              Nº 007003/2022.P
            </td>
            <td className="border border-gray-400 px-4 py-2">JABPREV</td>
            <td className="border border-gray-400 px-4 py-2">
              Prestação de serviços estratégicos de solução de tecnologia da
              informação (TI) pela DATAPREV - PARA COMPENSAÇÃO PREVIDENCIÁRIA -
              COMPREV
            </td>
            <td className="border border-gray-400 px-4 py-2">
              <a
                target="_blank"
                className="underline text-blue-600"
                href="https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/CONTRATO-No-007003-2022.P-DATAPREV-COMPREV-ASSINADO.pdf"
              >
                PROCESSO ADMINISTRATIVO Nº. 217.2021.INEX.029.SAD.CPL4
              </a>
            </td>
            <td className="border border-gray-400 px-4 py-2">DATAPREV</td>
            <td className="border border-gray-400 px-4 py-2">
              20/01/2022 a 20/01/2027
            </td>
            <td className="border border-gray-400 px-4 py-2">
              R$ 33.600,00 (12 MESES)
            </td>
            <td className="border border-gray-400 px-4 py-2">
              Em execução/Regular
            </td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">
              Contratação: 60 meses
            </td>
          </tr>

          {/* 12 */}
          <tr>
            <td className="border border-gray-400 px-4 py-2">
              nº 00233/2024 (LATTINE e JABOATÃOPREV)
            </td>
            <td className="border border-gray-400 px-4 py-2">
              LATTINE e JABOATÃOPREV
            </td>
            <td className="border border-gray-400 px-4 py-2">
              Aquisição de subscrições dos softwares Microsoft 365 Business
              Standard
            </td>
            <td className="border border-gray-400 px-4 py-2">
              <a
                target="_blank"
                className="underline text-blue-600"
                href="https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/CONTRATO-No-00233-2024-JABOATAOPREV-X-LATTINE.assinado.pdf"
              >
                CHAMAMENTO PÚBLICO/PROCESSO ADM Nº 013/2024
              </a>
            </td>
            <td className="border border-gray-400 px-4 py-2">
              LATTINE CONSULT LTDA – EPP
            </td>
            <td className="border border-gray-400 px-4 py-2">
              16/10/2024 a 16/10/2025
            </td>
            <td className="border border-gray-400 px-4 py-2">R$ 3.900,55</td>
            <td className="border border-gray-400 px-4 py-2">
              Em execução/Regular
            </td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">
              Contratação: 12 meses
            </td>
          </tr>

          {/* 13 */}
          <tr className="bg-blue-100">
            <td className="border border-gray-400 px-4 py-2">
              Adesão a ARP 069/2022
            </td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">
              Locação de veículo sem motorista e sem combustível
            </td>
            <td className="border border-gray-400 px-4 py-2">
              <a
                target="_blank"
                className="underline text-blue-600"
                href="https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/4o-TERMO-ADITIVO-AO-CONTRATO-No-004-2023-SAD.pdf"
              >
                ATA DE REGISTRO DE PREÇOS Nº 069/2022 SAD (PROCESSO Nº
                081.2022.PE.042.SAD.CPL4) (CONTRATO Nº 004/2023 – SAD – 2º T.A.)
              </a>
            </td>
            <td className="border border-gray-400 px-4 py-2">
              H. LIRA &amp; CIA LTDA
            </td>
            <td className="border border-gray-400 px-4 py-2">
              09/02/2025 a 09/02/2026
            </td>
            <td className="border border-gray-400 px-4 py-2">R$ 29.756,76</td>
            <td className="border border-gray-400 px-4 py-2">
              Em execução/Regular
            </td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">
              Contratação: 12 meses
            </td>
          </tr>

          {/* 14 */}
          <tr>
            <td className="border border-gray-400 px-4 py-2">
              Adesão a ARP - 003/2023
            </td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">
              Aquisição de microcomputadores
            </td>
            <td className="border border-gray-400 px-4 py-2">
              <a
                target="_blank"
                className="underline text-blue-600"
                href="https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/CONTRATO_FATOR_X_TECNOLOGIA__SAD_202303141146167352380___16.03_ASSINADO_assessor.pdf"
              >
                ATA DE REGISTRO DE PREÇOS Nº 003/2023 SAD (PROCESSO Nº
                119.2022.PE.053.SAD.CPL4) (CONTRATO Nº 014/2023 - SAD)
              </a>
            </td>
            <td className="border border-gray-400 px-4 py-2">
              FATOR X TECNOLOGIA DIGITAL LTDA
            </td>
            <td className="border border-gray-400 px-4 py-2">
              16/03/2023 a 16/03/2026
            </td>
            <td className="border border-gray-400 px-4 py-2">R$ 64.621,88</td>
            <td className="border border-gray-400 px-4 py-2">
              Em execução/Regular
            </td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">
              Contratação: 36 meses
            </td>
          </tr>

          {/* 15 */}
          <tr className="bg-blue-100">
            <td className="border border-gray-400 px-4 py-2">
              Adesão a ARP - 004/2023
            </td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">
              Aquisição de microcomputadores
            </td>
            <td className="border border-gray-400 px-4 py-2">
              <a
                target="_blank"
                className="underline text-blue-600"
                href="https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/CONTRATO_INFOG_-_COMPUTADOR_202303170854596651497_-_Assinado_assinado.pdf"
              >
                ATA DE REGISTRO DE PREÇOS Nº 004/2023 SAD (PROCESSO Nº
                184.2022.PE.090.SAD.CPL3) (CONTRATO Nº 015/2023 - SAD)
              </a>
            </td>
            <td className="border border-gray-400 px-4 py-2">INFOG LTDA</td>
            <td className="border border-gray-400 px-4 py-2">
              20/03/2023 a 20/03/2026
            </td>
            <td className="border border-gray-400 px-4 py-2">R$ 4.544,00</td>
            <td className="border border-gray-400 px-4 py-2">
              Em execução/Regular
            </td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">
              Contratação: 36 meses
            </td>
          </tr>

          {/* 16 */}
          <tr>
            <td className="border border-gray-400 px-4 py-2">
              Adesão a ARP – 006/2023
            </td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">
              Locação de impressoras
            </td>
            <td className="border border-gray-400 px-4 py-2">
              <a
                target="_blank"
                className="underline text-blue-600"
                href="https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/CONTRATO_MAQ-LAREM_-_IMPRESSORAS_-_JABOAT_O_PREV_assinado_assinado_assinado.pdf"
              >
                ATA DE REGISTRO DE PREÇOS Nº SAD (PROCESSO Nº
                166.2022.PE.080.SAD.CPL4) (CONTRATO Nº 020/2023 - SAD)
              </a>
            </td>
            <td className="border border-gray-400 px-4 py-2">MAQ-LAREM</td>
            <td className="border border-gray-400 px-4 py-2">
              02/06/2024 a 02/06/2025
            </td>
            <td className="border border-gray-400 px-4 py-2">R$ 8.974,80</td>
            <td className="border border-gray-400 px-4 py-2">
              Em execução/Regular
            </td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">
              Contratação: 12 meses
            </td>
          </tr>

          {/* 17 */}
          <tr className="bg-blue-100">
            <td className="border border-gray-400 px-4 py-2">Nº 027/2023</td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">
              Contratação de empresa especializada na prestação de Serviços de
              Auditoria de Certificação Inicial – Nível I e II
            </td>
            <td className="border border-gray-400 px-4 py-2">
              <a
                target="_blank"
                className="underline text-blue-600"
                href="https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/CONTRATO_INSTITUTO_DE_CERTIFICA__O_-_DISP_-_NOVA_LEI_202307141007526400584_ASSINADO2_assessoria-juridica.pdf"
              >
                CHAMAMENTO PÚBLICO – PROCESSO ADM. Nº 004/2023
              </a>
            </td>
            <td className="border border-gray-400 px-4 py-2">
              INSTITUTO DE CERTIFICAÇÃO QUALIDADE BRASIL - IQC
            </td>
            <td className="border border-gray-400 px-4 py-2">
              14/07/2023 a 14/07/2026
            </td>
            <td className="border border-gray-400 px-4 py-2">R$ 11.325,00</td>
            <td className="border border-gray-400 px-4 py-2">
              Em execução/Regular
            </td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">
              Contratação: 36 meses
            </td>
          </tr>

          {/* 18 */}
          <tr>
            <td className="border border-gray-400 px-4 py-2">Nº 025/2023</td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">
              Contratação de empresa especializada na prestação de Serviços de
              Apoio Administrativo
            </td>
            <td className="border border-gray-400 px-4 py-2">
              &gt;{" "}
              <a
                target="_blank"
                className="underline text-blue-600"
                href="https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/2BA_TERMO_ADITIVO_AO_CONTRATO_NBA_025.2023_29_assinado.pdf"
              >
                ADESÃO A ATA – Nº 002/2023
              </a>
            </td>
            <td className="border border-gray-400 px-4 py-2">
              TOPPUS SERVIÇOS TERCEIRIZADOS LTDA
            </td>
            <td className="border border-gray-400 px-4 py-2">
              17/07/2024 a 17/07/2025
            </td>
            <td className="border border-gray-400 px-4 py-2">R$ 101.539,44</td>
            <td className="border border-gray-400 px-4 py-2">
              Em execução/Regular
            </td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">
              Contratação: 12 meses
            </td>
          </tr>

          {/* 19 */}
          <tr className="bg-blue-100">
            <td className="border border-gray-400 px-4 py-2">
              Nº 003/2024 - SAD
            </td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">
              Contratação de Empresa Especializada no fornecimento e instalação
              de Película de proteção solar SMOKE Invertida 5...
            </td>
            <td className="border border-gray-400 px-4 py-2">
              &gt;{" "}
              <a
                target="_blank"
                className="underline text-blue-600"
                href="https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/instrumentocontratual_assinado1-luci.pdf"
              >
                DISPENSA DE LICITAÇÃO - PROCESSO ADM. Nº 002/2024
              </a>
            </td>
            <td className="border border-gray-400 px-4 py-2">
              FIX FILM PELÍCULA DE CONTROLE SOLAR E VISUAL
            </td>
            <td className="border border-gray-400 px-4 py-2">
              23/02/2024 a 23/03/2029
            </td>
            <td className="border border-gray-400 px-4 py-2">R$ 3.910,00</td>
            <td className="border border-gray-400 px-4 py-2">
              Em execução/Regular
            </td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">
              Contratação: 12 meses
            </td>
          </tr>

          {/* 20 */}
          <tr>
            <td className="border border-gray-400 px-4 py-2">
              Nº 004/2024 - SAD
            </td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">
              Contratação de empresa especializada para prestação de serviço e
              controle de pragas e vetores...
            </td>
            <td className="border border-gray-400 px-4 py-2">
              &gt;{" "}
              <a
                target="_blank"
                className="underline text-blue-600"
                href="https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/InstrumentoContratual_assinado28luci29_assinado.pdf"
              >
                DIPENSA DE LICITAÇÃO - PROCESSO ADM. Nº 011/2023
              </a>
            </td>
            <td className="border border-gray-400 px-4 py-2">
              SANEL Saúde Ambiental Nordeste LTDAL
            </td>
            <td className="border border-gray-400 px-4 py-2">
              27/02/2025 a 27/02/2026
            </td>
            <td className="border border-gray-400 px-4 py-2">R$ 1252,71</td>
            <td className="border border-gray-400 px-4 py-2">
              Em execução/Regular
            </td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">
              Contratação: 12 meses
            </td>
          </tr>

          {/* 21 */}
          <tr className="bg-blue-100">
            <td className="border border-gray-400 px-4 py-2">
              Nº 007/2024 - SAD
            </td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">
              Contratação de empresa especializada no fornecimento de 01 (uma)
              máquina fragmentadora...
            </td>
            <td className="border border-gray-400 px-4 py-2">
              <a
                target="_blank"
                className="underline text-blue-600"
                href="https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/ContratoTablet.assinado.luci_.pdf"
              >
                DISPENSA DE LICITAÇÃO – PROCESSO ADM. Nº 001/2024
              </a>
            </td>
            <td className="border border-gray-400 px-4 py-2">
              CIL COMÉRCIO DE INFORMÁTICA LTDA - NAGEM
            </td>
            <td className="border border-gray-400 px-4 py-2">
              07/03/2024 a 07/03/2025
            </td>
            <td className="border border-gray-400 px-4 py-2">R$ 1.199,00</td>
            <td className="border border-gray-400 px-4 py-2">
              Em execução/Regular
            </td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">
              Contratação: 12 meses
            </td>
          </tr>

          {/* 22 */}
          <tr>
            <td className="border border-gray-400 px-4 py-2">
              Contrato nº 004/2024-SAD
            </td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">
              Contratação de empresa especializada para o fornecimento de 01
              (uma) cadeira giratória presidente...
            </td>
            <td className="border border-gray-400 px-4 py-2">
              <a
                target="_blank"
                className="underline text-blue-600"
                href="https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/Contrato_Jaboatao_Prev__assinado-1.pdf"
              >
                DISPENSA DE LICITAÇÃO – PROCESSO ADM. Nº 004/2024
              </a>
            </td>
            <td className="border border-gray-400 px-4 py-2">
              NETO COMÉRCIO DE MÓVEIS LTDA
            </td>
            <td className="border border-gray-400 px-4 py-2">
              04/03/2024 a 04/03/2025
            </td>
            <td className="border border-gray-400 px-4 py-2">R$ 2.005,00</td>
            <td className="border border-gray-400 px-4 py-2">
              Em execução/Regular
            </td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">Aquisição</td>
          </tr>

          {/* 23 */}
          <tr className="bg-blue-100">
            <td className="border border-gray-400 px-4 py-2">
              Nº 008/2024-SAD
            </td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">
              Contratação de empresa especializada na prestação de serviço de a
              fabricação, montagem e instalação de 01 (um) toldo...
            </td>
            <td className="border border-gray-400 px-4 py-2">
              <a
                target="_blank"
                className="underline text-blue-600"
                href="https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/InstrumentoContratual_TOLDO_ASSINADO.luci_assinado_assessor.pdf"
              >
                DISPENSA DE LICITAÇÃO – PROCESSO ADM. Nº 006/2024
              </a>
            </td>
            <td className="border border-gray-400 px-4 py-2">
              SOCIEDADE PERNAMBUCANA DE TOLDOS E COBERTURAS EIRELI
            </td>
            <td className="border border-gray-400 px-4 py-2">
              11/03/2024 a 11/03/2025
            </td>
            <td className="border border-gray-400 px-4 py-2">R$ 25.500,00</td>
            <td className="border border-gray-400 px-4 py-2">
              Em execução/Regular
            </td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">
              Contratação: 12 meses
            </td>
          </tr>

          {/* 24 */}
          <tr>
            <td className="border border-gray-400 px-4 py-2">
              Nº 017/2024-SAD
            </td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">
              Contratação de empresa especializada na prestação de serviço de
              fornecimento e instalação de aparelhos de ar condicionado...
            </td>
            <td className="border border-gray-400 px-4 py-2">
              <a
                target="_blank"
                className="underline text-blue-600"
                href="https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/DocPreview_assinado_assinado_assinado.pdf"
              >
                DISPENSA DE LICITAÇÃO – PROCESSO ADM. Nº 003/2024
              </a>
            </td>
            <td className="border border-gray-400 px-4 py-2">
              SOUZA FRIO MANUTENÇÃO E COMÉRCIO DE REFRIGERADORES E ELÉTRICA LTDA
            </td>
            <td className="border border-gray-400 px-4 py-2">
              16/05/2024 a 16/05/2025
            </td>
            <td className="border border-gray-400 px-4 py-2">R$ 19.000,00</td>
            <td className="border border-gray-400 px-4 py-2">
              Em execução/Regular
            </td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">
              Contratação: 12 meses
            </td>
          </tr>

          {/* 25 */}
          <tr className="bg-blue-100">
            <td className="border border-gray-400 px-4 py-2">
              Nº 025/2024-SAD
            </td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">
              Contratação de empresa especializada de Locação de Aparelhos de Ar
              Condicionado...
            </td>
            <td className="border border-gray-400 px-4 py-2">
              &gt;{" "}
              <a
                target="_blank"
                className="underline text-blue-600"
                href="https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/JABOATAO_-_PREV.assinado_assinado.pdf"
              >
                Ata de Registro de Preços n° 004/2024 - ARPCorp, oriunda do
                Processo Administrativo nº 028.2024.PE.012.EPC.SAD
              </a>
            </td>
            <td className="border border-gray-400 px-4 py-2">
              COLORTEL LOCAÇÃO E ADMINISTRAÇÃO DE BENS PRÓPRIOS LTDA
            </td>
            <td className="border border-gray-400 px-4 py-2">
              08/08/2024 a 08/08/2025
            </td>
            <td className="border border-gray-400 px-4 py-2">R$ 40.284,00</td>
            <td className="border border-gray-400 px-4 py-2">
              Em execução/Regular
            </td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">
              Contratação: 12 meses
            </td>
          </tr>

          {/* 26 */}
          <tr>
            <td className="border border-gray-400 px-4 py-2">
              Nº 034/2024-SAD
            </td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">
              Prestação De Serviços Contínuos De Gerenciamento De Frota De
              Veículos...
            </td>
            <td className="border border-gray-400 px-4 py-2">
              <a>
                Ata de Registro de Preços n° 004/2024 - ARPCorp, oriunda do
                Processo Administrativo nº 009.2024.PE.007EPC.SAD.
              </a>
            </td>
            <td className="border border-gray-400 px-4 py-2">
              GREEN CARD S/A REFEIÇÕES COMÉRCIO E SERVIÇOS
            </td>
            <td className="border border-gray-400 px-4 py-2">
              23/10/2024 a 23/10/2025
            </td>
            <td className="border border-gray-400 px-4 py-2">R$ 5.210,00</td>
            <td className="border border-gray-400 px-4 py-2">
              Em execução/Regular
            </td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">
              Contratação: 12 meses
            </td>
          </tr>

          {/* 27 */}
          <tr className="bg-blue-100">
            <td className="border border-gray-400 px-4 py-2">
              Nº 036/2024-SAD
            </td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">
              PAPEL HIGIÊNICO
            </td>
            <td className="border border-gray-400 px-4 py-2">
              <a
                target="_blank"
                className="underline text-blue-600"
                href="https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/Contrato_nBA_036-2024assinadoluci_assinado_assesso.pdf"
              >
                Ata de Registro de Preços n° 004/2024 - ARPCorp, oriunda do
                Processo Administrativo nº 057.2024.PE.018.EPC-SAD
              </a>
            </td>
            <td className="border border-gray-400 px-4 py-2">
              SUPRA DISTRIBUIDORA DE MATERIAIS HOSPITALARES LTDA
            </td>
            <td className="border border-gray-400 px-4 py-2">
              21/11/2024 a 21/11/2025
            </td>
            <td className="border border-gray-400 px-4 py-2">R$ 808,00</td>
            <td className="border border-gray-400 px-4 py-2">
              Em execução/Regular
            </td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">
              Contratação: 12 meses
            </td>
          </tr>

          {/* 28 */}
          <tr>
            <td className="border border-gray-400 px-4 py-2">
              Nº 037/2024-SAD
            </td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">
              MATERIAL DE LIMPEZA
            </td>
            <td className="border border-gray-400 px-4 py-2">
              <a
                target="_blank"
                className="underline text-blue-600"
                href="https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/Contrato_nBA_037-2024_assinado.pdf"
              >
                Ata de Registro de Preços n° 004/2024 - ARPCorp, oriunda do
                Processo Administrativo nº 014.2024.PE.008.EPC-SAD
              </a>
            </td>
            <td className="border border-gray-400 px-4 py-2">
              SUPRA DISTRIBUIDORA DE MATERIAIS HOSPITALARES LTDA
            </td>
            <td className="border border-gray-400 px-4 py-2">
              26/11/2024 a 26/11/2025
            </td>
            <td className="border border-gray-400 px-4 py-2">R$ 1.910,15</td>
            <td className="border border-gray-400 px-4 py-2">
              Em execução/Regular
            </td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">
              Contratação: 12 meses
            </td>
          </tr>

          {/* 29 */}
          <tr className="bg-blue-100">
            <td className="border border-gray-400 px-4 py-2">
              Nº 038/2024-SAD
            </td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">MÓVEIS</td>
            <td className="border border-gray-400 px-4 py-2">
              <a
                target="_blank"
                className="underline text-blue-600"
                href="https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/Contrato_n038-2024_-_SAD_assinado_assessor.pdf"
              >
                Ata de Registro de Preços n° 004/2024 - ARPCorp, oriunda do
                Processo Administrativo nº Nº014/2024
              </a>
            </td>
            <td className="border border-gray-400 px-4 py-2">
              MARKET - COMERCIO DE MERCADORIAS EM GERAL LTDA
            </td>
            <td className="border border-gray-400 px-4 py-2">
              27/11/2024 a 27/11/2025
            </td>
            <td className="border border-gray-400 px-4 py-2">R$ 14.022,45</td>
            <td className="border border-gray-400 px-4 py-2">
              Em execução/Regular
            </td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">
              Contratação: 12 meses
            </td>
          </tr>

          {/* 30 */}
          <tr className="bg-blue-100">
            <td className="border border-gray-400 px-4 py-2">
              Nº 028/2024-SAD
            </td>
            <td className="border border-gray-400 px-4 py-2">SAD</td>
            <td className="border border-gray-400 px-4 py-2">ÁGUA MINERAL</td>
            <td className="border border-gray-400 px-4 py-2">
              <a
                target="_blank"
                className="underline text-blue-600"
                href="https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/Contratual_028-2024-SAD.assinado.luci_assinado_assesso.pdf"
              >
                Ata de Registro de Preços n° 004/2024 - ARPCorp, oriunda do
                Processo Administrativo nº Nº 068.2024.PE.019.EPC-SAD
              </a>
            </td>
            <td className="border border-gray-400 px-4 py-2">
              MACHADO EMPREENDIMENTOS
            </td>
            <td className="border border-gray-400 px-4 py-2">
              27/08/2024 a 27/09/2025
            </td>
            <td className="border border-gray-400 px-4 py-2">R$ 3.948,75</td>
            <td className="border border-gray-400 px-4 py-2">
              Em execução/Regular
            </td>
            <td className="border border-gray-400 px-4 py-2">ADM</td>
            <td className="border border-gray-400 px-4 py-2">
              Contratação: 12 meses
            </td>
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

const Content = () => {
  return (
    <div className="flex flex-col">
      <Informacoes />
    </div>
  );
};

export default Content;
