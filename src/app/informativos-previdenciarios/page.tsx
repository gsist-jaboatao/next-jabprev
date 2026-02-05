import Conteudo from "./conteudo";
import Model from "../components/model-page/index";
import Link from "next/link";

export const metadata = {
  title: "Informativos Previdenciários - JaboatãoPrev",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/"}
        titulo={"Informativos Previdenciários"}
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
            Informativos Previdenciários
            </span>
          </span>
        }
      >
        <Conteudo />
      </Model>
    </div>
  );
}
