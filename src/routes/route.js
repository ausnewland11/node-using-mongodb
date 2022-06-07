import controller from 'conrollers/conroller.js';

function routes(app) {
    app.route = '/products';
    .post(addNewProduct)
}
//export routes so we can use elsewhere?