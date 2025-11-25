
export default function LoadingMovieDetails() {
  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 animate-pulse">
      
      <div className="w-full md:w-1/3 h-[450px] bg-gray-300 rounded-xl"></div>

      <div className="flex-1 space-y-4">
        <div className="h-10 w-3/4 bg-gray-300 rounded"></div>
        <div className="h-6 w-1/3 bg-gray-300 rounded"></div>
        <div className="h-6 w-1/2 bg-gray-300 rounded"></div>

        <div className="h-4 w-full bg-gray-300 rounded"></div>
        <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
        <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
      </div>

    </div>
  );
}
