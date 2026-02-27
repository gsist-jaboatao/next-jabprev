"use client";
import React from "react";
import Image from "next/image";

const Banner = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const buttons = [
    { label: "SERVIÇOS", section: "servicos" },
    { label: "ENQUETE", section: "enquete" },
    { label: "FALE CONOSCO", section: "fale-conosco" },
    { label: "NOTÍCIAS", section: "noticias" },
  ];

  const awards = [1, 2, 3, 4, 5];

  return (
    <div className="relative min-h-screen w-full flex justify-center items-center">
      <div className="relative min-h-[100vh] w-full rounded-b-[20px] sm:rounded-b-[30px] md:rounded-b-[40px] lg:rounded-b-[50px] xl:rounded-b-[70px] overflow-hidden flex justify-center items-center text-white py-32 sm:py-40 md:py-48 lg:py-20">
        {/* Vídeo de fundo */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Overlay escuro para melhorar a legibilidade */}
        <div className="absolute inset-0 bg-black bg-opacity-75"></div>

        {/* Conteúdo do banner */}
        <div className="relative text-center w-full">
          <Image
            src="/images/Logo/logo-jabprev.png"
            alt="Logo Jaboatão Prev"
            width={300}
            height={208}
            className="mx-auto h-20 sm:h-24 md:h-32 lg:h-40 w-auto"
          />

          {/* Botões */}
          <div className="flex justify-center gap-6 flex-wrap px-2 py-10">
            {buttons.map(({ label, section }) => (
              <button
                key={section}
                className="border-2 border-white py-2 px-6 sm:py-3 sm:px-10 lg:py-4 lg:px-14 rounded-full hover:text-yellow-400 hover:border-yellow-400 transition text-sm sm:text-base w-full lg:max-w-64 max-w-xs"
                onClick={() => scrollToSection(section)}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Ícones de premiação */}
          <div className="flex justify-center gap-4 sm:gap-6 flex-wrap mt-12">
            {awards.map((num) => (
              <Image
                key={num}
                src={`/images/Medalha/premio${num}.png`}
                alt={`Prêmio ${num}`}
                className="w-auto 2xl:h-auto lg:h-44 sm:h-40 h-32"
                width={150}
                height={100}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
