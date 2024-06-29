import React from 'react';
import { Box, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import BasicForm from './BasicForm';


const TopTab: React.FC = () => {
    return(
        <Tabs isFitted variant='unstyled'>
            <Box borderBottom='1px solid #4E5968' width='100%' paddingRight='var(--chakra-space-4)' paddingLeft="var(--chakra-space-4)">
                <TabList   color='gray.500' marginLeft='auto' marginRight='auto'>
                    <Tab fontWeight='400' _selected={{ color: 'gray.100'}}>Envoyer</Tab>
                    <Tab fontWeight='400' _selected={{ color: 'gray.100'}}>Recevoir</Tab>
                </TabList>
                <TabIndicator mt='-1px' height='2px' bg='main' borderRadius='1px'/>
            </Box>
            <TabPanels marginTop="10px">
                <TabPanel>
                    <BasicForm></BasicForm>
                </TabPanel>
                <TabPanel>
                    <BasicForm></BasicForm>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

export default TopTab;