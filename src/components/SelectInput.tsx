import React from 'react';
import {
    FormLabel,
    Select,
    Box
} from '@chakra-ui/react'
import SelectInputProps from '../interfaces/SelectInputProps';

const SelectInput: React.FC<SelectInputProps> = ({label, elements}) => {
    return(
        <Box display="flex" flexDirection="column" gap={1}>
            <FormLabel color="dark-theme.label-white">{label}</FormLabel>
            <Select bg="dark-theme.element-grey" border="none" color="gray.400">
                {elements.map((element, index) => (
                    <option key={index} value={element}>
                        {element}
                    </option>
                ))}
            </Select>
        </Box>
    )
}

export default SelectInput;