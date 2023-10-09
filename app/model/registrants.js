const connection = require('./index')
const sequelize = require('sequelize')

const registrants = connection.define("registrants", {
    idregistrants: {type: sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: sequelize.DataTypes.STRING},
    email: {type: sequelize.DataTypes.STRING},
    number: {type: sequelize.DataTypes.STRING}
}, {
    freezeTableName: true,
    timestamps: false
})

module.exports = registrants