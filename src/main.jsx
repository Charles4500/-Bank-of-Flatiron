import React from 'react'
import ReactDOM from 'react-dom/client'
import './components/index.css'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider/>
    <App />
    <ChakraProvider/>
  </React.StrictMode>,
)
