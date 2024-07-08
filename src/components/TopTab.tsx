import React from 'react';
import { Box, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import BasicForm from './BasicForm';
import { motion } from 'framer-motion';

const MotionTabPanel = motion(TabPanel)
const TabPanelStyle = {
    display: "flex",
    flexDirection: "column",
    gap: 7,
    initial: { x: '100vw' },
    animate: { x: 0 },
    transition: { type: 'spring', stiffness: 50 }
};

const TopTab: React.FC = () => {
    const options = ['Paul', 'Vijay', 'Sarah', 'John'];
    return(
        <Tabs isFitted variant='unstyled'>
            <Box 
                borderBottom='1px solid #4E5968' 
                width='100%' 
                paddingRight='var(--chakra-space-4)' 
                paddingLeft="var(--chakra-space-4)"
            >
                <TabList color='gray.500' marginLeft='auto' marginRight='auto'>
                    <Tab fontWeight='400' _selected={{ color: 'gray.100'}}>Envoyer</Tab>
                    <Tab fontWeight='400' _selected={{ color: 'gray.100'}}>Recevoir</Tab>
                </TabList>
                <TabIndicator mt='-1px' height='2px' bg='main' borderRadius='1px'/>
            </Box>
            <TabPanels marginTop="10px">
                <MotionTabPanel {...TabPanelStyle}>
                    <BasicForm 
                        TextInputLabel='Message' 
                        TextInputPlaceholder='Entrez un message à crypter...'
                        SelectInputLabel='Destinataire'
                        SelectInputOptions={options}
                    >
                    </BasicForm>
                </MotionTabPanel>
                <MotionTabPanel {...TabPanelStyle}>
                    <BasicForm 
                        TextInputLabel='Message' 
                        TextInputPlaceholder='Entrez un message à décrypter...'
                        SelectInputLabel='Emetteur'
                        SelectInputOptions={options}
                    >
                    </BasicForm>
                </MotionTabPanel>
            </TabPanels>
        </Tabs>
    )
}

export default TopTab;