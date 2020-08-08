module.exports = {
    HOST: 'mysql',
    USER: 'root',
    PASSWORD: 'Root12345',
    DB: 'food_delivery',
    dialect: 'mysql',
    define: {
        timestamps: true,
        freezeTableName: true
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};