import { Flex } from '@chakra-ui/react'

import { ContinentImage } from './continent-image'
import { ContinentName } from './continent-name'
import { Continent } from '../../types'

type ContinentBannerProps = Pick<Continent, 'name' | 'image'>

export default function ContinentBanner({ name, image }: ContinentBannerProps) {
  return (
    <Flex 
      position='relative'
      h={500}
      justify='center'
    >
      <ContinentImage image={image} alt={name} />
      <ContinentName>
        {name}
      </ContinentName>
    </Flex>
  )
}
