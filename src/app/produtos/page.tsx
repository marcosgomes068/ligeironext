'use client';

import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Image from 'next/image';
import Link from 'next/link';
import './products.css';
import { useEffect, useState } from 'react';

interface Product {
  name: string;
  price: string;
  image: string;
  category: string;
  description: string;
  featured?: boolean;
  isNew?: boolean;
}

const products: Product[] = [
  // Chocolates
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
  // Cachaças
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
  // Caldo de Cana
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
  // Milho Verde
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

export default function Products() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    document.body.classList.add('catalog-bg-page');
    return () => {
      document.body.classList.remove('catalog-bg-page');
    };
  }, []);

  const categories = ['Chocolates', 'Cachaças', 'Caldo de Cana', 'Milho Verde'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen w-full catalog-bg">
      <Navigation />
      
      {/* Cabeçalho */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-12 bg-transparent">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-green-900">
          Catálogo de Produtos
        </h1>
        <p className="text-lg text-center text-green-700 mb-12">
          Confira todos os produtos disponíveis em nosso catálogo
        </p>

        {/* Categorias em destaque */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-8 justify-center mb-10">
          {/* Chocolates */}
          <Link href={`/produtos/categoria/${encodeURIComponent('Chocolates')}`} className="group relative w-full aspect-[5/4] h-56 sm:h-80 md:h-[28rem] overflow-hidden shadow-lg border-2 border-green-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400">
            <Image src="/images/chocolate.jpg" alt="Chocolates" fill style={{objectFit: 'cover'}} className="object-cover group-hover:brightness-90 transition duration-300" />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-transparent to-transparent" />
            <span className="category-label absolute bottom-6 left-0 right-0 text-center text-2xl font-bold text-white drop-shadow-lg animate-fade-in-up">
              <span className="category-label-text">Chocolates</span>
            </span>
          </Link>
          {/* Cachaças */}
          <Link href={`/produtos/categoria/${encodeURIComponent('Cachaças')}`} className="group relative w-full aspect-[5/4] h-56 sm:h-80 md:h-[28rem] overflow-hidden shadow-lg border-2 border-green-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400">
            <Image src="/images/cchc.jpg" alt="Cachaças" fill style={{objectFit: 'cover'}} className="object-cover group-hover:brightness-90 transition duration-300" />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-transparent to-transparent" />
            <span className="category-label absolute bottom-6 left-0 right-0 text-center text-2xl font-bold text-white drop-shadow-lg animate-fade-in-up">
              <span className="category-label-text">Cachaças</span>
            </span>
          </Link>
          {/* Caldo de Cana */}
          <Link href={`/produtos/categoria/${encodeURIComponent('Caldo de Cana')}`} className="group relative w-full aspect-[5/4] h-56 sm:h-80 md:h-[28rem] overflow-hidden shadow-lg border-2 border-green-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400">
            <Image src="/images/imgcn.jpg" alt="Caldo de Cana" fill style={{objectFit: 'cover'}} className="object-cover group-hover:brightness-90 transition duration-300" />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-transparent to-transparent" />
            <span className="category-label absolute bottom-6 left-0 right-0 text-center text-2xl font-bold text-white drop-shadow-lg animate-fade-in-up">
              <span className="category-label-text">Caldo de Cana</span>
            </span>
          </Link>
          {/* Milho Verde */}
          <Link href={`/produtos/categoria/${encodeURIComponent('Milho Verde')}`} className="group relative w-full aspect-[5/4] h-56 sm:h-80 md:h-[28rem] overflow-hidden shadow-lg border-2 border-green-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400">
            <Image src="/images/fazenda.jpg" alt="Milho Verde" fill style={{objectFit: 'cover'}} className="object-cover group-hover:brightness-90 transition duration-300" />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-transparent to-transparent" />
            <span className="category-label absolute bottom-6 left-0 right-0 text-center text-2xl font-bold text-white drop-shadow-lg animate-fade-in-up">
              <span className="category-label-text">Milho Verde</span>
            </span>
          </Link>
        </div>

        {/* Filtros e Busca removidos */}

      </div>
    </main>
  );
}
