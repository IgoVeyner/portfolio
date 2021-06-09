import Project from "../Project"

const projects = [
  {
    projectName: "Thrasher Forums",
    description: "Skateboarding Forum / Messageboard website in the style of Thrasher Magazine",
    demoLink: "https://www.youtube.com/watch?v=21PHZBzQKAo",
    github: "https://github.com/IgoVeyner/thrasher-forums"
  },
  {
    projectName: "Code Speed Typer",
    description: "Typing Tutor application that aims to improve a programmer's typing speed",
    demoLink: "https://youtu.be/48r0azXDRM4",
    github: "https://github.com/IgoVeyner/code-speed-typer"
  },
  {
    projectName: "Central Park Zoo",
    description: "A redesign of NYC's Central Park Zoo website to allow for a virtual zoo experience in the COVID era",
    demoLink: "https://youtu.be/JnPUEg8UXuY",
    github: "https://github.com/IgoVeyner/central_park_zoo"
  }
]


const renderProjects = () =>{
  return projects.map((project, i) => { 
    return <Project project={project} id={`project-${i+1}`} key={i}
    reverse={i % 2 == 0 ? false : true} /> 
  })
}


const ProjectSummary = () => {
  return (
    <>
      {renderProjects()}
    </>
  )
}

export default ProjectSummary