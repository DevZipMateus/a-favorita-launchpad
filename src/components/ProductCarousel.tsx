
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-poppins">
            Nossos <span className="text-primary-500">Produtos</span> em Destaque
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Confira nossa galeria de produtos e promoções especiais
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
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
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Visite Nossa Loja!</h3>
            <p className="text-lg mb-6 opacity-95">
              Venha conhecer nossa ampla variedade de produtos e aproveite nossas ofertas especiais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const element = document.getElementById('contato');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-primary-500 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold"
              >
                Entre em Contato
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('localizacao');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-primary-500 transition-all duration-200 font-semibold"
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
