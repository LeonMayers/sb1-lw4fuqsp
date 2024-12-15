import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Contact() {
  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">Entre em Contato</h1>
          <p className="text-gray-600 text-center mb-12">
            Estamos prontos para ajudar! Entre em contato conosco pelos canais abaixo
            ou preencha o formulário.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/5544998918867"
                    className="flex items-center space-x-3 text-gray-600 hover:text-blue-600"
                  >
                    <Phone className="h-5 w-5" />
                    <span>(44) 99891-8867</span>
                  </a>
                  <a
                    href="mailto:leonardo.nunes.mayers@gmail.com"
                    className="flex items-center space-x-3 text-gray-600 hover:text-blue-600"
                  >
                    <Mail className="h-5 w-5" />
                    <span>leonardo.nunes.mayers@gmail.com</span>
                  </a>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <MapPin className="h-5 w-5" />
                    <span>Maringá-PR</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Clock className="h-5 w-5" />
                    <div>
                      <p>Segunda a Sexta: 8h às 18h</p>
                      <p>Sábado: 9h às 13h</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Atendimento</h2>
                <p className="text-gray-600">
                  Oferecemos atendimento presencial em Maringá e região.
                  Para casos específicos, também realizamos suporte remoto.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}