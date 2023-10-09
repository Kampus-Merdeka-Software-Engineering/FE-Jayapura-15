const connection = require('./index')
const sequelize = require('sequelize')

const reviews = connection.define("reviews", {
    idreviews: {type: sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    reviewer: {type: sequelize.DataTypes.STRING},
    review: {type: sequelize.DataTypes.TEXT}
}, {
    freezeTableName: true,
    timestamps: false
})

module.exports = reviews