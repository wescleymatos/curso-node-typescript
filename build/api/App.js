"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
var routes_1 = require("./routes/routes");
var ErrorHandlerApp_1 = require("./ErrorHandlerApp");
var App = /** @class */ (function () {
    function App() {
        this.express = express();
        this.middleware();
    }
    App.prototype.middleware = function () {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(ErrorHandlerApp_1.errorHandlerApp);
        this.router(this.express);
    };
    App.prototype.router = function (app) {
        new routes_1.default(app);
    };
    return App;
}());
exports.default = new App().express;
