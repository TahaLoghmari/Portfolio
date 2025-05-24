import ProfileHeader from "./ProfileHeader";
import ProfileDescription from "./ProfileDescription";
import SocialLinks from "./SocialLinks";

export default function Profile() {
  return (
    <div className="flex w-full flex-col gap-7 rounded-sm border p-6">
      <ProfileHeader />
      <ProfileDescription />
      <div className="bg-accent h-[1px]"></div>
      <SocialLinks />
    </div>
  );
}
