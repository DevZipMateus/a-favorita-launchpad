
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
        backgroundImage: `url('/lovable-uploads/e742f591-de28-4abf-85fc-397eb94317db.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay para melhorar a legibilidade */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start pt-16">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-white font-poppins leading-tight drop-shadow-lg">
                A <span className="text-primary-300">FAVORITA</span>
              </h1>
              <p className="text-xl text-gray-100 font-medium drop-shadow-md">
                Materiais de Construção & Agropecuária
              </p>
            </div>

            <p className="text-lg text-gray-100 leading-relaxed max-w-2xl drop-shadow-md">
              Tudo o que você precisa em materiais de construção, desde itens básicos até soluções completas para pequenas reformas e grandes obras. 
              <strong className="text-primary-300"> Produtos de qualidade com preços acessíveis!</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('servicos')}
                className="bg-primary-500 text-white px-8 py-4 rounded-lg hover:bg-primary-600 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Conheça Nossos Produtos
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-500 transition-all duration-300 font-semibold text-lg backdrop-blur-sm"
              >
                Fale Conosco
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <div className="flex items-center gap-3">
                <Phone className="text-primary-300" size={20} />
                <span className="text-gray-100 drop-shadow-sm">(91) 99171-3205</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-primary-300" size={20} />
                <span className="text-gray-100 drop-shadow-sm">afavoritaloja9@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in-right mt-12">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <video
                src="/lovable-uploads/af.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
                style={{ maxHeight: '500px' }}
              />
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('sobre')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-primary-300 transition-colors duration-300 animate-bounce drop-shadow-lg"
        aria-label="Scroll to next section"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
