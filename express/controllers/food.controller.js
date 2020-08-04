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