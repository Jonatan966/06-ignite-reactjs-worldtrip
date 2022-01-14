import { SimpleGrid, Text } from '@chakra-ui/react'

import CityCard from './city-card'
import Container from '../container'
import { City } from '../../types'

interface CitiesListProps {
  cities: City[],
}

export default function CitiesList({ cities = [] }: CitiesListProps) {
  return (
    <Container>
      <Text
        fontWeight='medium'
        fontSize={['24px', '36px']}
      >
        Cidades +100
      </Text>
      <SimpleGrid columns={[1, 2, 3, 4]} spacing='12' my={['5', '10']}>
        {cities.map((city) => <CityCard key={city.name} {...city} />)}
      </SimpleGrid>
    </Container>
  )
}
