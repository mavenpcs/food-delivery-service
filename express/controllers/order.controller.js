const db = require('../models/index');
const Order = db.order;

exports.order = (req, res) => {
    // Save order to Database
    Order.create({
        user_id: req.body.userid,
        restaurant_name: req.body.restaurantname,
        date: req.body.date,
    }).then(() => {
        res.send({ message: 'Order was registered successfully!' });
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};

exports.getorders = (req, res) => {
    // Get all orders by user id
    Order.findAll({
        where: {
            user_id: req.body.userid
        }
    }).then(orders => {
        res.status(200).send(orders);
    }).catch(err => {
        res.status(404).send({ message: err.message });
    });
}