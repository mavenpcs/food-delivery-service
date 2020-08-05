const { authJwt }= require('../middleware');
const controller = require('../controllers/order.controller');

const API_URL = '/api/customer/';

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            'Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-Type, Accept'
        );
        next();
    });

    app.post(
        API_URL + 'order',
        [
            authJwt.verifyToken,
            authJwt.isCustomer,
        ],
        controller.order
    );

    app.get(
        API_URL + 'getorders',
        [
            authJwt.verifyToken,
            authJwt.isCustomer
        ],
        controller.getorders
    );
};
