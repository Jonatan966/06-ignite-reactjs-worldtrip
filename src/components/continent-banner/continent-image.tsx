import { Image } from '@chakra-ui/react'

interface ContinentImageProps {
  image: string,
  alt: string,
}

export function ContinentImage({ image, alt }: ContinentImageProps) {
  return (
    <Image 
        src={image}
        position='absolute'
        left={0}
        right={0}
        h={500}
        w='100%'
        objectFit='cover'
        filter='brightness(0.7)'
        alt={alt}
      />
  )
}
