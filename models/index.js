const { Sequelize } = require("sequelize")
const sequelize = new Sequelize('postgres://postgres@localhost:5432/wepick')
// const sequelize = new Sequelize("sqlite::memory:");

// Observe that, in the examples above, Sequelize refers to the library itself while sequelize refers to an instance of Sequelize, which represents a connection to one database. This is the recommended convention and it will be followed throughout the documentation.

module.exports = { 
    Sequelize, 
    sequelize,
    users: require("./user.js")(sequelize, Sequelize),
    movies: require('./movie.js')(sequelize, Sequelize)
}