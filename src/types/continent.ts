interface ContinentDetails {
  countriesAmount: number,
  languagesAmount: number,
  bestCitiesAmount: number,
}

export default interface Continent {
  image: string,
  name: string,
  description: string,
  summary: string,
  slug: string,
  details: ContinentDetails,
}
