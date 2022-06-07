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

//export function to get multiple Products from DB
export const getProducts = (req, res) => {
    Product.find({}, (err, Product) => {
        if (err) {
            res.send(err);
        }
        res.json(Product);
    });

}

//export function to get single product from DB
export const getProductWithID = (req, res) => {
    Product.findById(req.params.ProductID, (err, Product) => {
        if (err) {
            res.send(err);
        }
        res.json(Product);
    });
}

export const updateProduct = (req, res) => {
    Product.findOneandUpdate(({ _id: req.params.ProductID }, req.body), { new: true, useFindAndModify: false }, (err, Product) => { 
         if (err) {
                res.send(err);
            }
                res.json(Product);
            });
}

export const deleteProduct = (req, res) => {
    deleteOne({ _id: req.params.ProductID }, (err, Produc) => {
        if (err) {
            res.send(err);
        }
        res.json('successfully deleted product');
    });
}


