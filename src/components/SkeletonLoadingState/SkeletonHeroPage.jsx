import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonHeroPage = () => {
  return (
    <div className="h-[90vh] w-full flex items-end bg-stone-900">
      <div className="h-1/2 w-full px-10 flex items-end gap-3 bg-linear-to-b from-transparent via-black/70 to-black">
        {/* Poster */}
        <div className="h-[89%] w-auto">
          <Skeleton height="100%" width={250} borderRadius={8} />
        </div>

        {/* Content */}
        <div className="w-full flex flex-col gap-4 pb-4">
          <Skeleton width="60%" height={40} />

          <Skeleton width="35%" height={22} />

          <div className="w-[40%] flex flex-col gap-2 mt-2">
            <Skeleton count={4} height={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonHeroPage;
