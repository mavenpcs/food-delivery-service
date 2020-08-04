const db = require('../models/index');
const Order = db.order;

exports.add = (req, res) => {
    // Save order to Database
    Order.create({
        user_id: req.body.userid,
        restaurant_name: req.body.restaurantname,
        date: req.body.date,
        food_name: req.body.foodname,
        food_price: req.body.foodprice,
        description: req.body.description
    }).then(() => {
        res.send({ message: 'Order was registered successfully!' });
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};