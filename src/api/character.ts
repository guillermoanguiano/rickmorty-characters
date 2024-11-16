import { ApiResponse } from "../types";

export const fetchCharacters = async ({ pageParam = 1 }): Promise<ApiResponse> => {
    const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${pageParam}`
    );
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json();
};