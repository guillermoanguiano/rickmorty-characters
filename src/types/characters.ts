interface Character {
    id: number
    name: string
    species: string
    status: string
    image: string
    location: {
        name: string
    }
}

interface ApiResponse {
    info: {
        count: number
        pages: number
        next: string | null
        prev: string | null
    }
    results: Character[]
}

export type { Character, ApiResponse }