import { Flex, Text, Image } from '@chakra-ui/react'

import { City } from '../../../types'

type CityInformationsProps = Omit<City, 'image'>

export function CityInformations({ name, country }: CityInformationsProps) {
  return (
    <Flex
      justify='space-between'
      p='6'
      align='center'
      borderRadius='0 0 4px 4px'
      borderWidth='0 1px 1px'
      borderColor='yellow.300' 
    >
      <Flex direction='column'>
        <Text 
          as='strong' 
          fontWeight='semibold' 
          fontSize='20px'
        >
          {name}
        </Text>
        <Text 
          as='span'
          color='gray'
          fontWeight='medium'
          fontSize='16px'
        >
          {country.name}
        </Text>
      </Flex>

      <Image 
        borderRadius='full'
        alt={country.name}
        src={country.image}
        boxSize='30px'
      />
    </Flex>
  )
}
