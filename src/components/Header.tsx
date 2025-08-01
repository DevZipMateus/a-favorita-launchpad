
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determina se o header deve ser visível baseado na direção do scroll
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px
        setIsHeaderVisible(false);
      } else {
        // Scrolling up
        setIsHeaderVisible(true);
      }
      
      // Define se o header tem background blur
      setIsScrolled(currentScrollY > 50);
      
      // Atualiza a última posição do scroll
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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
    } ${
      isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <nav className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 py-2 sm:py-3 md:py-4 lg:py-5 xl:py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-shrink-0">
            <img 
              src="/lovable-uploads/d9d468eb-f2ce-4282-b1ca-897521b53f23.png" 
              alt="A Favorita - Materiais de Construção" 
              className="h-7 xs:h-8 sm:h-9 md:h-10 lg:h-12 xl:h-14 2xl:h-16 w-auto transition-all duration-300 hover:scale-105"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center space-x-6 2xl:space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-primary-600 font-medium transition-all duration-200 relative group text-sm xl:text-base 2xl:text-lg whitespace-nowrap px-2 py-1 rounded-md hover:bg-blue-100/50"
              >
                {item.label}
                <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contato')}
              className="bg-primary-500 text-white px-4 xl:px-6 2xl:px-8 py-2 xl:py-3 2xl:py-4 rounded-lg hover:bg-primary-600 transition-all duration-200 font-medium text-sm xl:text-base 2xl:text-lg shadow-md hover:shadow-lg transform hover:scale-105 whitespace-nowrap"
            >
              Fale Conosco
            </button>
          </div>

          {/* Large Tablet Menu (lg to xl) */}
          <div className="hidden lg:flex xl:hidden items-center space-x-3 xl:space-x-4">
            {menuItems.slice(0, 4).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group text-sm lg:text-base whitespace-nowrap px-1.5 py-1 rounded-md hover:bg-blue-100/50"
              >
                {item.label.replace('Localização', 'Local')}
                <span className="absolute bottom-0 left-1.5 right-1.5 h-0.5 bg-primary-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </button>
            ))}
            <button
              className="p-2 text-gray-700 hover:text-primary-600 transition-colors duration-200 rounded-lg hover:bg-blue-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Medium Tablet Menu (md to lg) */}
          <div className="hidden md:flex lg:hidden items-center space-x-2">
            {menuItems.slice(0, 3).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group text-xs md:text-sm whitespace-nowrap px-1 py-1 rounded-md hover:bg-blue-100/50"
              >
                {item.label}
                <span className="absolute bottom-0 left-1 right-1 h-0.5 bg-primary-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </button>
            ))}
            <button
              className="p-1.5 md:p-2 text-gray-700 hover:text-primary-600 transition-colors duration-200 rounded-lg hover:bg-blue-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {/* Small Tablet/Mobile Menu Button */}
          <button
            className="md:hidden p-1.5 sm:p-2 text-gray-700 hover:text-primary-600 transition-colors duration-200 rounded-lg hover:bg-blue-100 active:scale-95"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
          </button>
        </div>

        {/* Mobile/Tablet Dropdown Menu */}
        {isMenuOpen && (
          <div className="xl:hidden mt-3 py-3 bg-white/98 backdrop-blur-sm rounded-xl shadow-xl border border-blue-100 animate-fade-in">
            <div className="max-h-[70vh] overflow-y-auto">
              {menuItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 sm:px-6 py-3 sm:py-4 text-gray-700 hover:text-primary-600 hover:bg-blue-50/70 transition-all duration-200 font-medium text-sm sm:text-base active:bg-blue-100/70 ${
                    index === 0 ? 'rounded-t-lg' : ''
                  } ${index === menuItems.length - 1 ? 'rounded-b-lg border-b-0' : 'border-b border-blue-100/50'}`}
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 sm:px-6 py-3 sm:py-4 border-t border-blue-100">
                <button
                  onClick={() => scrollToSection('contato')}
                  className="w-full bg-primary-500 text-white px-4 py-3 sm:py-4 rounded-lg hover:bg-primary-600 transition-all duration-200 font-medium text-sm sm:text-base shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Fale Conosco
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
