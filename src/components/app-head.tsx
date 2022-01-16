import Head from 'next/head'
import { FC } from 'react'

interface AppHeadProps {
  title?: string,
}

const AppHead: FC<AppHeadProps> = ({ children, title }) => {
  return (
    <Head>
      <title>Worldtrip{title && ` - ${title}`}</title>
      {children}
    </Head>
  )
}

export default AppHead
