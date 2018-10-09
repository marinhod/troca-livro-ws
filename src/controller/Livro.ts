import { Request, Response, NextFunction } from 'express';
import LivroModel from '../model/Livro';

class LivroController {
    async get(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            let item = await LivroModel.get();
            res.json(item);
        } catch(error) {
            res.status(500);
            next(error);
        }
    }
}

export default LivroController;
