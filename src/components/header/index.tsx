import { Flex, Image } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { BackButton } from './back-button'

export default function Header() {
  const router = useRouter()

  const hasInHomePage = router.pathname === '/'

  return (
    <Flex
      as='header'
      w='100%'
      maxW={1480}
      h={100}
      mx='auto'
      px='6'
      align='center'
    >
      {!hasInHomePage && <BackButton />}
      <Image src='/images/logo.png' alt='Worldtrip' mx='auto' />
    </Flex>
  )
}
