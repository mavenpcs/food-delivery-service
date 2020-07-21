const config = require('../config/db.config');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
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

db.appuser = require('../models/appuser.model')(sequelize, Sequelize);
db.role = require('../models/role.model')(sequelize, Sequelize);

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