import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator/check';
import LivroModel from '../models/Livro';
import UsuarioModel from '../models/Usuario';
import { slugify } from '../util';

class LivroController {
    static async _get(slug: string) {
        try {
            let item = await LivroModel.get(slug);
            if (item) {
                return item;
            } else {
                return false;
            }
        } catch(error) {
            throw error;
        }
    }
    async get(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            let livro = await LivroModel.get(req.params.slug);
            if (livro) {
                let obj;
                let usuarios = await UsuarioModel.getPorLivro(livro.slug);
                if (usuarios.length >0) {
                    obj = Object.assign({usuarios: usuarios}, livro);
                } else {
                    obj = livro;
                }
                res.status(200).json(obj);
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
