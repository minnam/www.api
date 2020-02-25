/// <reference types="node" />
import { FastifyReply } from 'fastify';
import { ServerResponse } from 'http';
export declare type Response = {
    (status: number, data: any, reply: FastifyReply<ServerResponse>): FastifyReply<ServerResponse>;
};
declare const _default: {
    CONTENT_TYPE_HEADER: string;
    send: Response;
};
export default _default;
