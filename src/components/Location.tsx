
import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const Location = () => {
  return (
    <section id="localizacao" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-poppins">
            Nossa <span className="text-primary-500">Localização</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Visite nossa loja na Rua São Francisco. Estamos sempre prontos para atendê-lo!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Informações de Contato</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary-500 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Endereço</h4>
                    <p className="text-gray-600">Rua São Francisco</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-primary-500 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Telefone</h4>
                    <p className="text-gray-600">(91) 99171-3205</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="text-primary-500 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-800">E-mail</h4>
                    <p className="text-gray-600">afavoritaloja9@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="text-primary-500 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Horário de Funcionamento</h4>
                    <div className="text-gray-600">
                      <p>Segunda a Sexta: 7:00 - 18:00</p>
                      <p>Sábado: 7:00 - 17:00</p>
                      <p>Domingo: 8:00 - 12:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Por Que Nos Escolher?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700">Localização de fácil acesso</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary-500 rounded-full"></div>
                  <span className="text-gray-700">Estacionamento disponível</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                  <span className="text-gray-700">Atendimento especializado</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-700">Produtos sempre em estoque</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gray-200 rounded-2xl h-96 lg:h-full overflow-hidden">
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
            
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex gap-2">
                <a
                  href="https://www.google.com/maps/search/Rua+São+Francisco/@-1.4,-48.4,15z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-primary-500 text-white text-center py-3 px-4 rounded-lg hover:bg-primary-600 transition-colors duration-200 font-semibold shadow-lg"
                >
                  Ver no Google Maps
                </a>
                <a
                  href="https://www.google.com/maps/dir//Rua+São+Francisco/@-1.4,-48.4,15z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-secondary-500 text-white text-center py-3 px-4 rounded-lg hover:bg-secondary-600 transition-colors duration-200 font-semibold shadow-lg"
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
