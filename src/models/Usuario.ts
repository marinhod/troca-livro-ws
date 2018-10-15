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

    static async getPorLivro(livroSlug: string): Promise<Usuario[]> {
        let usuarios = await UsuarioModel.find({ livros: livroSlug }).lean().exec();
        return usuarios;
    }

    static async create(usuario: Usuario): Promise<Usuario> {
        let newItem = new UsuarioModel(usuario);
        return newItem.save();
    }

    static async addLivro(usuarioSlug: string, livroSLug: string): Promise<Usuario> {
        let modificado = await UsuarioModel.findOneAndUpdate(
            { 
                slug: usuarioSlug, 
                'livros': { $ne: livroSLug }
            }, 
            { $push: { livros: livroSLug } }, 
            { new: true } 
        ).lean().exec();
        return modificado;
    }
}

export default UsuarioRepo;
