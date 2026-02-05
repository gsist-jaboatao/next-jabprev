"use client";

// Definição de tipos
interface Relatorio {
  titulo: string;
  url: string;
}

interface AnoRelatorios {
  ano: string;
  relatorios: Relatorio[];
}

// Dados organizados em um array para fácil manutenção e adição de novos itens
const relatoriosData: AnoRelatorios[] = [
  {
    ano: "2025",
    relatorios: [
      {
        titulo: "Relatório de Governança Corporativa",
        url: "Pdf/administrativo/relatorios/relatorio-de-governanca-corporativa-2025.pdf",
      },
    ],
  },
  {
    ano: "2024",
    relatorios: [
      {
        titulo: "Relatório de Governança Corporativa",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/Relatorio-de-Governanca-Corporativa-2024_Dezembro.2024.pdf",
      },
    ],
  },
  {
    ano: "2023",
    relatorios: [
      {
        titulo: "Relatório de Governança Corporativa",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/02/Relatorio-de-Governanca-Corporativa-2023_atualizada.pdf",
      },
    ],
  },
  {
    ano: "2022",
    relatorios: [
      {
        titulo: "Relatório de Governança Corporativa",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/05/Relatorio-de-Governanca-Corporativa-2022-18.04.pdf",
      },
    ],
  },
  {
    ano: "2021",
    relatorios: [
      {
        titulo: "Relatório anual de gestão",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/02/Relatorio-Anual-Gestao-2021.pdf",
      },
    ],
  },
  {
    ano: "2020",
    relatorios: [
      {
        titulo: "Relatório anual de gestão",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/06/Relatorio-Anual-Gestao-2020.pdf",
      },
    ],
  },
  {
    ano: "2019",
    relatorios: [
      {
        titulo: "Relatório anual de gestão",
        url: "https://backendjaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/06/Relatorio-Anual-Gestao-2019.pdf",
      },
    ],
  },
];

// Componente de item de relatório
interface RelatorioItemProps {
  titulo: string;
  url: string;
}

const RelatorioItem: React.FC<RelatorioItemProps> = ({ titulo, url }) => (
  <li className="py-2">
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-800 hover:underline transition duration-200"
    >
      {titulo}
    </a>
  </li>
);

// Componente de seção por ano
interface AnoSectionProps {
  ano: string;
  relatorios: Relatorio[];
}

const AnoSection: React.FC<AnoSectionProps> = ({ ano, relatorios }) => {
  // Determina o layout com base no número de relatórios
  const gridClass = relatorios.length > 1 ? "grid grid-cols-1 md:grid-cols-2" : "";
  
  return (
    <div className="mb-12">
      <h2 className="text-5xl font-bold mb-6 uppercase text-blue-900 leading-tight">
        {ano}
      </h2>
      
      <ul className={`list-disc pl-5 text-[#051f60] text-xl ${gridClass}`}>
        {relatorios.map((relatorio: Relatorio, index: number) => (
          <RelatorioItem
            key={index}
            titulo={relatorio.titulo}
            url={relatorio.url}
          />
        ))}
      </ul>
    </div>
  );
};

// Componente principal
const Links: React.FC = () => (
  <div className="h-auto bg-gradient-to-b from-[#ffffff] via-[#dcecff] to-[#cbe1fc]">
    <div className="mx-auto max-w-6xl p-6 py-20">
      {relatoriosData.map((item: AnoRelatorios) => (
        <AnoSection
          key={item.ano}
          ano={item.ano}
          relatorios={item.relatorios}
        />
      ))}
    </div>
  </div>
);

const Legislacao: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Links />
    </div>
  );
};

export default Legislacao;