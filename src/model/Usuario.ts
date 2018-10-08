import * as mongoose from 'mongoose';
import { UsuarioSchema } from '../schema/Usuario';
import { Usuario, UsuarioDocument } from '../entities/Usuario';

const UsuarioModel = mongoose.model<UsuarioDocument>(
    'Usuario', 
    UsuarioSchema, 
    'usuarios'
);

class UsuarioRepo {}

export default UsuarioRepo;
