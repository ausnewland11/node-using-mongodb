import mongoose from 'mongoose';

//schema constructor
const Schema = mongoose.Schema;

//product schema constructor def
export const ProductSchema = new Schema({
        name: {
            type: String,
            required: 'Enter name'
        },
        description: {
            type: String,
            required: 'Enter description'
        },
        category: {
            type: String
        },
        price: {
            type: Number
        },
        created_date: {
            type: Date,
            default: Date.now
        }
    });