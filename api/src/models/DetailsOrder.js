const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('detailsOrder', {
        product_id:{
            type: DataTypes.STRING,
            allownull: false
        },
        product_name:{
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
        sizes_sold:{
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            allownull: false
        },

    },{timestamps: false})
}