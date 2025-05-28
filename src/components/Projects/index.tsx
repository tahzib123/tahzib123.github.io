import ProjectCard from "./ProjectCard";
import projects from "./projectData";

export default function Projects() {
  return (
    <section id="projects" className="max-w-[1440px] m-auto px-8 py-12">
      <h3 className="text-3xl leading-[150%] my-12 border-b-2 border-accent w-fit">
        Projects
      </h3>
      <div className="xl:flex flex-wrap justify-between gap-16 w-full space-y-16 xl:space-y-0">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
