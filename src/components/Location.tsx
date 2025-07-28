
import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const Location = () => {
  return (
    <section id="localizacao" className="py-16 sm:py-20 lg:py-24 xl:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 mb-4 sm:mb-6 lg:mb-8 font-poppins">
            Nossa <span className="text-primary-500">Localização</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-600 max-w-4xl mx-auto px-4 leading-relaxed">
            Visite nossa loja na Rua São Francisco. Estamos sempre prontos para atendê-lo!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20">
          <div className="space-y-8 sm:space-y-10 lg:space-y-12 order-2 lg:order-1">
            <div className="bg-gray-50 p-6 sm:p-8 lg:p-10 xl:p-12 rounded-2xl shadow-lg">
              <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 mb-6 sm:mb-8 lg:mb-10">Informações de Contato</h3>
              
              <div className="space-y-6 sm:space-y-8 lg:space-y-10">
                <div className="flex items-start gap-4 sm:gap-6 lg:gap-8">
                  <MapPin className="text-primary-500 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-800 text-base sm:text-lg lg:text-xl xl:text-2xl mb-2">Endereço</h4>
                    <p className="text-gray-600 text-sm sm:text-base lg:text-lg xl:text-xl">Rua São Francisco</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 sm:gap-6 lg:gap-8">
                  <Phone className="text-primary-500 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-800 text-base sm:text-lg lg:text-xl xl:text-2xl mb-2">Telefone</h4>
                    <p className="text-gray-600 text-sm sm:text-base lg:text-lg xl:text-xl">(91) 99171-3205</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 sm:gap-6 lg:gap-8">
                  <Mail className="text-primary-500 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-800 text-base sm:text-lg lg:text-xl xl:text-2xl mb-2">E-mail</h4>
                    <p className="text-gray-600 text-sm sm:text-base lg:text-lg xl:text-xl break-all">afavoritaloja9@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 sm:gap-6 lg:gap-8">
                  <Clock className="text-primary-500 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-800 text-base sm:text-lg lg:text-xl xl:text-2xl mb-2">Horário de Funcionamento</h4>
                    <div className="text-gray-600 text-sm sm:text-base lg:text-lg xl:text-xl space-y-1 sm:space-y-2">
                      <p>Segunda a Sexta: 7:00 - 18:00</p>
                      <p>Sábado: 7:00 - 17:00</p>
                      <p>Domingo: 8:00 - 12:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-6 sm:p-8 lg:p-10 xl:p-12 rounded-2xl shadow-lg">
              <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 lg:mb-10">Por Que Nos Escolher?</h3>
              <ul className="space-y-4 sm:space-y-6 lg:space-y-8">
                <li className="flex items-center gap-3 sm:gap-4 lg:gap-5">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-primary-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm sm:text-base lg:text-lg xl:text-xl">Localização de fácil acesso</span>
                </li>
                <li className="flex items-center gap-3 sm:gap-4 lg:gap-5">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-secondary-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm sm:text-base lg:text-lg xl:text-xl">Estacionamento disponível</span>
                </li>
                <li className="flex items-center gap-3 sm:gap-4 lg:gap-5">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-accent-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm sm:text-base lg:text-lg xl:text-xl">Atendimento especializado</span>
                </li>
                <li className="flex items-center gap-3 sm:gap-4 lg:gap-5">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-primary-600 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm sm:text-base lg:text-lg xl:text-xl">Produtos sempre em estoque</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="bg-gray-200 rounded-2xl h-64 sm:h-80 lg:h-full overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.4!2d-48.4!3d-1.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48c6c0e5e7c3d%3A0x1234567890abcdef!2sRua%20S%C3%A3o%20Francisco!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa da Loja A Favorita - Rua São Francisco"
              ></iframe>
            </div>
            
            <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 left-3 sm:left-4 lg:left-6 right-3 sm:right-4 lg:right-6">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4">
                <a
                  href="https://www.google.com/maps/search/Rua+São+Francisco/@-1.4,-48.4,15z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-primary-500 text-white text-center py-3 sm:py-4 lg:py-5 px-4 sm:px-6 lg:px-8 rounded-lg hover:bg-primary-600 transition-all duration-200 font-semibold shadow-lg text-sm sm:text-base lg:text-lg xl:text-xl"
                >
                  Ver no Google Maps
                </a>
                <a
                  href="https://www.google.com/maps/dir//Rua+São+Francisco/@-1.4,-48.4,15z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-secondary-500 text-white text-center py-3 sm:py-4 lg:py-5 px-4 sm:px-6 lg:px-8 rounded-lg hover:bg-secondary-600 transition-all duration-200 font-semibold shadow-lg text-sm sm:text-base lg:text-lg xl:text-xl"
                >
                  Como Chegar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
