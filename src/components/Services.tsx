
import React from 'react';
import { Wrench, Zap, Hammer, Tractor, Fish } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Wrench className="text-primary-500" size={40} />,
      title: 'Tubos e Conexões',
      description: 'Complete linha de tubos e conexões para todas as necessidades de sua obra, com qualidade garantida.',
      items: ['Tubos PVC', 'Conexões diversas', 'Registros', 'Válvulas']
    },
    {
      icon: <Zap className="text-secondary-500" size={40} />,
      title: 'Material Elétrico',
      description: 'Tudo em material elétrico para instalações residenciais, comerciais e industriais.',
      items: ['Cabos flexíveis', 'Cabos duplex', 'Disjuntores', 'Tomadas e interruptores']
    },
    {
      icon: <Hammer className="text-accent-500" size={40} />,
      title: 'Carpintaria',
      description: 'Ferramentas e materiais essenciais para trabalhos de carpintaria e marcenaria.',
      items: ['Pregos variados', 'Parafusos', 'Ferramentas', 'Acessórios']
    },
    {
      icon: <Tractor className="text-primary-600" size={40} />,
      title: 'Agropecuária',
      description: 'Seção especial com produtos para o campo e criação de animais.',
      items: ['Ração animal', 'Ferramentas agrícolas', 'Cerca rural', 'Equipamentos']
    },
    {
      icon: <Fish className="text-secondary-600" size={40} />,
      title: 'Artigos para Pesca',
      description: 'Tudo para os amantes da pesca, desde equipamentos básicos até acessórios profissionais.',
      items: ['Varas de pesca', 'Anzóis e iscas', 'Linhas', 'Acessórios']
    }
  ];

  return (
    <section id="servicos" className="py-16 sm:py-20 lg:py-24 xl:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 mb-4 sm:mb-6 lg:mb-8 font-poppins">
            Nossos <span className="text-primary-500">Produtos</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-600 max-w-4xl mx-auto px-4 leading-relaxed">
            Oferecemos uma ampla variedade de produtos de qualidade para construção, agropecuária e pesca
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 mb-12 sm:mb-16 lg:mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 xl:p-12 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6 lg:space-y-8">
                <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 rounded-2xl group-hover:bg-primary-50 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800">{service.title}</h3>
                <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 leading-relaxed">{service.description}</p>
                
                <div className="w-full pt-4 sm:pt-6 lg:pt-8">
                  <ul className="space-y-3 sm:space-y-4 lg:space-y-5">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-3 sm:gap-4 lg:gap-5 text-sm sm:text-base lg:text-lg xl:text-xl text-gray-700">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary-500 rounded-full flex-shrink-0"></div>
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
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-8 sm:p-10 lg:p-12 xl:p-16 rounded-2xl max-w-5xl mx-auto shadow-xl">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8">Não Encontrou o Que Procura?</h3>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-6 sm:mb-8 lg:mb-10 opacity-95 leading-relaxed">
              Entre em contato conosco! Temos muito mais produtos disponíveis em nossa loja.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contato');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-primary-500 px-8 sm:px-10 lg:px-12 xl:px-16 py-4 sm:py-5 lg:py-6 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold text-base sm:text-lg lg:text-xl xl:text-2xl w-full sm:w-auto shadow-lg hover:shadow-xl transform hover:scale-105"
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
