const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt"); // authentication
const sequelize = require("../config/connection");

// create user model
class User extends Model {
  //   checkPassword(loginPw) {
  //     return bcrypt.compareSync(loginPw, this.password);
  //   }
}

User.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4],
      },
    },
  },
  // use hooks to hash password
  {
    sequelize, // connects to db
    timestamps: false, //prevent auto create createdAt/updatedAt timestamp fields
    freezeTableName: true, // prevent pluralize name of database table
    underscored: true, // use underscores, not camel-casing
    modelName: "user", // keeps model name lowercase in db
  }
);

module.exports = User;
