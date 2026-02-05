import PlanodeAção from "./conteudo";
import Model from "../components/model-page/index";
import Link from "next/link";

export const metadata = {
  title: "Plano de Ação - JaboatãoPrev",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/"}
        titulo={"Plano de Ação"}
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
            Plano de Ação
            </span>
          </span>
        }
      >
        <PlanodeAção/>
      </Model>
    </div>
  );
}
