"use client";
import { useState, useEffect } from "react";
import { FaUniversalAccess } from "react-icons/fa";

type CustomButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

const CustomButton: React.FC<CustomButtonProps> = ({ children, onClick }) => (
  <button onClick={onClick} className="px-4 py-2 text-white bg-transparent hover:bg-[#007bff] rounded-lg">
    {children}
  </button>
);

const AccessibilityButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [negativeContrast, setNegativeContrast] = useState(false);
  const [whiteBg, setWhiteBg] = useState(false);
  const [underlineLinks, setUnderlineLinks] = useState(false);
  const [readableFont, setReadableFont] = useState(false);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .high-contrast { filter: contrast(2); }
      .negative-contrast { filter: invert(1); }
      .white-bg { background-color: white !important; color: black !important; }
      .underline-links a { text-decoration: underline !important; }
      .readable-font { font-family: Arial, sans-serif !important; }
    `;
    document.head.appendChild(style);

    document.documentElement.style.fontSize = `${fontSize}%`;
    document.body.classList.toggle("high-contrast", highContrast);
    document.body.classList.toggle("negative-contrast", negativeContrast);
    document.body.classList.toggle("white-bg", whiteBg);
    document.body.classList.toggle("underline-links", underlineLinks);
    document.body.classList.toggle("readable-font", readableFont);

    return () => {
      document.head.removeChild(style);
    };
  }, [fontSize, highContrast, negativeContrast, whiteBg, underlineLinks, readableFont]);

  const resetAccessibility = () => {
    setFontSize(100);
    setHighContrast(false);
    setNegativeContrast(false);
    setWhiteBg(false);
    setUnderlineLinks(false);
    setReadableFont(false);
  };

  return (
    <div className="accessibility-container">
      <div className={`accessibility-panel ${isOpen ? "open" : ""}`}>
        <button onClick={() => setIsOpen(!isOpen)} className="accessibility-toggle">
          <FaUniversalAccess size={28} className="text-white" />
        </button>

        <div className="accessibility-buttons">
          <CustomButton onClick={() => setFontSize((size) => Math.min(size + 10, 150))}>
            Aumentar Texto
          </CustomButton>
          <CustomButton onClick={() => setFontSize((size) => Math.max(size - 10, 50))}>
            Diminuir Texto
          </CustomButton>
          <CustomButton onClick={() => setHighContrast(!highContrast)}>Auto Contraste</CustomButton>
          <CustomButton onClick={() => setNegativeContrast(!negativeContrast)}>Contraste Negativo</CustomButton>
          <CustomButton onClick={() => setWhiteBg(!whiteBg)}>Fundo Branco</CustomButton>
          <CustomButton onClick={() => setUnderlineLinks(!underlineLinks)}>Links Sublinhados</CustomButton>
          <CustomButton onClick={() => setReadableFont(!readableFont)}>Fonte Legível</CustomButton>
          <CustomButton onClick={resetAccessibility}>Resetar</CustomButton>
        </div>
      </div>

      <style jsx>{`
        .accessibility-container {
  position: fixed;
  top: 50%;
  left: 0;
  z-index: 10;
  pointer-events: ${isOpen ? "auto" : "none"};
  transform: translateY(-50%);
}

        .accessibility-panel {
          display: flex;
          align-items: center;
          position: relative;
          width: auto;
          transition: transform 0.3s ease-in-out;
          transform: translateX(${isOpen ? "0" : "-100%"});
        }

        .accessibility-toggle {
          background-color: #007bff;
          border: 1px solid #ddd;
          padding: 12px;
          cursor: pointer;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          position: absolute;
          left: 100%; /* Mantém o botão fixo ao lado do painel */
          transition: left 0.3s ease-in-out;
          pointer-events: auto; /* Permite clicar no botão mesmo quando o painel está fechado */
        }

        .accessibility-buttons {
          display: flex;
          flex-direction: column;
          gap: 8px;
          background-color: #003476;
          border: 1px solid #007bff;
          padding: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
};

export default AccessibilityButton;