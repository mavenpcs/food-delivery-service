const { authJwt, verifyApplication }= require('../middleware');
const controller = require('../controllers/vendor.controller');

const API_URL = '/api/vendor/';

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            'Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-Type, Accept'
        );
        next();
    });

    app.post(
        API_URL + 'apply',
        [
            authJwt.verifyToken,
            authJwt.isVendor,
            verifyApplication.checkDuplicateRestaurantName
        ],
        controller.apply
    );

    app.get(
        API_URL + 'restaurants',
        [
            authJwt.verifyToken
        ],
        controller.getAllRestaurants
    )
};
