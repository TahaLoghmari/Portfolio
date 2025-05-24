export default function Technologie({ tech }: { tech: string }) {
  return (
    <div className="bg-accent rounded-sm p-1">
      <p className="text-[11px] font-semibold">{tech}</p>
    </div>
  );
}
