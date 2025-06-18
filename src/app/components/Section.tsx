'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { fadeIn, fadeInScroll, buttonHover, transitions } from '../utils/animations';

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
      viewport={{ once: true }}
      className="relative h-screen w-full snap-start overflow-hidden"
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
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRseHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/2wBDAR8SEhgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
              {/* Nenhum overlay branco */}
              {darkOverlay && (
                <div className="absolute inset-0 section-overlay-dark" />
              )}
            </>
          )
        )}
      </motion.div>

      {/* Letreiro fixo à esquerda */}
      {marquee && (
        <div
          className="absolute left-0 top-[35%] z-10"
        >
          <div className="flex flex-col gap-6 pl-8 pr-12 py-6 border-l-2 border-white bg-gradient-to-r from-black/50 to-transparent">
            <div className="flex flex-col gap-4">
              <div>
                <div className="text-xl md:text-2xl font-heading font-bold tracking-[0.3em] uppercase drop-shadow-lg text-white">
                  {marquee.line1}
                </div>
                <div className="text-xl md:text-2xl font-heading font-bold tracking-[0.3em] uppercase drop-shadow-lg text-white">
                  {marquee.line2}
                </div>
              </div>
              <p className="max-w-[300px] text-sm md:text-base font-light leading-relaxed drop-shadow-md text-white/90">
                {subtitle}
              </p>
            </div>
            <Link href="/produtos" passHref>
              <motion.span
                whileHover="hover"
                variants={buttonHover}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-black/30 hover:bg-black/50 rounded transition-colors duration-300"
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
          </div>
        </div>
      )}
    </motion.section>
  );
}
