import ArisakaLogo from "@/assets/arisaka_logo.png";

export function Experience() {
  return (
    <div className="mt-6 flex w-full flex-col gap-4">
      <p className="font-bold">Experience</p>
      <div className="rounded-md border p-4">
        <div className="flex gap-4">
          <img
            src={ArisakaLogo}
            alt="arisaka-logo"
            className="h-12 w-12 cursor-pointer object-cover"
          />
          <div className="flex flex-col">
            <div className="flex justify-between">
              <div className="line-clamp-3 flex-1">
                <p className="font-bold">Full Stack Engineer</p>
                <p className="text-muted-foreground text-[13px]">
                  Arisaka • Internship
                </p>
              </div>
              <p className="text-muted-foreground text-[11px]">
                Jul 2025 - Aug 2025
              </p>
            </div>
            <p className="text-[13px]">
              Built full-stack systems integrating{" "}
              <span className="font-bold">FastAPI</span>,{" "}
              <span className="font-bold">Django REST</span>,{" "}
              <span className="font-bold">Angular</span>, and Tailwind,
              including <span className="font-bold">RAG</span> with pgvector +
              Mistral LLM, real-time notifications, and secure HR APIs. Designed
              responsive UIs from Figma and implemented scalable backends with
              <span className="font-bold"> WebSockets</span>,{" "}
              <span className="font-bold">Supabase</span>, and{" "}
              <span className="font-bold">CRUD</span> modules.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
