import Controle from "./controle";
import Model from "../components/model-page/index";
import Link from "next/link";

export const metadata = {
  title: "Controle Intrerno - JaboatãoPrev",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/"}
        titulo={"Controle Intrerno"}
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
            Controle Intrerno
            </span>
          </span>
        }
      >
        <Controle />
      </Model>
    </div>
  );
}
