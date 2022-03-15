module.exports = (sequelize, DataTypes) => {
    const List = sequelize.define('List', {
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: sequelize.User,
                key: 'id'
            }
        }
    });
    // List.belongsTo(sequelize.User)
    return List
}