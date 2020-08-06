module.exports = (sequelize, Sequelize) => {
    const Food = sequelize.define('food', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        restaurant_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'restaurant',
                key: 'id'
            },
            allowNull: false
        },
        category: {
            type: Sequelize.STRING,
            allowNull: true,
            defaultValue: 'other'
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        price: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        description: {
            type: Sequelize.TEXT
        }
    });

    return Food;
};