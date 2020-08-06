const { authJwt }= require('../middleware');
const controller = require('../controllers/restaurant.review.controller');

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
        API_URL + 'add-review',
        [
            authJwt.verifyToken,
            authJwt.isCustomer,
        ],
        controller.addReview
    );

    app.get(
        API_URL + 'get-review',
        [
            authJwt.verifyToken,
            authJwt.isCustomer
        ],
        controller.getRandomReview
    );

    app.get(
        API_URL + 'get-rating',
        [
            authJwt.verifyToken,
            authJwt.isCustomer
        ],
        controller.getRatingById
    )
};
