import { Application, Request, Response } from 'express';

import UserRoutes from '../../modules/User/routes';

class Routes {

  private _router: UserRoutes;

  constructor(app: Application) {
    this._router = new UserRoutes();
    this.getRoutes(app);
  }

  getRoutes(app: Application): void {
    app.route('/api/users').get(this._router.index);
    app.route('/api/users').post(this._router.create);
    app.route('/api/users/:id').get(this._router.findOne);
    app.route('/api/users/:id').put(this._router.update);
    app.route('/api/users/:id').delete(this._router.destroy);
  }
}

export default Routes;
