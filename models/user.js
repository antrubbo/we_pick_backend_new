// const { sequelize, Sequelize } = require("./models")

// const User = sequelize.define('User', 
module.exports = (sequelize, Sequelize) => {
    return sequelize.define('User', {
        username: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            defaultValue: "pursuit"
        }
    })
}

// module.exports = User

// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('postgres://postgres@localhost:5432/wepick');

// const User = sequelize.define('User', {
//     // Model attributes are defined here
//     firstName: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     lastName: {
//       type: DataTypes.STRING
//       // allowNull defaults to true
//     }
//   }, {
//     // Other model options go here
//   });
  
//   // `sequelize.define` also returns the model
//   console.log(User === sequelize.models.User); // true
