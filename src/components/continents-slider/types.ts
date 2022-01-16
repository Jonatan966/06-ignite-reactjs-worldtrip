import { Continent } from "../../types"

export type ContinentSlideProps = Omit<Continent, 'countries_amount' | 'languages_amount' | 'description'>
