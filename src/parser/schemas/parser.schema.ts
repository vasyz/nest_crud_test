import * as mongoose from 'mongoose';

export const ParserSchema = new mongoose.Schema({
    name: String,
    word: String,
    status: Number,
    created_at : { type: Date, required: true, default: Date.now }
});
