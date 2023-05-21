import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { FireContextProvider } from './context/FireContext'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FireContextProvider>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </FireContextProvider>
)
