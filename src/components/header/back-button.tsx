import Link from 'next/link'
import { IconButton } from '@chakra-ui/react'
import { RiArrowLeftSLine } from 'react-icons/ri'

export function BackButton() {
  return (
    <Link href='/' passHref>
      <IconButton 
        aria-label='Voltar' 
        icon={<RiArrowLeftSLine size='24' />} 
      />
    </Link>
  )
}
