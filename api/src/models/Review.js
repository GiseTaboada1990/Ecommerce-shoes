const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("review",
    {
      value: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      }
    },
    {
      timestamps: false,
    }
  );
};
