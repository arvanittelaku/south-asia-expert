import type { ProfileGeoBlock } from "@/data/profile-geo";

export function ProfileGeoContent({ blocks }: { blocks: ProfileGeoBlock[] }) {
  if (blocks.length === 0) return null;

  return (
    <div className="my-8 space-y-6">
      {blocks.map((block) => (
        <div
          key={block.title}
          className={`rounded-[8px] border p-6 ${
            block.type === "highlight"
              ? "border-[#E8751A]/40 bg-[#E8751A]/5"
              : "border-[#E8D0C0] bg-[#FDF5F0]"
          }`}
        >
          <h2 className="break-words text-lg font-bold text-[#3D1A1A]">{block.title}</h2>
          <p className="prose-safe mt-3 text-sm text-[#374151] leading-relaxed sm:text-base">{block.content}</p>
        </div>
      ))}
    </div>
  );
}
