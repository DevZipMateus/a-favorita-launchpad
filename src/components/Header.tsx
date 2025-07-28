
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { label: 'Início', id: 'inicio' },
    { label: 'Sobre', id: 'sobre' },
    { label: 'Serviços', id: 'servicos' },
    { label: 'Localização', id: 'localizacao' },
    { label: 'Contato', id: 'contato' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-blue-50/95 backdrop-blur-md shadow-lg' : 'bg-blue-50/90'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-3 sm:py-4 lg:py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/d9d468eb-f2ce-4282-b1ca-897521b53f23.png" 
              alt="A Favorita - Materiais de Construção" 
              className="h-10 sm:h-12 lg:h-14 xl:h-16 w-auto transition-all duration-300"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 xl:space-x-10">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group text-sm lg:text-base xl:text-lg"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contato')}
              className="bg-primary-500 text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-lg hover:bg-primary-600 transition-all duration-200 font-medium text-sm lg:text-base xl:text-lg shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Fale Conosco
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg animate-fade-in">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-blue-50 transition-all duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contato')}
              className="block w-full mt-2 mx-4 bg-primary-500 text-white px-4 py-3 rounded-lg hover:bg-primary-600 transition-all duration-200 font-medium shadow-md"
            >
              Fale Conosco
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
