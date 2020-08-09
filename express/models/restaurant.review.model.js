module.exports = (sequelize, Sequelize) => {
    const RestaurantReview = sequelize.define('restaurant_review', {
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
        restaurant_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'restaurant',
                key: 'id'
            },
            allowNull: false
        },
        rating: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        comments: {
            type: Sequelize.TEXT,
            allowNull: true
        }
    });

    return RestaurantReview;
};