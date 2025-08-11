
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
    <section id="servicos" className="py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28 bg-gray-50">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
        <div className="text-center mb-6 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-gray-800 mb-3 xs:mb-4 sm:mb-5 md:mb-6 lg:mb-8 xl:mb-10 font-poppins">
            Nossos <span className="text-primary-500">Produtos</span>
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-gray-600 max-w-2xl xs:max-w-3xl sm:max-w-4xl lg:max-w-5xl mx-auto px-2 xs:px-4 sm:px-0 leading-relaxed">
            Oferecemos uma ampla variedade de produtos de qualidade para construção, agropecuária e pesca
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="flex flex-col items-center text-center space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
                <div className="p-3 xs:p-4 sm:p-5 md:p-6 lg:p-8 bg-gray-50 rounded-xl xs:rounded-2xl group-hover:bg-primary-50 transition-colors duration-300">
                  <div className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 xl:w-12 xl:h-12">
                    {React.cloneElement(service.icon, { 
                      size: undefined,
                      className: `${service.icon.props.className} w-full h-full`
                    })}
                  </div>
                </div>
                <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800">{service.title}</h3>
                <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed">{service.description}</p>
                
                <div className="w-full pt-2 xs:pt-3 sm:pt-4 md:pt-5 lg:pt-6">
                  <ul className="space-y-2 xs:space-y-2.5 sm:space-y-3 md:space-y-4 lg:space-y-5">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2 xs:gap-2.5 sm:gap-3 md:gap-4 lg:gap-5 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700">
                        <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-primary-500 rounded-full flex-shrink-0"></div>
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
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-16 rounded-xl xs:rounded-2xl max-w-5xl mx-auto shadow-xl">
            <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 xs:mb-4 sm:mb-5 md:mb-6 lg:mb-8">Não Encontrou o Que Procura?</h3>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-4 xs:mb-5 sm:mb-6 md:mb-8 lg:mb-10 opacity-95 leading-relaxed">
              Entre em contato conosco! Temos muito mais produtos disponíveis em nossa loja.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contato');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-primary-500 px-6 xs:px-8 sm:px-10 md:px-12 lg:px-16 xl:px-20 py-3 xs:py-4 sm:py-5 md:py-6 lg:py-7 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl w-full sm:w-auto shadow-lg hover:shadow-xl transform hover:scale-105"
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
