const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('order', {
        amount:{
            type: DataTypes.INTEGER,
            allownull: false
        },
        address:{
            type: DataTypes.STRING,
            allownull: false
        },
        email:{
            type: DataTypes.STRING,
            allownull: false
        },
        status:{
            type: DataTypes.STRING,
            allownull: false
        },
        date:{
            type: DataTypes.DATE,
            allownull: false
        },
        isActive:{
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allownull: false
        }
    },{timestamps: false})
}