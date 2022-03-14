module.exports = (sequelize, DataTypes) => {
    const List = sequelize.define('List', {
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: 'id'
            }
        }
    });
    return List
}