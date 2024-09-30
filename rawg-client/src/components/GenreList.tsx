import { Heading, HStack, Image, List, ListItem, Spinner, Button } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import { useState } from "react";


interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({onSelectGenre, selectedGenre}: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { data: genres, error, isLoading } = useGenres();

  const displayGenres = isExpanded ? genres : genres.slice(0, 5);

  if (error) return null; // make sure it doesnt crash if there is an error

  if (isLoading) return <Spinner /> // returns the spinner When loading

  return (
    <>
      <Heading>Genres</Heading>
      <List>
        {displayGenres.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button 
                colorScheme={selectedGenre?.id === genre.id ? "yellow" : "white"}
                variant="link" 
                fontSize="lg" 
                onClick={()=>onSelectGenre(genre)} 
                key={genre.id}>{genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
        <Button onClick={()=> setIsExpanded(!isExpanded)}>
          {isExpanded ? "Show less" : "Show more"}
        </Button>
      </List>
    </>
  );
};

export default GenreList;