const async = require('async');
const moment = require('moment');
const db = require('../models/index');
const Order = db.order;
const OrderItem = db.orderitem;
const Restaurant = db.restaurant;

exports.checkout = (req, res) => {
    // Save order to Database
    Order.create({
        user_id: req.body.userid,
        restaurant_id: req.body.restaurantid
    }).then(order => {
        const foods = req.body.foods;

        foods.forEach(food => {
            OrderItem.create({
                order_id: order.id,
                food_id: food.id,
                food_price: food.price
            }).then(orderitem => {
                console.log({
                    message: 'Order item' 
                    + orderitem.food_id 
                    + ' was registered successfully!'
                });
            }).catch(err => {
                return res.status(500).send({ message: err.message });
            });
        });
        res.send({ message: 'Order was registered successfully!' });
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};

exports.getOrders = (req, res) => {
    var orderHistory = [];
    // Get all orders by user id
    Order.findAll({
        where: {
            user_id: req.params.userid
        }
    }).then(orders => {
        async.eachSeries(orders, (order, callback) => {
            // Sum up the food price by order id
            OrderItem.sum('food_price', {
                where: {
                    order_id: order.id
                }
            }).then(subtotal => {
                // Find restaurant by restaurant_id in the order
                Restaurant.findOne({
                    attributes: ['name'],
                    where: {
                        id: order.restaurant_id
                    }
                }).then(restaurantName => {
                    // Construct an orderItem object
                    let orderItem = {
                        "id": order.id,
                        "restaurant_id": order.restaurant_id,
                        "restaurant_name": restaurantName.name,
                        "subtotal": parseFloat(subtotal.toFixed(2)),
                        "date": moment(order.createdAt).format('MMMM Do YYYY, h:mm:ss a'),
                        "reviewed": (order.reviewed == 1) ? true : false
                    };
                    orderHistory.push(orderItem);
                    // Invoking callback iterates the orders array
                    callback();
                }).catch(err => {
                    return res.status(500).send({ message: err.message });
                })
            });
        }, () => {
            // Finally, serve the order history
            res.send(orderHistory);
        });
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
}