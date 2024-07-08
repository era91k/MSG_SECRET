import React from 'react';
import {
    FormControl, 
    FormLabel,
    Input,
    Select,
    Button,
    Box
} from '@chakra-ui/react'
import TextInput from './TextInput'
import SelectInput from './SelectInput'
import BasicFormProps from '../interfaces/BasicFormProps';


const BasicForm: React.FC<BasicFormProps> = ({
    TextInputLabel, 
    TextInputPlaceholder, 
    SelectInputLabel, 
    SelectInputOptions
}) => {

    return(
        <FormControl display="flex" flexDirection="column" gap={7}>
            <TextInput label={TextInputLabel} placeholder={TextInputPlaceholder}></TextInput>
            <SelectInput label={SelectInputLabel} elements={SelectInputOptions}></SelectInput>
            <Button _hover={{ background:'background: #5352ED'}}bg='main' color="white">Crypter</Button>
        </FormControl> 
    )
}

export default BasicForm;