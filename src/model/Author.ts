import * as mongoose from 'mongoose';
import { AuthorSchema } from '../schema/Autor';
import { Author, AuthorDocument } from '../entities/Livro';

const AuthorModel = mongoose.model<AuthorDocument>(
    'Author', 
    AuthorSchema, 
    'authors'
);

class AuthorRepo {
    static async create(author: Author): Promise<Author> {
        let newItem = new AuthorModel(author);
        return newItem.save();
    }
    static async list(): Promise<Author[]> {
        let list = await AuthorModel.find().lean().exec();
        return list;
    }
    static async delete(id: number): Promise<void>{
        AuthorModel.deleteOne({_id: id});
    }
}

export default AuthorRepo;
