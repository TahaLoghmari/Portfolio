import Project from "./Project";

export interface projectInfo {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  liveDemo: string;
  videoDemo: string;
  image: string;
}

export default function Projects() {
  const projects: projectInfo[] = [
    {
      title: "SmartPly",
      description:
        "A modern job application tracker that integrates AI + Gmail to help you stay on top of applications, recruiter replies, and interviews — all in one place.",
      technologies: [
        "TypeScript",
        "React",
        "Docker",
        "CI/CD",
        "AI",
        "Tailwind CSS",
        "ASP.NET Core",
        "PostgreSQL",
        "Microsoft Azure",
      ],
      github: "https://github.com/TahaLoghmari/SmartPly",
      liveDemo: "https://www.smartply.me/",
      videoDemo:
        "https://www.linkedin.com/feed/update/urn:li:activity:7376308844169302016/",
      image: "SmartPly",
    },
  ];

  return (
    <div className="flex w-full flex-col gap-4">
      <p className="font-bold">Projects</p>
      <div className="grid w-full grid-cols-1 gap-3 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Project key={index} info={project} />
        ))}
      </div>
    </div>
  );
}
