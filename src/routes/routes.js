import { addnewProduct, getProducts, getProductWithID } from '../controllers/controllers.js'; //import controller

const routes = (app) => {
    //creating first route
    app.route('/products')

        //first endpoint
        .post(addnewProduct);

        //second endpoint
        .get(getProducts);

app.route(/products/:ProductID)

    .get(getProductWithID);
}

//export routes so we can use elsewhere
export default routes;