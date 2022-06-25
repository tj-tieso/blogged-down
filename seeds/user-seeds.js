const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userData = [
  {
    username: "Nick",
    email: "nick@email.com",
    password: "nick",
  },
  {
    username: "Leon",
    email: "leon@email.com",
    password: "nadja",
  },
  {
    username: "Tim",
    email: "tim@email.com",
    password: "timothy",
  },
  {
    username: "Sean",
    email: "sean@email.com",
    password: "sean",
  },
  {
    username: "Phil",
    email: "phil@email.com",
    password: "phil",
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
