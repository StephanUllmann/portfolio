const ship = document.querySelector(".ship");
const anchor = document.querySelector(".anchor");
const chain = document.querySelector(".chain");

const shipHeight = ship.clientHeight / 2;
const shipWidth = ship.clientWidth / 2;

let currTilt = 1;

window.addEventListener("mousemove", (e) => {
  ship.style.top = e.clientY - shipHeight + "px";
  ship.style.left = e.clientX - shipWidth + "px";

  const aRect = anchor.getBoundingClientRect();
  const sRect = ship.getBoundingClientRect();

  const anchorPointX = aRect.left + aRect.width * 0.5;
  const anchorPointY = aRect.top + aRect.height * 0.25;

  const shipPointX = sRect.left + sRect.width * 0.75;
  const shipPointY = sRect.bottom;

  const isRight = shipPointX >= anchorPointX;
  const isBottom = shipPointY >= anchorPointY;

  // If ship is Bottom-Right (true/true) or Top-Left (false/false), tilt is 1.
  // If ship is Top-Right (true/false) or Bottom-Left (false/true), tilt is -1.
  const tilt = isRight === isBottom ? 1 : -1;

  if (tilt === currTilt) return;
  currTilt = tilt;
  chain.style.setProperty("--tilt", tilt);
});
