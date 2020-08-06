const { authJwt, verifyFood }= require('../middleware');
const controller = require('../controllers/food.controller');

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
        API_URL + 'add-food',
        [
            authJwt.verifyToken,
            authJwt.isVendor,
            verifyFood.checkDuplicateFoodName
        ],
        controller.add
    );

    app.get(
        API_URL + 'foods/:restaurantid',
        [
            authJwt.verifyToken
        ],
        controller.getFoodByRestaurantId
    );

    app.post(
        API_URL + 'edit-food',
        [
            authJwt.verifyToken,
            authJwt.isVendor
        ],
        controller.edit
    )
};
