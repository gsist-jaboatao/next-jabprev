import Image from "next/image";
import Link from "next/link";
import React from "react";

// MIDDLE LINKS DATA
interface Social {
  imgsrc: string;
  href: string;
}

const socialLinks: Social[] = [
  { imgsrc: "/images/Footer/x.svg", href: "https://x.com/jaboataoonline" },
  {
    imgsrc: "/images/Footer/facebook.svg",
    href: "https://www.facebook.com/PrefeituradoJaboatao",
  },
  {
    imgsrc: "/images/Footer/insta.svg",
    href: "https://www.instagram.com/prefjaboatao/",
  },
  {
    imgsrc: "/images/Footer/youtube.svg",
    href: "https://www.youtube.com/user/prefeiturajaboatao/videos",
  },
];

const Footer = () => {
  return (
    <div className="relative w-full">
      {/* TOPO RODAPE AMALERO */}
      <div className="flex justify-center items-center">
        <Image
          src="/images/Rodape/topo-rodape.png"
          alt="logo-image"
          width={1500}
          height={50}
          style={{ width: "100%", height: "auto" }}
          priority // <--- Adiciona prioridade de carregamento
        />
      </div>

      {/* Fundo azul */}
      <div className="bg-[#002D9E] text-white w-full">
        {/* Grid principal */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* COLUNA 1 */}
            <div className="text-left border-l-2 border-white pl-8 border-dotted">
              <h1 className="text-lg font-bold">MAPA DO SITE</h1>
              <div className="border-b border-b-white mb-2 mr-[320px]" />
              <div className="text-lightblue text-sm font-normal leading-6">
                <ul className="text-[14px] dark:text-white font-normal">
                  <li>
                    <Link
                      href="https://jaboatao.pe.gov.br/mapa-da-estrategia/"
                      className="hover:underline"
                      target="_blank"
                    >
                      MAPA DA ESTRATÉGIA
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://portaldatransparencia.jaboatao.pe.gov.br/"
                      className="hover:underline"
                      target="_blank"
                    >
                      PORTAL DA TRANSPARÊNCIA
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://portaldatransparencia.jaboatao.pe.gov.br/estrutura-organizacional/"
                      className="hover:underline"
                      target="_blank"
                    >
                      ESTRUTURA ORGANIZACIONAL
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://jaboatao.pe.gov.br/galeria-de-elogios/"
                      className="hover:underline"
                      target="_blank"
                    >
                      GALERIA DE ELOGIOS
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://jaboatao.pe.gov.br/servicos-para-o-cidadao/"
                      className="hover:underline"
                      target="_blank"
                    >
                      CIDADÃO
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://jaboatao.pe.gov.br/carta-de-servicos/"
                      className="hover:underline"
                      target="_blank"
                    >
                      CARTAS DE SERVIÇO
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://jaboatao.pe.gov.br/servicos-para-a-empresa/"
                      className="hover:underline"
                      target="_blank"
                    >
                      EMPRESA
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://servidor.jaboatao.pe.gov.br/"
                      className="hover:underline"
                      target="_blank"
                    >
                      SERVIDOR
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://jaboatao.pe.gov.br/servicos-para-o-turista/"
                      className="hover:underline"
                      target="_blank"
                    >
                      TURISTA
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://jaboatao.pe.gov.br/ppp-saude/"
                      className="hover:underline"
                      target="_blank"
                    >
                      PPP-SAUDE
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://jaboatao.pe.gov.br/mapa-das-escolas/"
                      className="hover:underline"
                      target="_blank"
                    >
                      MAPA DAS ESCOLAS MUNICIPAIS
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://jaboatao.pe.gov.br/mapas-das-unidades-de-saude-por-regional/"
                      className="hover:underline"
                      target="_blank"
                    >
                      MAPA DAS UNIDADES DE SAÚDE POR REGIONAIS
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://jaboatao.pe.gov.br/mapa-dos-bares-e-restaurantes/"
                      className="hover:underline"
                      target="_blank"
                    >
                      MAPA DOS BARES E RESTAURANTES
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://jaboatao.pe.gov.br/mapa-mercados-publicos/"
                      className="hover:underline"
                      target="_blank"
                    >
                      MAPA DOS MERCADOS PÚBLICOS
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://jaboatao.pe.gov.br/mapa-das-unidades-do-cras-e-creas-municipais/"
                      className="hover:underline"
                      target="_blank"
                    >
                      MAPA DAS UNIDADES DO CRAS E CREAS MUNICIPAIS
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* COLUNA 2 */}
            <div className="text-left border-l-2 border-white pl-8 border-dotted">
              <h1 className="text-lg font-bold">SITES RELACIONADOS</h1>
              <div className="border-b border-b-white mb-2 mr-[320px]"></div>
              <div className="text-lightblue text-sm font-normal leading-6">
                <ul className="text-[14px] dark:text-white font-normal">
                  <li>
                    <Link
                      href="https://amorpor.jaboatao.pe.gov.br/"
                      className="hover:underline"
                      target="_blank"
                    >
                      AMOR JABOATÃO
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://bemestaranimal.jaboatao.pe.gov.br/"
                      className="hover:underline"
                      target="_blank"
                    >
                      BEM ESTAR ANIMAL
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://conselhodeusuarios.jaboatao.pe.gov.br/"
                      className="hover:underline"
                      target="_blank"
                    >
                      CONSELHO DE USUÁRIOS
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://deolhonaconsulta.jaboatao.pe.gov.br/"
                      className="hover:underline"
                      target="_blank"
                    >
                      DE OLHO NA CONSULTA
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://diariooficial.jaboatao.pe.gov.br/"
                      className="hover:underline"
                      target="_blank"
                    >
                      DIÁRIO OFICIAL
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://educacao.jaboatao.pe.gov.br/"
                      className="hover:underline"
                      target="_blank"
                    >
                      EDUCAÇÃO
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://economiacriativa.jaboatao.pe.gov.br/"
                      className="hover:underline"
                      target="_blank"
                    >
                      ECONOMIA CRIATIVA
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://emlume.com.br/"
                      className="hover:underline"
                      target="_blank"
                    >
                      EMLUME
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://estacaobemestar.jaboatao.pe.gov.br/"
                      className="hover:underline"
                      target="_blank"
                    >
                      ESTAÇÃO BEM ESTAR
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://jaboataoemacao.jaboatao.pe.gov.br/"
                      className="hover:underline"
                      target="_blank"
                    >
                      JABOATÃO EM AÇÃO
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://backendjaboataoprev.jaboatao.pe.gov.br/"
                      className="hover:underline"
                      target="_blank"
                    >
                      JABOATAOPREV
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://semam.jaboatao.pe.gov.br/"
                      className="hover:underline"
                      target="_blank"
                    >
                      MEIO AMBIENTE
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://jaboatao.pe.gov.br/"
                      className="hover:underline"
                      target="_blank"
                    >
                      OFICIAL
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://ouvidoria.jaboatao.pe.gov.br/"
                      className="hover:underline"
                      target="_blank"
                    >
                      OUVIDORIA
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.tinus.com.br/csp/JABOATAO/portal/index.csp"
                      className="hover:underline"
                      target="_blank"
                    >
                      PORTAL DO CONTRIBUINTE
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://portaldatransparencia.jaboatao.pe.gov.br/"
                      className="hover:underline"
                      target="_blank"
                    >
                      PORTAL DA TRANSPARÊNCIA
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://procon.jaboatao.pe.gov.br/"
                      className="hover:underline"
                      target="_blank"
                    >
                      PROCON
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://servidor.jaboatao.pe.gov.br/"
                      className="hover:underline"
                      target="_blank"
                    >
                      SERVIDOR
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://trabalho.jaboatao.pe.gov.br/"
                      className="hover:underline"
                      target="_blank"
                    >
                      TRABALHO
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://viver.jaboatao.pe.gov.br/"
                      className="hover:underline"
                      target="_blank"
                    >
                      VIVER
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* COLUNA 3 */}
            <div className="text-left border-l-2 border-white pl-8 border-dotted">
              <div>
                <h1 className="text-lg font-bold">OUVIDORIA</h1>
                <div className="border-b border-b-white mb-2 mr-[320px]"></div>
                <div className="text-lightblue text-sm font-normal leading-6 mb-4">
                  <p className="text-[14px] dark:text-white font-normal">
                    OUVIDORIA GERAL: 0800 081 8999 / (81) 9.9422-5177
                    <br /> ATENDIMENTO DE SEGUNDA A SEXTA-FEIRA, DAS 8H ÀS 14H
                    <br /> E-MAIL: ouvidoria@jaboatao.pe.gov.br
                  </p>
                </div>
              </div>

              <div>
                <h1 className="text-lg font-bold">ACESSIBILIDADE</h1>
                <div className="text-lightblue text-sm font-normal leading-6 mb-4">
                  <p className="text-[14px] dark:text-white font-normal">
                    <Link
                      href="https://portaldatransparencia.jaboatao.pe.gov.br/informacoes-de-acessibilidade/"
                      className="hover:underline"
                      target="_blank"
                    >
                      INFORMAÇÕES
                    </Link>
                  </p>
                </div>
              </div>

              <div>
                <h1 className="text-lg font-bold">NAVEGABILIDADE</h1>
                <div className="text-lightblue text-sm font-normal leading-6 mb-4">
                  <p className="text-[14px] dark:text-white font-normal">
                    <Link
                      href="https://jaboatao.pe.gov.br/glossario/"
                      className="hover:underline"
                      target="_blank"
                    >
                      GLOSSÁRIO
                    </Link>
                  </p>
                </div>
              </div>

              <div>
                <h1 className="text-lg font-bold">ACOMPANHE-NOS</h1>
                <div className="flex gap-4">
                  {socialLinks.map((items, i) => (
                    <Link href={items.href} key={i}>
                      <Image
                        src={items.imgsrc}
                        alt={`social-${i}`}
                        className="footer-icons"
                        width={32}
                        height={32}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rodapé branco */}
      <div className="bg-white text-[#003476] w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* COLUNA 1 */}
            <div className="flex justify-center items-center">
              <Image
                src="/images/Logo/logotop.png"
                alt="logo-image"
                width={120}
                height={100}
                className="md:block"
                style={{ width: "auto", height: "auto" }}
              />
            </div>

            {/* COLUNA 2 */}
            <div className="text-center">
              <h1 className="text-sm font-medium italic mb-4">
                <strong>Palácio da Batalha</strong> <br />
                Av. Barreto de Menezes, 1648 – Prazeres <br />
                Jaboatão dos Guararapes – PE, CEP 54.310-310
              </h1>
            </div>

            {/* COLUNA 3 */}
            <div className="text-sm font-medium italic text-center md:text-right">
              <h1>
                <strong>Complexo Administrativo</strong> <br />
                Estr. da Batalha, 1200 – Jardim Jordão <br />
                Jaboatão dos Guararapes – PE, CEP 54315-570
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Direitos reservados */}
      <div className="bg-black text-white w-full py-2">
        <h3 className="text-center text-sm">
          Desenvolvido por: Secretaria Executiva de Governo Digital | SEGD
        </h3>
      </div>
    </div>
  );
};

export default Footer;
