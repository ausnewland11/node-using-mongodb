import mongoose, { Schema } from 'mongoose';
import { ProductSchema } from '../models/models.js'; //import Schemea constructor

//passing the Product Schema
const Product = mongoose.model('Product', ProductSchema);

//export function for new added products
export const addnewProduct = (req, res) => {
    let newProudct = new Product(req.body);

    //error check if req.body doesn't match schema
    newProduct.save((err, Product) => {
    if (err) {
        res.send(err);
    }
    //success message check
    res.json(Product);  

    });
}

//export function to get Products from DB
export const getProducts = (req, res) => {
    Product.find((err, Product) => {
        if (err) {
            res.send(err);
        }
        res.json(Product);
    });
  
}

export const getProductWithID = (req, res) => {
    Product.findById((req.params.ProductID, err, Product) => {
    if (err) {
        res.send(err);
    }
    res.json(Product);
});
}


