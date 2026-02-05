"use client";
import React, { useState } from "react";

const Formulario = () => {
  const [formData, setFormData] = useState({
    nome: "",
    matricula: "",
    telefone: "",
    email: "",
    orgao: "",
    dataEmissao: "",
    dataExoneracao: "",
    arquivos: {
      rg: null as File | null,
      cpf: null as File | null,
      pisPasep: null as File | null,
      comprovante: null as File | null,
    },
  });
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData({
        ...formData,
        arquivos: { ...formData.arquivos, [name]: files[0] },
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    // Adiciona os campos de texto
    formDataToSend.append("nome", formData.nome);
    formDataToSend.append("matricula", formData.matricula);
    formDataToSend.append("telefone", formData.telefone);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("orgao", formData.orgao);
    formDataToSend.append("dataEmissao", formData.dataEmissao);
    formDataToSend.append("dataExoneracao", formData.dataExoneracao);

    // Adiciona os arquivos individualmente
    Object.entries(formData.arquivos).forEach(([key, file]) => {
      if (file) {
        formDataToSend.append(key, file);
      }
    });

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        setSuccessMessage("Formulário enviado com sucesso!");
        setErrorMessage(null);
      } else {
        setErrorMessage("Falha ao enviar o formulário.");
        setSuccessMessage(null);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Erro ao enviar formulário.");
      setSuccessMessage(null);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-10 border-2 border-yellow-400 rounded-lg shadow-xl my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold">Nome Completo *</label>
            <input type="text" name="nome" value={formData.nome} onChange={handleChange} required className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block font-semibold">Matrícula *</label>
            <input type="number" name="matricula" value={formData.matricula} onChange={handleChange} required className="w-full p-2 border rounded" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block font-semibold">Telefone *</label>
            <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} required className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block font-semibold">E-mail</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" />
          </div>
        </div>
        <div className="mt-4">
          <label className="block font-semibold">Órgão de Aproveitamento *</label>
          <textarea name="orgao" value={formData.orgao} onChange={handleChange} required className="w-full p-2 border rounded" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block font-semibold">Data de Admissão *</label>
            <input type="date" name="dataEmissao" value={formData.dataEmissao} onChange={handleChange} required className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block font-semibold">Data de Exoneração *</label>
            <input type="date" name="dataExoneracao" value={formData.dataExoneracao} onChange={handleChange} required className="w-full p-2 border rounded" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {Object.keys(formData.arquivos).map((key) => (
            <div key={key}>
              <label className="block font-semibold">{key.toUpperCase()} *</label>
              <input type="file" name={key} onChange={handleFileChange} required className="w-full p-2 border rounded" />
            </div>
          ))}
        </div>
        <button type="submit" className="mt-10 w-full bg-blue-900 text-white font-semibold p-2 rounded-xl hover:bg-blue-950">
          Enviar Formulário
        </button>
      </form>

      {/* Mensagens de Sucesso ou Erro centralizadas */}
      {successMessage && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white p-4 rounded-lg shadow-lg">
          {successMessage}
        </div>
      )}

      {errorMessage && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white p-4 rounded-lg shadow-lg">
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default Formulario;
