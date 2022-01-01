import { VStack, Heading, Text } from '@chakra-ui/react'

export function TextContent() {
  return (
    <VStack maxW={550} spacing='5' align='start'>
      <Heading color='gray.50'>
        5 Continentes, <br /> infinitas possibilidades.
      </Heading>
      <Text fontSize='20px' color='gray.200'>
        Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
      </Text>
    </VStack>
  )
}
