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
            <TextInput label='Message' placeholder='Entrez un message à crypter...'></TextInput>
            <SelectInput label='Destinataire' elements={options}></SelectInput>
            <Button _hover={{ background:'background: #5352ED'}}bg='main' color="white">Crypter</Button>
        </FormControl> 
    )
}

export default BasicForm;