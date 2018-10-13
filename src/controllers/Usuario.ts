import { Request, Response, NextFunction } from 'express';
import UsuarioModel from '../models/Usuario';
import { validationResult } from 'express-validator/check';

class UsuarioController {
    async get(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            let item = await UsuarioModel.get(req.params.slug);
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

    async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                res.status(400).send('Compos inválidos');
            }

            let newItem = await UsuarioModel.create(req.body);
            res.status(201).json(newItem);
        } catch(error) {
            res.status(500);
            next(error);
        }
    }

}

export default UsuarioController;
