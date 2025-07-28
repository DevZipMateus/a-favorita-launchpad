
import React from 'react';
import { ChevronDown, Phone, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="inicio" 
      className="min-h-screen relative flex items-center"
      style={{
        backgroundColor: '#06264a'
      }}
    >
      {/* Overlay para melhorar a legibilidade */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8 animate-fade-in text-center lg:text-left">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-poppins leading-tight drop-shadow-lg">
                <span className="text-primary-500">A</span> <span className="text-primary-300">FAVORITA</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-100 font-medium drop-shadow-md">
                Materiais de Construção & Agropecuária
              </p>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed max-w-2xl mx-auto lg:mx-0 drop-shadow-md">
              Tudo o que você precisa em materiais de construção, desde itens básicos até soluções completas para pequenas reformas e grandes obras. 
              <strong className="text-primary-300"> Produtos de qualidade com preços acessíveis!</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('servicos')}
                className="bg-primary-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-primary-600 transition-all duration-300 font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto"
              >
                Conheça Nossos Produtos
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-white hover:text-primary-500 transition-all duration-300 font-semibold text-base sm:text-lg backdrop-blur-sm w-full sm:w-auto"
              >
                Fale Conosco
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-2 sm:pt-4 justify-center lg:justify-start">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <Phone className="text-white flex-shrink-0" size={20} />
                <span className="text-gray-100 drop-shadow-sm text-sm sm:text-base">(91) 99171-3205</span>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <Mail className="text-white flex-shrink-0" size={20} />
                <span className="text-gray-100 drop-shadow-sm text-sm sm:text-base break-all sm:break-normal">afavoritaloja9@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in-right order-first lg:order-last">
            <div className="rounded-2xl overflow-hidden shadow-2xl mx-auto max-w-lg lg:max-w-none">
              <video
                src="/lovable-uploads/af.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
                style={{ minHeight: '250px', maxHeight: '600px' }}
              />
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('sobre')}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-primary-300 transition-colors duration-300 animate-bounce drop-shadow-lg"
        aria-label="Scroll to next section"
      >
        <ChevronDown size={28} className="sm:w-8 sm:h-8" />
      </button>
    </section>
  );
};

export default Hero;
