import Profile from "../features/profile/components/Profile";
import { ThemeProvider } from "@/components/theme-provider";
import Menu from "../features/menu/components/Menu";
import Skills from "../features/skills/components/Skills";
import About from "../features/about/components/About";
import Projects from "../features/projects/components/Projects";
import Educations from "../features/education/components/Educations";

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="mt-6 mb-30 flex w-full flex-col gap-6 md:w-full md:flex-row">
        {/* the left part */}
        <div className="flex w-full flex-col gap-6 md:w-[30%]">
          <Profile />
          <Skills />
        </div>
        {/* the right part */}
        <div className="flex flex-col gap-4 md:w-[70%]">
          <About />
          <Projects />
          <Educations />
        </div>
        {/* Menu */}
        <div className="bg-background fixed bottom-5 left-1/2 flex w-50 -translate-x-1/2 transform items-center justify-between gap-4 rounded-full border transition-all duration-300 hover:w-55">
          <Menu />
        </div>
      </div>
    </ThemeProvider>
  );
}
