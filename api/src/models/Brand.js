const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('brand', {
        id:{
            type: DataTypes.STRING,
            primaryKey: true,
            allownull: false,
            unique: true
        },
        name:{
            type: DataTypes.STRING,
            allownull: false
        },
        isActive:{
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allownull: false
        }
    },{timestamps: false})
}