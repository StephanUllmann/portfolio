const anim = {
  old: {
    name: "bump-out",
    duration: "0.125s",
    easing: "linear",
  },
  new: {
    delay: "0.125s",
    name: "bump-in",
    duration: "0.1s",
    easing: "linear",
  },
};
const animBack = {
  new: {
    name: "bump-out",
    duration: "0.125s",
    easing: "linear",
  },
  old: {
    delay: "0.125s",
    name: "bump-in",
    duration: "0.1s",
    easing: "linear",
  },
};

export const customTransition = {
  forwards: anim,
  backwards: animBack,
};
