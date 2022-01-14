import { Flex, useMediaQuery } from '@chakra-ui/react'

import { AirPlane } from './airplane'
import { TextContent } from './text-content'
import Container from '../container'

export default function Banner() {
  const [isMediumScreen] = useMediaQuery('(max-width: 960px)')

  return (
    <Flex
      h={368}
      bgRepeat='no-repeat'
      bgImage='/images/background.png'
    >
      <Container
        as={Flex}
        align='center'
        justify='space-between'
      >
        <TextContent />
        {!isMediumScreen && <AirPlane />}
      </Container>
    </Flex>
  )
}
