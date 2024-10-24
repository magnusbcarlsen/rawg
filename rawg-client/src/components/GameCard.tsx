import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game }  from "../hooks/useGames";
import CriticScore from "./CriticScore";
import getCroppetImageUrl from "../services/image-url";
import PlatformIconsList from "./PlatformIconList";


interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
    return (
      <Card>
        <Image src={getCroppetImageUrl(game.image_background)} />
        <CardBody>
          <Heading fontSize="2xl">{game.name}</Heading>
          <HStack justifyContent="space-between">
            <PlatformIconsList
              platforms={game.parent_platforms.map((pp) => pp.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
        </CardBody>
      </Card>
    );
  };
  
  export default GameCard;