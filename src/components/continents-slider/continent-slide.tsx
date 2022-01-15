import { Center, Heading, Image, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'

import { ContinentSlideProps } from './types'

export function ContinentSlide({
  image,
  summary,
  slug,
  name
}: ContinentSlideProps) {
  return (
    <Link passHref href={`/continents/${slug}`}>
      <Center height='100%' cursor='pointer'>
        <Image 
          src={image} 
          alt='img'
          objectFit='cover'
          width='100%'
          height='100%'
          position='absolute'
          filter='brightness(0.65)'
        />
        <VStack zIndex={3} color='white' textAlign='center'>
          <Heading>
            {name}
          </Heading>
          <Text fontSize='24px' fontWeight='bold'>
            {summary}
          </Text>
        </VStack>
      </Center>
    </Link>
  )
}
