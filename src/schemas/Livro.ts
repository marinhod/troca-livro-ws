import * as mongoose from 'mongoose';

export const LivroSchema = new mongoose.Schema({
    titulo: { 
        type: String, 
        required: true, 
        max: 100 
    },
    autor: { 
        type: mongoose.SchemaTypes.ObjectId, 
        ref: 'Author'
    },
    genero: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Genero'
    },
    ano: {
        type: Date,
        required: true
    },
    slug: {
        type: String,
        max: 100
    }
});
