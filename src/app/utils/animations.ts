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

// Transições padrão
export const transitions = {
  default: { duration: 0.3 },
  slow: { duration: 0.6 },
  fast: { duration: 0.15 },
  bounce: {
    type: 'spring',
    stiffness: 400,
    damping: 10,
  },
};
