import React from 'react';
import { Box, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import BasicForm from './BasicForm';


const TopTab: React.FC = () => {
    return(
        <Tabs isFitted variant='unstyled'>
            <Box borderBottom='1px solid #4E5968' width='100%' paddingRight='var(--chakra-space-4)' paddingLeft="var(--chakra-space-4)">
                <TabList color='gray.400' marginLeft='auto' marginRight='auto'>
                    <Tab _selected={{ fontWeight: 'bolder', color: '#E0E0E0'}}>Envoyer</Tab>
                    <Tab _selected={{ fontWeight: 'bolder', color: '#E0E0E0'}}>Recevoir</Tab>
                </TabList>
                <TabIndicator mt='-1px' height='2px' bg='main' borderRadius='1px'/>
            </Box>
            <TabPanels marginTop="10px">
                <TabPanel>
                    <BasicForm></BasicForm>
                </TabPanel>
                <TabPanel>
                    <p>two!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

export default TopTab;