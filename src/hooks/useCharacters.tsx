import { useInfiniteQuery } from "@tanstack/react-query";
import { ApiResponse } from "../types";
import { fetchCharacters } from "../api";

export function useCharacters() {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["characters"],
    queryFn: fetchCharacters,
    initialPageParam: 1,
    getNextPageParam: (lastPage: ApiResponse) => {
      const nextPage = lastPage.info.next?.split("page=")[1];
      return nextPage ? parseInt(nextPage) : undefined;
    },
  });

  const characters = data?.pages.flatMap((page) => page.results) ?? [];
  const isError = status === "error";
  const isLoading = (status as "loading" | "error" | "success") === "loading";

  return {
    characters,
    error: error as Error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
    isLoading,
  };
}
