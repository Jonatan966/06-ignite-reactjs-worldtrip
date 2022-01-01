import { Image, Text, WrapItem } from '@chakra-ui/react'

import { TravelItem } from './types'

export function TravelType({ icon, title }: TravelItem) {
  return (
    <WrapItem flexDir='column' alignItems='center'>
      <Image boxSize='20' src={icon} alt={title} />
      <Text mt='4' fontWeight='bold'>
        {title}
      </Text>
    </WrapItem>
  )
}
