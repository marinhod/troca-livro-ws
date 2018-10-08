import * as mongoose from 'mongoose';
import { Genero } from './Genero'
import { Autor } from './Autor'

export interface Livro {
    titulo: string,
    autor: Autor[],
    genero: Genero[],
    ano: Date,
    slug: string
}

export interface LivroDocument extends Livro, mongoose.Document {}
