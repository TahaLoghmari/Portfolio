import xClone from "../../../shared/assets/xClone.png";
import fileUploader from "../../../shared/assets/FileUploader.png";
import type { projectInfo } from "./Projects";
import Technologie from "./Technologie";

const imageMap: Record<string, string> = {
  xClone: xClone,
  fileUploader: fileUploader,
};

export default function Project({ info }: { info: projectInfo }) {
  const imageSrc = imageMap[info.image];

  return (
    <a
      className="flex h-100 flex-col overflow-hidden rounded-lg border"
      href={info.liveDemo || "#"}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="aspect-video h-35 w-full">
        <img
          src={imageSrc}
          alt={info.title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between p-3">
        <div className="min-w-0 flex-1">
          <p className="font-semibold">{info.title}</p>
          <p className="mt-1 line-clamp-5 text-xs text-gray-500 dark:text-gray-400">
            {info.description}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="mt-1 flex flex-wrap items-center gap-1">
            {info.technologies.map((technologie, index) => (
              <Technologie key={index} tech={technologie} />
            ))}
          </div>
          <div className="flex items-center gap-2">
            {info.liveDemo && (
              <a
                className="bg-primary hover:bg-primary/80 flex cursor-pointer items-center gap-1 rounded-sm p-1"
                target="_blank"
                rel="noopener noreferrer"
                href={info.liveDemo}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                  fill="currentColor"
                  className="text-secondary h-5 w-5 cursor-pointer"
                >
                  <path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-82q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z" />
                </svg>
                <p className="text-secondary text-xs font-semibold">Website</p>
              </a>
            )}
            <a
              className="bg-primary hover:bg-primary/80 flex cursor-pointer items-center gap-1 rounded-sm p-1"
              target="_blank"
              rel="noopener noreferrer"
              href={info.github}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 64 64"
                className="text-secondary h-5 w-5 cursor-pointer"
                fill="currentColor"
              >
                <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
              </svg>
              <p className="text-secondary text-xs font-semibold">Source</p>
            </a>
          </div>
        </div>
      </div>
    </a>
  );
}
