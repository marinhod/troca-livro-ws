import * as mongoose from 'mongoose';
import { AutorSchema } from '../schema/Autor';
import { Autor, AutorDocument } from '../entities/Autor';

const AutorModel = mongoose.model<AutorDocument>(
    'Autor', 
    AutorSchema, 
    'autors'
);

class AutorRepo {}

export default AutorRepo;
