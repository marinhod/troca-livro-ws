import * as mongoose from 'mongoose';

export const AutorSchema = new mongoose.Schema({
    nome: { 
        type: String, 
        required: true, 
        max: 100 
    },
    sobrenome: { 
        type: String, 
        required: true, 
        max: 100 
    }
});

