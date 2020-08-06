module.exports = (sequelize, Sequelize) => {
    const AppUser = sequelize.define('app_user', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        firstname: {
            type: Sequelize.STRING,
            allowNull: false
        },
        lastname: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    return AppUser;
};