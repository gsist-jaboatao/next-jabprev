'use client';
import React, { useState, useEffect } from 'react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const toggleVisibility = (): void => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div
      onClick={scrollToTop}
      onMouseEnter={() => setIsHovered(true)}  
      onMouseLeave={() => setIsHovered(false)} 
      style={{
        ...styles.scrollToTop,
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? 'visible' : 'hidden',
        backgroundColor: isHovered ? '#0037C1' : '#e2ad00', // Transparente no hover
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        width="24px"
        height="24px"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M4 12l1.41 1.41L11 7.83v8.59h2V7.83l5.59 5.58L20 12l-8-8-8 8z" />
      </svg>
    </div>
  );
};

const styles = {
  scrollToTop: {
    position: 'fixed' as const,
    bottom: '40px',
    right: '110px',
    borderRadius: '50%',
    padding: '10px',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'opacity 0.4s ease, background-color 0.3s ease', // Adiciona transição suave para a cor de fundo
    opacity: 0, // O botão começa invisível
    visibility: 'hidden', // O botão começa oculto
    zIndex: 10, // Garante que o botão esteja na frente de outros elementos
  },
};

export default ScrollToTop;
