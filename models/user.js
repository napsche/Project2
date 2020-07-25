module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("gitpet_users", {
        uname: DataTypes.STRING,
        email: DataTypes.STRING,
        pass: DataTypes.STRING
    });
    return User;
