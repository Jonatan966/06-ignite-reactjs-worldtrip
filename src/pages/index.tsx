import { Divider, Heading } from '@chakra-ui/react'
import Prismic from '@prismicio/client'
import type { GetStaticProps, NextPage } from 'next'

import { TravelTypes, Banner, ContinentsSlider } from '../components'
import { getPrismicClient } from '../services/prismic'
import { ContinentSlideProps } from '../components/continents-slider/types'
import type { Image } from '../types'

interface HomeProps {
  continents: ContinentSlideProps[]
}

interface PrismicContinent {
  name: string,
  summary: string,
  image: Image,
}

const Home: NextPage<HomeProps> = ({ continents }) => {
  return (
    <>
      <Banner />
      <TravelTypes />
      <Divider
        w='24'
        h='2px'
        mx='auto'
        my='10'
        bg='gray.900'
      />
      <Heading
        textAlign='center'
        fontWeight='medium'
      >
        Vamos nessa? <br />
        Então escolha seu continente
      </Heading>
      <ContinentsSlider continents={continents} />
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const prismicClient = getPrismicClient()
  const continentsResult = await prismicClient.query<PrismicContinent>(
    Prismic.predicates.at('document.type', 'continent'),
    {
      fetch: [
        'continent.name',
        'continent.summary',
        'continent.image'
      ]
    }
  )

  const parsedContinents: ContinentSlideProps[] = 
    continentsResult.results
      .map(({ data: continent, uid }) => ({
        name: continent.name,
        image: continent.image.url,
        summary: continent.summary,
        slug: String(uid),
      }))

  return {
    props: {
      continents: parsedContinents,
    },
    revalidate: 60 * 60 * 6, //6 hours
  }
}
