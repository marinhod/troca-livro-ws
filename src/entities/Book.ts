import * as mongoose from 'mongoose';
import { Genre } from './Genre'
import { Author } from './Author'

export interface Book {
    title: string,
    author: Author[],
    genre: Genre[],
    year: Date
}

export interface BookDocument extends Book, mongoose.Document {}
