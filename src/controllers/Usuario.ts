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
            req.assert('nome', "O campo 'nome' não pode estar vazio").notEmpty();
            req.assert('sobrenome', "O campo 'sobrenome' não pode estar vazio").notEmpty();
            req.assert('email', "O campo 'email' não pode estar vazio").notEmpty();
            req.assert('email', "O campo 'email' não pode estar vazio").isEmail();
            
            const erros = req.validationErrors();

            if (erros) {
                res.status(400).send('Compos inválidos');
            }

            let {
                nome,
                sobrenome
            } = req.body;
            
            let newItem = await UsuarioModel.create(req.body);
            res.status(201).json(newItem);
        } catch(error) {
            res.status(500);
            next(error);
        }
    }

}

export default UsuarioController;
