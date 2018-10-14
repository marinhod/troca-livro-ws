import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator/check';
import * as slug from 'slug';
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
    async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                res.status(400).send('Compos inválidos');
            }

            let slugVal = slug(req.body.titulo, { lower: true }); 
            const dados = Object.assign({slug: slugVal}, req.body);
            
            let newItem = await LivroModel.create(dados);
            res.status(201).json(newItem);

            } catch(error) {
            res.status(500);
            next(error);
        }
    }
   
}

export default LivroController;
