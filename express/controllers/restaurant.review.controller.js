const db = require('../models/index');
const RestaurantReview = db.restaurantReview;
const Restaurant = db.restaurant;
const Order = db.order;

exports.addReview = (req, res) => {
    // Save restaurant review to Database
    RestaurantReview.create({
        order_id: req.body.orderid,
        restaurant_id: req.body.restaurantid,
        rating: req.body.rating,
        comments: req.body.comments,
    }).then(review => {
        // Find all reviews for a restaurant
        RestaurantReview.findAll({
            attributes: ['restaurant_id', [db.Sequelize.fn('avg', db.Sequelize.col('rating')), 'average_rating']],
            group: ['restaurant_id'],
            order: [[db.sequelize.fn('avg', db.Sequelize.col('rating')), 'DESC']],
            raw: true
        }).then(avg => {
            // Update the restaurant's rating
            Restaurant.update({
                rating: avg[0].average_rating
            },
                {
                    where: {
                        id: avg[0].restaurant_id
                    }
                }).then(() => {
                    Order.update({
                        reviewed: 1
                    }, {
                        where: {
                            id: review.order_id
                        }
                    }).catch(err => {
                        return res.status(500).send({ message: err.message });
                });
            });
        }).catch(err => {
            return res.status(500).send({ message: err.message });
        });
    }).then(() => {
        res.send({ message: 'Restaurant review was successfully registered!' });
    });
};

exports.getRandomReview = (req, res) => {
    RestaurantReview.findAll({
            where: {
                restaurant_id: req.params.restaurantid
            },
            order: [[db.sequelize.literal('rand()')]],
            limit: 1,
            raw: true
    }).then(encounter => {
        if (encounter) {
            res.status(200).send(encounter);
        } else {
            res.status(404).send({ message: 'No restaurant reviews.'});
        }
    }).catch(err => {
        res.status(500).send({ message: err.message });
    })
};

exports.getRatingById = (req, res) => {
    Restaurant.findOne({
        attributes: ['rating'],
        where: {
            id: req.body.restaurantid
        }
    }).then(rating => {
        if (rating) {
            res.status(200).send(rating);
        } else {
            return res.status(404).send({ message: 'No rating.'});
        }
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
}