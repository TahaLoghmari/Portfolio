import Project from "./Project";

export interface projectInfo {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  liveDemo: string;
  image: string;
}

export default function Projects() {
  const projects: projectInfo[] = [
    {
      title: "X Clone",
      description:
        "xClone is a modern, fullstack Twitter clone built with React, ASP.NET Core, and PostgreSQL. It features user authentication, tweeting, following, liking, and responsive UI components .",
      technologies: [
        "JavaScript",
        "React",
        "Shadcn UI",
        "Tailwind CSS",
        "ASP.NET Core",
        "PostgreSQL",
      ],
      github: "https://github.com/TahaLoghmari/X-Clone",
      liveDemo: "",
      image: "xClone",
    },
    {
      title: "File Uploader",
      description:
        "FileUploader is a fullstack file management web app inspired by Google Drive. It allows users to upload, manage, and download files with a clean interface, secure authentication, and RESTful backend.",
      technologies: [
        "JavaScript",
        "React",
        "Shadcn UI",
        "Tailwind CSS",
        "ASP.NET Core",
        "PostgreSQL",
      ],
      github: "https://github.com/TahaLoghmari/FileUploader",
      liveDemo: "",
      image: "fileUploader",
    },
  ];

  return (
    <div className="flex w-full flex-col gap-4">
      <p className="font-extrabold">Projects</p>
      <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
        {projects.map((project, index) => (
          <Project key={index} info={project} />
        ))}
      </div>
    </div>
  );
}
