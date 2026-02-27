'use client';
import React from 'react';
import { FaCalendarAlt, FaBullseye, FaClock, FaPhoneAlt, FaShieldAlt, FaExternalLinkAlt, FaChevronRight } from 'react-icons/fa';

const ProvaDeVidaPage: React.FC = () => {
    const links = [
        {
            year: 2025,
            url: 'https://jaboatao.provadevida.app.br/#/',
            color: 'from-blue-600 to-blue-800',
            hoverColor: 'hover:from-blue-700 hover:to-blue-900',
            icon: <FaCalendarAlt className="w-12 h-12" />
        },
        {
            year: 2026,
            url: 'https://2026.jaboatao.provadevida.app.br/#/',
            color: 'from-green-600 to-green-800',
            hoverColor: 'hover:from-green-700 hover:to-green-900',
            icon: <FaBullseye className="w-12 h-12" />
        },
    ];

    return (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
            {/* Main Content */}
            <main className="container mx-auto px-4">
                {/* Cards de Seleção */}
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {links.map((link) => (
                            <a
                                key={link.year}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group relative overflow-hidden rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl`}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${link.color} ${link.hoverColor} transition-all duration-300`}></div>

                                {/* Padrão de fundo */}
                                <div
                                    className="absolute inset-0 opacity-10"
                                    style={{
                                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                                        backgroundSize: '40px 40px'
                                    }}
                                ></div>

                                <div className="relative z-10 p-8">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="text-white opacity-80 group-hover:scale-110 transition-transform">
                                            {link.icon}
                                        </div>
                                        <div className="bg-white/20 p-3 rounded-full">
                                            <FaExternalLinkAlt className="w-6 h-6 text-white" />
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <div className="text-5xl font-bold text-white mb-2">
                                            {link.year}
                                        </div>
                                        <div className="text-2xl font-semibold text-white">
                                            Prova de Vida
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between pt-6 border-t border-white/30">
                                        <span className="text-white/90 text-sm font-medium">
                                            Sistema de comprovação
                                        </span>
                                        <div className="flex items-center text-white text-sm font-medium">
                                            <span className="mr-2">Acessar</span>
                                            <FaChevronRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>

                                {/* Efeito hover */}
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                            </a>
                        ))}
                    </div>

                    {/* Informações adicionais */}
                    <div className="mt-12 bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Informações importantes</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="flex items-start p-4 bg-blue-50 rounded-lg">
                                <FaClock className="text-blue-600 mr-3 mt-1 w-5 h-5 flex-shrink-0" />
                                <div>
                                    <p className="font-medium text-gray-800">Horário de funcionamento</p>
                                    <p className="text-sm text-gray-600">Segunda à Sexta-Feira, 8hs às 14hs.</p>
                                </div>
                            </div>
                            <div className="flex items-start p-4 bg-green-50 rounded-lg">
                                <FaPhoneAlt className="text-green-600 mr-3 mt-1 w-5 h-5 flex-shrink-0" />
                                <div>
                                    <p className="font-medium text-gray-800">Suporte técnico</p>
                                    <p className="text-sm text-gray-600">Disponível durante o horário comercial</p>
                                </div>
                            </div>
                            <div className="flex items-start p-4 bg-purple-50 rounded-lg">
                                <FaShieldAlt className="text-purple-600 mr-3 mt-1 w-5 h-5 flex-shrink-0" />
                                <div>
                                    <p className="font-medium text-gray-800">Segurança</p>
                                    <p className="text-sm text-gray-600">Sistema certificado e protegido</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ProvaDeVidaPage;