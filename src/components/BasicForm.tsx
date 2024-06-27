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
import TopBox from './TopBox'


const BasicForm: React.FC = () => {
    const options = ['Paul', 'Vijay', 'Sarah', 'John'];

    return(
        <FormControl display="flex" flexDirection="column" gap={7}>
            <TextInput label='Entrez un message' placeholder='placeholder'></TextInput>
            <SelectInput label='Destinataire' elements={options}></SelectInput>
            <Button bg='#2C4BE2' color="white">Crypter</Button>
        </FormControl> 
    )
}

export default BasicForm;