import { Request, Response, NextFunction } from 'express';
import UsuarioModel from '../models/Usuario';

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
            if (!req.body.first_name || !req.body.last_name) {
                res.status(400).send('Invalid request object');
            }
            let {first_name, last_name} = req.body;
            let newItem = await UsuarioModel.create(req.body);
            res.status(201).json(newItem);
        } catch(error) {
            res.status(500);
            next(error);
        }
    }





}

export default UsuarioController;
