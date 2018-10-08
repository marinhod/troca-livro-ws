import * as mongoose from 'mongoose';

export const LoanSchema = new mongoose.Schema({
    author: { 
        type: mongoose.SchemaTypes.ObjectId, 
        ref: 'Author'
    },
    book: { 
        type: mongoose.SchemaTypes.ObjectId, 
        ref: 'Book'
    },
    date: {
        type: Date,
        required: true
    }
});
