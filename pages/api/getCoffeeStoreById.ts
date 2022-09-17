// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { findRecordByFilter, getMinifiedRecords, table } from '~/lib/airtable'
import * as _ from 'lodash'

export default async function getCoffeeStoreById(
  req: NextApiRequest,
  res: NextApiResponse<
    Awaited<ReturnType<typeof findRecordByFilter>> | { message: any }
  >
) {
  const { id } = req.query
  try {
    if (id) {
      const records = await findRecordByFilter(String(id))

      if (!_.isEmpty(records)) {
        res.status(200).json(records)
      } else {
        res.status(200).json({ message: `id is created ${id}` })
      }
    } else {
      res.status(400).json({ message: `id is missing` })
    }

    // const { latLong = '', limit = 6 } = req.query
    // const coffeeStores = await fetchCoffeeStores(
    //   latLong as string,
    //   limit as number
    // )
    // res.status(200).json(coffeeStores)
  } catch (error) {
    res.status(500).json({ message: error })
  }
}
