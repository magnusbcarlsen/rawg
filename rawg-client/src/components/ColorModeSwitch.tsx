import { HStack, Switch, Text, useColorMode,  } from '@chakra-ui/react';


const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch onChange={toggleColorMode} colorScheme="green" isChecked = {colorMode === "dark"}/>
      <Text className="text-sky-400">Dark mode</Text>
    </HStack>
    
  );
}

export default ColorModeSwitch;