module.exports = (sequelize, Sequelize) => {
    const Restaurant = sequelize.define('restaurant', {
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
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        address: {
            type: Sequelize.STRING,
            allowNull: false
        },
        deliveryfee: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        rating: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        }
    });

    return Restaurant;
};