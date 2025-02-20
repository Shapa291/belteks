export const motionConfig = {
  fadeInUp: {
    initial: { opacity: 0, y: 100 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    viewport: { once: true },
  },
  slideInLeft: {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.5 },
    viewport: { once: true },
  },
  slideInLeftOnStart: {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 },
  },
  fadeIn: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 2 },
    viewport: { once: true },
  },
  fadeInOnStart: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 2 },
  },
  scaleIn: {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { ease: [0, 0.71, 0.2, 1.01] },
  },
  slideInLeftSmooth: {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 1, ease: [0, 0.71, 0.2, 1.01], delay: 0.2 },
  },
  fadeInSoft: {
    initial: { opacity: 0.1 },
    animate: { opacity: 1 },
    transition: { duration: 1 },
  },
  slideInLeftWithDelay: (index: number) => ({
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    transition: {
      duration: 0.8,
      delay: 0.3 + index / 5,
      ease: [0, 0.71, 0.2, 1.01],
    },
  }),
  scaleFadeIn: (direction = "up") => ({
    initial: { y: direction === "up" ? -100 : 100, opacity: 0, scale: 0 },
    animate: { y: 0, opacity: 1, scale: 1 },
    transition: { duration: 0.5 },
  }),
  slideInWithStep: (step = 0) => ({
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.65 + step },
  }),
};
