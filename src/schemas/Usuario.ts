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
        max: 100
    },
    livros: [{
        type: String,
        max: 100
    }],
    slug: {
        type: String,
        max: 100
    }
});
