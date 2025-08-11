
import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Criar mensagem para WhatsApp
    const whatsappMessage = `Olá! Vim do site da A Favorita.%0A%0ANome: ${formData.name}%0AEmail: ${formData.email}%0ATelefone: ${formData.phone}%0AMensagem: ${formData.message}`;
    const whatsappUrl = `https://wa.me/5591991713205?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white p-3 xs:p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 2xl:p-12 rounded-xl xs:rounded-2xl shadow-xl">
      <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-4 xs:mb-5 sm:mb-6 md:mb-8 lg:mb-10">Fale Conosco</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-8 lg:space-y-10">
        <div>
          <label htmlFor="name" className="block text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-gray-700 mb-2 xs:mb-2.5 sm:mb-3 md:mb-4">
            Nome Completo *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 py-2.5 xs:py-3 sm:py-3.5 md:py-4 lg:py-5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl"
            placeholder="Seu nome completo"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-gray-700 mb-2 xs:mb-2.5 sm:mb-3 md:mb-4">
            E-mail *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 py-2.5 xs:py-3 sm:py-3.5 md:py-4 lg:py-5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl"
            placeholder="seu@email.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-gray-700 mb-2 xs:mb-2.5 sm:mb-3 md:mb-4">
            Telefone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 py-2.5 xs:py-3 sm:py-3.5 md:py-4 lg:py-5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl"
            placeholder="(91) 99999-9999"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-gray-700 mb-2 xs:mb-2.5 sm:mb-3 md:mb-4">
            Mensagem *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={4}
            className="w-full px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 py-2.5 xs:py-3 sm:py-3.5 md:py-4 lg:py-5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl"
            placeholder="Digite sua mensagem aqui..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-primary-500 text-white py-3 xs:py-3.5 sm:py-4 md:py-5 lg:py-6 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 rounded-lg hover:bg-primary-600 transition-all duration-200 font-semibold flex items-center justify-center gap-2 xs:gap-3 sm:gap-4 md:gap-5 text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          <Send className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
          Enviar via WhatsApp
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
