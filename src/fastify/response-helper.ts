import { FastifyReply } from 'fastify'
import { ServerResponse } from 'http'

/* Common --------------------------------------------------------------------------------------- */
import { HTTP_STATUS } from '../http-constants'

/* Types ---------------------------------------------------------------------------------------- */
export type Response = {
  (status: number, data: any, reply: FastifyReply<ServerResponse>): FastifyReply<ServerResponse>
}

const responseMap: any = (data: any) => {
  return {
    [HTTP_STATUS.OK]: {
      statusCode: HTTP_STATUS.OK,
      data: data,
    },
    [HTTP_STATUS.NOT_FOUND]: {
      statusCode: HTTP_STATUS.NOT_FOUND,
      message: 'Resource not found',
      data: data,
    },
    [HTTP_STATUS.UNAUTHORIZED]: {
      statusCode: HTTP_STATUS.UNAUTHORIZED,
      message: 'Unauthorized',
      data: data,
    },
    [HTTP_STATUS.INTERNAL_SERVER_ERROR]: {
      statusCode: HTTP_STATUS.INTERNAL_SERVER_ERROR,
      error: 'Internal Server Error',
      message: data,
      data: data,
    },
  }
}

const CONTENT_TYPE_HEADER = 'application/json; charset=utf-8'
const send: Response = (status: any, data: any, reply: FastifyReply<ServerResponse>) => {
  return reply
    .code(status)
    .header('Content-Type', CONTENT_TYPE_HEADER)
    .send(responseMap(data)[status])
}

export default {
  CONTENT_TYPE_HEADER,
  send
}
