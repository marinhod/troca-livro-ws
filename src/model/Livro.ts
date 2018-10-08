import * as mongoose from 'mongoose';
import { LivroSchema } from '../schema/Livro';
import { Livro, LivroDocument } from '../entities/Livro';

const LivroModel = mongoose.model<LivroDocument>(
    'Livro', 
    LivroSchema, 
    'livros'
);

class LivroRepo {}

export default LivroRepo;
