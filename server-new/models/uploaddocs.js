const { Sequelize, Model } = require("sequelize");
const sequelize = require("../config/db");
    const Uploaddoc = sequelize.define("uploaddoc", {
       id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: Sequelize.STRING,
        allowNull : true
      },
      ktpUpload: {
        type: Sequelize.STRING,
        allowNull : true
      },
      kkUpload:{
        type: Sequelize.STRING,
        allowNull : true
      },
      npwpUpload: {
        type: Sequelize.STRING,
        allowNull : true
      },
      slipGajiUpload:{
        type: Sequelize.STRING,
        allowNull : true
      }
    })


module.exports = Uploaddoc;

