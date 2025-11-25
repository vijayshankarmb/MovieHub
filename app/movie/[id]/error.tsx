"use client";

import Link from "next/link";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorProps) {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4 bg-red-100 p-6 text-center">
      <h1 className="text-3xl font-bold text-red-700">
        Something went wrong!
      </h1>

      <p className="text-red-600">
        {error?.message || "Failed to load movie details."}
      </p>

      <div className="flex gap-4">
   
        <button
          onClick={() => reset()}
          className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          Retry
        </button>

        <Link
          href="/"
          className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
