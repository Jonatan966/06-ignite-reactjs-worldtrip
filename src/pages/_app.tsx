import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import { AppHead, Header } from '../components'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AppHead />
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </ChakraProvider>
  )
}

export default MyApp
