// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { fetchCoffeeStores } from '~/lib/coffee-stores'
import { Result } from '~/types/api/places'

export default async function getCoffeeStoresByLocation(
  req: NextApiRequest,
  res: NextApiResponse<Result[] | { message: any }>
) {
  try {
    const { latLong = '', limit = 6 } = req.query
    const coffeeStores = await fetchCoffeeStores(
      latLong as string,
      limit as number
    )
    res.status(200).json(coffeeStores)
  } catch (error) {
    res.status(500).json({ message: error })
  }
}
