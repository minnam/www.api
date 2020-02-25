/// <reference types="node" />
import { FastifyReply, FastifyRequest } from 'fastify';
import { ServerResponse } from 'http';
import BaseController from '../mongo/controller';
export declare class ControllerHelper<Controller> {
    controller: BaseController;
    constructor(controller: BaseController & Controller);
    index: (request: FastifyRequest<import("http").IncomingMessage, import("fastify").DefaultQuery, import("fastify").DefaultParams, import("fastify").DefaultHeaders, any>, reply: FastifyReply<ServerResponse>) => Promise<FastifyReply<ServerResponse>>;
    get: (request: FastifyRequest<import("http").IncomingMessage, import("fastify").DefaultQuery, import("fastify").DefaultParams, import("fastify").DefaultHeaders, any>, reply: FastifyReply<ServerResponse>) => Promise<FastifyReply<ServerResponse>>;
    post: (request: FastifyRequest<import("http").IncomingMessage, import("fastify").DefaultQuery, import("fastify").DefaultParams, import("fastify").DefaultHeaders, any>, reply: FastifyReply<ServerResponse>) => Promise<FastifyReply<ServerResponse>>;
    put: (request: FastifyRequest<import("http").IncomingMessage, import("fastify").DefaultQuery, import("fastify").DefaultParams, import("fastify").DefaultHeaders, any>, reply: FastifyReply<ServerResponse>) => Promise<FastifyReply<ServerResponse>>;
    remove: (request: FastifyRequest<import("http").IncomingMessage, import("fastify").DefaultQuery, import("fastify").DefaultParams, import("fastify").DefaultHeaders, any>, reply: FastifyReply<ServerResponse>) => Promise<FastifyReply<ServerResponse>>;
}
