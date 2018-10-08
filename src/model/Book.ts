import * as mongoose from 'mongoose';
import { LivroSchema } from '../schema/Livro';
import { Livro, LivroDocument } from '../entities/Livro';

const BookModel = mongoose.model<LivroDocument>(
    'Book', 
    BookSchema, 
    'books'
);

class BookRepo {}

export default BookRepo;
