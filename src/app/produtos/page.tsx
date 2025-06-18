'use client';

import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

const products: Product[] = [
  {
    id: 'chocolate-premium',
    name: 'CHOCOLATE ARTESANAL PREMIUM',
    price: 'A partir de R$ 24,90',
    image: '/images/chocolate.jpg'
  },
  {
    id: 'produtos-naturais',
    name: 'SELEÇÃO DE PRODUTOS NATURAIS',
    price: 'A partir de R$ 19,90',
    image: '/images/imgcn.jpg'
  },
  {
    id: 'tradicional-linha',
    name: 'LINHA TRADICIONAL',
    price: 'A partir de R$ 29,90',
    image: '/images/cchc.jpg'
  },
  {
    id: 'chocolate-premium-2',
    name: 'CHOCOLATE PREMIUM DARK',
    price: 'A partir de R$ 34,90',
    image: '/images/chocolate.jpg'
  },
  {
    id: 'produtos-naturais-2',
    name: 'PRODUTOS ESPECIAIS',
    price: 'A partir de R$ 39,90',
    image: '/images/imgcn.jpg'
  },
  {
    id: 'tradicional-linha-2',
    name: 'LINHA GOURMET',
    price: 'A partir de R$ 44,90',
    image: '/images/cchc.jpg'
  }
];

export default function Products() {
  return (
    <main className="min-h-screen w-full">
      <Navigation />
      
      {/* Grid de Produtos */}
      <div className="mx-auto max-w-[2400px] px-6 pt-32 pb-24">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-1">
          {products.map((product, index) => (
            <Link href={`/produtos/${product.id}`} key={product.id}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group relative aspect-square cursor-pointer overflow-hidden backdrop-blur-sm bg-white/30"
              >
                {/* Imagem do Produto */}
                <div className="absolute inset-0">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Overlay Gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Informações do Produto */}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="mb-2 text-sm font-light tracking-[0.2em] text-white">
                    {product.name}
                  </h3>
                  <p className="text-sm font-light tracking-wider text-white/90">
                    {product.price}
                  </p>
                </div>

                {/* Overlay de Hover */}
                <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
