import { addnewProduct } from '../controllers/controllers.js'; //import controller

const routes = (app) => {
    //creating first route
    app.route('/products')

        //first endpoint
        .post(addnewProduct);
}

//export routes so we can use elsewhere
export default routes;