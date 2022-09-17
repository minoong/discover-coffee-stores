// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { findRecordByFilter, getMinifiedRecords, table } from '~/lib/airtable'
import * as _ from 'lodash'

export default async function favouriteCoffeeStoreById(
  req: NextApiRequest,
  res: NextApiResponse<
    Awaited<ReturnType<typeof findRecordByFilter>> | { message: any }
  >
) {
  if (req.method === 'PUT') {
    try {
      const { id } = req.body

      const record = (await findRecordByFilter(String(id)))[0]
      const copy = _.cloneDeep(record)

      // @ts-ignore: Unreachable code error
      copy.voting += 1

      const updateRecord = await table.update([
        {
          id: copy.recordId,
          fields: {
            // @ts-ignore: Unreachable code error
            voting: copy.voting,
          },
        },
      ])

      if (updateRecord) {
        const minifiedRecords = getMinifiedRecords(updateRecord)
        res.status(200).json(minifiedRecords)
      } else {
        res.status(400).json({ message: `coffee store id doesn't exist ${id}` })
      }

      return
    } catch (err) {
      res.status(500).json({ message: err })
      return
    }
  }
}
