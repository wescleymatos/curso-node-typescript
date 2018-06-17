"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorHandlerApp(err, req, res, next) {
    console.log("APP error handler executed: " + err);
    res.status(500).json({
        errorCode: 'ERR-001',
        message: 'Internal error'
    });
}
exports.errorHandlerApp = errorHandlerApp;
