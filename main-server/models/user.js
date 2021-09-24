const { Sequelize, Model } = require("sequelize");
const sequelize = require("../config/db");
const Form = require("./form")
    const User = sequelize.define("user", {
       id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull : true
      },
      email: {
        type: Sequelize.STRING,
        allowNull : true
      },
      password:{
        type: Sequelize.STRING,
        allowNull : true
      },
      isNasabah:{
        type: Sequelize.BOOLEAN,
        allowNull : true
      },
      noRekening:{
        type: Sequelize.BIGINT,
        allowNull : true
      }
    })


module.exports = User;

