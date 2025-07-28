
import React from 'react';
import { Building2, Users, Award, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-16 sm:py-20 lg:py-24 xl:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 mb-4 sm:mb-6 lg:mb-8 font-poppins">
            Sobre A <span className="text-primary-500">Favorita</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-600 max-w-4xl mx-auto px-4 leading-relaxed">
            Uma loja recente que chegou para revolucionar o mercado de materiais de construção na região
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center mb-16 sm:mb-20 lg:mb-24">
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800">Nossa História</h3>
            <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 leading-relaxed">
              <p>
                A Favorita é uma loja recente, que chegou para oferecer tudo o que você precisa em materiais de construção, 
                desde itens básicos até soluções completas para pequenas reformas e grandes obras.
              </p>
              <p>
                Trabalhamos com produtos de qualidade, como tubos e conexões, ferramentas, materiais para carpintaria 
                (pregos, parafusos e acessórios) e itens da parte elétrica, como cabos flexíveis, cabos duplex e muito mais, 
                sempre com preços acessíveis.
              </p>
              <p>
                Além disso, contamos com uma seção especial de agropecuária e artigos para pesca. 
                <strong className="text-primary-600"> Nosso diferencial é o atendimento próximo e atencioso, 
                aliado aos melhores preços da região.</strong>
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-6 sm:p-8 lg:p-10 xl:p-12 rounded-2xl shadow-lg">
            <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 mb-6 sm:mb-8 lg:mb-10 text-center">Nossos Valores</h3>
            <div className="grid gap-6 sm:gap-8 lg:gap-10">
              <div className="flex items-start gap-4 sm:gap-6 lg:gap-8">
                <div className="bg-primary-500 p-3 sm:p-4 lg:p-5 rounded-lg flex-shrink-0 shadow-md">
                  <Building2 className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-base sm:text-lg lg:text-xl xl:text-2xl mb-2">Qualidade</h4>
                  <p className="text-gray-600 text-sm sm:text-base lg:text-lg xl:text-xl">Produtos de excelente qualidade para suas obras</p>
                </div>
              </div>

              <div className="flex items-start gap-4 sm:gap-6 lg:gap-8">
                <div className="bg-secondary-500 p-3 sm:p-4 lg:p-5 rounded-lg flex-shrink-0 shadow-md">
                  <Users className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-base sm:text-lg lg:text-xl xl:text-2xl mb-2">Atendimento</h4>
                  <p className="text-gray-600 text-sm sm:text-base lg:text-lg xl:text-xl">Próximo, atencioso e personalizado</p>
                </div>
              </div>

              <div className="flex items-start gap-4 sm:gap-6 lg:gap-8">
                <div className="bg-accent-500 p-3 sm:p-4 lg:p-5 rounded-lg flex-shrink-0 shadow-md">
                  <Award className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-base sm:text-lg lg:text-xl xl:text-2xl mb-2">Preço Justo</h4>
                  <p className="text-gray-600 text-sm sm:text-base lg:text-lg xl:text-xl">Os melhores preços da região</p>
                </div>
              </div>

              <div className="flex items-start gap-4 sm:gap-6 lg:gap-8">
                <div className="bg-primary-600 p-3 sm:p-4 lg:p-5 rounded-lg flex-shrink-0 shadow-md">
                  <Target className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-base sm:text-lg lg:text-xl xl:text-2xl mb-2">Variedade</h4>
                  <p className="text-gray-600 text-sm sm:text-base lg:text-lg xl:text-xl">Tudo em um só lugar</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-8 sm:p-10 lg:p-12 xl:p-16 rounded-2xl shadow-xl">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8">Venha Conhecer e Construir com a Gente!</h3>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl opacity-95 leading-relaxed">
            Estamos prontos para atender você com o melhor em materiais de construção, agropecuária e pesca.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
