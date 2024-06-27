import React from "react";
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, TabIndicator } from "@chakra-ui/react";

import TopBox from "../components/TopBox";
import TopTab from "../components/TopTab";

const HomePage: React.FC = () => {
    return(
        <Box bg="dark-theme.bg-black" height="100%">
            <TopBox></TopBox>
            <TopTab></TopTab>
        </Box>
    ) 
};

export default HomePage;