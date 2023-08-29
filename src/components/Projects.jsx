import { useReducer, useEffect } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import ProjectListItem from "./ProjectListItem";
import Project from "./Project";

const initialState = {
  count: 0,
  selected: null,
  projects: null,
  error: null,
};

const reduce = (state, action) => {
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + 1 };
    case "addProjects":
      return {
        ...state,
        projects: action.payload,
        selected: action.payload[0],
      };
    case "selectProject": {
      return { ...state, selected: action.payload };
    }
    case "addError":
      return { ...state, error: action.payload };
  }
};

export default function Projects() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dokiz6udc",
    },
  });

  const [state, dispatch] = useReducer(reduce, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/data/projects.json");
        const data = await res.json();
        dispatch({ type: "addProjects", payload: data });
      } catch (error) {
        dispatch({ type: "addError", payload: error.message });
      }
    };
    fetchData();
  }, []);

  const handleSelectProject = (projectId) => {
    const selectedProject = state.projects.find(
      (project) => project.id === projectId
    );
    dispatch({ type: "selectProject", payload: selectedProject });
  };

  return (
    <section
      id="projects"
      className="mx-auto w-full flex justify-center items-center flex-col gap-3 my-3 relative font-body scroll-mt-14"
      // style={{ scrollPaddingTop: "4rem" }}
    >
      <h2 className="font-display font-bold text-left text-4xl">Projects</h2>
      {/* <button
        className="py-2 px-5 border bg-primary-700 hover:bg-primary-500 absolute"
        style={{
          animationTimeline: "view()",
          animationName: "shift",
          animationDirection: "alternate",
          animationDuration: "1ms",
        }}
        onClick={() => dispatch({ type: "inc" })}
      >
        {state.count}
      </button>
      <div
        className="py-2 w-2 h-2 px-5 border bg-primary-700 hover:bg-primary-500"
        style={{
          animationTimeline: "scroll()",
          animationName: "rotate",
          animationDirection: "alternate",
          animationDuration: "1ms",
        }}
      ></div> */}
      {state.projects && (
        <div className="flex w-[80rem] h-[calc(100vh-4.5rem-3rem)] py-2 gap-3 ">
          {/* Selected Project */}
          <div className="w-2/3 border-2 border-primary-800 rounded-xl h-full overflow-hidden shadow">
            <Project project={state.selected} cld={cld} />
          </div>
          {/* Project List */}
          <ul className="w-[30%] space-y-3 overflow-y-auto pr-3 pb-64 pt-12">
            {state.projects.map((project) => (
              <ProjectListItem
                key={project.title}
                project={project}
                onMouseOver={() => handleSelectProject(project.id)}
                cld={cld}
              />
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

// relative before:h-1 before:top-2 before:w-[calc(30%-14px)] before:right-[42px]  before:absolute before:bg-primary-700 before:content-['']
