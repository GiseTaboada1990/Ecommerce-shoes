const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('User', {

        name: {
            type: DataTypes.STRING,
            allownull: false,
        },
        surname: {
            type: DataTypes.STRING,
            allownull: false
        },
        username: {
            type: DataTypes.STRING,
            allownull: true
        },
        email: {
            type: DataTypes.STRING,
            allownull: false,
            unique: true,
            validate: {
                isEmail: {
                    msg: "El email tiene que ser un correo valido"
                }
            }
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: {
                    args: [6, 255],
                    msg: "La contraseña tiene que tener minimamente 6 caracteres"
                }
            }
        },
        image: {
            type: DataTypes.STRING,
            allownull: true,
        },
        phone_number: {
            type: DataTypes.STRING,
            allownull: true
        },
        date_of_Birth: {
            type: DataTypes.STRING,
            allownull: true
        },
        address: {
            type: DataTypes.STRING,
            allownull: true
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allownull: false
        },
        isBanned: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allownull: false
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allownull: false
        }
    }, { timestamps: false })
}