import * as mongoose from 'mongoose';
import { GeneroSchema } from '../schema/Genero';
import { Genero, GeneroDocument } from '../entities/Genero';

const LoanModel = mongoose.model<GeneroDocument>(
    'Genero', 
    GeneroSchema, 
    'generos'
);

class GeneroRepo {}

export default GeneroRepo;