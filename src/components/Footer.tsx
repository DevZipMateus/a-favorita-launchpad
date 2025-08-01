
import React from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16 mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start">
              <img 
                src="/lovable-uploads/d9d468eb-f2ce-4282-b1ca-897521b53f23.png" 
                alt="A Favorita - Materiais de Construção" 
                className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 2xl:h-24 w-auto bg-white p-2 sm:p-2.5 md:p-3 lg:p-4 rounded-lg shadow-lg transition-transform hover:scale-105"
              />
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mx-auto sm:mx-0">
              Oferecemos tudo o que você precisa em materiais de construção, agropecuária e pesca, 
              sempre com os melhores preços da região e atendimento personalizado.
            </p>
          </div>

          {/* Contato */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-4 sm:mb-5 md:mb-6 lg:mb-8">Contato</h4>
            <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
              <div className="flex items-center gap-3 sm:gap-4 md:gap-5 justify-center sm:justify-start group">
                <Phone size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary-400 flex-shrink-0 transition-transform group-hover:scale-110" />
                <a 
                  href="tel:+5591991713205"
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
                >
                  (91) 99171-3205
                </a>
              </div>
              <div className="flex items-center gap-3 sm:gap-4 md:gap-5 justify-center sm:justify-start group">
                <Mail size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary-400 flex-shrink-0 transition-transform group-hover:scale-110" />
                <a 
                  href="mailto:afavoritaloja9@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl break-all"
                >
                  afavoritaloja9@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3 sm:gap-4 md:gap-5 justify-center sm:justify-start group">
                <MapPin size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary-400 mt-1 flex-shrink-0 transition-transform group-hover:scale-110" />
                <a 
                  href="https://maps.app.goo.gl/cqkH4GzbrCJfVb329"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
                >
                  Rua São Francisco
                </a>
              </div>
            </div>
          </div>

          {/* Horário */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-4 sm:mb-5 md:mb-6 lg:mb-8">Horário</h4>
            <div className="space-y-2 sm:space-y-3 md:space-y-4 text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              <p><span className="text-white font-medium">Seg - Sáb:</span> 8:00 - 18:00</p>
            </div>
            
            <div className="pt-4 sm:pt-5 md:pt-6 lg:pt-8">
              <a
                href="https://www.instagram.com/loja.afavorita1?igsh=aTFtMXBsaWNnNTg1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 sm:gap-3 md:gap-4 text-pink-400 hover:text-pink-300 transition-all duration-200 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl group"
              >
                <Instagram size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform group-hover:scale-110" />
                <span>@loja.afavorita1</span>
              </a>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8 md:pt-10 lg:pt-12">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 md:gap-8">
            <div className="text-gray-400 text-center sm:text-left text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
              <p>&copy; {currentYear} R,B. DE ABREU LTDA - A Favorita. Todos os direitos reservados.</p>
            </div>
            <div className="text-gray-400 text-center sm:text-right text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
              <p>Venha conhecer e construir com a gente!</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
