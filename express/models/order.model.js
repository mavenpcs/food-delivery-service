module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define('orders', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        user_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'app_user',
                key: 'id'
            },
            allowNull: false
        },
        restaurant_name: {
            type: Sequelize.STRING,
            references: {
                model: 'restaurant',
                key: 'name'
            },
            allowNull: false,
        },
        date: {
            type: Sequelize.DATE,
            allowNull: false,
        }
    });

    return Order;
};