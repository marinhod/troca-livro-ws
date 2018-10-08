import * as mongoose from 'mongoose';
import { User } from './User';

export interface Book {
    title: string,
    author: string,
    genre: string,
    year: Date
}

export interface BookDocument extends Book, mongoose.Document {}
