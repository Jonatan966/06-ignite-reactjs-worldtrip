import { HStack, SimpleGrid, Text, Icon } from '@chakra-ui/react'

import Container from '../container'
import { InfoCard } from './info-card'
import { Continent } from '../../types'

type ContinentDetailsProps = Pick<Continent, 'description' | 'countries_amount' | 'languages_amount'> & {
  best_cities_amount: number,
}

export default function ContinentDetails({
  description,
  languages_amount,
  countries_amount,
  best_cities_amount,
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
        <InfoCard title='países' amount={countries_amount} />
        <InfoCard title='línguas' amount={languages_amount} />
        <InfoCard title='cidades +100' amount={best_cities_amount} />
      </HStack>
    </Container>
  )
}
