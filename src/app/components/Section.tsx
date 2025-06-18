'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { fadeIn, fadeInScroll, buttonHover, transitions, marqueeAnimation, marqueeSubtitleAnimation } from '../utils/animations';

interface SectionProps {
  title: string;
  marquee?: {
    line1: string;
    line2: string;
  };
  subtitle?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  buttons?: {
    primary?: string;
    secondary?: string;
    catalog?: string;
  };
  darkOverlay?: boolean;
}

export default function Section({
  title,
  marquee,
  subtitle,
  backgroundImage,
  backgroundVideo,
  buttons,
  darkOverlay = false,
}: SectionProps) {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-20%" }}
      className="relative h-[100svh] w-full snap-start overflow-hidden"
    >
      {/* Background com animação de fade */}
      <motion.div
        variants={fadeIn}
        transition={transitions.slow}
        className="absolute inset-0 h-full w-full"
      >
        {backgroundVideo ? (
          <>
            <video
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={backgroundVideo} type="video/mp4" />
            </video>
            {darkOverlay && (
              <div className="absolute inset-0 section-overlay-dark" />
            )}
          </>
        ) : (
          backgroundImage && (
            <>
              <div className="relative h-full w-full">
                <Image
                  src={backgroundImage}
                  alt={title}
                  fill
                  className="object-cover transition-opacity duration-300"
                  sizes="100vw"
                  quality={100}
                  priority={backgroundImage === '/images/chocolate.jpg'}
                  loading={backgroundImage === '/images/chocolate.jpg' ? 'eager' : 'lazy'}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAEAsMDgwKEA4NDhIREBMYKBoYFhYYMSMlHSg6Mz08OTM4N0BIXE5ARFdFNzhQbVFXX2JnaGc+TXF5cGR4XGVnY//bAEMBERISGBUYLxoaL2NCOEJjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY//AABEIAAIABAMBIgACEQEDEQH/xAAFAAEBAAAAAAAAAAAAAAAAAAAEBf/EABoQAAICAwAAAAAAAAAAAAAAAAABAhEDITH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAMAAwAAAAAAAAAAAAAAAAABAgMRMf/aAAwDAQACEQMRAD8AoNxbhN1q2THlZ3xQBdIa2xktYAAf/9k="
                />
              </div>
              {darkOverlay && (
                <div className="absolute inset-0 section-overlay-dark" />
              )}
            </>
          )
        )}
      </motion.div>

      {/* Letreiro fixo à esquerda com novas animações */}
      {marquee && (
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-20%" }}
          transition={transitions.stagger}
          className="absolute left-0 top-1/3 z-10 w-full px-3 md:w-auto md:px-0"
        >
          <motion.div
            variants={marqueeAnimation}
            transition={transitions.marquee}
            className="flex flex-col gap-4 md:gap-6 md:border-l-2 md:border-white/80 md:pl-8 md:pr-12 md:py-6 relative"
          >
            <div className="flex flex-col gap-2 md:gap-4">
              <motion.div
                variants={marqueeAnimation}
                transition={transitions.marquee}
              >
                <motion.div 
                  variants={marqueeAnimation}
                  transition={{ delay: 0.1, ...transitions.marquee }}
                  className="text-2xl md:text-3xl lg:text-4xl font-heading font-extrabold tracking-[0.18em] uppercase text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]"
                  style={{letterSpacing: '0.18em'}}
                >
                  {marquee.line1}
                </motion.div>
                <motion.div
                  variants={marqueeAnimation}
                  transition={{ delay: 0.2, ...transitions.marquee }}
                  className="text-2xl md:text-3xl lg:text-4xl font-heading font-extrabold tracking-[0.18em] uppercase text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]"
                  style={{letterSpacing: '0.18em'}}
                >
                  {marquee.line2}
                </motion.div>
              </motion.div>
              <motion.p
                variants={marqueeSubtitleAnimation}
                transition={{ delay: 0.4, ...transitions.marquee }}
                className="max-w-[320px] text-base md:text-lg font-light leading-relaxed text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]"
              >
                {subtitle}
              </motion.p>
            </div>
            <motion.div
              variants={marqueeSubtitleAnimation}
              transition={{ delay: 0.5, ...transitions.marquee }}
              className="flex flex-col gap-3 md:flex-row md:gap-4"
            >
              <Link href="/produtos" passHref>
                <motion.span
                  whileHover="hover"
                  variants={buttonHover}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 md:px-6 md:py-3 text-sm font-medium text-white bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded transition-colors duration-300 shadow-lg"
                >
                  Ver Produtos
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </motion.span>
              </Link>
              {buttons?.primary && (
                <Link href="/sobre" passHref>
                  <motion.span
                    whileHover="hover"
                    variants={buttonHover}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 md:px-6 md:py-3 text-sm font-medium text-white bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded transition-colors duration-300 shadow-lg"
                  >
                    {buttons.primary}
                  </motion.span>
                </Link>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
}
