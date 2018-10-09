import * as mongoose from 'mongoose';
import { GeneroSchema } from '../schemas/Genero';
import { Genero, GeneroDocument } from '../entidades/Genero';

const LoanModel = mongoose.model<GeneroDocument>(
    'Genero', 
    GeneroSchema, 
    'generos'
);

class GeneroRepo {}

export default GeneroRepo;
