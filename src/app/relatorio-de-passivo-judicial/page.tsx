import Controle from "./conteudo";
import Model from "../components/model-page/index";
import Link from "next/link";

export const metadata = {
  title: "Relatório do passivo judicial - JaboatãoPrev",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/"}
        titulo={"Relatório do passivo judicial"}
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
            Relatório do passivo judicial
            </span>
          </span>
        }
      >
        <Controle />
      </Model>
    </div>
  );
}
