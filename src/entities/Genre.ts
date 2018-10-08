import * as mongoose from 'mongoose';

export interface Genre {
    nome: string
}

export interface GenreDocument extends Genre, mongoose.Document {}
