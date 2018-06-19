"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routes_1 = require("../../modules/User/routes");
var Routes = /** @class */ (function () {
    function Routes(app) {
        this._router = new routes_1.default();
        this.getRoutes(app);
    }
    Routes.prototype.getRoutes = function (app) {
        app.route('/api/users').get(this._router.index);
        app.route('/api/users').post(this._router.create);
        app.route('/api/users/:id').get(this._router.findOne);
        app.route('/api/users/:id').put(this._router.update);
        app.route('/api/users/:id').delete(this._router.destroy);
    };
    return Routes;
}());
exports.default = Routes;
