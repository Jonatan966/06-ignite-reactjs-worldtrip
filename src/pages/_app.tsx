import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import { Header } from '../components'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
