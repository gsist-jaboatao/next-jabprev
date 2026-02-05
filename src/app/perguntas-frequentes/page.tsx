import Perguntas from "./perguntas";
import Model from "../components/model-page/index";
import Link from "next/link";

export const metadata = {
  title: "Perguntas frequentes - JaboatãoPrev",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/"}
        titulo={"Perguntas"}
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
            Perguntas Frequentes
            </span>
          </span>
        }
      >
        <Perguntas />
      </Model>
    </div>
  );
}
