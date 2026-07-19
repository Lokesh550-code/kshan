import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const TrendingSkeletonCard = () => {
  return (
<div className="h-full w-full mt-4 flex justify-between items-center rounded-xl px-3">
  <div className="flex items-center gap-4">
    <div className="h-32 w-20 overflow-hidden rounded">
      <Skeleton className="h-full w-full" />
    </div>

    <div className="flex flex-col gap-2">
      <Skeleton width={250} height={28} />
      <Skeleton width={180} height={16} />
    </div>
  </div>

  <Skeleton width={90} height={24} />
</div>
  );
};

export default TrendingSkeletonCard;
