
// const sequelize = new Sequelize('postgres://postgres@localhost:5432/wepick');
// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize("sqlite::memory:");

// the above three lines aren't needed because we're now exporting User as a function and receiving sequelize and DataTypes as parameters, being invoked in index.js

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            defaultValue: "pursuit"
        }
    }, {
        // Other model options go here
    });
    return User
}
