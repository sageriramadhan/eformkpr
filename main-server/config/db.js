const Sequelize = require('sequelize')
const setup = require("./setup.js");
const sequelize = new Sequelize(setup.DB, setup.USER, setup.PASSWORD, {
  dialect: setup.dialect,
  host: setup.HOST,
  port : setup.port,
  dialectOptions: {
    useUTC: false,
    dateStrings: true,
    typeCast: function (field, next) {

      if (field.type === "DATETIME") {
        return field.string();
      }
      return next();
    },
  },
  timezone: "+07:00",
});

module.exports = sequelize