import Navigation from '../components/Navigation';
import Image from 'next/image';

export default function Sobre() {
  return (
    <main className="min-h-screen w-full bg-white/80 backdrop-blur">
      <Navigation />
      
      {/* Seção EFA */}
      <section className="relative h-[60vh] md:h-[70vh]">
        <div className="absolute inset-0">
          <Image 
            src="/images/efa.jpg" 
            alt="Equipe e Família Agroindústria" 
            fill 
            className="object-cover"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        </div>
        <div className="relative h-full max-w-4xl mx-auto px-6 flex items-center">
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">
              Nossa Equipe & Família
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Orgulho de quem faz parte da nossa história. Valorizamos cada pessoa que contribui para a qualidade e tradição dos nossos produtos.
            </p>
          </div>
        </div>
      </section>

      {/* Seção Vídeo Caldo de Cana */}
      <section className="relative h-[80vh] flex items-center justify-center bg-black">
        <div className="w-full h-full flex items-center justify-center">
          <video 
            src="/videos/caldoecanavd.mp4?v=1" 
            className="w-full h-full object-cover rounded-lg shadow-2xl" 
            autoPlay 
            loop 
            muted 
            playsInline
            poster="/images/efa.jpg"
          >
            <track kind="captions" />
            Seu navegador não suporta vídeo HTML5.
          </video>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 px-6 py-2 rounded text-white text-lg font-medium tracking-wide shadow-lg">
          Caldo de Cana: Sabor e Energia Natural
        </div>
      </section>

      {/* Seção de Contato */}
      <section className="relative min-h-screen bg-black flex items-center justify-center">
        <div className="max-w-4xl w-full mx-auto px-6 py-24">
          <div className="flex flex-col items-center gap-12">
            <h2 className="text-3xl md:text-4xl font-medium tracking-wide text-white">
              ENTRE EM CONTATO
            </h2>
            
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 text-white/90">
              <div className="space-y-8 text-center md:text-right border-b md:border-b-0 md:border-r border-white/20 pb-8 md:pb-0 md:pr-8">
                <div>
                  <h3 className="text-lg font-light tracking-widest mb-2">EMAIL</h3>
                  <a 
                    href="mailto:contato@ligeirinhoagro.com" 
                    className="text-lg hover:text-green-400 transition-colors duration-300"
                  >
                    contato@ligeirinhoagro.com
                  </a>
                </div>
                <div>
                  <h3 className="text-lg font-light tracking-widest mb-2">TELEFONE</h3>
                  <a 
                    href="tel:+55999999999" 
                    className="text-lg hover:text-green-400 transition-colors duration-300"
                  >
                    +55 (99) 9999-9999
                  </a>
                </div>
              </div>
              
              <div className="space-y-8 text-center md:text-left md:pl-8">
                <div>
                  <h3 className="text-lg font-light tracking-widest mb-2">ENDEREÇO</h3>
                  <p className="text-lg">
                    Rua da Agroindústria, 123<br />
                    Cidade - Estado<br />
                    CEP 12345-678
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-light tracking-widest mb-2">REDES SOCIAIS</h3>
                  <div className="flex justify-center md:justify-start gap-6">
                    <a href="#" className="text-lg hover:text-green-400 transition-colors duration-300">Instagram</a>
                    <a href="#" className="text-lg hover:text-green-400 transition-colors duration-300">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full max-w-xs">
              <a 
                href="mailto:contato@ligeirinhoagro.com"
                className="w-full block text-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black transition-colors duration-300 text-lg tracking-wider"
              >
                ENVIAR EMAIL
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Carrossel de Parceiros */}
      <section className="carousel-partners">
        <h3 className="carousel-partners-title">
          Nossos Parceiros
        </h3>
        <div className="carousel-container">
          <div className="carousel-track">
            <div className="carousel-logo">
              <Image 
                src="/images/par1.png" 
                alt="Parceiro 1" 
                width={120} 
                height={60} 
                priority
                className="object-contain"
              />
            </div>
            <div className="carousel-logo">
              <Image 
                src="/images/logo.png" 
                alt="Parceiro 2" 
                width={120} 
                height={60}
                className="object-contain" 
              />
            </div>
            <div className="carousel-logo">
              <Image 
                src="/images/cchc.jpg" 
                alt="Parceiro 3" 
                width={120} 
                height={60}
                className="object-contain" 
              />
            </div>
            <div className="carousel-logo">
              <Image 
                src="/images/chocolate.jpg" 
                alt="Parceiro 4" 
                width={120} 
                height={60}
                className="object-contain" 
              />
            </div>
            <div className="carousel-logo">
              <Image 
                src="/images/fazenda.jpg" 
                alt="Parceiro 5" 
                width={120} 
                height={60}
                className="object-contain" 
              />
            </div>
            {/* Duplicando logos para criar efeito infinito */}
            <div className="carousel-logo">
              <Image 
                src="/images/par1.png" 
                alt="Parceiro 1" 
                width={120} 
                height={60}
                className="object-contain" 
              />
            </div>
            <div className="carousel-logo">
              <Image 
                src="/images/logo.png" 
                alt="Parceiro 2" 
                width={120} 
                height={60}
                className="object-contain" 
              />
            </div>
            <div className="carousel-logo">
              <Image 
                src="/images/imgcn.jpg" 
                alt="Parceiro 6" 
                width={120} 
                height={60}
                className="object-contain" 
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
