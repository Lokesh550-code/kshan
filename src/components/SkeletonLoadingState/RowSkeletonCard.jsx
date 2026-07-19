import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SectionSkeletonCard = (props) => {
  return (
    <div className="w-full h-28 bg-stone-900 border border-stone-800 rounded mt-2 px-2 py-1 flex items-center gap-3 overflow-hidden">
      {/* Ranking Number */}
      <span
        className="font-black text-transparent bg-clip-text bg-linear-to-b from-[#E2E2E2] to-[#6B6B6B] select-none leading-none"
        style={{
          fontSize: "100px",
          WebkitTextStroke: "2px rgba(255,255,255,.1)",
          letterSpacing: "-0.05em",
        }}
      >
        {props.id + 1}
      </span>

      {/* Poster */}
      <div className="h-26 w-20 shrink-0 overflow-hidden rounded">
        <Skeleton height="100%" width="100%" />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col gap-2">
        <Skeleton height={30} width="70%" />
        <Skeleton height={14} width="45%" />
        <Skeleton height={18} width="30%" />
      </div>
    </div>
  );
};

export default SectionSkeletonCard;