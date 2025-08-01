
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
    <section id="contato" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-800 mb-4 sm:mb-5 md:mb-6 lg:mb-8 font-poppins">
            Entre em <span className="text-primary-500">Contato</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            Estamos prontos para atendê-lo! Entre em contato conosco para tirar dúvidas ou fazer seu orçamento.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20">
          <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
            <ContactForm />
          </div>

          <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
            <div className="bg-white p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded-2xl shadow-xl">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 mb-6 sm:mb-7 md:mb-8 lg:mb-10">Outras Formas de Contato</h3>
              
              <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 xl:space-y-10">
                <div className="flex items-start gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors group">
                  <Phone className="text-primary-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-1 sm:mb-2">Telefone</h4>
                    <p className="text-gray-600 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl break-all">(91) 99171-3205</p>
                    <a
                      href="tel:+5591991713205"
                      className="text-primary-500 hover:text-primary-600 font-medium text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl transition-colors duration-200"
                    >
                      Ligar Agora
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 bg-secondary-50 rounded-lg hover:bg-secondary-100 transition-colors group">
                  <MessageCircle className="text-secondary-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-1 sm:mb-2">WhatsApp</h4>
                    <p className="text-gray-600 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">Atendimento rápido e direto</p>
                    <button
                      onClick={openWhatsApp}
                      className="text-secondary-500 hover:text-secondary-600 font-medium text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl transition-colors duration-200"
                    >
                      Abrir WhatsApp
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 bg-accent-50 rounded-lg hover:bg-accent-100 transition-colors group">
                  <Mail className="text-accent-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-1 sm:mb-2">E-mail</h4>
                    <p className="text-gray-600 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl break-all">afavoritaloja9@gmail.com</p>
                    <a
                      href="mailto:afavoritaloja9@gmail.com"
                      className="text-accent-500 hover:text-accent-600 font-medium text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl transition-colors duration-200"
                    >
                      Enviar E-mail
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors group">
                  <MapPin className="text-primary-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-1 sm:mb-2">Endereço</h4>
                    <p className="text-gray-600 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">Rua São Francisco</p>
                    <a
                      href="https://maps.app.goo.gl/cqkH4GzbrCJfVb329"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-500 hover:text-primary-600 font-medium text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl transition-colors duration-200"
                    >
                      Ver no Mapa
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded-2xl shadow-xl">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 lg:mb-8">Horário de Atendimento</h3>
              <div className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                <p><strong>Segunda a Sábado:</strong> 8:00 - 18:00</p>
              </div>
              <div className="mt-4 sm:mt-5 md:mt-6 lg:mt-8 xl:mt-10 p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 bg-white/20 rounded-lg">
                <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl opacity-95 leading-relaxed">
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
