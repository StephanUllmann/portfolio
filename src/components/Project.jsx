import { useRef, useEffect, useReducer } from "react";
import { AdvancedImage } from "@cloudinary/react";
import Github from "./react-icons/Github";
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

const techIcons = {
  React: <ReactIcon />,
  CSS3: <CSSicon />,
  Mapbox: <MapboxIcon />,
  Express: <ExpressIcon />,
  "Socket.io": <SocketIOicon />,
  MongoDB: <MongoDBicon />,
  TailwindCSS: <TailwindIcon />,
  HTML5: <HTMLIcon />,
  JavaScript: <JSicon />,
  SCSS: <SCSSicon />,
  PostgreSQL: <PostgresIcon />,
};

const initialState = {
  currImage: 0,
  images: null,
  width: null,
  height: null,
};

const reducer = function (state, action) {
  switch (action.type) {
    case "setWidth":
      return { ...state, width: action.payload };
    case "setDimensions":
      return {
        ...state,
        height: action.payload.height,
        width: action.payload.width,
      };
    case "setHeight":
      return { ...state, height: action.payload };
    case "setImages":
      return { ...state, images: action.payload };
    case "setCurrImage":
      return { ...state, currImage: action.payload };
    case "incImgCount":
      const nextCount =
        state.currImage < state.images.length - 1 ? state.currImage + 1 : 0;
      return { ...state, currImage: nextCount };
  }
};

export default function Project({ project, cld }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const containerRef = useRef(null);
  const imageCarouselRef = useRef(null);

  useEffect(() => {
    const width = containerRef.current.offsetWidth;
    const height = containerRef.current.offsetHeight;
    dispatch({ type: "setDimensions", payload: { width, height } });
  }, []);

  useEffect(() => {
    if (!state.width && !state.height) return;
    const imgArr = project.screenshots.map((img) => {
      return cld
        .image(img)
        .format("auto")
        .delivery("q_auto")
        .resize(`c_fill,w_${state.width * 2},g_face`);
    });
    dispatch({ type: "setImages", payload: imgArr });
  }, [state.width, project.screenshots[0]]);

  useEffect(() => {
    if (!state.images || !imageCarouselRef.current) return;

    // let imageCount = 0;
    // imageCarouselRef.current.style.transform = `translateX(-${
    //   state.width * imageCount
    // }px)`;
    // if (imageCount < state.images.length - 1) imageCount++;
    // else imageCount = 0;

    // const interval = setInterval(() => {
    //   imageCarouselRef.current.style.transform = `translateX(-${
    //     state.width * imageCount
    //   }px)`;
    //   if (imageCount < state.images.length - 1) imageCount++;
    //   else imageCount = 0;

    dispatch({ type: "setCurrImage", payload: 0 });

    const interval = setInterval(() => {
      dispatch({ type: "incImgCount" });
    }, 5678);

    return () => clearInterval(interval);
  }, [state.images, project.screenshots[0]]);

  useEffect(() => {
    if (containerRef.current.children[0].id) {
      containerRef.current.children[0].style.transform = `translateX(0)`;
    }
    if (!imageCarouselRef.current) return;
    imageCarouselRef.current.style.transform = `translateX(-${
      state.width * state.currImage
    }px)`;
  }, [state.currImage, project.screenshots[0]]);

  return (
    <div ref={containerRef} className="relative w-full h-full bg-primary-900">
      {project.title === "Simple Chess" ? (
        <div
          id="chess"
          className="w-full h-[415px] scale-90"
          style={{ overflow: "hidden" }}>
          <iframe
            style={{ overflow: "hidden" }}
            width={state.width}
            height="415"
            src="https://stephanullmann.github.io/simple-chess/"
            scrolling="no"></iframe>
        </div>
      ) : (
        <a
          ref={imageCarouselRef}
          className="flex w-full transition-all duration-300"
          href={project.deployment}
          target="_blank">
          {state.images?.length > 0 &&
            state.images.map((image, ind) => (
              <AdvancedImage cldImg={image} key={project.screenshots[ind]} />
            ))}
        </a>
      )}
      {project.title !== "Simple Chess" && (
        <div className="absolute flex items-center gap-4 -translate-x-1/2 left-1/2 top-2">
          {state.images?.length > 0 &&
            state.images.map((_, ind) => (
              <button
                key={"gallery-indicator" + ind + project.title}
                onClick={() => dispatch({ type: "setCurrImage", payload: ind })}
                className={`appearance-none rounded-full  ${
                  state.currImage === ind
                    ? "h-2.5 w-2.5 bg-primary-500"
                    : "bg-primary-200 h-1.5 w-1.5"
                } transition-all duration-300 hover:h-2 hover:w-2 hover:bg-primary-300`}></button>
            ))}
        </div>
      )}
      <div className="relative mx-3 h-[170px]">
        <h2 className="my-2 text-3xl tracking-wider text-center transition-all duration-1000 ease-out font-display">
          {project.title}
        </h2>
        <p className="ml-2 text-sm">
          {project.description}
          {project.external && (
            <a
              href={project.external.link}
              target="_blank"
              className="transition-all duration-200 hover:text-text/80">
              {project.external.source} &#8599;
            </a>
          )}
        </p>
        <a
          href={project.github.front}
          target="_blank"
          className="absolute top-0 transition-all duration-150 right-3 hover:text-primary-400 hover:scale-105">
          <Github />
        </a>
        {project.coAuthors?.length > 0 && (
          <>
            <p className="pt-2 ml-2 text-sm">Written together with: </p>
            <ul>
              {project.coAuthors.map((buddy) => (
                <li key={buddy.name + project.title}>
                  <a
                    href={buddy.links[0]}
                    target="_blank"
                    className="text-sm mt-2  ml-3 pl-4 hover:text-text/80 relative before:h-2 before:w-2 before:rounded-full before:bg-text before:absolute before:-left-0 before:bottom-1 before:triangle-clip hover:before:-bottom-0.5 hover:before:h-px  hover:before:bg-text/80 before:transition-all before:ease-[cubic-bezier(.47,.77,.77,1.3)] before:duration-150 hover:before:delay-0 before:delay-150 after:absolute after:-bottom-1 after:h-1 after:w-0 hover:after:w-[105%] after:-left-0 after:bg-text/80 after:rev-triangle-clip hover:after:translate-x-0 after:transition-all after:duration-150 hover:after:delay-150 after:rounded-br-full after:ease-[cubic-bezier(.49,.91,.76,1.09)] overflow-hidden hover:text-shadow transition-all duration-500">
                    {buddy.name}
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
        <div className="absolute flex gap-3 right-3 bottom-1">
          {project.techStack &&
            project.techStack.map((icon) => (
              <div
                className="h-8 w-8 hover:scale-110 saturate-[0.1] relative hover:saturate-150 transition-all duration-300 group ease-[cubic-bezier(.49,.91,.76,1.09)]"
                key={project.title + icon}>
                <p className="text-xs absolute -top-[18px] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity group-hover:delay-200 duration-150 ease-[cubic-bezier(.49,.91,.76,1.09)]">
                  {icon}
                </p>
                {techIcons[icon]}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
