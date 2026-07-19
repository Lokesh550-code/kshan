import { AlertTriangle } from "lucide-react";

const ErrorState = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center text-center">
      <AlertTriangle
        size={64}
        className="mb-4 text-red-500"
        strokeWidth={1.5}
      />

      <h2 className="text-2xl font-semibold text-white">
        Something went wrong
      </h2>

      <p className="mt-2 text-stone-400">
        We couldn't fetch your search results.
      </p>
    </div>
  );
};

export default ErrorState;