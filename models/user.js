module.exports = function(sequelize, DataTypes) {
    var NewUser = sequelize.define("gitpet_users", {
        uname: DataTypes.STRING,
        email: DataTypes.STRING,
        pass: DataTypes.STRING
    });
    return NewUser;
};