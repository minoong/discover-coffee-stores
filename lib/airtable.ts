import Airtable, { FieldSet, Record, Records } from 'airtable'
import * as _ from 'lodash'

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY! }).base(
  process.env.AIRTABLE_BASE_KEY!
)
const table = base('coffee-stores')

const getMinifiedRecord = (record: Record<FieldSet>) => ({
  recordId: record.id,
  ...record.fields,
})

const getMinifiedRecords = (records: Records<FieldSet>) => {
  return _.map(records, getMinifiedRecord)
}

const findRecordByFilter = async (id: string) => {
  const findCoffeeStoreRecords = await table
    .select({
      filterByFormula: `id="${id}"`,
    })
    .firstPage()

  return getMinifiedRecords(findCoffeeStoreRecords)
}

export { table, getMinifiedRecords, findRecordByFilter }
