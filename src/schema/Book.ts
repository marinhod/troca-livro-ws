import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true, 
        max: 100 
    },
    year: {
        type: Number,
        required: true
    },
    author: { 
        type: mongoose.SchemaTypes.ObjectId, 
        ref: 'Author'
    }
});
