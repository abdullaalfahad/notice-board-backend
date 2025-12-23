import { ZodType } from 'zod';
import { Request, Response, NextFunction } from 'express';

const validate =
  (schema: ZodType) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({ body: req.body, params: req.params, query: req.query });
      next();
    } catch (error) {
      next(error);
    }
  };

export default validate;
