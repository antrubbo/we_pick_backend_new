module.exports = (sequelize, Sequelize) => {
    const Movie =  sequelize.define('Movie', {
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        tmdbId: {
            type: Sequelize.STRING,
            allowNull: false
        },
        releaseDate: {
            type: Sequelize.STRING
        },
        runtime: {
            type: Sequelize.INTEGER
        }, 
        posterPath: {
            type: Sequelize.STRING
        },
    }, {
        // Other model options go here
    })
    return Movie
}