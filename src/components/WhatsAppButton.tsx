
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const openWhatsApp = () => {
    const message = "Olá! Vim do site da A Favorita. Gostaria de mais informações sobre seus produtos.";
    const whatsappUrl = `https://wa.me/5591991713205?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-4 sm:bottom-6 lg:bottom-8 right-4 sm:right-6 lg:right-8 bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 lg:p-5 xl:p-6 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 z-50 animate-pulse hover:animate-none transform hover:scale-110"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={24} className="sm:w-7 sm:h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10" />
    </button>
  );
};

export default WhatsAppButton;
