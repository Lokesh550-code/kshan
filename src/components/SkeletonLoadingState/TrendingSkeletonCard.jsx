import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const TrendingSkeletonCard = (props) => {
  return (
    <div className="h-full w-full mt-4 flex justify-between items-center rounded-xl px-3">
      <div className="w-fit h-full flex items-center gap-4">
        <span
          className="w-25 flex justify-center font-black text-transparent bg-clip-text bg-linear-to-b from-[#E2E2E2] to-[#6B6B6B] select-none leading-none"
          style={{
            fontSize: "90px",
            WebkitTextStroke: "2px rgba(255,255,255,.1)",
            letterSpacing: "-0.05em",
          }}
        >
          {props.id + 1}
        </span>
        <div className="h-32 w-20 overflow-hidden rounded">
          <Skeleton className="h-full w-full" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Skeleton width={250} height={28} />
        <Skeleton width={180} height={16} />
      </div>
    </div>
  );
};

export default TrendingSkeletonCard;
