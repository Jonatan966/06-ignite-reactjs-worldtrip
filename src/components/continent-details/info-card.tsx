import { Flex, Text } from '@chakra-ui/react'

interface InfoCardProps {
  title: string;
  amount: number;
  extraInfo?: string;
}

export function InfoCard({ title, amount, extraInfo }: InfoCardProps) {
  return (
    <Flex direction='column' align='center'>
      <Text
        lineHeight={['24px', '48px']}
        fontSize={['24px', '48px']}
        fontWeight='semibold'
        color='yellow.400'
      >
        {amount}
      </Text>
      <Text fontWeight='semibold' fontSize={['18px', '24px']}>
        {title}
      </Text>
    </Flex>
  )
}
