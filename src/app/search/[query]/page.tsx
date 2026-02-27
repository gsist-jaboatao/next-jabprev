import { use } from "react";
import SearchPage from "../../components/search";
import Model from "../../components/model-page/index";
import React from "react";
import Link from "next/link";

export default function SearchResults({
  params,
}: {
  // Avise ao TS que "params" pode ser Promise
  params: Promise<{ query: string }>;
}) {
  // Desempacota a Promise usando "use()"
  const { query } = use(params);

  // Se vier encodeURIComponent (ex.: comunica%C3%A7%C3%A3o), decodifique
  const searchTerm = decodeURIComponent(query);

  return (
    <div>
      <Model
        caminhoImagem={"/images/"}
        titulo={`Resultados para: ${searchTerm || ""}`}
        subtitulo={
          <span>
            <Link
              href="../"
              className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all"
            >
              INÍCIO
            </Link>
            &nbsp;» <span className="brightness-125">SEARCH</span>
          </span>
        }
      />

      <SearchPage searchTerm={searchTerm} />
    </div>
  );
}
