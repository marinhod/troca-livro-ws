import * as mongoose from 'mongoose';
import { Livro } from './Livro';

export interface Usuario {
    nome: string,
    sobrenome: string,
    email: string,
    foto: string,
    livro: Livro[],
    slug: string
    
}

export interface UsuarioDocument extends Usuario, mongoose.Document {}