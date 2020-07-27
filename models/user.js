module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("Users", {
        uname: DataTypes.STRING,
        email: DataTypes.STRING,
        pass: DataTypes.STRING
    });
    return User;
};