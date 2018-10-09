import * as mongoose from 'mongoose';
import { LivroSchema } from '../schema/Livro';
import { Livro, LivroDocument } from '../entities/Livro';

const LivroModel = mongoose.model<LivroDocument>(
    'Livro', 
    LivroSchema, 
    'livros'
);

class LivroRepo {
    static async get(): Promise<Livro> {
        // fix this!
        let item = await LivroModel.find().lean().exec();
        return item;
    }
}

export default LivroRepo;
