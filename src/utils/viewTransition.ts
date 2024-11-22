const anim = {
  old: {
    name: "bump-out",
    duration: "0.5s",
    easing: "linear",
    // direction: "reverse",
  },
  new: {
    delay: "0.5s",
    name: "bump-in",
    duration: "0.25s",
    easing: "linear",
  },
};
const animBack = {
  new: {
    delay: "0.5s",
    name: "bump-out",
    duration: "0.25s",
    easing: "linear",
    // direction: "reverse",
  },
  old: {
    name: "bump-in",
    duration: "0.5s",
    easing: "linear",
  },
};

export const customTransition = {
  forwards: anim,
  backwards: animBack,
};