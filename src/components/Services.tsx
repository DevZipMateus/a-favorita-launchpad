
import React from 'react';
import { Wrench, Zap, Hammer, Tractor, Fish } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Wrench className="text-primary-500" size={48} />,
      title: 'Tubos e Conexões',
      description: 'Complete linha de tubos e conexões para todas as necessidades de sua obra, com qualidade garantida.',
      items: ['Tubos PVC', 'Conexões diversas', 'Registros', 'Válvulas']
    },
    {
      icon: <Zap className="text-secondary-500" size={48} />,
      title: 'Material Elétrico',
      description: 'Tudo em material elétrico para instalações residenciais, comerciais e industriais.',
      items: ['Cabos flexíveis', 'Cabos duplex', 'Disjuntores', 'Tomadas e interruptores']
    },
    {
      icon: <Hammer className="text-accent-500" size={48} />,
      title: 'Carpintaria',
      description: 'Ferramentas e materiais essenciais para trabalhos de carpintaria e marcenaria.',
      items: ['Pregos variados', 'Parafusos', 'Ferramentas', 'Acessórios']
    },
    {
      icon: <Tractor className="text-primary-600" size={48} />,
      title: 'Agropecuária',
      description: 'Seção especial com produtos para o campo e criação de animais.',
      items: ['Ração animal', 'Ferramentas agrícolas', 'Cerca rural', 'Equipamentos']
    },
    {
      icon: <Fish className="text-secondary-600" size={48} />,
      title: 'Artigos para Pesca',
      description: 'Tudo para os amantes da pesca, desde equipamentos básicos até acessórios profissionais.',
      items: ['Varas de pesca', 'Anzóis e iscas', 'Linhas', 'Acessórios']
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-poppins">
            Nossos <span className="text-primary-500">Produtos</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma ampla variedade de produtos de qualidade para construção, agropecuária e pesca
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-gray-50 rounded-2xl group-hover:bg-primary-50 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                
                <div className="w-full pt-4">
                  <ul className="space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2 text-gray-700">
                        <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Não Encontrou o Que Procura?</h3>
            <p className="text-lg mb-6 opacity-95">
              Entre em contato conosco! Temos muito mais produtos disponíveis em nossa loja.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contato');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-primary-500 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold"
            >
              Fale Conosco
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
