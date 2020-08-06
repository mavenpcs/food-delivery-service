const db = require('../models/index');
const Restaurant = db.restaurant;

exports.apply = (req, res) => {
    // Save restaurant to Database
    Restaurant.create({
        user_id: req.body.userid,
        name: req.body.name,
        address: req.body.address,
        deliveryfee: req.body.deliveryfee,
        rating: req.body.rating
    }).then(() => {
        res.send({ message: 'Restaurant was registered successfully!' });
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};

exports.getAllRestaurants = (req, res) => {
    Restaurant.findAll()
    .then(restaurants => {
        if (restaurants) {
            res.status(200).send(restaurants);
        } else {
            return res.status(404).send({ message: 'No restaurants found.'});
        }
    })
    .catch(err => {
        res.status(500).send({ message: err.message })
    });
};

exports.getRestaurantByName = (req, res) => {
    Restaurant.findOne({
        where: {
            name: req.body.name
        }
    }).then(restaurant => {
        if (restaurant) {
            res.status(200).send(restaurant);
        } else {
            return res.status(404).send({ message: 'Restaurant not found.'});
        }
    }).catch(err => {
        res.status(500).send({ message: err.message })
    });
}