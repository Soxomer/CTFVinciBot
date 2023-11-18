const {Model, DataTypes} = require("sequelize");
const sequelize = require('../dbInstance');

class Solved_Ctfs extends Model {
}

Solved_Ctfs.init({
    user_id: {
        type: DataTypes.STRING, primaryKey: true,
    }, ctf_id: {
        type: DataTypes.INTEGER, primaryKey: true,
    },
}, {
    sequelize,
    timestamps: false,
    tableName: 'solved_ctfs'
});

module.exports = Solved_Ctfs;