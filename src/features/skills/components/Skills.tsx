export default function Skills() {
  const skills: string[] = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "ASP.NET Core",
    "Tailwind CSS",
    "C++",
    "Shadcn UI",
    "PostgreSQL",
  ];
  return (
    <div className="flex w-full flex-col gap-3 rounded-sm border p-6">
      <p className="font-extrabold">Skills</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <div key={skill} className="bg-accent rounded-full px-3 py-1">
            <p className="text-[11px] font-semibold">{skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
