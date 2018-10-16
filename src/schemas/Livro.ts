import * as mongoose from 'mongoose';

export const LivroSchema = new mongoose.Schema({
    titulo: { 
        type: String, 
        required: true, 
        max: 100 
    },
    autor: { 
        type: String, 
        required: true, 
        max: 100
    },
    genero: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Genero'
    },
    ano: {
        type: String,
        required: true,
        max: 4
    },
    capa: {
        type: String,
        required: true,
        max: 1000
    },
    descricao: {
        type: String,
        required: true,
        max: 5000
    },
    slug: {
        type: String,
        max: 100
    },
    usuarios: [{
        type: String
    }]
});
