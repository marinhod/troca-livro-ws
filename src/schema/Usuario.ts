import * as mongoose from 'mongoose';

export const UsuarioSchema = new mongoose.Schema({
    nome: { 
        type: String, 
        required: true, 
        max: 100 
    },
    sobrenome: { 
        type: String, 
        required: true, 
        max: 100 
    },
    email: {
        type: String,
        required: true,
        max: 100
    },
    foto: {
        type: String,
        required: true,
        max: 100
    },
    livro: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Livro'
    }
});
