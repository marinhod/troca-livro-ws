import * as mongoose from 'mongoose';


export const GeneroSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        max: 100
    }



});    