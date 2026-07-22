import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonReviewComponent = () => {
  return (
    <div>
      <div className="h-[70vh] py-5 px-10 flex flex-col gap-4 overflow-hidden">
        {/* Heading */}
        <Skeleton width={120} height={32} />

        {/* Review Cards */}
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="bg-stone-800 rounded-md overflow-hidden"
          >
            <div className="p-4 flex flex-col gap-3">
              <Skeleton width={180} height={20} />

              <Skeleton count={4} height={16} />

              <Skeleton width="70%" height={16} />
            </div>

            <div className="h-10 px-2 flex items-center justify-end bg-stone-700">
              <Skeleton width={80} height={20} />
            </div>
          </div>
        ))}
      </div>

      <div className="mx-10 my-2 flex justify-center">
        <Skeleton width={100} height={24} />
      </div>
    </div>
  );
};

export default SkeletonReviewComponent;