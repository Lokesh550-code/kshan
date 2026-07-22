import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonCastComponent = () => {
  return (
    <div className="h-fit w-full px-10 py-6 mt-10 flex flex-col gap-2 border-b-2 border-t-2 border-stone-600">
      {/* Heading */}
      <Skeleton width={180} height={32} />

      {/* Cards */}
      <div className="h-85 w-full flex gap-6 overflow-hidden">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="min-w-42.5 h-full flex flex-col gap-3"
          >
            <Skeleton
              height={250}
              borderRadius={8}
            />

            <Skeleton width="80%" height={20} />

            <Skeleton width="60%" height={16} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonCastComponent;