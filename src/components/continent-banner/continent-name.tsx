import { Heading } from '@chakra-ui/react'

import Container from '../container'

interface ContinentNameProps {
  children: string;
}

export function ContinentName({ children }: ContinentNameProps) {
  return (
    <Container 
      as={Heading}
      color='gray.50'
      zIndex={2}
      position='absolute'
      bottom='16'
      fontSize='48px'
      fontWeight='semibold'
    >
      {children}
    </Container>
  )
}
