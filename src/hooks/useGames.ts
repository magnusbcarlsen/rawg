import useData from "./useData";
import { Genre } from "./useGenres";
import { Store } from "./useStores";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  image_background: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (
selectedGenre: Genre | null, selectedPlatform: Platform | null, selectedStore: Store | null,
) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        parent_platforms: selectedPlatform?.id,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id]
  );
export default useGames;