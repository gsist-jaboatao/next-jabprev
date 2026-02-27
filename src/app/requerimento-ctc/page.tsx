import Requerimento from "./requerimento";
import Model from "../components/model-page/index";
import Link from "next/link"; 
import React from "react";

export const metadata = {
  title: "Requerimento CTC - JaboatãoPrev",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/"}
        titulo={"Requerimento CTC"}
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
            Requerimento CTC
            </span>
          </span>
        }
      >
        <Requerimento />
      </Model>
    </div>
  );
}
