const anim = {
  old: {
    name: "bump-out",
    duration: "0.1s",
    easing: "linear",
  },
  new: {
    delay: "0.21s",
    name: "bump-in",
    duration: "0.2s",
    easing: "linear",
  },
};
const animBack = {
  new: {
    name: "bump-out",
    duration: "0.1s",
    easing: "linear",
  },
  old: {
    delay: "0.21s",
    name: "bump-in",
    duration: "0.2s",
    easing: "linear",
  },
};

export const customTransition = {
  forwards: anim,
  backwards: animBack,
};
