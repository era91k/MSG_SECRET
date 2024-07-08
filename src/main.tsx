import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./assets/styles/App.css"

import { ChakraProvider } from '@chakra-ui/react'

import CustomTheme from "./assets/styles/CustomTheme";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={CustomTheme} >
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
