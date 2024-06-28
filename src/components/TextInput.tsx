import React from 'react';
import {
    FormLabel,
    Box,
    Textarea
} from '@chakra-ui/react'
import TextInputProps from '../interfaces/TextInputProps';

const TextInput: React.FC<TextInputProps> = ({label, placeholder}) => {
    return(
        <Box display="flex" flexDirection="column" gap={1}>
            <FormLabel color="dark-theme.label-white">{label}</FormLabel>
            <Textarea border="1px solid #414955" placeholder={placeholder} bg="dark-theme.element-grey" resize='none' sx={{ height: "200px" }}/>
        </Box>
    )
}

export default TextInput;