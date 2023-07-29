"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const router = (0, express_1.Router)();
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Node API on OLX',
            version: '1.0.0',
            description: 'OLX based APIs',
        },
        servers: [
            {
                url: 'http://localhost:5000',
            },
        ],
    },
    apis: ['./src/routes/index.route.ts'],
};
const specs = (0, swagger_jsdoc_1.default)(options);
router.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs));
exports.default = router;
//# sourceMappingURL=swagger.js.map