
const { DataTypes } = require('sequelize')


module.exports = (sequelize) => {

   sequelize.define('role', {
    role: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },{timestamps: false})}