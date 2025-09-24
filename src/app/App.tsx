import Profile from "#/profile/components/Profile";
import { ThemeProvider } from "@/components/theme-provider";
import Menu from "#/menu/components/Menu";
import Skills from "#/skills/components/Skills";
import About from "#/about/components/About";
import Projects from "#/projects/components/Projects";
import Educations from "#/education/components/Educations";
import { Experience } from "#/experience";

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="flex h-svh w-full flex-col items-center overflow-y-auto">
        <div className="mt-6 mb-30 flex w-[90%] flex-col gap-6 md:w-[85%] md:flex-row xl:w-[70%] 2xl:w-[60%]">
          {/* the left part */}
          <div className="flex w-full flex-col gap-6 md:w-[30%]">
            <Profile />
            <Skills />
          </div>
          {/* the right part */}
          <div className="flex flex-col gap-4 md:w-[70%]">
            <About />
            <Projects />
            <Experience />
            <Educations />
          </div>
          {/* Menu */}
          <div className="bg-background fixed bottom-5 left-1/2 flex w-50 -translate-x-1/2 transform items-center justify-between gap-4 rounded-full border transition-all duration-300 hover:w-55">
            <Menu />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
