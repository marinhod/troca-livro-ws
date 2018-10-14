import * as mongoose from 'mongoose';
import { LivroSchema } from '../schemas/Livro';
import { Livro, LivroDocument } from '../entidades/Livro';

const LivroModel = mongoose.model<LivroDocument>(
    'Livro', 
    LivroSchema, 
    'livros'
);

class LivroRepo {
    static async get(slug: string): Promise<Livro> {
        let item = await LivroModel.findOne({ slug: slug }).lean().exec();
        return item;
    }
    static async create(livro: Livro): Promise<Livro> {
        let newItem = new LivroModel(livro);
        return newItem.save();
    }
    static async list(): Promise<Livro[]> {
        let list = await LivroModel.find().lean().exec();
        return list;
    }
}

export default LivroRepo;
