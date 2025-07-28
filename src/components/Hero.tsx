
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
    <section id="inicio" className="min-h-screen relative bg-gradient-to-br from-primary-50 to-white flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 font-poppins leading-tight">
                A <span className="text-primary-500">FAVORITA</span>
              </h1>
              <p className="text-xl text-gray-600 font-medium">
                Materiais de Construção & Agropecuária
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
              Tudo o que você precisa em materiais de construção, desde itens básicos até soluções completas para pequenas reformas e grandes obras. 
              <strong className="text-primary-600"> Produtos de qualidade com preços acessíveis!</strong>
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
                className="border-2 border-primary-500 text-primary-500 px-8 py-4 rounded-lg hover:bg-primary-50 transition-all duration-300 font-semibold text-lg"
              >
                Fale Conosco
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <div className="flex items-center gap-3">
                <Phone className="text-primary-500" size={20} />
                <span className="text-gray-700">(91) 99171-3205</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-primary-500" size={20} />
                <span className="text-gray-700">afavoritaloja9@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 text-center">Nossos Diferenciais</h3>
              
              <div className="grid gap-4">
                <div className="flex items-start gap-3 p-4 bg-primary-50 rounded-lg">
                  <div className="w-3 h-3 bg-primary-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Produtos de Qualidade</h4>
                    <p className="text-gray-600">Tubos, conexões, ferramentas e materiais elétricos</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-secondary-50 rounded-lg">
                  <div className="w-3 h-3 bg-secondary-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Preços Acessíveis</h4>
                    <p className="text-gray-600">Os melhores preços da região</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-accent-50 rounded-lg">
                  <div className="w-3 h-3 bg-accent-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Variedade Completa</h4>
                    <p className="text-gray-600">Construção, agropecuária e pesca</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-primary-50 rounded-lg">
                  <div className="w-3 h-3 bg-primary-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Atendimento Personalizado</h4>
                    <p className="text-gray-600">Próximo e atencioso</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('sobre')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-500 hover:text-primary-600 transition-colors duration-300 animate-bounce"
        aria-label="Scroll to next section"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
