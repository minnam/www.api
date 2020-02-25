import axios, { AxiosRequestConfig, AxiosPromise } from 'axios'

export default class Log {
  private static instance: Log
  private apiUrl: string
  private constructor(apiUrl: string) {
    this.apiUrl = apiUrl
  }
  public static getInstance(apiUrl?: string) {
    if (Log.instance == null) {
      if (!apiUrl) {
        throw new Error('No API URL provided')
      }
      Log.instance = new Log(apiUrl)
    }
    return Log.instance
  }
  public log = async (
    id: string,
    collection: string,
    status: string,
    message: string,
    trace?: any,
  ) => {
    await axios
      .post(`${this.apiUrl}/logs`, {
        collectionId: id,
        type: collection,
        status: status,
        dateCreated: new Date(),
        log: {
          message: message,
          stackTrace: trace ? trace.toString() : '',
        },
      });
  }
}
