import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="text-center">
      <h1 className="text-xl font-semibold mt-4">Loading Movies...</h1>

      <div className="px-1 py-2 mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-2"
          >
            {/* Poster Skeleton */}
            <Skeleton className="h-[450px] w-full rounded-md" />

            {/* Text skeletons */}
            <div className="w-full px-1">
              <Skeleton className="h-6 w-3/4 mb-2" />     {/* Title */}
              <Skeleton className="h-4 w-1/2 mb-1" />     {/* Year */}
              <Skeleton className="h-4 w-1/3" />          {/* Rating */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
