import Section from "./components/Section";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <main className="h-screen w-full snap-y snap-mandatory overflow-x-hidden overflow-y-scroll">
      {/* Navegação */}
      <Navigation />

      {/* Primeira Seção com Vídeo */}
      <Section
        title="AGROINDÚSTRIA DO FUTURO"
        marquee={{
          line1: "Tradição em",
          line2: "Produtos Naturais"
        }}
        subtitle="Do cultivo à sua mesa, nossa missão é oferecer os melhores produtos naturais, respeitando a natureza e valorizando a qualidade artesanal. Cada produto Ligeirinho Agroindústria carrega nossa tradição e compromisso com a excelência."
        backgroundVideo="/videos/videobs.mp4"
        darkOverlay={true}
      />

      {/* Seção Chocolate */}
      <Section
        title="TRADIÇÃO & QUALIDADE"
        marquee={{
          line1: "Chocolate",
          line2: "Premium"
        }}
        subtitle="Nosso chocolate artesanal é produzido com os melhores ingredientes naturais, seguindo receitas tradicionais que preservam o verdadeiro sabor do cacau. Um processo meticuloso que resulta em produtos de qualidade excepcional."
        backgroundImage="/images/chocolate.jpg"
        darkOverlay={true}
      />

      {/* Seção CCHC */}
      <Section
        title="COMPROMISSO COM O NATURAL"
        marquee={{
          line1: "Excelência",
          line2: "desde 1985"
        }}
        subtitle="Há mais de três décadas, cultivamos a excelência em cada detalhe. Nossa história é construída sobre o compromisso com a qualidade e o respeito aos processos naturais, resultando em produtos que são referência no mercado."
        backgroundImage="/images/cchc.jpg"
        darkOverlay={true}
        buttons={{
          primary: "Sobre",
        }}
      />

      {/* Seção Produtos Naturais */}
      <Section
        title="DO CAMPO À SUA MESA"
        marquee={{
          line1: "Qualidade",
          line2: "Sustentável"
        }}
        subtitle="Cada produto é cuidadosamente selecionado e processado para preservar seus nutrientes e sabores naturais. Nossa produção sustentável garante alimentos saudáveis e saborosos, respeitando o meio ambiente em todo o processo."
        backgroundImage="/images/imgcn.jpg"
        darkOverlay={true}
      />
    </main>
  );
}
