import '../styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import themeFile from '../theme'
import { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client';
const theme = extendTheme(themeFile)



function MyApp({ Component, pageProps }) {
  const [root, setRoot] = useState() 

  useEffect(() => {
    const root = createRoot(
      document.getElementById('__next')
    )
    setRoot(root)
  }, [])

  if (!root) {
    return null
  }

  root.render(
    <ChakraProvider theme={theme}>
        <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
