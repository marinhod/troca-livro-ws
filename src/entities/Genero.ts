import * as mongoose from 'mongoose';

export interface Genero {
    nome: string
}

export interface GeneroDocument extends Genero, mongoose.Document {}
