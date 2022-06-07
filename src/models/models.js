import mongoose from 'mongoose';

//schema constructor
const Schema = mongoose.Schema;

//product schema constructor def
export const prodSchema = new Schema({
    name: {
        type: String,
        required: 'Enter name'
    },
    description: {
        type: String,
        required: 'Enter description'
    },
    category: String,
    price: Number,
    created_date: {
        type: Date,
        default: Date.now
    }
    });