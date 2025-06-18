'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import Navigation from '../../components/Navigation';
import Link from 'next/link';

// Dados dos produtos (em uma aplicação real, isso viria de uma API/banco de dados)
const products = {
  'chocolate-premium': {
    name: 'CHOCOLATE ARTESANAL PREMIUM',
    price: 'R$ 24,90',
    description: 'Nosso chocolate artesanal premium é produzido com cacau selecionado e ingredientes naturais da mais alta qualidade. Um processo meticuloso de fabricação que preserva todo o sabor e aroma do verdadeiro chocolate.',
    details: [
      'Cacau 70%',
      'Sem conservantes',
      'Produção artesanal',
      'Ingredientes naturais'
    ],
    image: '/images/chocolate.jpg'
  },
  'produtos-naturais': {
    name: 'SELEÇÃO DE PRODUTOS NATURAIS',
    price: 'R$ 19,90',
    description: 'Uma seleção especial dos nossos melhores produtos naturais, cuidadosamente escolhidos para oferecer o máximo em qualidade e sabor. Cada item é processado para preservar seus nutrientes e propriedades naturais.',
    details: [
      '100% Natural',
      'Sem aditivos',
      'Cultivo sustentável',
      'Seleção premium'
    ],
    image: '/images/imgcn.jpg'
  },
  'tradicional-linha': {
    name: 'LINHA TRADICIONAL',
    price: 'R$ 29,90',
    description: 'Nossa linha tradicional traz o melhor da nossa experiência em produtos naturais. Com décadas de tradição, oferecemos produtos que são referência no mercado por sua qualidade e sabor únicos.',
    details: [
      'Receita tradicional',
      'Qualidade comprovada',
      'Processo artesanal',
      'Sabor único'
    ],
    image: '/images/cchc.jpg'
  },
  'chocolate-premium-2': {
    name: 'CHOCOLATE PREMIUM DARK',
    price: 'R$ 34,90',
    description: 'Uma versão ainda mais intensa do nosso chocolate premium, com maior concentração de cacau. Perfeito para os verdadeiros apreciadores de chocolate escuro.',
    details: [
      'Cacau 85%',
      'Extra dark',
      'Baixo açúcar',
      'Produção limitada'
    ],
    image: '/images/chocolate.jpg'
  },
  'produtos-naturais-2': {
    name: 'PRODUTOS ESPECIAIS',
    price: 'R$ 39,90',
    description: 'Uma linha exclusiva de produtos naturais, desenvolvida para atender aos paladares mais exigentes. Seleção especial com ingredientes raros e processos exclusivos.',
    details: [
      'Edição especial',
      'Ingredientes premium',
      'Processo exclusivo',
      'Produção limitada'
    ],
    image: '/images/imgcn.jpg'
  },
  'tradicional-linha-2': {
    name: 'LINHA GOURMET',
    price: 'R$ 44,90',
    description: 'O ápice da nossa experiência em produtos naturais, a linha gourmet representa o encontro perfeito entre tradição e inovação. Produtos desenvolvidos para surpreender.',
    details: [
      'Seleção gourmet',
      'Edição premium',
      'Processo especial',
      'Embalagem luxo'
    ],
    image: '/images/cchc.jpg'
  }
};

export default function ProductDetail() {
  const { id } = useParams();
  const product = products[id as keyof typeof products];

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-foreground">Produto não encontrado</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen w-full">
      <Navigation />
      
      {/* Banner de Frete Grátis */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-30 bg-foreground py-2 text-center"
      >
        <p className="text-xs font-light tracking-wider text-white">
          FRETE GRÁTIS EM TODOS OS PEDIDOS ACIMA DE R$ 150
        </p>
      </motion.div>

      <div className="mx-auto max-w-7xl px-6 pt-32 pb-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Imagem do Produto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative aspect-square overflow-hidden rounded-lg backdrop-blur-sm bg-white/30"
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Detalhes do Produto */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center space-y-6"
          >
            <h1 className="text-2xl font-light tracking-[0.2em] text-foreground">
              {product.name}
            </h1>
            <p className="text-xl font-light text-foreground/90">
              {product.price}
            </p>
            <p className="text-base font-light leading-relaxed text-foreground/80">
              {product.description}
            </p>
            
            {/* Detalhes em Lista */}            <ul className="space-y-2">
              {product.details.map((detail, index) => (
                <motion.li
                  key={detail}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-2 text-sm text-foreground/70"
                >
                  <svg className="h-1.5 w-1.5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3" />
                  </svg>
                  {detail}
                </motion.li>
              ))}
            </ul>

            {/* Botões de Ação */}
            <div className="flex flex-col space-y-4 pt-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full rounded-full bg-foreground py-4 text-sm font-medium tracking-wider text-white transition-colors hover:bg-foreground/90"
              >
                ADICIONAR AO CARRINHO
              </motion.button>
              <Link href="/produtos" className="text-center">
                <motion.span
                  whileHover={{ y: -2 }}
                  className="text-sm font-light tracking-wider text-foreground/70 transition-colors hover:text-foreground"
                >
                  VOLTAR PARA PRODUTOS
                </motion.span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
