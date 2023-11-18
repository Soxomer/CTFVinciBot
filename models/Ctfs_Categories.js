module.exports = (sequelize, DataTypes) => {
    sequelize.define('ctfs_categories', {
        ctf_id: {
            type: DataTypes.INTEGER, primaryKey: true,
        }, category_id: {
            type: DataTypes.INTEGER, primaryKey: true,
        },
    }, {
        timestamps: false,
    });
}