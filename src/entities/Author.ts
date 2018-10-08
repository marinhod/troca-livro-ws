import * as mongoose from 'mongoose';

export interface Author {
    first_name: string,
    last_name: string
}

export interface AuthorDocument extends Author, mongoose.Document {}
