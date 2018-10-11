import * as mongoose from 'mongoose';
import { UsuarioSchema } from '../schemas/Usuario';
import { Usuario, UsuarioDocument } from '../entidades/Usuario';

const UsuarioModel = mongoose.model<UsuarioDocument>(
    'Usuario', 
    UsuarioSchema, 
    'usuarios'
);

class UsuarioRepo {
    static async get(slug: string): Promise<Usuario> {
        let item = await UsuarioModel.findOne({ slug: slug }).lean().exec();
        return item;
    }
}

export default UsuarioRepo;
