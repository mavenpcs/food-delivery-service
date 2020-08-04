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