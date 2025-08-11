
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
      className="fixed bottom-3 xs:bottom-4 sm:bottom-5 md:bottom-6 lg:bottom-7 xl:bottom-8 right-3 xs:right-4 sm:right-5 md:right-6 lg:right-7 xl:right-8 bg-green-500 hover:bg-green-600 text-white p-2.5 xs:p-3 sm:p-3.5 md:p-4 lg:p-5 xl:p-6 2xl:p-7 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 z-50 animate-pulse hover:animate-none transform hover:scale-110"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12" />
    </button>
  );
};

export default WhatsAppButton;
