import { Heading, HStack, Image, List, ListItem, Spinner, Button } from "@chakra-ui/react";
import useStores, { Store } from "../hooks/useStores"; // Adjust the import according to your project structure
import getCroppedImageUrl from "../services/image-url";
import { useState } from "react";

interface Props {
  onSelectStore: (store: Store) => void;
  selectedStore: Store | null;
}

const StoreList = ({ onSelectStore, selectedStore }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { data: stores, error, isLoading } = useStores();

  const displayStores = isExpanded ? stores : stores.slice(0, 5);

  if (error) return null; // make sure it doesn't crash if there is an error

  if (isLoading) return <Spinner />; // returns the spinner when loading

  return (
    <>
      <Heading>Stores</Heading>
      <List>
        {displayStores.map((store) => (
          <ListItem key={store.id} paddingY="5px">
            <HStack>
              <Image
                src={store.image_background}
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
              />
              <Button
                colorScheme={selectedStore?.id === store.id ? "yellow" : "white"}
                variant="link"
                fontSize="lg"
                onClick={() => onSelectStore(store)}
              >
                {store.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
        <Button onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "Show less" : "Show more"}
        </Button>
      </List>
    </>
  );
};

export default StoreList;