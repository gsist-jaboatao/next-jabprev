// components/Popup/index.tsx
"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Popup() {
  const [isVisible, setIsVisible] = useState(false);

  // Valores padrão
  const imageSrc = "/images/Popup/poupup.jpeg"; 
  const imageAlt = "Fale conosco pelo WhatsApp";
  const showAfterSeconds = 1;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, showAfterSeconds * 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsVisible(false);
  };

  if (!isVisible) return null;


  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300">
      {/* Container principal com borda decorativa */}
      <div className="relative max-w-[80vw] max-h-[90vh]">
        {/* Botão X flutuante acima do popup */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-3xl hover:bg-red-700 transition-all transform hover:scale-110 z-50 shadow-xl border-4 border-white"
          aria-label="Fechar popup"
        >
          ×
        </button>
        
        {/* Popup com borda decorativa */}
        <div className="relative p-1 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl shadow-2xl overflow-hidden border-4 border-white">
          <Link
            href={`https://prevmais.app.br/#/login`}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="relative w-full h-full">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={400}
                height={400}
                className="object-contain w-full h-full rounded-lg"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/whatsapp-icon.png';
                }}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}