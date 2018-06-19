import * as http from 'http';

import App from './api/App';

const models = require('./models');
const config = require('./config/env/config')();

const server = http.createServer(App);

models.sequelize
  .sync()
  .then(() => {
    server.listen(config.serverPort);
    server.on('listening', () => console.log(`Server running on port ${config.serverPort}`));
    server.on('error', (error: NodeJS.ErrnoException) => console.log(`Error: ${error}`));
  });
