import * as mongoose from 'mongoose';
import { Author } from './author';

export interface Book {
    title: string,
    author: Author,
    year: number
}

export interface BookDocument extends Book, mongoose.Document {}
