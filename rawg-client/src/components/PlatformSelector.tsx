import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
// import React from 'react';
import usePlatform from '../hooks/usePlatform';
import { Platform } from '../hooks/useGames';

interface Props {
    selectedPlatform: Platform | null;
    onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({selectedPlatform, onSelectPlatform}: Props) => {
    const { data: platforms } = usePlatform();

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                {selectedPlatform ? selectedPlatform.name : "Platforms"}
            </MenuButton>
            <MenuList>
                {platforms.map((platform) => (
                    <MenuItem 
                        onClick={()=> onSelectPlatform(platform)} 
                        key={platform.id}>{platform.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
}

export default PlatformSelector;
