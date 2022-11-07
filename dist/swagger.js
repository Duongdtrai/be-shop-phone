"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swaggerDefinition = {
    info: {
        title: 'Shop smartphone',
        version: '1.0.0',
        description: 'This is the REST API for project Shop smartphone',
    },
    host: process.env.API_HOST,
    basePath: '/',
    tags: [
        {
            name: '[ADMIN] LOGIN',
            description: 'Đăng nhập'
        },
        {
            name: '[ADMIN] USER',
            description: 'Thông tin user'
        }
    ],
    securityDefinitions: {
        Bearer: {
            type: 'apiKey',
            schema: 'bearer',
            name: 'Authorization',
            in: 'header',
            prefix: 'Bearer ',
        },
    },
    definitions: {},
};
const options = {
    swaggerDefinition,
    explorer: true,
    apis: ['**/*.ts'],
};
exports.default = (0, swagger_jsdoc_1.default)(options);
//# sourceMappingURL=swagger.js.map