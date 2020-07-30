var bcrypt = require("bcryptjs");

module.exports = function (sequelize, DataTypes) {
    console.log("anything");
    var User = sequelize.define("User", {
        uname: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            uniqe: true,
            validate: {
                isEmail: true
            }
        },
        pass: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });


    User.prototype.validPassword = function (pass) {
        return bcrypt.compareSync(pass, this.pass);
    };

    User.addHook("beforeCreate", function (User) {
        User.pass = bcrypt.hashSync(User.pass, bcrypt.genSaltSync(10), null);
    });
    return User;
};