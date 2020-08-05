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

exports.edit = (req, res) => {
    Food.findOne({
        where: {
            id: req.body.id,
            restaurant_id: req.body.restaurantid
        }
    }).then(food => {
        if (!food) {
            res.status(404).send({ message: 'Food not found.'});
            return;
        }
        console.log(req.body);
        // Update category
        if (req.body.category) {
            Food.update({
                category: req.body.category
               },
               {
                   where: {
                       id: req.body.id,
                       restaurant_id: req.body.restaurantid
                   }
               }).catch(err => {
                res.status(500).send({ message: err.message });
                return;
            });
        }
        // Update name
        if (req.body.name) {
            Food.update({
                name: req.body.name
               },
               {
                   where: {
                       id: req.body.id,
                       restaurant_id: req.body.restaurantid
                   }
               }).catch(err => {
                res.status(500).send({ message: err.message });
                return;
            });
        }
        // Update price
        if (req.body.price) {
            Food.update({
                price: req.body.price
               },
               {
                   where: {
                       id: req.body.id,
                       restaurant_id: req.body.restaurantid
                   }
               }).catch(err => {
                res.status(500).send({ message: err.message });
                return;
            });
        }
        // Update description
        if (req.body.description) {
            Food.update({
                description: req.body.description
               },
               {
                   where: {
                       id: req.body.id,
                       restaurant_id: req.body.restaurantid
                   }
               }).catch(err => {
                res.status(500).send({ message: err.message });
                return;
            });
        }
    }).then(() => {
        res.send({ message: 'Food was modified successfully!' });
    });
};