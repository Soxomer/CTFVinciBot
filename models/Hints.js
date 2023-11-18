module.exports = (sequelize, DataTypes) => {
    sequelize.define('hints', {
        hint_id: {
            type: DataTypes.INTEGER, primaryKey: true,
        }, ctf_id: {
            type: DataTypes.INTEGER,
        }, hint: {
            type: DataTypes.STRING,
        },
    }, {
        timestamps: false,
    });
}
