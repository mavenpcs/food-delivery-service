const { authJwt } = require('../middleware');
const controller = require('../controllers/user.controller');

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            'Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-Type, Accept'
        );
        next();
    });

    app.get('/all', controller.allAccess);

    app.get(
        '/orderhistory',
        [authJwt.verifyToken, authJwt.isCustomer],
        controller.orderHistory
    );

    app.get(
        '/vendor',
        [authJwt.verifyToken, authJwt.isVendor],
        controller.vendorPage
    );
};