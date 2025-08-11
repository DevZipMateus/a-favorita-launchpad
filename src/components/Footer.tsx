
import React from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xs:gap-7 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 2xl:gap-16 mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2 space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start">
              <img 
                src="/lovable-uploads/d9d468eb-f2ce-4282-b1ca-897521b53f23.png" 
                alt="A Favorita - Materiais de Construção" 
                className="h-8 xs:h-9 sm:h-10 md:h-12 lg:h-14 xl:h-16 2xl:h-20 w-auto bg-white p-1.5 xs:p-2 sm:p-2.5 md:p-3 lg:p-4 rounded-lg shadow-lg transition-transform hover:scale-105"
              />
            </div>
            <p className="text-gray-300 leading-relaxed max-w-sm xs:max-w-md sm:max-w-lg text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl mx-auto sm:mx-0">
              Oferecemos tudo o que você precisa em materiais de construção, agropecuária e pesca, 
              sempre com os melhores preços da região e atendimento personalizado.
            </p>
          </div>

          {/* Contato */}
          <div className="space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 text-center sm:text-left">
            <h4 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold mb-3 xs:mb-4 sm:mb-5 md:mb-6 lg:mb-8">Contato</h4>
            <div className="space-y-2 xs:space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
              <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 md:gap-5 justify-center sm:justify-start group">
                <Phone className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary-400 flex-shrink-0 transition-transform group-hover:scale-110" />
                <a 
                  href="tel:+5591991713205"
                  className="text-gray-300 hover:text-white transition-colors text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"
                >
                  (91) 99171-3205
                </a>
              </div>
              <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 md:gap-5 justify-center sm:justify-start group">
                <Mail className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary-400 flex-shrink-0 transition-transform group-hover:scale-110" />
                <a 
                  href="mailto:afavoritaloja9@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl break-all sm:break-normal"
                >
                  afavoritaloja9@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2 xs:gap-3 sm:gap-4 md:gap-5 justify-center sm:justify-start group">
                <MapPin className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary-400 mt-1 flex-shrink-0 transition-transform group-hover:scale-110" />
                <a 
                  href="https://maps.app.goo.gl/cqkH4GzbrCJfVb329"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"
                >
                  Rua São Francisco
                </a>
              </div>
            </div>
          </div>

          {/* Horário */}
          <div className="space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 text-center sm:text-left">
            <h4 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold mb-3 xs:mb-4 sm:mb-5 md:mb-6 lg:mb-8">Horário</h4>
            <div className="space-y-2 xs:space-y-2.5 sm:space-y-3 md:space-y-4 text-gray-300 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              <p><span className="text-white font-medium">Seg - Sáb:</span> 8:00 - 18:00</p>
            </div>
            
            <div className="pt-3 xs:pt-4 sm:pt-5 md:pt-6 lg:pt-8">
              <a
                href="https://www.instagram.com/loja.afavorita1?igsh=aTFtMXBsaWNnNTg1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 xs:gap-2 sm:gap-3 md:gap-4 text-pink-400 hover:text-pink-300 transition-all duration-200 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl group"
              >
                <Instagram className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform group-hover:scale-110" />
                <span>@loja.afavorita1</span>
              </a>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-gray-800 pt-4 xs:pt-5 sm:pt-6 md:pt-8 lg:pt-10 xl:pt-12">
          <div className="flex flex-col xs:flex-col sm:flex-row justify-between items-center gap-3 xs:gap-4 sm:gap-6 md:gap-8">
            <div className="text-gray-400 text-center sm:text-left text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
              <p>&copy; {currentYear} R,B. DE ABREU LTDA - A Favorita. Todos os direitos reservados.</p>
            </div>
            <div className="text-gray-400 text-center sm:text-right text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
              <p>Venha conhecer e construir com a gente!</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
