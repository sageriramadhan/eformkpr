const Sequelize = require("sequelize");
const sequelize = require("../config/db");

const Form = require("./form")
const User = require("./user")
    const Cartform = sequelize.define("cartform", {
       id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull : true,
        references: {
            model: User,
            key: "id",
        },
      },
      formId: {
        type: Sequelize.INTEGER,
        allowNull : true,
        references: {
            model: Form,
            key: "id",
        },
      },
      status:{
        type: Sequelize.STRING,
        allowNull : true
      },
    });

module.exports = Cartform
