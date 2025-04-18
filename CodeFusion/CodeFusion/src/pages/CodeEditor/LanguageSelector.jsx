import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react'; // Import Button here

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react';

import { Language_Version } from '../../constants';

const languages = Object.entries(Language_Version);
const Active_Color="blue.400";
const LanguageSelector=({language,onSelect})=> {
    return (
        <Box ml={2} mb={4}>
            <Text mb={2} fontSize="lg" color='white'>Language: </Text>
            <Menu isLazy>
                <MenuButton as={Button}>
                    {language}
                </MenuButton>
                <MenuList bg="#110c1b"> 
                    {languages.map(([lang, version]) => (
                        <MenuItem key={lang} 
                        color={
                            lang===language? Active_Color:"white"
                        }
                        bg={
                            lang===language?'gray.900':'transparent'
                        }
                        _hover={{
                            color:Active_Color,
                            bg:"gray.900"
                        }}
                        onClick={()=>onSelect(lang)}>
                            {lang}
                            &nbsp;
                            <Text as="span" color="gray.600" fontSize="sm">
                                ({version})
                            </Text>
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>
        </Box>
    );
}

export default LanguageSelector;
