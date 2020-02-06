import { ObjectID, Collection } from 'mongodb'
import { db } from '@bit/www.api.mongo.driver'

export default class Helper {
  collection: Collection
  constructor(collectionName: string) {
    this.collection = db.collection(collectionName)
  }
  /**
   * @returns array of teams
   */
  index = async () => {
    const result = await this.collection.find().toArray()

    return result
  }

  /**
   * @returns one schema object with matched _id
   */
  get = async (props: { $match: { [key: string]: any } }) => {
    const { $match } = props

    try {
      const result = await this.collection.aggregate([
        {
          $match,
        },
      ])

      const entries = await result.toArray()

      return entries[0]
    } catch (e) {
      console.error(e)
      throw new Error()
    }
  }

  populate = async (props: { $match: { [key: string]: any }; key: string }) => {
    const { $match, key } = props

    try {
      const result = await this.collection.aggregate([
        {
          $match,
        },
        {
          $addFields: {
            [key]: {
              $map: {
                input: `$${key}`,
                in: { $toObjectId: '$$this' },
              },
            },
          },
        },
        {
          $lookup: {
            from: key,
            localField: key,
            foreignField: '_id',
            as: `${key}`,
          },
        },
      ])

      const user = await result.toArray()

      return user[0]
    } catch (e) {
      console.error(e)
      throw new Error()
    }
  }

  /**
   * @returns inserted team object
   */
  post = async (body: {}) => {
    const result = await this.collection.insertOne({ ...body })

    return result.ops[0]
  }

  /**
   * @returns updated team object
   */
  put = async (id: string, body: {}) => {
    const result = await this.collection.findOneAndUpdate(
      { _id: new ObjectID(id) },
      { $set: body },
      { returnOriginal: false },
    )

    return result.value
  }

  /**
   * @returns previous team object
   */
  remove = async (id: string) => {
    const result = await this.collection.findOneAndDelete({ _id: new ObjectID(id) })
    return result.value
  }
}
