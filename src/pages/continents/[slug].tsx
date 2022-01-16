import Prismic from '@prismicio/client'
import { Document } from '@prismicio/client/types/documents'
import type { GetStaticPaths, GetStaticProps } from 'next'

import { AppHead, CitiesList, ContinentBanner, ContinentDetails } from '../../components'
import { getPrismicClient } from '../../services/prismic'
import { City, Continent, Image } from '../../types'

type PageRoute = {
  slug: string,
}

interface PrismicCity {
  image: Image,
  name: string,
  country: Document<{
    image: Image,
    name: string,
  }>,
}

interface PrismicContinent {
  image: Image,
  name: string,
  description: string,
  countries_amount: number,
  languages_amount: number,
  cities: {
    city: Document<PrismicCity>
  }[],
}

type ContinentPageProps = Omit<Continent, 'slug' | 'summary'> & {
  cities: City[]
}

export default function ContinentPage({
  name,
  image,
  cities = [],
  ...details
}: ContinentPageProps) {
  return (
    <>
      <AppHead title={name} />
      <ContinentBanner image={image} name={name} />
      <ContinentDetails best_cities_amount={cities.length} {...details} />
      <CitiesList cities={cities} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths<PageRoute> = async () => {
  const prismic = getPrismicClient()
  const posts = await prismic.query(
    Prismic.predicates.at('document.type', 'continent'),
    {
      pageSize: 10,
      fetch: ['continent.name'],
    }
  )

  const mappedContinents = posts.results.map(post => ({
    params: {
      slug: post.uid as string,
    },
  }))

  return {
    fallback: true,
    paths: mappedContinents,
  };
}

function parsePrismicCities(cities: PrismicContinent['cities']) {
  return cities
    .filter(({ city }) => !!city?.data)
    .map(
      ({ city: { data: city } }) => ({
        ...city,
        image: city.image.url,
        country: {
          name: city.country.data.name,
          image: city.country.data.image.url,
        }
      })
    )
}

export const getStaticProps: GetStaticProps<ContinentPageProps, PageRoute> = async ({ params }) => {
  try {
    const prismic = getPrismicClient()

    const { data: continent } = await prismic
      .getByUID<PrismicContinent>('continent', String(params?.slug), {
        fetchLinks: [
          'continent.name',
          'continent.image',
          'continent.description',
          'continent.countries_amount',
          'continent.languages_amount',
          'continent.cities',
          'city.name',
          'city.image',
          'city.country',
          'country.name',
          'country.image'
        ],
      })

    const parsedContinent: ContinentPageProps = {
      name: continent.name,
      image: continent.image.url,
      description: continent.description,
      countries_amount: continent.countries_amount,
      languages_amount: continent.languages_amount,
      cities: parsePrismicCities(continent.cities),
    }

    return {
      props: parsedContinent,
      revalidate: 60 * 60 * 6, //6 hours
    }
  } catch {
    return {
      notFound: true,
    }
  }
}
