import { Character } from "../types";

export function CharacterCard({ character }: { character: Character }) {
  return (
    <div
      className={`
        transition-transform 
        duration-200 
        ease-in-out 
        hover:-translate-y-1 
        bg-white 
        rounded-xl 
        shadow-lg 
        overflow-hidden 
        border 
        border-gray-100
      `}
    >
      <div className="relative">
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-64 object-cover"
          loading="lazy"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <h2 className="text-xl font-bold text-white">{character.name}</h2>
        </div>
      </div>
      <div className="p-4 space-y-2">
        <div className="flex items-center gap-2">
          <span
            className={`w-2 h-2 rounded-full ${
              character.status === "Alive"
                ? "bg-green-500"
                : character.status === "Dead"
                ? "bg-red-500"
                : "bg-gray-500"
            }`}
          ></span>
          <span className="text-gray-700">
            {character.status} - {character.species}
          </span>
        </div>
        <div>
          <p className="text-sm text-gray-500">Última ubicación conocida:</p>
          <p className="text-gray-900">{character.location.name}</p>
        </div>
      </div>
    </div>
  );
}
