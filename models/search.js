require("dotenv").config();
module.exports = function(sequelize, DataTypes) {
    var Search = sequelize.define("Search", {
      pet: DataTypes.STRING,
      location: DataTypes.TEXT,
      gender: DataTypes.STRING,
      age: DataTypes.STRING
    });
    return Search;
  };
  