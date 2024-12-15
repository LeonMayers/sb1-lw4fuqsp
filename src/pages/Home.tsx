import React from 'react';
import { Shield, Cpu, Wrench, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1588702547919-26089e690ecc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-blue-900/75"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Soluções em Tecnologia para seu Negócio
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Manutenção, upgrades e suporte técnico especializado para computadores e notebooks
          </p>
          <Link
            to="/contato"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
          >
            Solicite um Orçamento
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Cpu className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Manutenção de Computadores</h3>
              <p className="text-gray-600">
                Diagnóstico e reparo de problemas em desktops e notebooks
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Wrench className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Upgrades de Hardware</h3>
              <p className="text-gray-600">
                Melhorias em memória, armazenamento e processamento
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Shield className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Limpeza e Manutenção</h3>
              <p className="text-gray-600">
                Limpeza completa e manutenção preventiva
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Profissional de TI"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Sobre a LM Tecnologia</h2>
              <p className="text-gray-600 mb-6">
                Com formação em Engenharia de Software e ampla experiência no mercado,
                oferecemos soluções tecnológicas personalizadas para empresas e usuários
                domésticos em Maringá e região.
              </p>
              <div className="flex items-center space-x-4">
                <Award className="h-8 w-8 text-blue-500" />
                <span className="text-lg font-semibold">
                  Profissional Certificado em Engenharia de Software
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}