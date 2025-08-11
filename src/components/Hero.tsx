
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
      
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-4 xs:gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 items-center min-h-[calc(100vh-120px)] xs:min-h-[calc(100vh-140px)] sm:min-h-[calc(100vh-160px)] md:min-h-[calc(100vh-180px)] lg:min-h-[calc(100vh-200px)]">
          <div className="space-y-3 xs:space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 xl:space-y-12 animate-fade-in text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-1 xs:space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5 xl:space-y-6">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white font-poppins leading-tight drop-shadow-lg">
                <span className="text-primary-500">A</span> <span className="text-primary-300">FAVORITA</span>
              </h1>
              <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-gray-100 font-medium drop-shadow-md">
                Materiais de Construção & Agropecuária
              </p>
            </div>

            <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-100 leading-relaxed max-w-full lg:max-w-2xl xl:max-w-3xl mx-auto lg:mx-0 drop-shadow-md px-1 xs:px-2 sm:px-0">
              Tudo o que você precisa em materiais de construção, desde itens básicos até soluções completas para pequenas reformas e grandes obras. 
              <strong className="text-primary-300"> Produtos de qualidade com preços acessíveis!</strong>
            </p>

            <div className="flex flex-col gap-2 xs:gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 justify-center lg:justify-start px-1 xs:px-2 sm:px-0">
              <button
                onClick={() => scrollToSection('servicos')}
                className="bg-primary-500 text-white px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-2.5 xs:py-3 sm:py-4 md:py-5 lg:py-6 xl:py-7 rounded-lg hover:bg-primary-600 transition-all duration-300 font-semibold text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl shadow-lg hover:shadow-xl transform hover:scale-105 w-full"
              >
                Conheça Nossos Produtos
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="border-2 border-white text-white px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-2.5 xs:py-3 sm:py-4 md:py-5 lg:py-6 xl:py-7 rounded-lg hover:bg-white hover:text-primary-500 transition-all duration-300 font-semibold text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl backdrop-blur-sm w-full"
              >
                Fale Conosco
              </button>
            </div>

            <div className="flex flex-col gap-2 xs:gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 pt-2 xs:pt-3 sm:pt-4 md:pt-6 lg:pt-8 xl:pt-10 justify-center lg:justify-start px-1 xs:px-2 sm:px-0">
              <div className="flex items-center gap-1.5 xs:gap-2 sm:gap-3 md:gap-4 justify-center lg:justify-start">
                <Phone className="text-white flex-shrink-0 w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8" />
                <span className="text-gray-100 drop-shadow-sm text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">(91) 99171-3205</span>
              </div>
              <div className="flex items-center gap-1.5 xs:gap-2 sm:gap-3 md:gap-4 justify-center lg:justify-start">
                <Mail className="text-white flex-shrink-0 w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8" />
                <span className="text-gray-100 drop-shadow-sm text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl break-all sm:break-normal">afavoritaloja9@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in-right order-1 lg:order-last">
            <div className="rounded-lg xs:rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl mx-auto max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none">
              <video
                src="/lovable-uploads/af.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
                style={{ minHeight: '180px', maxHeight: '400px' }}
              />
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('sobre')}
        className="absolute bottom-2 xs:bottom-3 sm:bottom-4 md:bottom-6 lg:bottom-8 xl:bottom-10 left-1/2 transform -translate-x-1/2 text-white hover:text-primary-300 transition-colors duration-300 animate-bounce drop-shadow-lg"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10" />
      </button>
    </section>
  );
};

export default Hero;
