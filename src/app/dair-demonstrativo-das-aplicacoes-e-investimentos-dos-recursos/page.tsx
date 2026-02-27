import Controle from "./conteudo";
import Model from "../components/model-page/index";
import Link from "next/link";

export const metadata = {
  title: "DAIR – Demonstrativo das Aplicações e Investimento dos Recursos - JaboatãoPrev",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/"}
        titulo={"DAIR – Demonstrativo das Aplicações e Investimento dos Recursos"}
        subtitulo={
          <span>
            <Link
              href="../"
              className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all"
            >
              INÍCIO
            </Link>
            &nbsp;»{" "}
            <span className="brightness-125">
            DAIR – Demonstrativo das Aplicações e Investimento dos Recursos
            </span>
          </span>
        }
      >
        <Controle />
      </Model>
    </div>
  );
}
