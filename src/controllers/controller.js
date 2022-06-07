import mongoose from 'mongoose';
import Schema from 'models/model.js';

var Product = mongoose.model(Product, Schema);

module.exports = addnewProduct (req, res) {
    var newProudct = new Product(req.body);
    //save new product to database passing err and Product 
    if (req.body != Schema) {
        //catch errors?
    }

    newProduct.save(err, Product); //save new product
    //add res.join(Product) in save to check success
    
}