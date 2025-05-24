import Logo1 from "../../../shared/assets/Issat.png";
import { ChevronRight } from "lucide-react";

export default function Educations() {
  return (
    <div className="mt-6 flex w-full flex-col gap-4">
      <p className="font-extrabold">Education</p>
      <div className="group flex cursor-pointer items-center gap-5">
        <div className="h-10 w-10 overflow-hidden rounded-full">
          <img
            src={Logo1}
            alt="universityLogo"
            className="h-full w-full cursor-pointer object-cover"
          />
        </div>
        <div className="flex flex-1 justify-between">
          <a
            className="flex flex-col"
            target="_blank"
            rel="noopener noreferrer"
            href="https://issatso.rnu.tn/"
          >
            <div className="flex items-center">
              <p className="font-semibold">ISSAT Sousse</p>
              <ChevronRight className="ml-1 h-4 w-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
            <p className="text-[13px]">Bachelor's Degree in Computer Science</p>
          </a>
          <p className="text-[13px] text-gray-500 dark:text-gray-400">
            2023-2026
          </p>
        </div>
      </div>
    </div>
  );
}
