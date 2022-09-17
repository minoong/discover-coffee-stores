import type { NextApiRequest, NextApiResponse } from 'next'
import * as _ from 'lodash'
import { findRecordByFilter, getMinifiedRecords, table } from '~/lib/airtable'

table

const createCoffeeStore = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { id, name, neighborhood, address, imgUrl, voting } = req.body

    try {
      if (!id) {
        res.status(400).json({ message: 'id is missing' })
        return
      }
      const records = await findRecordByFilter(String(id))

      if (!_.isEmpty(records)) {
        res.json(records)
      } else {
        if (name) {
          const createRecords = await table.create([
            {
              fields: {
                id,
                name,
                address,
                neighborhood,
                voting,
                imgUrl,
              },
            },
          ])

          const records = getMinifiedRecords(createRecords)
          res.json({ message: 'create a record!', records })
        } else {
          res.status(400).json({ message: 'name is missing' })
        }
      }
    } catch (err) {
      console.error('error', err)
      res.status(500).json({ message: 'Error finding store', err })
    }
  } else {
    res.json({ message: 'method is GET' })
  }
}

export default createCoffeeStore
