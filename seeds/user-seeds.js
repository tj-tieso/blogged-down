const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userData = [
  {
    username: "Nandor",
    email: "nandor@email.com",
    password: "nandor",
  },
  {
    username: "Nadja",
    email: "nadja@email.com",
    password: "nadja",
  },
  {
    username: "Lazlo",
    email: "lazlo@email.com",
    password: "lazlo",
  },
  {
    username: "Colin",
    email: "colin@email.com",
    password: "colin",
  },
  {
    username: "Gizmo",
    email: "gizmo@email.com",
    password: "gizmo",
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
