const db = require('../connection')
const { Model, DataTypes } = require('sequelize')

class User extends Model {

}

User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    slackid: {
        type: DataTypes.STRING,
        allowNull: true
    },
    fname: {
        type: DataTypes.STRING,
        allowNull: true
    },
    lname: {
        type: DataTypes.STRING,
        allowNull: true
    }
}
)

module.exports = User