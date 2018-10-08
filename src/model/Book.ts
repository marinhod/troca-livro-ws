import * as mongoose from 'mongoose';
import { BookSchema } from '../schema/book';
import { Book, BookDocument } from '../entities/Usuario';

const BookModel = mongoose.model<BookDocument>(
    'Book', 
    BookSchema, 
    'books'
);

class BookRepo {
    static async create(book: Book): Promise<Book> {
        let newItem = new BookModel(book);
        return newItem.save();
    }
    static async list(): Promise<Book[]> {
        let list = await BookModel.find().lean().exec();
        return list;
    }
}

export default BookRepo;
