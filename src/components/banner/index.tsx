import { Flex, useMediaQuery } from '@chakra-ui/react'

import { AirPlane } from './airplane'
import { TextContent } from './text-content'

export default function Banner() {
  const [isMediumScreen] = useMediaQuery('(max-width: 960px)')

  return (
    <Flex
      h={368}
      bgRepeat='no-repeat'
      bgImage='/images/background.png'
    >
      <Flex
        w='100%'
        maxW={1480}
        mx='auto'
        px='6'
        align='center'
        justify='space-between'
      >
        <TextContent />
        {!isMediumScreen && <AirPlane />}
      </Flex>
    </Flex>
  )
}
