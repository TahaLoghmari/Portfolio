import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ProfileImage from "../../../shared/assets/Me.png";

export default function ProfileHeader() {
  return (
    <div className="flex items-center gap-4 md:justify-center md:gap-0">
      <Avatar className="h-auto w-15 md:w-40 xl:w-55">
        <AvatarImage
          src={ProfileImage}
          className="h-full w-full object-cover"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="md:hidden">
        <p className="font-extrabold">Mohamed Taha Loghmari 👋</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Software Engineer
        </p>
      </div>
    </div>
  );
}
