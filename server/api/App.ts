import * as express from 'express';
import { Application } from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

import Routes from './routes/routes';
import { errorHandlerApp } from './ErrorHandlerApp';

class App {

  public express: Application;

  constructor() {
    this.express = express();
    this.middleware();
  }

  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.express.use(errorHandlerApp);
    this.router(this.express);
  }

  private router(app: Application): void {
    new Routes(app);
  }
}

export default new App().express;
