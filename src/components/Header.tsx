import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Laptop2, Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-blue-900 text-white">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Laptop2 className="h-8 w-8" />
            <span className="text-xl font-bold">LM Tecnologia</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className={`hover:text-blue-200 ${isActive('/') ? 'text-blue-300' : ''}`}>
              Início
            </Link>
            <Link to="/servicos" className={`hover:text-blue-200 ${isActive('/servicos') ? 'text-blue-300' : ''}`}>
              Serviços
            </Link>
            <Link to="/clientes" className={`hover:text-blue-200 ${isActive('/clientes') ? 'text-blue-300' : ''}`}>
              Área do Cliente
            </Link>
            <Link to="/contato" className={`hover:text-blue-200 ${isActive('/contato') ? 'text-blue-300' : ''}`}>
              Contato
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link to="/" className="block py-2 hover:text-blue-200">Início</Link>
            <Link to="/servicos" className="block py-2 hover:text-blue-200">Serviços</Link>
            <Link to="/clientes" className="block py-2 hover:text-blue-200">Área do Cliente</Link>
            <Link to="/contato" className="block py-2 hover:text-blue-200">Contato</Link>
          </div>
        )}
      </nav>
    </header>
  );
}