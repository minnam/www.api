import { MongoClient, Db } from 'mongodb'

export let db: Db
export const initiate: (props: { host: string, port: string, name: string }) => void = async ({ host, port, name }) => {
  const url = `mongodb://${host}:${port}/${name}`
  const client = new MongoClient(url, { useUnifiedTopology: true })

  try {
    const connection = await client.connect()

    console.log('mongodb connected!')
    db = connection.db(name)
  } catch (e) {
    console.error(e)
  }
}
