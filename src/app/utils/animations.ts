// Animações de fade
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

// Animações de slide
export const slideUp = {
  initial: { y: 30, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -30, opacity: 0 },
};

// Animação do letreiro
export const marqueeAnimation = {
  initial: { 
    opacity: 0,
    x: -30,
    filter: "blur(8px)",
  },
  animate: { 
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
  },
  exit: { 
    opacity: 0,
    x: 30,
    filter: "blur(8px)",
  },
};

// Animação do subtítulo do letreiro
export const marqueeSubtitleAnimation = {
  initial: { 
    opacity: 0,
    y: 20,
    filter: "blur(4px)",
  },
  animate: { 
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
};

// Animações de escala
export const scaleUp = {
  initial: { scale: 0.95, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.95, opacity: 0 },
};

// Animação de hover para botões
export const buttonHover = {
  initial: { scale: 1 },
  hover: { scale: 1.05 },
};

// Efeito de scroll fade in
export const fadeInScroll = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

// Transições
export const transitions = {
  default: { duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] },
  slow: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] },
  fast: { duration: 0.2, ease: [0.43, 0.13, 0.23, 0.96] },
  marquee: { duration: 0.8, ease: [0.25, 0.1, 0, 1] },
  stagger: { staggerChildren: 0.1 },
};
