import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import * as React from 'react'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './theme'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme = {theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)

