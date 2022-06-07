import mongoose, { Schema } from 'mongoose';
import { prodSchema } from '../models/models.js'; //import Schemea constructor

//passing the Product Schema
const Product = mongoose.model('Product', prodSchema);

//export function for new added products
export const addnewProduct = (req, res) => {
    let newProudct = new Product(req.body);

    //error check if req.body doesn't match schema
    newProduct.save((err,Product) => {
    if (err) {
        res.send(err);
        }
    //success message check
    res.json(Product);  

    });
}

