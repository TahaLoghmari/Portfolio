import { Badge } from "@/components/ui/badge";

export default function Skills() {
  const skills: string[] = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "ASP.NET Core",
    "Tailwind CSS",
    "C++",
    "Docker",
    "Github Actions",
    "CI/CD",
    "PostgreSQL",
  ];
  return (
    <div className="flex w-full flex-col gap-3 rounded-sm border p-6">
      <p className="font-bold">Skills</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="secondary">
            <p className="text-[11px] font-semibold">{skill}</p>
          </Badge>
        ))}
      </div>
    </div>
  );
}
