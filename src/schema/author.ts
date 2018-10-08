import * as mongoose from 'mongoose';

export const AuthorSchema = new mongoose.Schema({
    first_name: { 
        type: String, 
        required: true, 
        max: 100 
    },
    last_name: { 
        type: String, 
        required: true, 
        max: 100 
    }
});
