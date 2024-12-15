import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">LM Tecnologia</h3>
            <p className="text-gray-300">
              Soluções em tecnologia para seu negócio e residência.
              Manutenção, upgrades e suporte técnico especializado.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <div className="space-y-2">
              <a href="https://wa.me/5544998918867" className="flex items-center space-x-2 text-gray-300 hover:text-white">
                <Phone className="h-5 w-5" />
                <span>(44) 99891-8867</span>
              </a>
              <a href="mailto:leonardo.nunes.mayers@gmail.com" className="flex items-center space-x-2 text-gray-300 hover:text-white">
                <Mail className="h-5 w-5" />
                <span>leonardo.nunes.mayers@gmail.com</span>
              </a>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-5 w-5" />
                <span>Maringá-PR</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Horário de Atendimento</h3>
            <p className="text-gray-300">
              Segunda a Sexta: 8h às 18h<br />
              Sábado: 9h às 13h
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} LM Tecnologia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}