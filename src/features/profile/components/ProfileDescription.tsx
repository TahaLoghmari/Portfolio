import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function ProfileDescription() {
  return (
    <div className="flex flex-col gap-3">
      <div className="hidden md:flex md:flex-col">
        <p className="font-extrabold">Mohamed Taha Loghmari 👋</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Software Engineer
        </p>
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400">
        I'm a dedicated Software Engineering student with a passion for turning
        real-world problems into elegant, scalable solutions.
      </p>
      <Button asChild className="flex items-center font-bold">
        <a href="/Taha-Loghmari-CV.pdf" download>
          <Download className="text-secondary" />
          <span>Download CV</span>
        </a>
      </Button>
    </div>
  );
}
