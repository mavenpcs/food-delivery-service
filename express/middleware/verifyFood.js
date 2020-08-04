const db = require('../models/index');
const Food = db.food;

checkDuplicateFoodName = (req, res, next) => {
    Food.findOne({
        where: {
            restaurant_id: req.body.restaurantid,
            name: req.body.name
        }
    }).then(food => {
        if (food) {
            res.status(400).send({
                message: 'Failed! Food name is already in use!'
            });
            return;
        }
        next();
    });
};

const verifyFood = {
    checkDuplicateFoodName: checkDuplicateFoodName
};

module.exports = verifyFood;