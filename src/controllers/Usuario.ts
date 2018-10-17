import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator/check';
import UsuarioModel from '../models/Usuario';
import { slugify } from '../util';
import LivroController from './Livro';
import { Livro } from '../entidades/Livro';
import { Usuario } from '../entidades/Usuario';

class UsuarioController {
    static async _getPorLivro(livroSlug: string) {
        try {
            let usuarios = await UsuarioModel.getPorLivro(livroSlug);
            if (usuarios) {
                return usuarios;
            } else {
                return false;
            }
        } catch (error) {
            throw error;
        }
    }
    
    async get(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            let item = await UsuarioModel.get(req.params.slug);
            if (item) {
                let livros: Array<Livro> = [];
                for (const livro in item.livros) {
                    let slug = item.livros[livro];
                    if ((typeof(slug) === 'string')) {
                        let livroObj = await LivroController._get(slug);
                        if (livroObj) {
                            livros.push(livroObj);
                        }   
                    }
                }
                item.livros = livros;
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

    async editaLivro(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            let modificado: Usuario;

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                res.status(400).send('Compos inválidos');
            }

            if (req.body.opcao === 'insere') {
                modificado = await UsuarioModel.addLivro(req.body.usuario, req.body.livro);
            } else {
                modificado = await UsuarioModel.removeLivro(req.body.usuario, req.body.livro);    
            }

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
