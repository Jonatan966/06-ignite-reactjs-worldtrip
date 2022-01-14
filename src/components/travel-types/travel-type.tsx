import { Icon, Image, Text, useBreakpointValue, WrapItem } from '@chakra-ui/react'
import { FaCircle } from 'react-icons/fa'

import { TravelItem } from './types'

export function TravelType({ icon, title }: TravelItem) {
  const isInSmallScreen = !useBreakpointValue({
    sm: true,
  })

  return (
    <WrapItem 
      flexDir={['row', 'column']} 
      alignItems='center' 
      justifyContent='center'
      _last={{
        gridColumnStart: ['1', 'auto'],
        gridColumnEnd: ['3', 'auto']  
      }}
    >
      {isInSmallScreen 
        ? <Icon as={FaCircle} size='4' color='yellow.500' /> 
        : <Image boxSize='20' src={icon} alt={title} />
      }
      <Text ml={['2', 0]} mt={[0, '4']} fontWeight='bold'>
        {title}
      </Text>
    </WrapItem>
  )
}
