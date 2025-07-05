"use client";

import { useParams } from 'next/navigation';
import Navigation from '../../../components/Navigation';
import Image from 'next/image';
import Link from 'next/link';
import '../../products.css';

const products = [
  {
    name: 'CHOCOLATE AO LEITE ARTESANAL',
    price: 'R$ 24,90',
    image: '/images/chocolate.jpg',
    category: 'Chocolates',
    description: 'Delicioso chocolate artesanal ao leite, feito com cacau especial',
    featured: true
  },
  {
    name: 'CHOCOLATE 70% CACAU',
    price: 'R$ 29,90',
    image: '/images/chocolate.jpg',
    category: 'Chocolates',
    description: 'Chocolate amargo premium com 70% de cacau',
    isNew: true
  },
  {
    name: 'CACHAÇA OURO PREMIUM',
    price: 'R$ 89,90',
    image: '/images/cchc.jpg',
    category: 'Cachaças',
    description: 'Cachaça envelhecida em barril de carvalho',
    featured: true
  },
  {
    name: 'CACHAÇA PRATA ARTESANAL',
    price: 'R$ 69,90',
    image: '/images/cchc.jpg',
    category: 'Cachaças',
    description: 'Cachaça prata artesanal de alambique'
  },
  {
    name: 'CALDO DE CANA NATURAL',
    price: 'R$ 8,00',
    image: '/images/imgcn.jpg',
    category: 'Caldo de Cana',
    description: 'Caldo de cana natural, extraído na hora',
    isNew: true
  },
  {
    name: 'CALDO DE CANA COM GENGIBRE',
    price: 'R$ 10,00',
    image: '/images/imgcn.jpg',
    category: 'Caldo de Cana',
    description: 'Caldo de cana com gengibre, refrescante e saudável'
  },
  {
    name: 'MILHO VERDE NATURAL',
    price: 'R$ 5,00',
    image: '/images/fazenda.jpg',
    category: 'Milho Verde',
    description: 'Milho verde fresco, colhido no dia'
  },
  {
    name: 'PAMONHA ARTESANAL',
    price: 'R$ 12,00',
    image: '/images/fazenda.jpg',
    category: 'Milho Verde',
    description: 'Pamonha artesanal feita com milho fresco',
    featured: true
  }
];

export default function CategoriaProdutos() {
  const params = useParams();
  const categoria = decodeURIComponent(params.categoria as string);
  const produtosFiltrados = products.filter(p => p.category === categoria);

  return (
    <main className="min-h-screen w-full catalog-bg">
      <Navigation />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-32 pb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-green-900 animate-fade-in-up">
          {categoria}
        </h1>
        <div className="grid grid-cols-2 gap-8">
          {produtosFiltrados.map((product, idx) => (
            <div key={idx} className="product-card">
              <div className="relative aspect-square w-full h-64">
                <Image src={product.image} alt={product.name} fill style={{objectFit:'cover'}} className="object-cover rounded-lg" />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold text-green-900 mb-2 animate-fade-in-up">{product.name}</h2>
                <p className="text-green-700 mb-1">{product.price}</p>
                <p className="text-sm text-green-800 mb-2">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
