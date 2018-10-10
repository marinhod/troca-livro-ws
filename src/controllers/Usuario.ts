import { Request, Response, NextFunction } from 'express';
import UsuarioModel from '../models/Usuario';

class UsuarioController {
    async get(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            let item = await UsuarioModel.get(req.params.slug);
            res.json(item);
        } catch(error) {
            res.status(500);
            next(error);
        }
    }
}

export default UsuarioController;
