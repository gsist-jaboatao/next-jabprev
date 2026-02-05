import Controle from "./conteudo";
import Model from "../components/model-page/index";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "DIPR – Demonstrativo de Informações Previdenciárias e Repasses - JaboatãoPrev",
};

export default function config() {
  return (
    <div>
      <Model 
        caminhoImagem={"/images/"}
        titulo={"DIPR – Demonstrativo de Informações Previdenciárias e Repasses"}
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
            DIPR – Demonstrativo de Informações Previdenciárias e Repasses
            </span>
          </span>
        }
      >
        <Controle />
      </Model>
    </div>
  );
}
