import React from 'react';
import { ServiceCard } from '../components/ServiceCard';
import { services } from '../constants/services';

export function Services() {
  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Nossos Serviços</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Oferecemos uma ampla gama de serviços técnicos para manter seus equipamentos
          funcionando com máxima eficiência
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              price={service.price}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Precisa de um serviço personalizado?</h2>
          <p className="text-gray-600 mb-8">
            Entre em contato conosco para discutirmos a melhor solução para suas necessidades
          </p>
          <a
            href="https://wa.me/5544998918867"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg inline-flex items-center space-x-2"
          >
            <span>Falar pelo WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}