import * as mongoose from 'mongoose';
import { Book } from './Book';

export interface User {
    nome: string,
    sobrenome: string,
    email: string,
    foto: string,
    livros: Book[]
    
}

export interface UserDocument extends User, mongoose.Document {}
