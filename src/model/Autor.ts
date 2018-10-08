import * as mongoose from 'mongoose';
import { AutorSchema } from '../schema/Autor';
import { Autor, AutorDocument } from '../entities/Autor';

const AuthorModel = mongoose.model<AutorDocument>(
    'Autor', 
    AutorSchema, 
    'autors'
);

class AuthorRepo {}

export default AuthorRepo;
