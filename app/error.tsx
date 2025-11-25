"use client";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="h-screen flex flex-col items-center justify-center 
     text-foreground px-4">
      
      <h1 className="text-2xl font-semibold">Something went wrong</h1>

      <p className="mt-2 text-sm opacity-70 max-w-md">
        {error.message || "Failed to load content."}
      </p>

      <button
        onClick={() => reset()}
        className="mt-6 px-4 py-2 rounded-md bg-primary text-primary-foreground 
        hover:opacity-90 transition"
      >
        Try Again
      </button>
    </div>
  );
}
