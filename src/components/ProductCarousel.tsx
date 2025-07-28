
import React, { useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const ProductCarousel = () => {
  const images = [
    {
      src: "/lovable-uploads/232b44cf-9736-4094-a6d8-e0b4408b4299.png",
      alt: "Produtos A Favorita - Materiais de Construção"
    },
    {
      src: "/lovable-uploads/e9d50bfa-c0c3-4244-80f1-6301790d729e.png",
      alt: "Produtos A Favorita - Ferramentas e Equipamentos"
    },
    {
      src: "/lovable-uploads/ae0516e2-3f35-44ae-9b24-529246a7f55d.png",
      alt: "Telhas Brasilit - A Favorita"
    },
    {
      src: "/lovable-uploads/e6c7dacd-41c0-4757-b641-ab9668a9f0fd.png",
      alt: "Promoção Tomadas e Interruptores 2 Módulos"
    },
    {
      src: "/lovable-uploads/647193c6-a42c-4aa5-92d7-ec099011ad9b.png",
      alt: "Promoção Tomadas e Interruptores 3 Módulos"
    },
    {
      src: "/lovable-uploads/26b46964-695e-4396-9dde-f0e7546b08e8.png",
      alt: "Promoção Tomadas e Interruptores 1 Módulo"
    },
    {
      src: "/lovable-uploads/d8f05556-dd60-4fab-b7a7-80550ac48569.png",
      alt: "Máscara de Solda Automática"
    },
    {
      src: "/lovable-uploads/4f4cc372-7a44-47d7-8440-ea33993fb93f.png",
      alt: "Loja A Favorita - Fachada"
    }
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 3000 })]
  );

  return (
    <section className="py-16 sm:py-20 lg:py-24 xl:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 mb-4 sm:mb-6 lg:mb-8 font-poppins">
            Um <span className="text-primary-500">Pouco de</span> Nossos Produtos
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-600 max-w-4xl mx-auto px-4 leading-relaxed">
            Confira nossa galeria de produtos e promoções especiais
          </p>
        </div>

        <div className="max-w-8xl mx-auto">
          <Carousel
            ref={emblaRef}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
          >
            <CarouselContent className="-ml-2 sm:-ml-4 lg:-ml-6 xl:-ml-8">
              {images.map((image, index) => (
                <CarouselItem key={index} className="pl-2 sm:pl-4 lg:pl-6 xl:pl-8 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-6 lg:-left-8 xl:-left-10" />
            <CarouselNext className="hidden sm:flex -right-6 lg:-right-8 xl:-right-10" />
          </Carousel>
        </div>

        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-8 sm:p-10 lg:p-12 xl:p-16 rounded-2xl max-w-5xl mx-auto shadow-xl">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8">Visite Nossa Loja!</h3>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-6 sm:mb-8 lg:mb-10 opacity-95 leading-relaxed">
              Venha conhecer nossa ampla variedade de produtos e aproveite nossas ofertas especiais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center">
              <button
                onClick={() => {
                  const element = document.getElementById('contato');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-primary-500 px-8 sm:px-10 lg:px-12 xl:px-16 py-4 sm:py-5 lg:py-6 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold text-base sm:text-lg lg:text-xl xl:text-2xl w-full sm:w-auto shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Entre em Contato
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('localizacao');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-white text-white px-8 sm:px-10 lg:px-12 xl:px-16 py-4 sm:py-5 lg:py-6 rounded-lg hover:bg-white hover:text-primary-500 transition-all duration-200 font-semibold text-base sm:text-lg lg:text-xl xl:text-2xl w-full sm:w-auto"
              >
                Ver Localização
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
