const {Model, DataTypes} = require("sequelize");
const sequelize = require('../dbInstance');

class Ctfs extends Model {
}

Ctfs.init({
    ctf_id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrementIdentity: true,
    }, name: {
        type: DataTypes.STRING,
    }, description: {
        type: DataTypes.STRING, allowNull: true,
    }, link: {
        type: DataTypes.STRING, allowNull: true,
    }, flag: {
        type: DataTypes.STRING,
    }, category: {
        type: DataTypes.STRING, allowNull: true,
    }, difficulty: {
        type: DataTypes.STRING, allowNull: true,
    }, points: {
        type: DataTypes.INTEGER, allowNull: true,
    },
}, {
    sequelize, timestamps: false, tableName: 'ctfs',
});

// create a new ctf
// Ctfs.create({
//     name: 'test', description: 'test', link: 'test', flag: 'test', category: 'test', difficulty: 'test', points: 100,
// })
//     .then(r => console.log("Dummy ctf created"))
//     .catch(e => console.log(e));

module.exports = Ctfs;