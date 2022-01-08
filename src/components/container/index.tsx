import { Box, ChakraComponent, As, BoxProps } from '@chakra-ui/react'

type ContainerProps<X, Y> = {
  as?: ChakraComponent<X & As, Y>
} &  Y

export default function Container<X = 'div', Y = BoxProps>({
  as: theAs, 
  ...props
}: ContainerProps<X, Y>) {
  return (
    <Box
      as={theAs as any} 
      w='100%'
      maxW={1160}
      mx='auto'
      px={['4', '6']}
      {...props} 
    />
  )
}
