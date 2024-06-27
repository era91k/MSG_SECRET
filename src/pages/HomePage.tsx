import React from "react";
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, TabIndicator } from "@chakra-ui/react";

import TopBox from "../components/TopBox";
import BasicForm from "../components/BasicForm";

const HomePage: React.FC = () => {
    return(
        <Box bg="dark-theme.bg-black">
            <TopBox></TopBox>
            <Tabs isFitted variant='line'>
                <TabList>
                    <Tab _selected={{ color: 'white'}}>Envoyer</Tab>
                    <Tab _selected={{ fontWeight: 'bold', color: 'white'}}>Recevoir</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <BasicForm></BasicForm>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    ) 
};

export default HomePage;