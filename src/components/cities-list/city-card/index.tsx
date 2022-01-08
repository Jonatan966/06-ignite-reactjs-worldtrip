import { Box, Image } from '@chakra-ui/react'

import { CityInformations } from './city-informations'
import { City } from '../../../types'

export default function CityCard({ image, ...props }: City) {
  return (
    <Box borderRadius='4px 4px 0 0' bg='white' overflow='hidden'>
      <Image
        src={image}
        alt={`${props.name}, ${props.country.name}`}
        height='173px'
        width='100%'
        objectFit='cover'
      />
      
      <CityInformations {...props} />
    </Box>
  )
}
