import { FastifyReply, FastifyRequest } from 'fastify'
import { ServerResponse } from 'http'
import BaseController from '../mongo/controller'

/* Helpers -------------------------------------------------------------------------------------- */
import ResponseHelper from './response-helper'
import { HTTP_STATUS } from '../http-constants'

export class ControllerHelper<Controller> {
  controller: BaseController

  constructor(controller: BaseController & Controller) {
    this.controller = controller
  }

  index = async (request: FastifyRequest, reply: FastifyReply<ServerResponse>) => {
    try {
      const result = await this.controller.index()
      return ResponseHelper.send(
        result.length ? HTTP_STATUS.OK : HTTP_STATUS.NOT_FOUND,
        result,
        reply,
      )
    } catch (e) {
      return ResponseHelper.send(HTTP_STATUS.INTERNAL_SERVER_ERROR, {}, reply)
    }
  }

  get = async (request: FastifyRequest, reply: FastifyReply<ServerResponse>) => {
    try {
      const { id } = request.params
      const result = await this.controller.get({ $match: { _id: id } })
      return ResponseHelper.send(
        result.length ? HTTP_STATUS.OK : HTTP_STATUS.NOT_FOUND,
        result,
        reply,
      )
    } catch (e) {
      return ResponseHelper.send(HTTP_STATUS.INTERNAL_SERVER_ERROR, {}, reply)
    }
  }

  post = async (request: FastifyRequest, reply: FastifyReply<ServerResponse>) => {
    try {
      const result = await this.controller.post(request.body)
      return ResponseHelper.send(result ? HTTP_STATUS.OK : HTTP_STATUS.NOT_FOUND, result, reply)
    } catch (e) {
      return ResponseHelper.send(HTTP_STATUS.INTERNAL_SERVER_ERROR, {}, reply)
    }
  }

  put = async (request: FastifyRequest, reply: FastifyReply<ServerResponse>) => {
    try {
      const { id } = request.params
      const result = await this.controller.put(id, request.body)
      return ResponseHelper.send(result ? HTTP_STATUS.OK : HTTP_STATUS.NOT_FOUND, result, reply)
    } catch (e) {
      return ResponseHelper.send(HTTP_STATUS.INTERNAL_SERVER_ERROR, {}, reply)
    }
  }

  remove = async (request: FastifyRequest, reply: FastifyReply<ServerResponse>) => {
    try {
      const { id } = request.params
      const result = await this.controller.remove(id)
      return ResponseHelper.send(
        result.length ? HTTP_STATUS.OK : HTTP_STATUS.NOT_FOUND,
        result,
        reply,
      )
    } catch (e) {
      return ResponseHelper.send(HTTP_STATUS.INTERNAL_SERVER_ERROR, {}, reply)
    }
  }
}
