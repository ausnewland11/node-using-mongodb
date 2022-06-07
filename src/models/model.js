import mongoose from 'mongoose';

var Schema = mongoose.Schema;

var Schema = new Schema(
    {
        name: String,
        description: String, //needs to be required
        category: String,
        price: String,
        created_date: { type: Data, default: Data.now }
    });