"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import specs from './swagger';
const fs_1 = __importDefault(require("fs"));
const swaggerUi = require('swagger-ui-express');
const routes_1 = require("./routes");
require("./components/account/account.controller");
const app = (0, express_1.default)();
const port = 3000;
// app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))
// app.use('/session', accountRoute);
// app.use('/user', userRoute);
/* Swagger files start */
const swaggerFile = (process.cwd() + "/swagger.json");
const swaggerData = fs_1.default.readFileSync(swaggerFile, 'utf8');
const swaggerDocument = JSON.parse(swaggerData);
/* Swagger files end */
(0, routes_1.RegisterRoutes)(app);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
// em cau hinh
//# sourceMappingURL=app.js.map