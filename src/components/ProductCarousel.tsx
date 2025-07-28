
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
      src: "/lovable-uploads/4f4cc372-7a44-47d7-8440ea33993fb93f.png",
      alt: "Loja A Favorita - Fachada"
    }
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 3000 })]
  );

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-3 sm:mb-4 lg:mb-6 font-poppins">
            Um <span className="text-primary-500">Pouco de</span> Nossos Produtos
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-3xl mx-auto px-2 leading-relaxed">
            Confira nossa galeria de produtos e promoções especiais
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
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
            <CarouselContent className="-ml-2 md:-ml-4 lg:-ml-6">
              {images.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 lg:pl-6 basis-full xs:basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                  <div className="bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden">
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-in-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-2 sm:p-3 lg:p-4">
                      <p className="text-xs sm:text-sm md:text-base text-gray-700 text-center line-clamp-2 leading-tight">
                        {image.alt}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 lg:-left-6 xl:-left-8 h-8 w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12" />
            <CarouselNext className="hidden md:flex -right-4 lg:-right-6 xl:-right-8 h-8 w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12" />
          </Carousel>
          
          {/* Mobile scroll indicator */}
          <div className="flex justify-center mt-4 md:hidden">
            <div className="flex space-x-2">
              {Array.from({ length: Math.ceil(images.length / 2) }).map((_, index) => (
                <div key={index} className="w-2 h-2 rounded-full bg-gray-300"></div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-8 sm:mt-12 lg:mt-16">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-6 sm:p-8 lg:p-10 xl:p-12 rounded-xl sm:rounded-2xl max-w-4xl mx-auto shadow-xl">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6">Visite Nossa Loja!</h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 sm:mb-6 lg:mb-8 opacity-95 leading-relaxed">
              Venha conhecer nossa ampla variedade de produtos e aproveite nossas ofertas especiais.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center">
              <button
                onClick={() => {
                  const element = document.getElementById('contato');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-primary-500 px-6 sm:px-8 lg:px-10 xl:px-12 py-3 sm:py-4 lg:py-5 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold text-sm sm:text-base lg:text-lg xl:text-xl w-full sm:w-auto shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Entre em Contato
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('localizacao');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-white text-white px-6 sm:px-8 lg:px-10 xl:px-12 py-3 sm:py-4 lg:py-5 rounded-lg hover:bg-white hover:text-primary-500 transition-all duration-200 font-semibold text-sm sm:text-base lg:text-lg xl:text-xl w-full sm:w-auto"
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
