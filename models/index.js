// File is responsible for importing Models
//and exporting an object with it as a property

const User = require("./User");
const Post = require("./Post");

// define relationships
User.hasMany(Post, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Post };
