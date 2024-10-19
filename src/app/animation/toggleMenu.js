export const toggleMenu = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
  exit: {
    x: -100,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};
