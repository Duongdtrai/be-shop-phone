import express from 'express';

// import specs from './swagger';
import fs from 'fs';
const swaggerUi = require('swagger-ui-express');
import { RegisterRoutes } from './routes';

import './components/account/account.controller';

const app = express();
const port = 3000;

// app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))
// app.use('/session', accountRoute);
// app.use('/user', userRoute);

/* Swagger files start */
const swaggerFile: any = (process.cwd()+"/swagger.json");
const swaggerData: any = fs.readFileSync(swaggerFile, 'utf8');
const swaggerDocument = JSON.parse(swaggerData);
/* Swagger files end */

RegisterRoutes(app);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}/docs/`);
});
