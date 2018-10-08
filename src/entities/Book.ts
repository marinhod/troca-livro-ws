import * as mongoose from 'mongoose';

export interface Book {
    title: string,
    author: string,
    genre: string,
    year: Date
}

export interface BookDocument extends Book, mongoose.Document {}
