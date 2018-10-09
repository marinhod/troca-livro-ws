import * as mongoose from 'mongoose';
import { Livro } from './Livro';
import { Usuario } from './Usuario';

export interface Autor {
    nome: string,
    sobrenome: string
}

export interface AutorDocument extends Autor, mongoose.Document {}
