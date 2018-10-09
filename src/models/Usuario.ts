import * as mongoose from 'mongoose';
import { UsuarioSchema } from '../schema/Usuario';
import { Usuario, UsuarioDocument } from '../entities/Usuario';

const UsuarioModel = mongoose.model<UsuarioDocument>(
    'Usuario', 
    UsuarioSchema, 
    'usuarios'
);

class UsuarioRepo {
    static async get(): Promise<Usuario> {
        // fix this!
        let item = await UsuarioModel.find().lean().exec();
        return item;
    }
}

export default UsuarioRepo;
