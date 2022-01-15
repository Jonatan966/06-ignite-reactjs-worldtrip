import { Continent } from "../../types"

export type ContinentSlideProps = Omit<Continent, 'details' | 'description'>
