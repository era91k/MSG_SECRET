import React from 'react';
import {
    FormLabel,
    Box,
    Textarea
} from '@chakra-ui/react'
import TextInputProps from '../interfaces/TextInputProps';

const TextInput: React.FC<TextInputProps> = ({label, placeholder}) => {
    const gradientBorder = {
        'border': '1px solid transparent',
        'background': 'linear-gradient(#151515, #151515) padding-box, linear-gradient(to right, #B616C4, #2C4BE2) border-box',
        'border-radius': 'var(--chakra-radii-md)'
            
    }

    return(
        <Box display="flex" flexDirection="column" gap={1}>
            <FormLabel color="dark-theme.label-white">{label}</FormLabel>
            <Textarea placeholder={placeholder} bg="dark-theme.element-grey" resize='none' sx={{ height: "200px" }} style={gradientBorder}/>
        </Box>
    )
}

export default TextInput;