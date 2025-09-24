import { Badge } from "@/components/ui/badge";

export default function Technologie({ tech }: { tech: string }) {
  return (
    <Badge variant="secondary" className="text-[11px]">
      {tech}
    </Badge>
  );
}
