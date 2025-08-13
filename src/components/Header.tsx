
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-lg transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      {/* Top Bar */}
      <div className="bg-primary text-white py-1 sm:py-2 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center text-xs sm:text-sm space-y-1 sm:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4 lg:space-x-6">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-xs sm:text-sm">(91) 99171-3205</span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-xs sm:text-sm">Anapu, Pará</span>
              </div>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="text-xs sm:text-sm">Segunda a Sábado: 8:00 - 18:00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b border-gray-100 py-3 sm:py-4 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary font-poppins">
                A Favorita
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-6 xl:space-x-8">
              <Link to="/" className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium text-sm xl:text-base">
                Início
              </Link>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium text-sm xl:text-base"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium text-sm xl:text-base"
              >
                Serviços
              </button>
              <Link to="/catalogo" className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium text-sm xl:text-base">
                Catálogo
              </Link>
              <button 
                onClick={() => scrollToSection('localizacao')}
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium text-sm xl:text-base"
              >
                Localização
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium text-sm xl:text-base"
              >
                Contato
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 shadow-lg">
          <nav className="container mx-auto py-4 px-4">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium py-2 px-3 rounded-md hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-left text-gray-700 hover:text-primary transition-colors duration-200 font-medium py-2 px-3 rounded-md hover:bg-gray-50"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-left text-gray-700 hover:text-primary transition-colors duration-200 font-medium py-2 px-3 rounded-md hover:bg-gray-50"
              >
                Serviços
              </button>
              <Link 
                to="/catalogo" 
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium py-2 px-3 rounded-md hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Catálogo
              </Link>
              <button 
                onClick={() => scrollToSection('localizacao')}
                className="text-left text-gray-700 hover:text-primary transition-colors duration-200 font-medium py-2 px-3 rounded-md hover:bg-gray-50"
              >
                Localização
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-left text-gray-700 hover:text-primary transition-colors duration-200 font-medium py-2 px-3 rounded-md hover:bg-gray-50"
              >
                Contato
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
