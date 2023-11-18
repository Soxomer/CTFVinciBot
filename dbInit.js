const {Sequelize, DataTypes} = require('sequelize');
const Users = require('./models/Users');
const Ctfs = require('./models/Ctfs');
const Solved_Ctfs = require('./models/Solved_Ctfs');

const sequelize = new Sequelize('test', 'root', 'root', {
    host: 'localhost', dialect: 'sqlite', logging: true, storage: 'identifier.sqlite',
});


Users.hasMany(Ctfs, {foreignKey: 'user_id'});
Ctfs.belongsToMany(Users, {through: 'solved_ctfs', foreignKey: 'ctf_id'});

Solved_Ctfs.belongsTo(Users, {foreignKey: 'user_id'});
Users.hasMany(Solved_Ctfs, {foreignKey: 'user_id'});

Solved_Ctfs.belongsTo(Ctfs, {foreignKey: 'ctf_id'});
Ctfs.hasMany(Solved_Ctfs, {foreignKey: 'ctf_id'});

sequelize.drop().then(() => {
    console.log('Database & tables dropped!');
});
// sequelize.sync({force: true}).then(() => {
//     console.log('Database & tables created!');
// });

module.exports = sequelize;