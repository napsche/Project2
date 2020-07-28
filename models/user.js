module.exports = function(sequelize, DataTypes) {
    console.log("anything");
    var User = sequelize.define("User", {
        uname: DataTypes.STRING,
        email: DataTypes.STRING,
        pass: DataTypes.STRING
    });
    return User;
};