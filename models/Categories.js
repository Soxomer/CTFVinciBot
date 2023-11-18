const {Model, DataTypes} = require("sequelize");
const sequelize = require("sequelize");

class Categories extends Model {
}

Categories.init({
    category_id: {
        type: DataTypes.INTEGER, primaryKey: true,
    }, name: {
        type: DataTypes.STRING,
    },
}, {
    sequelize,
    timestamps: false,
});