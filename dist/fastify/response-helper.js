"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_constants_1 = require("../http-constants");
var responseMap = function (data) {
    var _a;
    return _a = {},
        _a[http_constants_1.HTTP_STATUS.OK] = {
            statusCode: http_constants_1.HTTP_STATUS.OK,
            data: data,
        },
        _a[http_constants_1.HTTP_STATUS.NOT_FOUND] = {
            statusCode: http_constants_1.HTTP_STATUS.NOT_FOUND,
            message: 'Resource not found',
            data: data,
        },
        _a[http_constants_1.HTTP_STATUS.UNAUTHORIZED] = {
            statusCode: http_constants_1.HTTP_STATUS.UNAUTHORIZED,
            message: 'Unauthorized',
            data: data,
        },
        _a[http_constants_1.HTTP_STATUS.INTERNAL_SERVER_ERROR] = {
            statusCode: http_constants_1.HTTP_STATUS.INTERNAL_SERVER_ERROR,
            error: 'Internal Server Error',
            message: data,
            data: data,
        },
        _a;
};
var CONTENT_TYPE_HEADER = 'application/json; charset=utf-8';
var send = function (status, data, reply) {
    return reply
        .code(status)
        .header('Content-Type', CONTENT_TYPE_HEADER)
        .send(responseMap(data)[status]);
};
exports.default = {
    CONTENT_TYPE_HEADER: CONTENT_TYPE_HEADER,
    send: send
};
