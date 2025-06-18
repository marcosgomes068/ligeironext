import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.produto.createMany({
    data: [
      {
        nome: 'CHOCOLATE ARTESANAL PREMIUM',
        preco: 24.90,
        imagem: '/images/chocolate.jpg',
      },
      {
        nome: 'SELEÇÃO DE PRODUTOS NATURAIS',
        preco: 19.90,
        imagem: '/images/imgcn.jpg',
      },
      {
        nome: 'LINHA TRADICIONAL',
        preco: 29.90,
        imagem: '/images/cchc.jpg',
      },
      {
        nome: 'CHOCOLATE PREMIUM DARK',
        preco: 34.90,
        imagem: '/images/chocolate.jpg',
      },
      {
        nome: 'PRODUTOS ESPECIAIS',
        preco: 39.90,
        imagem: '/images/imgcn.jpg',
      },
      {
        nome: 'LINHA GOURMET',
        preco: 44.90,
        imagem: '/images/cchc.jpg',
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
