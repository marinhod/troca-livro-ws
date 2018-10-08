import * as mongoose from 'mongoose';
import { Author } from './author';
import { Book } from './book';

export interface Loan {
    author: Author,
    book: Book,
    date: Date
}

export interface LoanDocument extends Loan, mongoose.Document {}
