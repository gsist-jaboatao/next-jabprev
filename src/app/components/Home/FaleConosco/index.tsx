"use client";
import React from "react";
import { useState } from "react";

const emailDestinations: Record<string, string> = {
  financeiro: "admfinanceiro@jaboataoprev.jaboatao.pe.gov.br",
  juridico: "jurídico@jaboataoprev.jaboatao.pe.gov.br",
  beneficios: "beneficios@jaboataoprev.jaboatao.pe.gov.br",
  investimento: "investimentos@jaboataoprev.jaboatao.pe.gov.br",
};

  const FaleConosco = () => {
  const [loading, setLoading] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<string>("financeiro");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const recipientEmail = emailDestinations[selectedSubject];

    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement)?.value || "",
      email:
        (form.elements.namedItem("email") as HTMLInputElement)?.value || "",
      message:
        (form.elements.namedItem("message") as HTMLTextAreaElement)?.value ||
        "",
      subject: selectedSubject,
      recipientEmail,
    };

    try {
      const response = await fetch("/api/sendContact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Mensagem enviada com sucesso!");
        form.reset();
        setSelectedSubject("financeiro");
      } else {
        const data = await response.json();
        alert(`Erro: ${data.message}`);
      }
    } catch {
      alert("Ocorreu um erro ao enviar a mensagem.");
    }

    setLoading(false);
  };

  return (
    <div id="fale-conosco">
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-lg font-semibold">Enviando dados...</p>
          </div>
        </div>
      )}
      <div className="min-h-screen relative">
        <div className="absolute inset-0 w-full h-full">
          <video
            className="w-full h-full object-cover rounded-t-[50px]"
            autoPlay
            loop
            muted
          >
            <source
              src="/videos/sky-bg.mp4"
              type="video/mp4"
            />
            Seu navegador não suporta a tag de vídeo.
          </video>
          <div className="absolute inset-0 bg-black opacity-30 rounded-t-[50px]"></div>
        </div>

        <div className="relative z-10 min-h-screen text-white p-8 flex items-center justify-center bg-opacity-30">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-7xl w-full py-12">
            <div className="w-full  md:w-1/2 2xl:h-[670px] lg:h-[680px] md:h-[740px] h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.399975861041!2d-34.92163922422003!3d-8.162395681786494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7aae1c7b83da1ad%3A0x800b1fb28118c9ed!2sRua%20Coronel%20Waldemar%20Basgal%2C%20576%20-%20Piedade%2C%20Jaboat%C3%A3o%20dos%20Guararapes%20-%20PE%2C%2054310-285!5e0!3m2!1spt-BR!2sbr!4v1745416049239!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>

            <div className="w-full md:w-1/2 bg-[#00000088] p-4 rounded-lg shadow-md flex flex-col justify-between overflow-hidden">
              <h2 className="text-[40px] font-semibold">Fale Conosco</h2>

              <div>
                <p suppressHydrationWarning>
                  Instituto de Previdência dos Servidores do Município Jaboatão
                  dos Guararapes.
                  <br />
                  <br />
                  Celular: (81) 9 9756-0292
                  <br />
                  Celular: (81) 9 9975-4173
                  <br />
                  Celular: (81) 9 9113-3308
                  <br />
                  <br />
                  E-mails Institucionais:
                </p>
                <ul className="list-disc pl-4">
                  <li>investimentos@jaboataoprev.jaboatao.pe.gov.br</li>
                  <li>jurídico@jaboataoprev.jaboatao.pe.gov.br</li>
                  <li>admfinanceiro@jaboataoprev.jaboatao.pe.gov.br</li>
                  <li>beneficios@jaboataoprev.jaboatao.pe.gov.br</li>
                </ul>
              </div>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 w-full pt-8 pb-2"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Seu nome"
                  className="p-2 rounded-[10px] bg-[#ffffff00] border-white border-[1px] text-white outline-none focus:ring-2 focus:ring-[#5872a3] w-full"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Seu E-mail"
                  className="p-2 rounded-[10px] bg-[#ffffff00] border-white border-[1px] text-white outline-none focus:ring-2 focus:ring-[#5872a3] w-full"
                  required
                />

                {/* Seleção do Assunto */}
                <div className="text-white">
                  <p className="text-lg font-semibold">Assunto:</p>
                  <div className="flex flex-wrap gap-4 mt-2">
                    {Object.keys(emailDestinations).map((subject) => (
                      <label key={subject} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="subject"
                          value={subject}
                          checked={selectedSubject === subject}
                          onChange={() => setSelectedSubject(subject)}
                          className="accent-[#5872a3]"
                        />
                        {subject.charAt(0).toUpperCase() + subject.slice(1)}
                      </label>
                    ))}
                  </div>
                </div>

                <textarea
                  name="message"
                  placeholder="Mensagem"
                  className="p-2 rounded-[10px] bg-[#ffffff00] border-white border-[1px] text-white outline-none focus:ring-2 focus:ring-[#5872a3] w-full"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="py-2 px-4 bg-[#1e59a7] hover:bg-[#3279d6] rounded text-white font-semibold transition w-full"
                >
                  ENVIAR
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaleConosco;
