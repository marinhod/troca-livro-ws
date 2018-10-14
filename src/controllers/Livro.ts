import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator/check';
import LivroModel from '../models/Livro';
import { slugify } from '../util';

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

            let slug = slugify(req.body.titulo); 
            const dados = Object.assign({slug: slug}, req.body);
            
            let newItem = await LivroModel.create(dados);
            res.status(201).json(newItem);

            } catch(error) {
            res.status(500);
            next(error);
        }
    }
    async list(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            let lista = await LivroModel.list();
            res.json(lista);
        } catch(erro) {
            res.status(500);
            next(erro);
        }
    }
}

export default LivroController;
