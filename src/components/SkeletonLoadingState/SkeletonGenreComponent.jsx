import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonGenreComponent = () => {
  return (
    <div className="h-40 w-full mt-10 px-10 py-4 flex flex-col gap-6 border-t-2 border-stone-600">
      <div className="flex flex-col gap-3">
        <Skeleton width={100} height={28} />

        <div className="flex gap-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton
              key={index}
              width={70}
              height={24}
              borderRadius={9999}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <Skeleton width={100} height={28} />

        <div className="flex gap-3">
          {Array.from({ length: 2 }).map((_, index) => (
            <Skeleton
              key={index}
              width={45}
              height={24}
              borderRadius={9999}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkeletonGenreComponent;