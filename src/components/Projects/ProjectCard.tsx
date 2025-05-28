export interface ProjectCardProps {
  project: {
    title: string;
    videoSrc?: string;
    imageSrc?: string;
    description: string;
    techStack: Array<string>;
    links: Array<{ label: string; href: string }>;
  };
}
export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, videoSrc, imageSrc, description, techStack, links } = project;

  return (
    <div className="card bg-base-100 shadow-sm w-full xl:max-w-[45%] group transition-all duration-300  hover:shadow-[0_20px_80px_rgba(255,_255,_255,_0.2)] ">
      <figure>
        {videoSrc ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-[300px]"
          >
            <source src={videoSrc} type="video/webm" />
          </video>
        ) : (
          <img
            src={imageSrc}
            alt={`${title} screenshot`}
            className="object-cover w-full h-[300px]"
          />
        )}
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg group-hover:underline">{title}</h2>
        <div className="flex items-center gap-4 flex-wrap">
          {links?.map(({ label, href }) => (
            <a
              key={label}
              target="_blank"
              href={href}
              rel="noopener noreferrer"
              className="link-success inline-flex gap-1 items-center "
            >
              {label}
              <i className="bx bx-arrow-right-stroke text-xl" />
            </a>
          ))}
        </div>
        <p className="text-lg mt-2">{description}</p>
        <div className="card-actions justify-end mt-2 flex-wrap ">
          {techStack.map((tech) => (
            <div
              key={tech}
              className="badge badge-outline group-hover:text-accent transition-all duration-300"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
