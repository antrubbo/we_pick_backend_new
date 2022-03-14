module.exports = (sequelize, DataTypes) => {
    const ListMovie = sequelize.define('List', {
        listId: {
            type: DataTypes.INTEGER,
            references: {
                model: List,
                key: 'id'
            }
        },
        movieId: {
            type: DataTypes.INTEGER,
            references: {
                model: Movie,
                key: 'id'
            }
        }
    });
    return ListMovie
}