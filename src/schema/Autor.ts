import * as mongoose from 'mongoose';

export const AuthorSchema = new mongoose.Schema({
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
