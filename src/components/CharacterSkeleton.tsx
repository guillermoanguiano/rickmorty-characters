export const CharacterCardSkeleton = () => {
  return (
    <div className="transition-transform duration-200 ease-in-out bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
      <div className="relative">
        <div className="w-full h-64 bg-gray-200 animate-pulse" />

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <div className="h-7 bg-gray-300 rounded w-3/4 animate-pulse" />
        </div>
      </div>

      <div className="p-4 space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-gray-200 animate-pulse" />
          <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse" />
        </div>

        <div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-1 animate-pulse" />
          <div className="h-5 bg-gray-200 rounded w-3/4 animate-pulse" />
        </div>
      </div>
    </div>
  );
};
