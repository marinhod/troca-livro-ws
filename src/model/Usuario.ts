import * as mongoose from 'mongoose';
import { UsuarioSchema } from '../schema/Usuario';
import { Usuario, UsuarioDocument } from '../entities/Usuario';

const LoanModel = mongoose.model<UsuarioDocument>(
    'Usuario', 
    UsuarioSchema, 
    'usuarios'
);

class LoanRepo {}

export default LoanRepo;
