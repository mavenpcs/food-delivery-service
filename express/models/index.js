const config = require('../config/db.config');

const Sequelize = require('sequelize');
var sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        define: config.define,
        dialect: config.dialect,
        opratorsAliases: false,

        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.appuser = require('./appuser.model')(sequelize, Sequelize);
db.role = require('./role.model')(sequelize, Sequelize);
db.restaurant = require('./restaurant.model')(sequelize, Sequelize);
db.food = require('./food.model')(sequelize, Sequelize);
db.restaurantReview = require('./restaurant.review.model')(sequelize, Sequelize);
db.order = require('./order.model')(sequelize, Sequelize);
db.orderitem = require('./orderitem.model')(sequelize, Sequelize);


// User-Role associations
db.role.belongsToMany(db.appuser, {
    through: 'user_roles',
    foreignKey: 'roleId',
    otherKey: 'userId'
});

db.appuser.belongsToMany(db.role, {
    through: 'user_roles',
    foreignKey: 'userId',
    otherKey: 'roleId'
});

db.ROLES = ['customer', 'vendor'];

module.exports = db;