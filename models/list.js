module.exports = (sequelize, DataTypes) => {
    const List = sequelize.define('List', {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        // Other model options go here
    });
    return List
}