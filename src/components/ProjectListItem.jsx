import { AdvancedImage } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";

export default function ProjectListItem({ project, onMouseOver, cld }) {
  const image = cld.image(project.screenshots[0]);
  image.resize(
    fill()
      .width(384 * 2)
      .height(266 * 2)
  );

  return (
    <li
      className="border-2 border-primary-800 w-full rounded-xl h-62 relative overflow-hidden cursor-pointer hover:shadow-xl hover transition-all group shadow"
      style={{
        animationTimeline: "view()",
        animationName: "grow-shrink",
        animationDirection: "alternate",
        animationDuration: "1ms",
      }}
      onClick={onMouseOver}>
      <h2 className="absolute -top-1/3 group-hover:top-1/3 font-display tracking-wider left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-text shadow-inner backdrop-blur-md px-3  py-1.5 rounded-full text-2xl text-text min-w-fit whitespace-nowrap transition-all duration-200 ease-[cubic-bezier(.49,.91,.76,1.09)]">
        {project.title}
      </h2>
      {/* <img
        className="h-full w-full object-cover object-[50%_22.5%]"
        src={project.screenshots[0]}
        alt={project.title}
      /> */}
      <AdvancedImage cldImg={image} />
    </li>
  );
}
