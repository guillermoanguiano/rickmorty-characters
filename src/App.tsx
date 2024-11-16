import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  CharacterCard,
  CharacterCardSkeleton,
  LoadingDots,
} from "./components";
import { useCharacters } from "./hooks";

function App() {
  const { ref, inView } = useInView();
  const {
    characters,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useCharacters();

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Universo de Rick y Morty
          </h1>
          <p className="mt-4 text-gray-600">
            Explora los personajes de Rick y Morty de todas las dimensiones.
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <LoadingDots />
          </div>
        ) : isError ? (
          <div className="text-center p-8 bg-red-50 rounded-lg">
            <p className="text-red-600 font-medium">Error: {error.message}</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {characters.map((character) => (
                <CharacterCard key={character.id} character={character} />
              ))}

              {characters.length === 0 && (
                <>
                  {[...Array(8)].map((_, index) => (
                    <CharacterCardSkeleton key={index} />
                  ))}
                </>
              )}
            </div>

            <div
              ref={ref}
              className="flex justify-center items-center mt-8 h-20"
            >
              {isFetchingNextPage ? (
                <LoadingDots />
              ) : hasNextPage ? (
                <span className="text-gray-500">
                  Scroll para cargar más personajes
                </span>
              ) : null}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
