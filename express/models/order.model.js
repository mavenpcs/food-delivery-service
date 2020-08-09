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
        restaurant_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'restaurant',
                key: 'id'
            },
            allowNull: false,
        },
        reviewed: {
            type: Sequelize.BOOLEAN,
            defaultValue: 0
        }
    });

    return Order;
};