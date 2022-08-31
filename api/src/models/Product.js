const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('product', {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allownull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allownull: false
        },
        model: {
            type: DataTypes.STRING,
            allownull: false
        },
        image: {
            type: DataTypes.STRING,
            allownull: false,
        }, 
        sold: {
            type: DataTypes.INTEGER,
            allownull: false,
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allownull: false
        }
    }, { timestamps: false })
}