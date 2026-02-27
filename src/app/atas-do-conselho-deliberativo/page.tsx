import Controle from "./conteudo";
import Model from "../components/model-page/index";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Atas do Conselho Deliberativo - JaboatãoPrev",
};
 
export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/"}
        titulo={"Atas do Conselho Deliberativo"}
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
            Atas do Conselho Deliberativo
            </span>
          </span>
        }
      >
        <Controle />
      </Model>
    </div>
  );
}
