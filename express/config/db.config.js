module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: 'Root12345',
    DB: 'food_delivery',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};