import Cartilha from "./cartilha";
import Model from "../components/model-page/index";
import Link from "next/link";

export const metadata = {
  title: "Cronograma de Capacitacao - JaboatãoPrev",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/"}
        titulo={"Cronograma de Capacitacao"}
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
            Cronograma de Capacitacao
            </span>
          </span>
        }
      >
        <Cartilha />
      </Model>
    </div>
  );
}
