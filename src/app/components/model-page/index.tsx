"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ModelProps {
  caminhoImagem: string;
  titulo: string;
  subtitulo: React.ReactNode;
  children?: React.ReactNode;
}


const Model = ({ children, titulo, subtitulo }: ModelProps) => {
  return (
    <div>
      {/* Container da imagem com overflow-hidden para limitar a animação */}
      <div className="relative w-full h-[250px] overflow-hidden flex items-end justify-center rounded-b-[50px]">
        {/* Container com a animação */}
        <motion.div
          initial={{ scale: 1.2 }}  // Começa com zoom
          animate={{ scale: 1 }}  // Diminui para o tamanho original
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src="/images/Bandeira/bandeiramodelo.png"
            alt="background"
            className="w-full h-full object-cover"
            width={4000}
            height={500}
          />
        </motion.div>

        {/* Camada de sobreposição para escurecer a imagem */}
        <div className="absolute inset-0 bg-[#0a183c]" style={{ opacity: 0.6 }}></div>

        {/* Conteúdo sobre a imagem */}
        <div className="z-10 text-center text-white pb-4">
          <h1 className="lg:text-[40px] text-xl leading-[40px] pb-[5px] Montserrat-Bold drop-shadow-[0_4px_6px_rgba(0,0,0,0.9)] uppercase">
            {titulo}
          </h1> 
          <p className="text-[14px] font-bold">{subtitulo}</p>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Model;
