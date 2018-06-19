"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var App_1 = require("./api/App");
var models = require('./models');
var config = require('./config/env/config')();
var server = http.createServer(App_1.default);
models.sequelize
    .sync()
    .then(function () {
    server.listen(config.serverPort);
    server.on('listening', function () { return console.log("Server running on port " + config.serverPort); });
    server.on('error', function (error) { return console.log("Error: " + error); });
});
