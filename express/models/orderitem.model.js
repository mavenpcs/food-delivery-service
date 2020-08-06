module.exports = (sequelize, Sequelize) => {
    const OrderItem = sequelize.define('order_item', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        order_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'orders',
                key: 'id'
            },
            allowNull: false
        },
        food_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'food',
                key: 'id'
            },
            allowNull: false,
        },
        food_price: {
            type: Sequelize.FLOAT,
            references: {
                model: 'food',
                key: 'price'
            },
            allowNull: false
        }
    });

    return OrderItem;
};