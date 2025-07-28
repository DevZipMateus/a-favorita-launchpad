
import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, Send, MapPin } from 'lucide-react';

const Contact = () => {
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

  const openWhatsApp = () => {
    const message = "Olá! Vim do site da A Favorita. Gostaria de mais informações sobre seus produtos.";
    const whatsappUrl = `https://wa.me/5591991713205?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-poppins">
            Entre em <span className="text-primary-500">Contato</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para atendê-lo! Entre em contato conosco para tirar dúvidas ou fazer seu orçamento.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Fale Conosco</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="(91) 99999-9999"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Digite sua mensagem aqui..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-500 text-white py-4 px-6 rounded-lg hover:bg-primary-600 transition-colors duration-200 font-semibold flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Enviar via WhatsApp
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Outras Formas de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-primary-50 rounded-lg">
                  <Phone className="text-primary-500 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Telefone</h4>
                    <p className="text-gray-600 mb-2">(91) 99171-3205</p>
                    <a
                      href="tel:+5591991713205"
                      className="text-primary-500 hover:text-primary-600 font-medium"
                    >
                      Ligar Agora
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-secondary-50 rounded-lg">
                  <MessageCircle className="text-secondary-500 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-800">WhatsApp</h4>
                    <p className="text-gray-600 mb-2">Atendimento rápido e direto</p>
                    <button
                      onClick={openWhatsApp}
                      className="text-secondary-500 hover:text-secondary-600 font-medium"
                    >
                      Abrir WhatsApp
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-accent-50 rounded-lg">
                  <Mail className="text-accent-500 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-800">E-mail</h4>
                    <p className="text-gray-600 mb-2">afavoritaloja9@gmail.com</p>
                    <a
                      href="mailto:afavoritaloja9@gmail.com"
                      className="text-accent-500 hover:text-accent-600 font-medium"
                    >
                      Enviar E-mail
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-primary-50 rounded-lg">
                  <MapPin className="text-primary-500 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Endereço</h4>
                    <p className="text-gray-600 mb-2">Rua São Francisco</p>
                    <a
                      href="https://maps.app.goo.gl/cqkH4GzbrCJfVb329"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-500 hover:text-primary-600 font-medium"
                    >
                      Ver no Mapa
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Horário de Atendimento</h3>
              <div className="space-y-2">
                <p><strong>Segunda a Sexta:</strong> 7:00 - 18:00</p>
                <p><strong>Sábado:</strong> 7:00 - 17:00</p>
                <p><strong>Domingo:</strong> 8:00 - 12:00</p>
              </div>
              <div className="mt-6 p-4 bg-white/20 rounded-lg">
                <p className="text-sm opacity-95">
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
