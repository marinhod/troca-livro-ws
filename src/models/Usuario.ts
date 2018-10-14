import * as mongoose from 'mongoose';
import { UsuarioSchema } from '../schemas/Usuario';
import { Usuario, UsuarioDocument } from '../entidades/Usuario';
import { Livro } from '../entidades/Livro';

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

    static async create(usuario: Usuario): Promise<Usuario> {
        let newItem = new UsuarioModel(usuario);
        return newItem.save();
    }

    static async addLivro(usuarioSlug: string, livroSLug: string): Promise<void> {
        await UsuarioModel.findOneAndUpdate(
            { slug: usuarioSlug }, 
            { $push: { livros: livroSLug } }, 
            { new: true } 
        );
    }
}

export default UsuarioRepo;
