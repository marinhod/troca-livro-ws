import { Request, Response, NextFunction } from 'express';
import LivroModel from '../models/Livro';

class LivroController {
    async get(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            let item = await LivroModel.get(req.params.slug);
            if (item) {
                res.status(200).json(item);
            } else {
                res.status(404).end();
            }
        } catch(error) {
            res.status(500);
            next(error);
        }
    }
}

export default LivroController;
