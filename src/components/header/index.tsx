import { Flex, Image } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import { BackButton } from './back-button'
import Container from '../container'

export default function Header() {
  const router = useRouter()

  const hasInHomePage = router.pathname === '/'

  return (
    <Container
      as={Flex}
      customTag='header'
      align='center'
      h={100}
    >
      {!hasInHomePage && <BackButton />}
      <Image src='/images/logo.png' alt='Worldtrip' mx='auto' />
    </Container>
  )
}
