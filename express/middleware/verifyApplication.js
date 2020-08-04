const db = require('../models/index');
const Restaurant = db.restaurant;

checkDuplicateRestaurantName = (req, res, next) => {
    Restaurant.findOne({
        where: {
            name: req.body.name
        }
    }).then(restaurant => {
        if (restaurant) {
            res.status(400).send({
                message: 'Failed! Restaurant name is already in use!'
            });
            return;
        }
        next();
    });
};

const verifyApplication = {
    checkDuplicateRestaurantName: checkDuplicateRestaurantName
};

module.exports = verifyApplication;