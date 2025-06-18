'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import { fadeIn, transitions } from '../utils/animations';
import { usePathname } from 'next/navigation';

const menuItems = [
  { name: "PRODUTOS", href: "/produtos" },
  { name: "SOBRE", href: "/sobre" }
];

export default function Navigation() {
  const pathname = usePathname();
  const isProductPage = pathname === '/produtos';
  const textColorClass = isProductPage ? 'text-foreground' : 'text-white';

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={transitions.default}
      className="fixed left-0 right-0 top-0 z-40 flex items-center justify-between px-8 py-6"
    >
      {/* Logo */}
      <div className="flex-none">
        <Link href="/" className="block">
          <div className="relative h-8 w-8 md:h-9 md:w-9">
            <Image
              src="/images/logo.png"
              alt="Ligeirinho Agroindústria"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>
      </div>

      {/* Menu Central - Visível apenas em desktop */}
      <ul className="hidden items-center justify-center space-x-8 md:flex">
        {menuItems.map((item) => (
          <motion.li
            key={item.name}
            variants={fadeIn}
            initial="initial"
            animate="animate"
            whileHover={{ y: -2 }}
            transition={transitions.fast}
          >
            <Link
              href={item.href}
              className={`text-xs font-light tracking-[0.3em] transition-opacity hover:opacity-100 opacity-75 ${textColorClass}`}
            >
              {item.name}
            </Link>
          </motion.li>
        ))}
      </ul>

      {/* Menu Direita */}
      <div className="flex-none">
        {/* Menu Mobile */}
        <div className="md:hidden">
          <MobileMenu isProductPage={isProductPage} />
        </div>
        {/* Menu Desktop */}
        <motion.button
          whileHover={{ y: -2 }}
          transition={transitions.fast}
          className={`hidden text-xs font-light tracking-[0.3em] transition-opacity hover:opacity-100 opacity-75 ${textColorClass} md:block`}
        >
          MENU
        </motion.button>
      </div>
    </motion.nav>
  );
}
