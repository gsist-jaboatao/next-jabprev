import Banner from "./components/Home/Banner/index";
import Servicos from "./components/Home/Servicos/index";
import Enquete from "./components/Home/Enquete/index"
import FaleConosco from "./components/Home/FaleConosco/index";
import Noticia from "./components/Home/Noticias/index";
import React from "react";
import Popup from "./components/Popup/index";


export const metadata = {
  title: 'JABOATÃO PREV',
  description: 'Desenvolvido por: Secretaria Executiva de Governo Digital | SEGD'
};


export default function Home() {
  return (
    <main>
      <Popup />
      <Banner/>
      <Noticia/>
      <Servicos/>
      <Enquete/>
      <FaleConosco/>
    </main>
  );
}
