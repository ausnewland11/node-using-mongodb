import { addnewProduct, deleteProduct, getProducts, getProductWithID, updateProduct } from '../controllers/controllers.js'; //import controller

const routes = (app) => {
    //creating first route
    app.route('/products')

        //first endpoint
        .post(addnewProduct)

     //multiple products
        .get(getProducts);

    app.route('/products/:ProductID')
        //single product
        .get(getProductWithID)

        .put(updateProduct)

        .delete(deleteProduct);
}

//export routes so we can use elsewhere
export default routes;