import CSSicon from "./react-icons/CSSicon";
import ExpressIcon from "./react-icons/ExpressIcon";
import HTMLIcon from "./react-icons/HTMLicon";
import JSicon from "./react-icons/JSicon";
import MapboxIcon from "./react-icons/MapboxIcon";
import MongoDBicon from "./react-icons/MongoDBicon";
import PostgresIcon from "./react-icons/PostgresIcon";
import ReactIcon from "./react-icons/ReactIcon";
import SCSSicon from "./react-icons/SCSSicon";
import SocketIOicon from "./react-icons/SocketIOicon";
import TailwindIcon from "./react-icons/TailwindIcon";
import AstroIcon from "./react-icons/AstroIcon";

const techIcons = {
  HTML5: <HTMLIcon />,
  CSS3: <CSSicon />,
  JavaScript: <JSicon />,
  SCSS: <SCSSicon />,
  TailwindCSS: <TailwindIcon />,
  React: <ReactIcon />,
  Astro: <AstroIcon />,
  Express: <ExpressIcon />,
  MongoDB: <MongoDBicon />,
  PostgreSQL: <PostgresIcon />,
  "Socket.io": <SocketIOicon />,
  Mapbox: <MapboxIcon />,
};

export default function TechStack() {
  return (
    <section className="relative flex flex-col items-center justify-center w-full gap-3 mx-auto my-14 font-body scroll-mt-14">
      <h2 className="mb-8 text-4xl font-bold text-left font-display">
        I've worked with
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-y-10 gap-x-16">
        {Object.keys(techIcons).map((icon, ind) => (
          <div
            className="relative transition-all duration-200 w-28 h-28 group saturate-[.33] before:-inset-7 before:absolute before:radial-gradient-fade before:rounded-xl hover:before:radial-gradient-transparent before:transition-all before:duration-200 hover:saturate-[.75]"
            key={`techStack-${icon + ind}`}>
            {techIcons[icon]}
            <p className="text-sm absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-150 ease-[cubic-bezier(.49,.91,.76,1.09)]">
              {icon}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
