import * as mongoose from 'mongoose';
import { AutorSchema } from '../schemas/Autor';
import { Autor, AutorDocument } from '../entidades/Autor';

const AutorModel = mongoose.model<AutorDocument>(
    'Autor', 
    AutorSchema, 
    'autors'
);

class AutorRepo { }

export default AutorRepo;
