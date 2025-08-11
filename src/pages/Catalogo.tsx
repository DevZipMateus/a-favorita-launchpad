
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowLeft, Search, X, ShoppingCart, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Catalogo = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  // Lista de todas as imagens da galeria
  const images = [
    { src: '/lovable-uploads/galeria/ASSENTO PARA VASO BR.jpeg', name: 'Assento para Vaso Branco' },
    { src: '/lovable-uploads/galeria/ASSENTO PARA VAZO PT.jpeg', name: 'Assento para Vaso Preto' },
    { src: '/lovable-uploads/galeria/CABO DUPLEX     BITOLA 10mm 16mm.jpeg', name: 'Cabo Duplex Bitola 10mm 16mm' },
    { src: '/lovable-uploads/galeria/CABO FLEXIVEL AZUL 1,5mm, 2,5mm, 4mm, 6mm e 10mm.jpeg', name: 'Cabo Flexível Azul 1,5mm a 10mm' },
    { src: '/lovable-uploads/galeria/CABO FLEXIVEL PRETO 1,5mm, 2,5mm, 4mm, 6mm e 10mm.jpeg', name: 'Cabo Flexível Preto 1,5mm a 10mm' },
    { src: '/lovable-uploads/galeria/CABO FLEXIVEL VERDE 2.5mm, 4mm, 6mm e 10mm.jpeg', name: 'Cabo Flexível Verde 2,5mm a 10mm' },
    { src: '/lovable-uploads/galeria/CABO FLEXIVEL VERMELHO 1,5mm, 2,5mm, 4mm, 6mm e 10mm.jpeg', name: 'Cabo Flexível Vermelho 1,5mm a 10mm' },
    { src: '/lovable-uploads/galeria/CAIXA DE DESCARGA ALUMASA BR.jpeg', name: 'Caixa de Descarga Alumasa Branca' },
    { src: '/lovable-uploads/galeria/CAIXA DE DESCARGA ALUMASA CZ.jpeg', name: 'Caixa de Descarga Alumasa Cinza' },
    { src: '/lovable-uploads/galeria/CAIXA SIFONADA QUADRADA 100X100.jpeg', name: 'Caixa Sifonada Quadrada 100x100' },
    { src: '/lovable-uploads/galeria/COLA PVC 17G.jpeg', name: 'Cola PVC 17g' },
    { src: '/lovable-uploads/galeria/COLA PVC 75G.jpeg', name: 'Cola PVC 75g' },
    { src: '/lovable-uploads/galeria/COLHER DE PEDREIRO.jpeg', name: 'Colher de Pedreiro' },
    { src: '/lovable-uploads/galeria/CONCTOR PERFURANTE.jpeg', name: 'Conector Perfurante' },
    { src: '/lovable-uploads/galeria/DISJUNTOR 10 AMP 1POLO.jpeg', name: 'Disjuntor 10 AMP 1 Polo' },
    { src: '/lovable-uploads/galeria/DISJUNTOR 16AMP.jpeg', name: 'Disjuntor 16 AMP' },
    { src: '/lovable-uploads/galeria/DISJUNTOR 20 AMP 1POLO.jpeg', name: 'Disjuntor 20 AMP 1 Polo' },
    { src: '/lovable-uploads/galeria/DISJUNTOR 25 AMP 1POLO.jpeg', name: 'Disjuntor 25 AMP 1 Polo' },
    { src: '/lovable-uploads/galeria/DISJUNTOR 32 AMP 1POLO.jpeg', name: 'Disjuntor 32 AMP 1 Polo' },
    { src: '/lovable-uploads/galeria/DISJUNTOR 50 AMP 1POLO.jpeg', name: 'Disjuntor 50 AMP 1 Polo' },
    { src: '/lovable-uploads/galeria/DISJUNTOR 63 AMP 1POLO.jpeg', name: 'Disjuntor 63 AMP 1 Polo' },
    { src: '/lovable-uploads/galeria/FILTRO PARA CAIXA DAGUA.jpeg', name: 'Filtro para Caixa D\'água' },
    { src: '/lovable-uploads/galeria/FIO TORCIDO 2,5mm, 4mm.jpeg', name: 'Fio Torcido 2,5mm e 4mm' },
    { src: '/lovable-uploads/galeria/FITA ISOLANTE PARAMAX 20M.jpeg', name: 'Fita Isolante Paramax 20m' },
    { src: '/lovable-uploads/galeria/FITA ISOLNTE IMPERIAL 20M (2).jpeg', name: 'Fita Isolante Imperial 20m' },
    { src: '/lovable-uploads/galeria/FITA ISOLNTE IMPRIAL 5M (1).jpeg', name: 'Fita Isolante Imperial 5m' },
    { src: '/lovable-uploads/galeria/FITA ISOLNTE PARAMAX 20M (20).jpeg', name: 'Fita Isolante Paramax 20m' },
    { src: '/lovable-uploads/galeria/FITA ISOLNTE PARAMAX 5M (3).jpeg', name: 'Fita Isolante Paramax 5m' },
    { src: '/lovable-uploads/galeria/JOELHO SOLD. 25mm.jpeg', name: 'Joelho Soldável 25mm' },
    { src: '/lovable-uploads/galeria/JOELHO SOLD. ROSCA 25 X MEIA.jpeg', name: 'Joelho Soldável com Rosca 25 x 1/2' },
    { src: '/lovable-uploads/galeria/LAMPADA BULBALO 20W, 30W, 40W.jpeg', name: 'Lâmpada Bulbão 20W, 30W, 40W' },
    { src: '/lovable-uploads/galeria/LAMPADA LED BULBALO 20W.jpeg', name: 'Lâmpada LED Bulbão 20W' },
    { src: '/lovable-uploads/galeria/LAMPADA LED PERA 9W.jpeg', name: 'Lâmpada LED Pera 9W' },
    { src: '/lovable-uploads/galeria/LUVA DE ESG. 50mm.jpeg', name: 'Luva de Esgoto 50mm' },
    { src: '/lovable-uploads/galeria/LUVA DE ESG.100mm.jpeg', name: 'Luva de Esgoto 100mm' },
    { src: '/lovable-uploads/galeria/LUVA DE ESG.40mm.jpeg', name: 'Luva de Esgoto 40mm' },
    { src: '/lovable-uploads/galeria/LUVA SOLD. ROSCA 25 X 3QUARTO.jpeg', name: 'Luva Soldável com Rosca 25 x 3/4' },
    { src: '/lovable-uploads/galeria/LUVA SOLD. ROSCA 25 X MEIA.jpeg', name: 'Luva Soldável com Rosca 25 x 1/2' },
    { src: '/lovable-uploads/galeria/PAINEL DE LED QUADRADO SOBREPOR 18W.jpeg', name: 'Painel LED Quadrado Sobrepor 18W' },
    { src: '/lovable-uploads/galeria/PAINEL LED EMBUTIR QUADRADO 24W.jpeg', name: 'Painel LED Embutir Quadrado 24W' },
    { src: '/lovable-uploads/galeria/PAINEL LED PRO 32W.jpeg', name: 'Painel LED Pro 32W' },
    { src: '/lovable-uploads/galeria/PLACA CEGA 4X2 ARIA.jpeg', name: 'Placa Cega 4x2 Aria' },
    { src: '/lovable-uploads/galeria/PLUG MACHO 20AMPERES.jpeg', name: 'Plug Macho 20 Amperes' },
    { src: '/lovable-uploads/galeria/REPARO P REG.CANOPLA 20 e 25 HERC.jpeg', name: 'Reparo para Registro Canopla 20 e 25 Hercules' },
    { src: '/lovable-uploads/galeria/SPOT LED QUADRADO 5W.jpeg', name: 'Spot LED Quadrado 5W' },
    { src: '/lovable-uploads/galeria/SPOT LED REDONDO 3W.jpeg', name: 'Spot LED Redondo 3W' },
    { src: '/lovable-uploads/galeria/TE SOLD. 25mm.jpeg', name: 'Tê Soldável 25mm' },
    { src: '/lovable-uploads/galeria/TE SOLD. 50mm.jpeg', name: 'Tê Soldável 50mm' },
    { src: '/lovable-uploads/galeria/TE SOLD. ROSCA 25 X MEIA.jpeg', name: 'Tê Soldável com Rosca 25 x 1/2' },
    { src: '/lovable-uploads/galeria/TOMADA SOBREPOR 20 AMPERES.jpeg', name: 'Tomada Sobrepor 20 Amperes' },
    { src: '/lovable-uploads/galeria/TUBO DE DECIDA PARA DESCARGA.jpeg', name: 'Tubo de Descida para Descarga' },
    { src: '/lovable-uploads/galeria/WhatsApp Image 2025-07-16 at 10.10.13.jpeg', name: 'Produto - Julho 16' },
    { src: '/lovable-uploads/galeria/WhatsApp Image 2025-07-16 at 10.10.14 (1).jpeg', name: 'Produto - Julho 16' },
    { src: '/lovable-uploads/galeria/WhatsApp Image 2025-07-16 at 10.10.14.jpeg', name: 'Produto - Julho 16' },
    { src: '/lovable-uploads/galeria/WhatsApp Image 2025-07-19 at 09.35.17.jpeg', name: 'Produto - Julho 19' },
    { src: '/lovable-uploads/galeria/WhatsApp Image 2025-07-23 at 08.01.06.jpeg', name: 'Produto - Julho 23' },
    { src: '/lovable-uploads/galeria/WhatsApp Image 2025-07-23 at 08.09.18.jpeg', name: 'Produto - Julho 23' },
    { src: '/lovable-uploads/galeria/WhatsApp Image 2025-07-25 at 08.52.24.jpeg', name: 'Produto - Julho 25' },
    { src: '/lovable-uploads/galeria/WhatsApp Image 2025-07-28 at 17.21.00.jpeg', name: 'Produto - Julho 28' },
    { src: '/lovable-uploads/galeria/WhatsApp Image 2025-07-28 at 17.21.30.jpeg', name: 'Produto - Julho 28' },
    { src: '/lovable-uploads/galeria/WhatsApp Image 2025-07-29 at 08.32.47.jpeg', name: 'Produto - Julho 29' },
    { src: '/lovable-uploads/galeria/WhatsApp Image 2025-07-30 at 10.16.25.jpeg', name: 'Produto - Julho 30' },
    { src: '/lovable-uploads/galeria/WhatsApp Image 2025-07-31 at 10.20.04.jpeg', name: 'Produto - Julho 31' },
    { src: '/lovable-uploads/galeria/WhatsApp Image 2025-08-01 at 11.08.53.jpeg', name: 'Produto - Agosto 01' },
    { src: '/lovable-uploads/galeria/WhatsApp Image 2025-08-01 at 11.09.36.jpeg', name: 'Produto - Agosto 01' },
    { src: '/lovable-uploads/galeria/WhatsApp Image 2025-08-02 at 13.25.02.jpeg', name: 'Produto - Agosto 02' },
    { src: '/lovable-uploads/galeria/WhatsApp Image 2025-08-02 at 13.25.35.jpeg', name: 'Produto - Agosto 02' },
    { src: '/lovable-uploads/galeria/WhatsApp Image 2025-08-02 at 13.27.01.jpeg', name: 'Produto - Agosto 02' },
    { src: '/lovable-uploads/galeria/WhatsApp Image 2025-08-04 at 17.59.14.jpeg', name: 'Produto - Agosto 04' },
    { src: '/lovable-uploads/galeria/WhatsApp Image 2025-08-04 at 17.59.53.jpeg', name: 'Produto - Agosto 04' }
  ];

  const filteredImages = images.filter(image =>
    image.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleProductSelect = (productName: string, checked: boolean) => {
    if (checked) {
      setSelectedProducts(prev => [...prev, productName]);
    } else {
      setSelectedProducts(prev => prev.filter(name => name !== productName));
    }
  };

  const sendListToWhatsApp = () => {
    if (selectedProducts.length === 0) {
      alert('Selecione pelo menos um produto para enviar');
      return;
    }

    const productList = selectedProducts.map((product, index) => `${index + 1}. ${product}`).join('%0A');
    const message = `Olá! Vim do site da A Favorita.%0A%0AGostaria de um orçamento para os seguintes produtos:%0A%0A${productList}%0A%0AObrigado!`;
    const whatsappUrl = `https://wa.me/5591991713205?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const clearSelection = () => {
    setSelectedProducts([]);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-semibold">Voltar ao Site</span>
            </Link>
            <h1 className="text-xl md:text-2xl font-bold text-foreground">Catálogo de Produtos</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="mb-8 max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input
              type="text"
              placeholder="Pesquisar produtos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>

        {/* Selected Products Summary */}
        {selectedProducts.length > 0 && (
          <div className="mb-8 bg-primary/10 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <ShoppingCart className="h-5 w-5" />
                Produtos Selecionados ({selectedProducts.length})
              </h3>
              <div className="flex gap-2">
                <Button onClick={clearSelection} variant="outline" size="sm">
                  Limpar Lista
                </Button>
                <Button onClick={sendListToWhatsApp} className="bg-green-600 hover:bg-green-700" size="sm">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Enviar Lista
                </Button>
              </div>
            </div>
            <div className="max-h-32 overflow-y-auto">
              <ul className="text-sm space-y-1">
                {selectedProducts.map((product, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-primary font-medium">{index + 1}.</span>
                    {product}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {filteredImages.map((image, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-3">
                <div className="flex items-center justify-between mb-3">
                  <Checkbox
                    checked={selectedProducts.includes(image.name)}
                    onCheckedChange={(checked) => handleProductSelect(image.name, checked as boolean)}
                    className="z-10"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-lg mb-3 cursor-pointer">
                  <img
                    src={image.src}
                    alt={image.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onClick={() => setSelectedImage(image.src)}
                  />
                </div>
                <h3 className="text-sm font-medium text-foreground line-clamp-2 leading-tight">
                  {image.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">Nenhum produto encontrado para "{searchTerm}"</p>
          </div>
        )}

        {/* Contact CTA */}
        <div className="mt-12 bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Interessado em algum produto?</h2>
          <p className="text-lg mb-6 opacity-95">Selecione os produtos desejados e envie sua lista de interesse</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={sendListToWhatsApp}
              disabled={selectedProducts.length === 0}
              className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg font-semibold disabled:opacity-50"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Enviar Lista ({selectedProducts.length})
            </Button>
            <Button
              onClick={() => window.open('https://wa.me/5591991713205', '_blank')}
              className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
            >
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage}
              alt="Produto ampliado"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Catalogo;
