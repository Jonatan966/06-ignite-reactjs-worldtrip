import { SimpleGrid } from '@chakra-ui/react'

import { TravelType } from './travel-type'

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
    <SimpleGrid
      as='ul'
      mt='8'
      mx='auto'
      px='6'
      columns={5}
      w='100%'
      maxW={1480}
    >
      {travelItems.map(travelItem => (
        <TravelType {...travelItem} key={travelItem.title} />
      ))}
    </SimpleGrid>
  )
}
