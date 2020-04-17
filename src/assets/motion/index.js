export const transition = {
  duration: 1.2,
  ease: [0.16, 1, 0.3, 1],
};


export const wrapperMotion = {
  variants: {
    initial: { scale: 0.9, opacity: 0 },
    enter: { scale: 1, opacity: 1, transition },
    exit: {
      scale: 0.5,
      opacity: 0,
      transition: {
        duration: 1.5,
        staggerChildren: 0.1,
        ...transition,
      },
    },
  },

  transition,
};


export const imageMotion = {
  variants: {
    initial: { scale: 0.9, opacity: 0 },
    enter: { scale: 1, opacity: 1, transition },
    exit: {
      scale: 0.5,
      opacity: 0,
      transition: {
        duration: 1.5,
        ...transition,
      },
    },
  },
  transition,
};

export const buttonMotion = {
  whileHover: {
    scale: 0.96,
    transition: { duration: .3 },
  },
  whileTap: {},
};

export const textMotion = {
  variants: {
    initial: { scale: 0.9, opacity: 0, y: '20%' },
    enter: { scale: 1, opacity: 1, y: 0, transition },
    exit: {
      y: '20%',
      scale: 0.5,
      opacity: 0,
      transition: {
        duration: 1.5,
        ...transition,
      },
    },
  },
  transition,
};

export const loaderDelay = {
  variants: {
    enter: {
      opacity: 1,
    },
    exit: {
      y: '-100%',
      opacity: 1,
      transition
    },
  },
  transition: {
    duration: .5
  },
};

