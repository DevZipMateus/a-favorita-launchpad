
import React from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start">
              <img 
                src="/lovable-uploads/d9d468eb-f2ce-4282-b1ca-897521b53f23.png" 
                alt="A Favorita - Materiais de Construção" 
                className="h-12 sm:h-16 w-auto bg-white p-2 rounded-lg"
              />
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md text-sm sm:text-base mx-auto sm:mx-0">
              Oferecemos tudo o que você precisa em materiais de construção, agropecuária e pesca, 
              sempre com os melhores preços da região e atendimento personalizado.
            </p>
          </div>

          {/* Contato */}
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
            <h4 className="text-lg font-semibold mb-3 sm:mb-4">Contato</h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2 sm:gap-3 justify-center sm:justify-start">
                <Phone size={16} className="text-primary-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">(91) 99171-3205</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 justify-center sm:justify-start">
                <Mail size={16} className="text-primary-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base break-all">afavoritaloja9@gmail.com</span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3 justify-center sm:justify-start">
                <MapPin size={16} className="text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">Rua São Francisco</span>
              </div>
            </div>
          </div>

          {/* Horário */}
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
            <h4 className="text-lg font-semibold mb-3 sm:mb-4">Horário</h4>
            <div className="space-y-1 sm:space-y-2 text-gray-300 text-sm sm:text-base">
              <p><span className="text-white">Seg - Sex:</span> 7:00 - 18:00</p>
              <p><span className="text-white">Sábado:</span> 7:00 - 17:00</p>
              <p><span className="text-white">Domingo:</span> 8:00 - 12:00</p>
            </div>
            
            <div className="pt-3 sm:pt-4">
              <a
                href="https://www.instagram.com/loja.afavorita1?igsh=aTFtMXBsaWNnNTg1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors duration-200 text-sm sm:text-base"
              >
                <Instagram size={16} />
                <span>@loja.afavorita1</span>
              </a>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <div className="text-gray-400 text-center md:text-left text-sm sm:text-base">
              <p>&copy; {currentYear} R,B. DE ABREU LTDA - A Favorita. Todos os direitos reservados.</p>
            </div>
            <div className="text-gray-400 text-center md:text-right text-sm sm:text-base">
              <p>Venha conhecer e construir com a gente!</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
