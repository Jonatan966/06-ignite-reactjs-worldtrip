import { SimpleGrid } from '@chakra-ui/react'

import { TravelType } from './travel-type'
import Container from '../container'
import { TravelItem } from './types'

const travelItems: TravelItem[] = [
  {
    icon: '/icons/cocktail.png',
    title: 'vida noturna'
  },
  {
    icon: '/icons/surf.png',
    title: 'praia',
  },
  {
    icon: '/icons/building.png',
    title: 'moderno',
  },
  {
    icon: '/icons/museum.png',
    title: 'clássico'
  },
  {
    icon: '/icons/earth.png',
    title: 'e mais...'
  }
]

export default function TravelTypes() {
  return (
    <Container
      as={SimpleGrid}
      customTag='ul'
      mt='8'
      columns={[2, 5]}
      spacing={4}
    >
      {travelItems.map(travelItem => (
        <TravelType {...travelItem} key={travelItem.title} />
      ))}
    </Container>
  )
}
