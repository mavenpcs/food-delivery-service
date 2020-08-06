const db = require('../models/index');
const Food = db.food;

exports.add = (req, res) => {
    // Save food to Database
    Food.create({
        restaurant_id: req.body.restaurantid,
        category: req.body.category,
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    }).then(() => {
        res.send({ message: 'Food was registered successfully!' });
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};

exports.getFoodByRestaurantId = (req, res) => {
    Food.findAll({
        where: {
           restaurant_id: req.body.restaurantid 
        }
    }).then(foods => {
        if (foods) {
            res.status(200).send(foods);
        } else {
            res.status(404).send({ message: 'No foods found for this restaurant.'});
            return;
        }
    }).catch(err => {
        res.status(500).send({ message: err.message });
    })
};