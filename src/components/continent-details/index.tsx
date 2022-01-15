import { HStack, SimpleGrid, Text, Icon } from '@chakra-ui/react'

import Container from '../container'
import { InfoCard } from './info-card'
import { Continent } from '../../types'

type ContinentDetailsProps = Pick<Continent, 'description' | 'details'>

export default function ContinentDetails({
  description,
  details:
  {
    bestCitiesAmount,
    countriesAmount,
    languagesAmount
  }
}: ContinentDetailsProps) {
  return (
    <Container
      as={SimpleGrid}
      columns={[1, null, 2]}
      spacing={['4','16']}
      my={['6', '10']}
    >
      <Text fontSize={['14px', '2xl']} textAlign='justify'>
        {description}
      </Text>
      <HStack
        spacing={['4', '9', '10']}
        align='center'
        justify='center'
      >
        <InfoCard title='países' amount={countriesAmount} />
        <InfoCard title='línguas' amount={languagesAmount} />
        <InfoCard title='cidades +100' amount={bestCitiesAmount} />
      </HStack>
    </Container>
  )
}
