import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SearchSkeletonCard = () => {
  return (
    <div className="h-32 w-82 overflow-hidden rounded-sm bg-black p-1 flex items-center gap-2">
        
      <div className="h-full w-[25%] overflow-hidden rounded-sm">
        <Skeleton height="100%" width="100%" />
      </div>

      <div className="w-[60%] flex flex-col justify-center gap-2">
        <Skeleton height={28} width="85%" />
        <Skeleton height={14} width="35%" />
      </div>
    </div>
  );
};

export default SearchSkeletonCard;