import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaPiggyBank, FaBookOpen, FaPhoneAlt } from "react-icons/fa";
import { BsPlusCircleFill } from "react-icons/bs";

const Card = ({
  title,
  icon,
  link,
  subtext,
  target,
}: {
  title: string;
  icon: React.ReactNode;
  link?: string;
  subtext: string;
  target?: string;
}) => {
  return (
    <div className="group relative bg-slate-300 rounded-2xl shadow-lg transition-transform transform hover:scale-105 min-h-64 flex items-center justify-center">
      {link ? (
        <a
          href={link}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className="block text-center"
        >
          <CardContent title={title} icon={icon} subtext={subtext} />
        </a>
      ) : (
        <div className="block text-center">
          <CardContent title={title} icon={icon} subtext={subtext} />
        </div>
      )}
    </div>
  );
};

const CardContent = ({
  title,
  icon,
  subtext,
}: {
  title: string;
  icon: React.ReactNode;
  subtext: string;
}) => (
  <>
    <div className="text-5xl text-[#004619] mb-4 flex justify-center">
      {icon}
    </div>

    <h5 className="text-xl font-medium text-[#004619] mb-4 uppercase">
      {title}
    </h5>

    <div className="absolute inset-0 bg-[#1f5c35] rounded-2xl border-2 border-slate-300 bg-opacity-100 opacity-0 group-hover:opacity-100 text-white flex items-center justify-center transition-opacity duration-300 px-20">
      <p className="text-lg whitespace-pre-line">{subtext}</p>
    </div>
  </>
);

export default function CardGrid() {
  return (
    <div className="bg-white">
      <div
        id="servicos"
        className="flex flex-col items-center justify-center min-h-[80vh] w-full mx-auto bg-green-800 text-center rounded-[50px] py-24"
      >
        <div className="w-full sm:w-8/12 pb-14 relative px-4">
          <h1 className="relative flex justify-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-green-700 uppercase">
            {/* Linha atravessando o texto */}
            <div
              className="absolute top-1/2 left-0 w-full"
              style={{
                height: "4px",
                background:
                  "linear-gradient(to right, #166534, white, #166534)",
                transform: "translateY(-50%)",
              }}
            ></div>

            <span className="bg-slate-200 px-4 sm:px-6 py-1 sm:py-2 rounded-full relative z-10">
              Serviços
            </span>
          </h1>
        </div>

        <div className="w-11/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 sm:px-6 md:px-10 lg:px-16 mx-auto text-center place-content-center">
          {[
            {
              title: "Contra-Cheque",
              icon: <MdOutlineAttachMoney />,
              link: "https://www.faciltecnologia.com.br/consigfacil/jaboatao/index_servidor.php",
              subtext:
                "Com apenas alguns cliques você aposentado ou pensionista pode emitir seu contra-cheque, simular consignação e muito mais. Acesse agora!",
              target: "_blank",
            },
            {
              title: "Carta de Serviço",
              icon: <FaPiggyBank />,
              link: "/Pdf/carta-de-servico/1.1_Carta_de_Servicos.pdf",
              subtext:
                "Página com todas as cartas de serviços do JaboatãoPrev.",
              target: "_blank",
            },
            {
              title: "Certidão de Tempo de Contribuição",
              icon: <FaBookOpen />,
              link: "./requerimento-ctc",
              subtext:
                "Solicite sua Certidão por Tempo de Contribuição, clicando aqui!",
              target: "_blank",
            },
            {
              title: "Nossos Telefones",
              icon: <FaPhoneAlt />,
              subtext:
                "Nossos telefones:\n (81) 99756-0292 \n (81) 99975-4173 \n (81) 99113-3308\n (81) 99113-3308\n (81) 99975-4173",
              target: "_blank",
            },
            {
              title: "Prova de Vida",
              icon: <FaInfoCircle />,
              link: "/prova-vida",
              subtext: "Faça aqui sua prova de vida.",
              target: "_blank",
            },
            {
              title: "Prev +",
              icon: <BsPlusCircleFill />,
              link: "https://prevmais.app.br/#/login",
              subtext: "Aplicativo PREV+",
              target: "_blank",
            },
          ].map((card, index) => (
            <Card
              key={index}
              title={card.title}
              icon={card.icon}
              link={card.link}
              subtext={card.subtext}
              target={card.target}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
