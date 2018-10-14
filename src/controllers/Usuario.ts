import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator/check';
import UsuarioModel from '../models/Usuario';
import { slugify } from '../util';

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

            let slug = slugify(`${req.body.nome} ${req.body.sobrenome}`); 
            const dados = Object.assign({slug: slug}, req.body);
            
            let newItem = await UsuarioModel.create(dados);
            res.status(201).json(newItem);
        } catch(error) {
            res.status(500);
            next(error);
        }
    }

    async addLivro(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                res.status(400).send('Compos inválidos');
            }
            
            let modificado = await UsuarioModel.addLivro(req.body.usuario, req.body.livro);
            if (!modificado) {
                res.status(400).send('Livro já está na lista');
            }
            res.status(201).json(modificado);
        } catch (error) {
            res.status(500);
            next(error);
        }
    }
}

export default UsuarioController;
