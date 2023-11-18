module.exports = (sequelize, DataTypes) => {
    sequelize.define('ctfs_hints', {
        ctf_id: {
            type: DataTypes.INTEGER, primaryKey: true,
        }, hint_id: {
            type: DataTypes.INTEGER, primaryKey: true,
        },
    }, {
        timestamps: false,
    });
}