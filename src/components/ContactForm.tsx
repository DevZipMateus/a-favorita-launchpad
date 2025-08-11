
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
    <div className="bg-white p-6 sm:p-8 lg:p-10 xl:p-12 rounded-2xl shadow-xl">
      <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 mb-6 sm:mb-8 lg:mb-10">Fale Conosco</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8 lg:space-y-10">
        <div>
          <label htmlFor="name" className="block text-sm sm:text-base lg:text-lg xl:text-xl font-medium text-gray-700 mb-2 sm:mb-3 lg:mb-4">
            Nome Completo *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base lg:text-lg xl:text-xl"
            placeholder="Seu nome completo"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm sm:text-base lg:text-lg xl:text-xl font-medium text-gray-700 mb-2 sm:mb-3 lg:mb-4">
            E-mail *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base lg:text-lg xl:text-xl"
            placeholder="seu@email.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm sm:text-base lg:text-lg xl:text-xl font-medium text-gray-700 mb-2 sm:mb-3 lg:mb-4">
            Telefone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base lg:text-lg xl:text-xl"
            placeholder="(91) 99999-9999"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm sm:text-base lg:text-lg xl:text-xl font-medium text-gray-700 mb-2 sm:mb-3 lg:mb-4">
            Mensagem *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={4}
            className="w-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none text-sm sm:text-base lg:text-lg xl:text-xl"
            placeholder="Digite sua mensagem aqui..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-primary-500 text-white py-4 sm:py-5 lg:py-6 px-6 sm:px-8 lg:px-10 rounded-lg hover:bg-primary-600 transition-all duration-200 font-semibold flex items-center justify-center gap-3 sm:gap-4 lg:gap-5 text-base sm:text-lg lg:text-xl xl:text-2xl shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          <Send size={20} />
          Enviar via WhatsApp
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
