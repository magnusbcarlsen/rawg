import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { data: games, error, isLoading } = useGames();
  const Skeletons = [...Array(10).keys()];
  return (
    <div>
      {error && <p>{error}</p>}
      <SimpleGrid
      columns={{ sm: 1 , md: 2, lg: 3, xl: 4}}
      spacing={5}
      padding="10"
      >
        {isLoading && 
        Skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
          
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;