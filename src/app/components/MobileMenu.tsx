'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { transitions } from '../utils/animations';

const menuItems = [
  { name: 'PRODUTOS', href: '/produtos' },
  { name: 'SOBRE', href: '/sobre' },
];

interface MobileMenuProps {
  isProductPage?: boolean;
}

export default function MobileMenu({ isProductPage = false }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
    document.body.style.overflow = !isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  const textColorClass = isProductPage ? 'text-foreground' : 'text-white';
  const menuBgClass = isProductPage ? 'bg-white/90' : 'bg-black/80';

  return (
    <>
      {/* Botão do Menu */}
      <motion.button
        onClick={toggleMenu}
        whileHover={{ y: -2 }}
        transition={transitions.fast}
        className={`text-xs font-light tracking-widest transition-opacity hover:opacity-100 opacity-75 ${textColorClass}`}
        aria-label={isOpen ? 'Fechar Menu' : 'Abrir Menu'}
      >
        MENU
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay do Menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={transitions.default}
              className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm"
              onClick={toggleMenu}
            />

            {/* Menu Sliding */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={transitions.default}
              className={`fixed bottom-0 right-0 top-0 z-50 w-[85%] max-w-[360px] backdrop-blur-md ${menuBgClass}`}
            >
              {/* Conteúdo do Menu */}
              <div className="relative flex h-full flex-col p-5">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, ...transitions.default }}
                  className="mb-8 flex items-center justify-between"
                >
                  <Link href="/" className="block" onClick={toggleMenu}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={transitions.fast}
                      className="relative h-7 w-7"
                    >
                      <Image
                        src="/images/logo.png"
                        alt="Ligeirinho Agroindústria"
                        fill
                        className="object-contain"
                      />
                    </motion.div>
                  </Link>
                  <motion.button
                    whileHover={{ y: -2 }}
                    transition={transitions.fast}
                    onClick={toggleMenu}
                    className={`text-xs font-light tracking-widest transition-opacity hover:opacity-100 opacity-75 ${textColorClass}`}
                  >
                    FECHAR
                  </motion.button>
                </motion.div>

                {/* Links do Menu */}
                <nav className="flex flex-col space-y-5">
                  {menuItems.map((item, index) => (
                    <Link key={item.name} href={item.href} onClick={toggleMenu}>
                      <motion.span
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1, ...transitions.default }}
                        whileHover={{ x: 10 }}
                        className={`block text-left text-xl font-light tracking-wider transition-colors hover:opacity-100 opacity-90 cursor-pointer ${textColorClass}`}
                      >
                        {item.name}
                      </motion.span>
                    </Link>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
