const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize('test', 'root', 'root', {
    host: 'localhost', dialect: 'sqlite', logging: true, storage: 'identifier.sqlite',
});

module.exports = sequelize;
