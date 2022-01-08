import { Box, ChakraComponent, As, BoxProps } from '@chakra-ui/react'

type ContainerProps<X, Y> = {
  customTag?: X,
  as?: ChakraComponent<X & As, Y>,
} &  Y

export default function Container<X extends keyof JSX.IntrinsicElements, Y = BoxProps>({
  customTag,
  as: theAs,
  ...props
}: ContainerProps<X, Y>) {
  if (theAs) {
    theAs.defaultProps = {
      ...theAs.defaultProps,
      as: customTag
    }
  }

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
