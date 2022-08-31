const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('size', {
        number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        stock: {
            type: DataTypes.INTEGER,
            
        },
        solds: {
            type: DataTypes.INTEGER,
        },
        isActive:{
            type: DataTypes.BOOLEAN,
        }

    }, { timestamps: false })
}