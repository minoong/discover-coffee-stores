export interface Places {
  results: Result[]
  context: Context
}

interface Context {
  geo_bounds: Geobounds
}

interface Geobounds {
  circle: Circle
}

interface Circle {
  center: Main
  radius: number
}

export interface Result {
  fsq_id: string
  categories: Category[]
  chains: any[]
  distance: number
  geocodes: Geocodes
  link: string
  location: Location
  name: string
  related_places: Relatedplaces
  timezone: string
}

interface Relatedplaces {
  parent?: Parent
}

interface Parent {
  fsq_id: string
  name: string
}

interface Location {
  address: string
  census_block: string
  country: string
  cross_street: string
  dma: string
  formatted_address: string
  locality: string
  neighborhood: string[]
  postcode: string
  region: string
  address_extended?: string
}

interface Geocodes {
  main: Main
  roof?: Main
}

interface Main {
  latitude: number
  longitude: number
}

interface Category {
  id: number
  name: string
  icon: Icon
}

interface Icon {
  prefix: string
  suffix: string
}
