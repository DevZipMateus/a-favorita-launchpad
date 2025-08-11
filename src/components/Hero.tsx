
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
        backgroundImage: 'url(/lovable-uploads/78a8e5eb-d863-4f39-9338-c75f04ef3f03.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay para melhorar a legibilidade */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 items-center min-h-[calc(100vh-200px)]">
          <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 xl:space-y-12 animate-fade-in text-center lg:text-left order-1 lg:order-1">
            <div className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5 xl:space-y-6">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white font-poppins leading-tight drop-shadow-lg">
                <span className="text-primary-500">A</span> <span className="text-primary-300">FAVORITA</span>
              </h1>
              <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-gray-100 font-medium drop-shadow-md">
                Materiais de Construção & Agropecuária
              </p>
            </div>

            <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-gray-100 leading-relaxed max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto lg:mx-0 drop-shadow-md px-2 sm:px-0">
              Tudo o que você precisa em materiais de construção, desde itens básicos até soluções completas para pequenas reformas e grandes obras. 
              <strong className="text-primary-300"> Produtos de qualidade com preços acessíveis!</strong>
            </p>

            <div className="flex flex-col xs:flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 justify-center lg:justify-start px-2 sm:px-0">
              <button
                onClick={() => scrollToSection('servicos')}
                className="bg-primary-500 text-white px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-3 xs:py-3.5 sm:py-4 md:py-5 lg:py-6 xl:py-7 rounded-lg hover:bg-primary-600 transition-all duration-300 font-semibold text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto"
              >
                Conheça Nossos Produtos
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="border-2 border-white text-white px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-3 xs:py-3.5 sm:py-4 md:py-5 lg:py-6 xl:py-7 rounded-lg hover:bg-white hover:text-primary-500 transition-all duration-300 font-semibold text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl backdrop-blur-sm w-full sm:w-auto"
              >
                Fale Conosco
              </button>
            </div>

            <div className="flex flex-col xs:flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 pt-3 sm:pt-4 md:pt-6 lg:pt-8 xl:pt-10 justify-center lg:justify-start px-2 sm:px-0">
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4 justify-center lg:justify-start">
                <Phone className="text-white flex-shrink-0 w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                <span className="text-gray-100 drop-shadow-sm text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">(91) 99171-3205</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4 justify-center lg:justify-start">
                <Mail className="text-white flex-shrink-0 w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                <span className="text-gray-100 drop-shadow-sm text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl break-all sm:break-normal">afavoritaloja9@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in-right order-2 lg:order-last">
            <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl mx-auto max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none">
              <video
                src="/lovable-uploads/af.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
                style={{ minHeight: '240px', maxHeight: '600px' }}
              />
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('sobre')}
        className="absolute bottom-4 xs:bottom-5 sm:bottom-6 md:bottom-8 lg:bottom-10 xl:bottom-12 left-1/2 transform -translate-x-1/2 text-white hover:text-primary-300 transition-colors duration-300 animate-bounce drop-shadow-lg"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 xl:w-12 xl:h-12" />
      </button>
    </section>
  );
};

export default Hero;
