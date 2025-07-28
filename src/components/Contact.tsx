
import React from 'react';
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';

const Contact = () => {
  const openWhatsApp = () => {
    const message = "Olá! Vim do site da A Favorita. Gostaria de mais informações sobre seus produtos.";
    const whatsappUrl = `https://wa.me/5591991713205?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contato" className="py-16 sm:py-20 lg:py-24 xl:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 mb-4 sm:mb-6 lg:mb-8 font-poppins">
            Entre em <span className="text-primary-500">Contato</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Estamos prontos para atendê-lo! Entre em contato conosco para tirar dúvidas ou fazer seu orçamento.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20">
          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            <ContactForm />
          </div>

          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            <div className="bg-white p-6 sm:p-8 lg:p-10 xl:p-12 rounded-2xl shadow-xl">
              <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 mb-6 sm:mb-8 lg:mb-10">Outras Formas de Contato</h3>
              
              <div className="space-y-6 sm:space-y-8 lg:space-y-10">
                <div className="flex items-start gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8 bg-primary-50 rounded-lg">
                  <Phone className="text-primary-500 mt-1 flex-shrink-0" size={28} />
                  <div>
                    <h4 className="font-semibold text-gray-800 text-base sm:text-lg lg:text-xl xl:text-2xl mb-2">Telefone</h4>
                    <p className="text-gray-600 mb-3 text-sm sm:text-base lg:text-lg xl:text-xl">(91) 99171-3205</p>
                    <a
                      href="tel:+5591991713205"
                      className="text-primary-500 hover:text-primary-600 font-medium text-sm sm:text-base lg:text-lg xl:text-xl transition-colors duration-200"
                    >
                      Ligar Agora
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8 bg-secondary-50 rounded-lg">
                  <MessageCircle className="text-secondary-500 mt-1 flex-shrink-0" size={28} />
                  <div>
                    <h4 className="font-semibold text-gray-800 text-base sm:text-lg lg:text-xl xl:text-2xl mb-2">WhatsApp</h4>
                    <p className="text-gray-600 mb-3 text-sm sm:text-base lg:text-lg xl:text-xl">Atendimento rápido e direto</p>
                    <button
                      onClick={openWhatsApp}
                      className="text-secondary-500 hover:text-secondary-600 font-medium text-sm sm:text-base lg:text-lg xl:text-xl transition-colors duration-200"
                    >
                      Abrir WhatsApp
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8 bg-accent-50 rounded-lg">
                  <Mail className="text-accent-500 mt-1 flex-shrink-0" size={28} />
                  <div>
                    <h4 className="font-semibold text-gray-800 text-base sm:text-lg lg:text-xl xl:text-2xl mb-2">E-mail</h4>
                    <p className="text-gray-600 mb-3 text-sm sm:text-base lg:text-lg xl:text-xl break-all">afavoritaloja9@gmail.com</p>
                    <a
                      href="mailto:afavoritaloja9@gmail.com"
                      className="text-accent-500 hover:text-accent-600 font-medium text-sm sm:text-base lg:text-lg xl:text-xl transition-colors duration-200"
                    >
                      Enviar E-mail
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8 bg-primary-50 rounded-lg">
                  <MapPin className="text-primary-500 mt-1 flex-shrink-0" size={28} />
                  <div>
                    <h4 className="font-semibold text-gray-800 text-base sm:text-lg lg:text-xl xl:text-2xl mb-2">Endereço</h4>
                    <p className="text-gray-600 mb-3 text-sm sm:text-base lg:text-lg xl:text-xl">Rua São Francisco</p>
                    <a
                      href="https://maps.app.goo.gl/cqkH4GzbrCJfVb329"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-500 hover:text-primary-600 font-medium text-sm sm:text-base lg:text-lg xl:text-xl transition-colors duration-200"
                    >
                      Ver no Mapa
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white p-6 sm:p-8 lg:p-10 xl:p-12 rounded-2xl shadow-xl">
              <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8">Horário de Atendimento</h3>
              <div className="space-y-3 sm:space-y-4 lg:space-y-6 text-sm sm:text-base lg:text-lg xl:text-xl">
                <p><strong>Segunda a Sexta:</strong> 7:00 - 18:00</p>
                <p><strong>Sábado:</strong> 7:00 - 17:00</p>
                <p><strong>Domingo:</strong> 8:00 - 12:00</p>
              </div>
              <div className="mt-6 sm:mt-8 lg:mt-10 p-4 sm:p-6 lg:p-8 bg-white/20 rounded-lg">
                <p className="text-sm sm:text-base lg:text-lg xl:text-xl opacity-95 leading-relaxed">
                  💡 <strong>Dica:</strong> Entre em contato via WhatsApp para um atendimento mais rápido!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
