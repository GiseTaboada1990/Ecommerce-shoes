const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('detailsOrder', {
        productName:{
            type: DataTypes.STRING,
            allownull: false
        },
        quantity:{
            type: DataTypes.INTEGER,
            allownull: false
        },
        unit_price:{
            type: DataTypes.FLOAT,
            allownull: false
        },
        sizeNumber:{
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            allownull: false
        },

    },{timestamps: false})
}