
import React from 'react';
import { Building2, Users, Award, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-poppins">
            Sobre A <span className="text-primary-500">Favorita</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Uma loja recente que chegou para revolucionar o mercado de materiais de construção na região
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">Nossa História</h3>
            <p className="text-gray-700 leading-relaxed">
              A Favorita é uma loja recente, que chegou para oferecer tudo o que você precisa em materiais de construção, 
              desde itens básicos até soluções completas para pequenas reformas e grandes obras.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Trabalhamos com produtos de qualidade, como tubos e conexões, ferramentas, materiais para carpintaria 
              (pregos, parafusos e acessórios) e itens da parte elétrica, como cabos flexíveis, cabos duplex e muito mais, 
              sempre com preços acessíveis.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Além disso, contamos com uma seção especial de agropecuária e artigos para pesca. 
              <strong className="text-primary-600"> Nosso diferencial é o atendimento próximo e atencioso, 
              aliado aos melhores preços da região.</strong>
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Nossos Valores</h3>
            <div className="grid gap-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary-500 p-3 rounded-lg">
                  <Building2 className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Qualidade</h4>
                  <p className="text-gray-600">Produtos de excelente qualidade para suas obras</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary-500 p-3 rounded-lg">
                  <Users className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Atendimento</h4>
                  <p className="text-gray-600">Próximo, atencioso e personalizado</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-accent-500 p-3 rounded-lg">
                  <Award className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Preço Justo</h4>
                  <p className="text-gray-600">Os melhores preços da região</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary-600 p-3 rounded-lg">
                  <Target className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Variedade</h4>
                  <p className="text-gray-600">Tudo em um só lugar</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">Venha Conhecer e Construir com a Gente!</h3>
          <p className="text-lg opacity-95">
            Estamos prontos para atender você com o melhor em materiais de construção, agropecuária e pesca.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
