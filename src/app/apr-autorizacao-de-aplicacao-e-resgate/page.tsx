import Controle from "./conteudo";
import Model from "../components/model-page/index";
import Link from "next/link";

export const metadata = {
  title: "APR – Autorização de Aplicação e Resgate - JaboatãoPrev",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/"}
        titulo={"APR – Autorização de Aplicação e Resgate"}
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
            APR – Autorização de Aplicação e Resgate
            </span>
          </span>
        }
      >
        <Controle />
      </Model>
    </div>
  );
}
