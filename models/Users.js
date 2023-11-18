const {Model, DataTypes} = require("sequelize");
const sequelize = require('../dbInstance');

class User extends Model {
}

User.init({
    user_id: {
        type: DataTypes.INTEGER, primaryKey: true,
        autoIncrementIdentity: true,   // only for testing must be Discord ID
    }, username: {
        type: DataTypes.STRING,
    },
}, {
    sequelize,
    timestamps: false,
    tableName: 'users',
});

// create a new user
// User.create({
//     username: 'test',
// })
//     .then(r => console.log("Dummy user created"))
//     .catch(e => console.log(e));
module.exports = User;

