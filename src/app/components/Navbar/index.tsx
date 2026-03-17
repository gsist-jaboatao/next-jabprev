"use client";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import React from "react";
import { usePathname } from "next/navigation";
import {
  FaInstagram,
  FaXTwitter,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa6";

interface NavItem {
  name: string;
  href: string;
  submenu?: NavItem[];
}

const navigation: NavItem[] = [
  {
    name: "Institucional",
    href: "#",
    submenu: [
      { name: "O que é o JaboatãoPrev", href: "/institucional" },
      { name: "Missão, Visão e Valores", href: "/institucional/#missao" },
      { name: "A Equipe JaboatãoPREV", href: "/institucional/#organograma" },
      {
        name: "Certificações Profissionais",
        href: "/Pdf/menu/CERTIFICACOES-GERAIS.pdf",
      },
      { name: "Perguntas Frequentes", href: "/perguntas-frequentes" },
      { name: "Legislação", href: "/legislacao" },
      {
        name: "Cartilha Previdenciária",
        href: "/Pdf/menu/CARTILHA.pdf",
      },
      {
        name: "Informativos Previdenciários",
        href: "/informativos-previdenciarios",
      },
      { name: "Controle Interno", href: "/controle-interno" },
    ],
  },

  {
    name: "Administrativo",
    href: "#",
    submenu: [
      {
        name: "Atas",
        href: "#",
        submenu: [
          {
            name: "Atas do Conselho Deliberativo",
            href: "/atas-do-conselho-deliberativo",
          },
          { name: "Atas do Conselho Fiscal", href: "/atas-do-conselho-fiscal" },
          {
            name: "Atas do Comitê de Investimentos",
            href: "/atas-do-comite-de-investimentos",
          },
        ],
      },

      {
        name: "Calendários",
        href: "#",
        submenu: [
          {
            name: "Calendário de Pagamento",
            href: "/Pdf/menu/calendario-de-pagamento.pdf",
          },
          {
            name: "Calendários de Reuniões",
            href: "#",
            submenu: [
              {
                name: "Reuniões do Conselho Fiscal",
                href: "/Pdf/menu/Calendario-de-Reunioes-do-Conselho-Fiscal.pdf",
              },

              {
                name: "Reuniões do Conselho Deliberativo",
                href: "/Pdf/menu/Calendario-de-Reunioes-do-Conselho-Deliberativo.pdf",
              },

              {
                name: "Reuniões do Comitê de Investimentos",
                href: "/Pdf/menu/Calendario-de-Reunioes-investimentos.pdf",
              },

              {
                name: "Reuniões da Diretoria Executiva",
                href: "/Pdf/menu/Calendario-de-Reunioes-gerenciais.pdf", 
              },

              {
                name: "Reuniões Setoriais",
                href: "/Pdf/menu/Calendario-de-Reunioes-Setoriais.pdf",
              },

              {
                name: "Reuniões da Comissão de Revisão de Benefícios",
                href: "/Pdf/menu/CALENDARIO-DE-REUNIOES-Comissao.pdf",
              },
            ],
          },

          {
            name: "Calendário de Obrigações",
            href: "/Pdf/menu/Calendario-de-Envio-de-Informacoes.pdf",
          },

          {
            name: "Calendários de Eventos",
            href: "#",
            submenu: [
              {
                name: "Dia de Acolhimento e Boas Vindas",
                href: "/Pdf/menu/Calendario-cafe-da-manha-2025-1.pdf",
              },
              {
                name: "Seminário De Educação Previdenciária E Financeira",
                href: "/Pdf/menu/2.1_Calendario_do_Seminario_de_Educacao_Previdenciaria.pdf",
              },
            ],
          },
        ],
      },
      {
        name: "Concessões de Benefícios",
        href: "/images/menu/concessao-Fevereiro-2026.jpeg",
      },

      { name: "Contratos", href: "/contratos" },

      {
        name: "Educação Previdenciária e Financeira",
        href: "/Pdf/menu/Cronograma-de-Educacao-Previdenciaria-2024.pdf",
      },

      { name: "Folha de Pagamento", href: "/folha-de-pagamento" },

      { name: "Cronograma de Capacitação", href: "/cronograma-de-capacitacao" },

      { name: "Plano de Ação", href: "/plano-de-acao" },

      { name: "Planejamento Estratégico", href: "/Pdf/menu/2.3_Planejamento_Estrategico_2025___2029.pdf" },

      {
        name: "Programa 5S",
        href: "/programa-5s",
      },
      { name: "Relatório Anual de Gestão", href: "/relatorio-anual-de-gestao" },
      { name: "Obrigações Fiscais", href: "/obrigacoes-fiscais" }, 
    ],
  },

  {
    name: "Financeiro",
    href: "#",
    submenu: [
      {
        name: "Receitas",
        href: "https://portaldatransparencia.jaboatao.pe.gov.br/receitas/",
      },
      {
        name: "Despesas",
        href: "https://portaldatransparencia.jaboatao.pe.gov.br/despesas/",
      },
      { name: "Despesas Administrativas", href: "/despesas-administrativas" },
      { name: "Demonstrativos Contábeis", href: "/demonstrativos-contabeis" },
      { name: "Prestações de Contas", href: "/prestacoes-de-contas" },
      {
        name: "Mapeamento",
        href: "/Pdf/menu/FINANCEIRO-2.pdf",
      },
    ],
  },

  {
    name: "Previdência",
    href: "#",
    submenu: [
      { name: "Previdência Complementar", href: "/previdencia-complementar" },
      { name: "Provisões Matemáticas", href: "/provisoes-matematicas" },
      {
        name: "Relatórios Atuariais",
        href: "#",
        submenu: [
          {
            name: "Avaliação Atuarial 2026",
            href: "/Pdf/menu/2.2_RELATORIO_DE_AVALIACAO_ATURIAL_2026.pdf",
          },
          {
            name: "Avaliação Atuarial 2025",
            href: "/Pdf/menu/Jaboatao_dos_GuararapesPE-Relatorio-Avaliacao-Atuarial-Segregacao-2025-N009_V1.pdf",
          },
          {
            name: "Avaliação Atuarial 2024",
            href: "/Pdf/menu/Jaboatao-dos-Guararapes-PE-Relatorio-Avaliacao-Atuarial-2024-N021_V1-1.pdf",
          },
          {
            name: "Avaliação Atuarial 2023",
            href: "/Pdf/menu/Avalicao-atuarial-2023.pdf",
          },
          {
            name: "Avaliação Atuarial 2022",
            href: "/Pdf/menu/Jaboatao-dos-Guararapes-PE-Relatorio-Avaliacao-Atuarial-2022-N043V1-Com-Segregacao-1.pdf",
          },
          {
            name: "Avaliação Atuarial 2021",
            href: "#",
            submenu: [
              {
                name: "Captalizado",
                href: "/Pdf/menu/RelatorioAA-Prev-2021-JABOATAO.pdf",
              },
              {
                name: "Financeiro",
                href: "/Pdf/menu/RelatorioAA-FINANC-2021-JABOATAO.pdf",
              },
            ],
          },
          {
            name: "Avaliação Atuarial 2020",
            href: "#",
            submenu: [
              {
                name: "Captalizado",
                href: "/Pdf/menu/RelatorioAA-Prev-MAR-2020-JABOATÃO-mesclado.pdf",
              },
              {
                name: "Financeiro",
                href: "/Pdf/menu/RelatorioAA-FINANC-MAR-2020-JABOATÃO-mesclado.pdf",
              },
            ],
          },
          {
            name: "Avaliação Atuarial 2019",
            href: "/Pdf/menu/Avaliação-Atuarial-2019.pdf",
          },
          {
            name: "Avaliação Atuarial 2018",
            href: "/Pdf/menu/Avaliação-Atuarial-2018.pdf",
          },
          {
            name: "Avaliação Atuarial 2017",
            href: "/Pdf/menu/Avaliação-Atuarial-2017.pdf",
          },
        ],
      },
      {
        name: "Relatório Gestão Atuarial",
        href: "/Pdf/menu/6.1_Jaboatao_dos_Guararapes__PE__Relatorio_Pro_Gestao_2024_Nivel_II.pdf",
      },

      {
        name: "Relatório de Aderência das Hipóteses Atuariais",
        href: "/Pdf/menu/Jaboatão-dos-GuararapesPE-Relatorio-de-Aderencia-das-Hipoteses-Atuariais-2024-2021-a-2023.pdf",
      },

      {
        name: "Relatório de Passivo Judicial",
        href: "/relatorio-de-passivo-judicial", 
        // href: "/xls/menu/3.1 Relatório do Passivo Judicial - Site.xlsx",
      },


      {
        name: "Contribuições Previdenciárias",
        href: "/Pdf/menu/Lei-complementar-40-reorganiza-o-RPPS.pdf",
      },
      {
        name: "Mapeamento",
        href: "/Pdf/menu/PREVIDENCIA.pdf",
      },
    ],
  },
  {
    name: "Investimentos",
    href: "#",
    submenu: [
      {
        name: "Apr-Autorização de Aplicação e Resgate",
        href: "/apr-autorizacao-de-aplicacao-e-resgate",
      },
      { name: "Credenciamentos", href: "/credenciamentos" },
      { name: "Política de Investimentos", href: "/politica-de-investimentos" },
      {
        name: "Relatório Anual de Investimentos",
        href: "/Pdf/menu/relatorio-anual-de-investimentos.pdf",
      },
      {
        name: "Regimento Interno",
        href: "/Pdf/menu/REGIMENTO-INTERNO-COMITE-DE-INVESTIMENTOS.pdf",
      },
      { name: "Relatórios Mensais", href: "/relatorio-mensais" },
      {
        name: "Relatório de Inteligência de Dados(BI)",
        href: "/relatorio-de-inteligencia-de-dados-bi",
      },
      { name: "Estudo de ALM", href: "/estudo-de-alm" },
      {
        name: "Mapeamento",
        href: "/Pdf/menu/MAPEAMENTO-SETOR-DE-INVESTIMENTOS.pdf",
      },
    ],
  },
  {
    name: "Cad Prev",
    href: "#",
    submenu: [
      {
        name: "DIPR - Demonstrativo de Informações Previdenciárias e Repasses",
        href: "/dipr-demonstrativo-de-informacoes-previdenciarias-e-repasses",
      },
      {
        name: "DAIR - Demonstrativo das Aplicações e Investimentos dos Recursos",
        href: "/dair-demonstrativo-das-aplicacoes-e-investimentos-dos-recursos",
      },
      {
        name: "DPIN - Demonstrativo de Políticas de Investimento",
        href: "/dpin-demonstrativo-de-politicas-de-investimento",
      },
      {
        name: "AP - Acordo de Parcelamento",
        href: "/ap-acordo-de-parcelamento",
      },
      {
        name: "CRP - Certidão de Regularidade Previdenciária",
        href: "/crp-certidao-de-regularidade-previdenciaria",
      },
    ],
  },
  {
    name: "Carta de Serviço",
    href: "/Pdf/menu/carta.pdf",
  },
];

const institutionalLinks = [
  {
    href: "http://diariooficial.jaboatao.pe.gov.br/",
    label: "Diário Oficial",
  },
  { href: "http://jaboatao.pe.gov.br/", label: "Site Oficial" },
  {
    href: "https://portaldatransparencia.jaboatao.pe.gov.br/",
    label: "Portal da Transparência",
  },
  { href: "http://ouvidoria.jaboatao.pe.gov.br/", label: "Ouvidoria" },
  {
    href: "https://www.tinus.com.br/csp/JABOATAO/portal/index.csp",
    label: "Portal do Contribuinte",
  },
  {
    href: "https://servidor.jaboatao.pe.gov.br/",
    label: "Portal do Servidor",
  },
  {
    href: "https://jaboataoemacao.jaboatao.pe.gov.br/",
    label: "COVID-19",
  },
  {
    href: "https://radardatransparencia.atricon.org.br/radar-da-transparencia-publica.html",
    label: "Radar da Transparência",
  },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com/suaempresa",
    icon: <FaInstagram />,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/suaempresa",
    icon: <FaXTwitter />,
  },
  {
    name: "Facebook",
    href: "https://facebook.com/suaempresa",
    icon: <FaFacebook />,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/suaempresa",
    icon: <FaYoutube />,
  },
];

const TopMenu: React.FC = () => (
  <div className="fixed top-0 left-0 w-full h-9 bg-[#0037C1] text-white text-sm py-2 px-[20px] xl:px-[50px] flex flex-col xl:flex-row xl:justify-between items-center gap-2 z-50">
    {/* Redes sociais */}
    <div className="flex gap-2 justify-center">
      {socialLinks.map((link) => (
        <Link key={link.name} href={link.href} target="_blank">
          <span className="hover:text-yellow-300 text-lg">{link.icon}</span>
        </Link>
      ))}
    </div>

    {/* Links institucionais */}
    <div className="hidden xl:flex gap-3 text-xs md:text-sm">
      {institutionalLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          target="_blank"
          className="hover:underline"
        >
          {link.label}
        </Link>
      ))}

      {/* Ícone especial */}
      <a
        href="https://eouve.com.br/#/ouvidoria"
        target="_blank"
        className="icone-icon"
      >
        <Image
          src="/images/iconamarelo.png"
          alt="ícone amarelo"
          width={20}
          height={20}
        />
      </a>
    </div>
  </div>
);

const NavLinks: React.FC = () => {
  const pathname = usePathname() ?? "";

  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [activeSubSubMenu, setActiveSubSubMenu] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setActiveMenu(null);
    setActiveSubMenu(null);
    setActiveSubSubMenu(null);
    setIsLoading(false);
  }, [pathname]);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
    setActiveMenu(null);
    setActiveSubMenu(null);
    setActiveSubSubMenu(null);
  };

  const isLinkActive = (item: NavItem): boolean => {
    return (
      pathname.startsWith(item.href) ||
      item.submenu?.some((sub) =>
        pathname.startsWith(sub.href) ||
        sub.submenu?.some((subSub) => pathname.startsWith(subSub.href))
      ) ||
      false
    );
  };

  return (
    <div className="hidden lg:flex relative uppercase">
      {isLoading && <LoadingScreen />}
      {navigation.map((item: NavItem) => {
        const isActive = isLinkActive(item);

        return (
          <div
            key={item.name}
            className="relative group"
            onMouseEnter={() => setActiveMenu(item.name)}
            onMouseLeave={() => {
              setActiveMenu(null);
              setActiveSubMenu(null);
              setActiveSubSubMenu(null);
            }}
          >
            <Link
              href={item.href}
              className={`relative text-[#0037C1] text-[15px] font-semibold flex p-3 transition-colors duration-300 
                hover:bg-[#0037C1] hover:text-[#ffffff]
                ${isActive ? "bg-[#0037C1] text-[#ffffff] after:scale-x-100" : ""}
                after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%]
                after:h-[2px] after:w-full after:bg-[#13AFF0]
                after:origin-center after:scale-x-0 after:transition-transform after:duration-500 hover:after:scale-x-100
              `}
              onClick={(e) => {
                const isHashLink = item.href.startsWith("/#");
                if (isHashLink) {
                  const id = item.href.split("#")[1];
                  if (pathname === "/") {
                    e.preventDefault();
                    const element = document.getElementById(id);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }
                } else {
                  handleClick();
                }
              }}
            >
              {item.name}
              {item.submenu && <MdKeyboardArrowDown className="ml-2" />}
            </Link>

            {activeMenu === item.name && item.submenu && (
              <div className="absolute left-0 bg-[#0037C1] shadow-lg w-60 border border-slate-300 z-50 flex flex-col">
                {item.submenu.map((subItem: NavItem) => {
                  const isSubActive = isLinkActive(subItem);

                  return (
                    <div
                      key={subItem.name}
                      className="relative group"
                      onMouseEnter={() => setActiveSubMenu(subItem.name)}
                      onMouseLeave={() => setActiveSubMenu(null)}
                    >
                      <Link
                        href={subItem.href}
                        className={`px-4 py-3 text-[15px] flex items-center hover:bg-[#fdfdfd] hover:text-[#0037C1] ${
                          isSubActive
                            ? "bg-[#ffffff] text-[#0037C1]"
                            : "text-white"
                        }`}
                        onClick={(e) => {
                          const isHashLink = subItem.href.startsWith("/#");
                          if (isHashLink) {
                            const id = subItem.href.split("#")[1];
                            if (pathname === "/") {
                              e.preventDefault();
                              const element = document.getElementById(id);
                              if (element) {
                                element.scrollIntoView({ behavior: "smooth" });
                              }
                            }
                          } else {
                            handleClick();
                          }
                        }}
                      >
                        {subItem.name}
                        {subItem.submenu && (
                          <MdKeyboardArrowRight className="ml-2 text-white" />
                        )}
                      </Link>

                      {activeSubMenu === subItem.name && subItem.submenu && (
                        <div className="absolute left-full top-0 bg-[#0037C1] shadow-lg w-56 border border-slate-300 z-50 flex flex-col">
                          {subItem.submenu.map((subSubItem: NavItem) => {
                            const isSubSubActive = isLinkActive(subSubItem);

                            return (
                              <div
                                key={subSubItem.name}
                                className="relative group"
                                onMouseEnter={() =>
                                  setActiveSubSubMenu(subSubItem.name)
                                }
                                onMouseLeave={() => setActiveSubSubMenu(null)}
                              >
                                <Link
                                  href={subSubItem.href}
                                  className={`px-4 py-2 text-base flex items-center hover:bg-[#fdfdfd] hover:text-[#0037C1] ${
                                    isSubSubActive
                                      ? "bg-[#ffffff] text-[#0023c1]"
                                      : "text-[#ffffff]"
                                  }`}
                                  onClick={(e) => {
                                    const isHashLink =
                                      subSubItem.href.startsWith("/#");
                                    if (isHashLink) {
                                      const id = subSubItem.href.split("#")[1];
                                      if (pathname === "/") {
                                        e.preventDefault();
                                        const element =
                                          document.getElementById(id);
                                        if (element) {
                                          element.scrollIntoView({
                                            behavior: "smooth",
                                          });
                                        }
                                      }
                                    } else {
                                      handleClick();
                                    }
                                  }}
                                >
                                  {subSubItem.name}
                                  {subSubItem.submenu && (
                                    <MdKeyboardArrowRight className="ml-2 text-white" />
                                  )}
                                </Link>

                                {activeSubSubMenu === subSubItem.name &&
                                  subSubItem.submenu && (
                                    <div className="absolute left-full top-0 bg-[#0037C1] shadow-lg w-56 border border-slate-300 z-50 flex flex-col">
                                      {subSubItem.submenu.map(
                                        (subSubSubItem: NavItem) => {
                                          const isSubSubSubActive =
                                            isLinkActive(subSubSubItem);

                                          return (
                                            <Link
                                              key={subSubSubItem.name}
                                              href={subSubSubItem.href}
                                              className={`block px-4 py-2 text-white hover:bg-[#fdfdfd] hover:text-[#0037C1] text-base ${
                                                isSubSubSubActive
                                                  ? "bg-[#ffffff] text-[#0023c1]"
                                                  : "text-white"
                                              }`}
                                              onClick={handleClick}
                                            >
                                              {subSubSubItem.name}
                                            </Link>
                                          );
                                        }
                                      )}
                                    </div>
                                  )}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

interface MobileMenuProps {
  closeMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ closeMenu }) => {
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isClosing, setIsClosing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const toggleMenu = (menu: string) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      closeMenu();
    }, 500);
  };

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const searchInput = inputRef.current?.value;
      if (searchInput) {
        setIsLoading(true);
        router.push(`/search/${encodeURIComponent(searchInput)}`);
        setTimeout(() => {
          setIsLoading(false);
          handleClose(); // Fechar o menu ao pesquisar
        }, 2000); // Esse tempo deve ser o suficiente para a animação de carregamento
      }
    }
  };

  const renderSubMenu = (items: NavItem[], level = 1) => (
    <div className={`pl-${level * 4} mt-2 text-center`}>
      {items.map((item) => (
        <div key={item.name} className="mb-2">
          {item.submenu ? (
            <div className="flex items-center justify-center w-full">
              <Link
                href={item.href}
                className="text-[#0037C1] text-lg font-normal hover:underline p-2 flex items-center gap-2"
                onClick={(e) => {
                  if (item.submenu) {
                    e.preventDefault();
                    toggleMenu(item.name);
                  } else {
                    handleClose();
                  }
                }}
              >
                {item.name}
                {openMenus[item.name] ? (
                  <ChevronUpIcon className="h-5 w-5" />
                ) : (
                  <ChevronDownIcon className="h-5 w-5" />
                )}
              </Link>
            </div>
          ) : (
            <Link
              href={item.href}
              className="block w-full text-[#0037C1] text-lg font-normal hover:underline p-2 text-center"
              onClick={handleClose}
            >
              {item.name}
            </Link>
          )}
          {item.submenu &&
            openMenus[item.name] &&
            renderSubMenu(item.submenu, level + 1)}
        </div>
      ))}
    </div>
  );

  return (
    <>
      {isLoading && <LoadingScreen />}
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        />
      )}
      <motion.div
        className="fixed top-9 left-0 w-full h-[calc(100%-2.25rem)] bg-yellow-400 shadow-lg flex flex-col overflow-hidden"
        initial={{ y: "-100%" }}
        animate={{ y: isClosing ? "-100%" : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 50 }}
      >
        {/* Topo com logo e botão ✕ */}
        <div className="py-5 px-5 flex justify-between items-center border-b border-gray-200">
          <Logo />
          <button onClick={handleClose} className="p-2 text-black text-2xl">
            ✕
          </button>
        </div>

        {/* Conteúdo com scroll se necessário */}
        <div className="flex-1 overflow-auto p-4 text-center">
          {renderSubMenu(
            [
              ...navigation,
              ...institutionalLinks.map((item) => ({
                name: item.label,
                href: item.href,
              })),
            ],
            1
          )}
        </div>

        {/* Campo de busca fixado no final */}
        <div className="p-4 border-t border-gray-100">
          <div className="relative w-full max-w-md mx-auto flex items-center bg-white px-4 py-2 rounded-full shadow-md">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Buscar"
              className="flex-1 px-2 text-gray-700 focus:outline-none"
              ref={inputRef}
              onKeyDown={handleSearch}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

interface SearchBarProps {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  hideIcon?: boolean;
}

const SearchBar = ({ setIsLoading, hideIcon = false }: SearchBarProps) => {
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const searchInput = inputRef.current?.value;
      if (searchInput) {
        setIsLoading(true);
        router.push(`/search/${encodeURIComponent(searchInput)}`);
        setTimeout(() => {
          setIsLoading(false);
          setIsSearching(false);
        }, 2000);
      }
    }
  };

  return (
    <>
      {!hideIcon && (
        <button
          onClick={() => setIsSearching(true)}
          className="text-[#0037C1] hover:rounded-full hover:bg-[#0037C1] hover:text-white p-3 text-xl focus:outline-none cursor-pointer"
          aria-label="Abrir busca"
        >
          <FaSearch />
        </button>
      )}

      {isSearching && (
        <div className="fixed inset-0 bg-[#010306c0] backdrop-blur-sm flex items-center justify-center z-50">
          <button
            className="fixed top-4 right-4 text-white text-4xl p-4 hover:text-gray-300 transition-colors duration-200"
            onClick={() => setIsSearching(false)}
          >
            &times;
          </button>

          <div className="relative w-full max-w-xl">
            <input
              type="text"
              name="search"
              placeholder="BUSCAR"
              className="bg-transparent text-white text-[20px] mt-20 text-center px-4 py-2 w-full border-b-2 border-gray-300 rounded-lg placeholder-white focus:outline-none focus:border-slate-300 focus:ring-0 focus:shadow-none"
              ref={inputRef}
              autoFocus
              onKeyDown={handleKeyPress}
            />
          </div>
        </div>
      )}
    </>
  );
};

const Logo = () => (
  <div className="relative flex items-center h-full">
    <Link href="/">
      <Image
        src="/images/Logo/logo.png"
        alt="Logo"
        width={220}
        height={80} // Define uma altura específica
        className="h-full w-auto object-contain" // Garante que ocupa toda a altura sem distorcer
      />
    </Link>
  </div>
);

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-[#FDC300] flex flex-col items-center justify-center z-50">
      <Image
        src="/images/Logo/logotop.png"
        alt="Carregando"
        width={150}
        height={110}
        className="animate-pulse"
      />
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <Disclosure
      as="nav"
      className={`fixed top-9 w-full h-20 transition-all duration-300 z-50 px-[50px] ${
        scrolled ? "bg-[#fdc200d1] shadow-md" : "bg-[#FDC300]"
      }`}
    >
      <div className="relative mx-auto py-3">
        <div className="relative flex h-14 items-center">
          {/* Logo à esquerda e o topmenu alinhado ao centro*/}
          <Logo />
          <TopMenu />
          {/* Container para NavLinks + SearchBar alinhados à direita */}
          <div className="hidden 2xl:flex ml-auto items-center space-x-4">
            <NavLinks />
            <SearchBar setIsLoading={setIsLoading} />
          </div>

          {/* Ícone do menu mobile visível apenas em telas menores */}
          <div className="2xl:hidden ml-auto">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Abrir menu">
              <Bars3Icon className="h-6 w-6 text-[#0037C1] cursor-pointer" />
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isOpen && <MobileMenu closeMenu={closeMenu} />}
      </div>

      {/* Tela de carregamento exibida aqui enquanto isLoading for true */}
      {isLoading && <LoadingScreen />}
    </Disclosure>
  );
};

export default Navbar;
