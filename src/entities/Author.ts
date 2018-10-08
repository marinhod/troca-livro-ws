import * as mongoose from 'mongoose';
import { Book } from './Book';
import { User } from './User';

export interface Author {
    nome: string,
    sobrenome: string
}

export interface AuthorDocument extends Author, mongoose.Document {}
