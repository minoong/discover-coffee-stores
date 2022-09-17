import type { Places } from '~/types/api/places'

const getUrlForCoffeeStores = (latLong: string, query: string, limit: number) =>
  `https://api.foursquare.com/v3/places/search?query=${query}&ll=${encodeURIComponent(
    latLong
  )}&limit=${limit}`

export const fetchCoffeeStores = async (
  latLong = '40.74356310868958,-73.99085595601952',
  limit = 6
) => {
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: String(process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY),
    },
  }

  const data: Places = await fetch(
    getUrlForCoffeeStores(latLong, 'coffee', limit),
    options
  ).then((response) => response.json())

  return data.results
}
