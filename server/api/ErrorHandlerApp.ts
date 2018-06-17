import { Request, Response, ErrorRequestHandler, NextFunction } from 'express';

export function errorHandlerApp(err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) {
  console.log(`APP error handler executed: ${err}`);

  res.status(500).json({
    errorCode: 'ERR-001',
    message: 'Internal error'
  });
}
