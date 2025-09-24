import Logo1 from "@/assets/Issat.png";
import Logo2 from "@/assets/ibn.jpg";

export default function Educations() {
  return (
    <div className="mt-6 flex w-full flex-col gap-4">
      <p className="font-bold">Education</p>
      <div className="group flex cursor-pointer items-center gap-5 rounded-md border p-2">
        <div className="h-10 w-10 overflow-hidden rounded-full">
          <img
            src={Logo2}
            alt="HighSchoolLogo"
            className="h-full w-full cursor-pointer object-cover"
          />
        </div>
        <div className="flex flex-1 gap-2">
          <div className="flex flex-1 flex-col">
            <p className="font-semibold">Lycée Ibnou Sina M'saken</p>
            <p className="text-[13px]">High School Diploma</p>
            <p className="text-[11px]">
              Graduated with highest honors earning{" "}
              <span className="font-bold">17,16/20</span>
            </p>
          </div>
          <p className="text-[13px] text-gray-500 dark:text-gray-400">
            2019 - 2023
          </p>
        </div>
      </div>
      <div className="group flex cursor-pointer items-center gap-5 rounded-md border p-2">
        <div className="h-10 w-10 overflow-hidden rounded-full">
          <img
            src={Logo1}
            alt="universityLogo"
            className="h-full w-full cursor-pointer object-cover"
          />
        </div>
        <div className="flex flex-1 gap-2">
          <div className="flex flex-1 flex-col">
            <p className="line-clamp-4 font-semibold text-ellipsis">
              Higher Institute of Applied Science and Technology of Sousse
            </p>
            <p className="text-[13px]">Bachelor's Degree in Computer Science</p>
          </div>
          <p className="text-[13px] text-gray-500 dark:text-gray-400">
            2023 - 2026
          </p>
        </div>
      </div>
    </div>
  );
}
