import { Image } from '@chakra-ui/react'

export function AirPlane() {
  return (
    <Image 
      src='/images/airplane.png' 
      aria-label='Airplane' 
      transform='auto' 
      translateY={8}
    />
  )
}
