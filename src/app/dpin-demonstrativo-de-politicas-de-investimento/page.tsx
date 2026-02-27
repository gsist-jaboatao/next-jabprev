import Controle from "./conteudo";
import Model from "../components/model-page/index";
import Link from "next/link";

export const metadata = {
  title: "DPIN – Demonstrativo de Políticas de Investimento - JaboatãoPrev",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/"}
        titulo={"DPIN – Demonstrativo de Políticas de Investimento"}
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
            DPIN – Demonstrativo de Políticas de Investimento
            </span>
          </span>
        }
      >
        <Controle />
      </Model>
    </div>
  );
}
