const { Post } = require("../models");

const postData = [
  {
    title: "Where's Jhon??",
    post_content: "Please help, I've lost my best friend and horse, Jhon",
    user_id: 1,
  },
  {
    title: "Username Change",
    post_content: "You all know my name is not Gizmo",
    user_id: 1,
  },
  {
    title: "New Song",
    post_content: "Take a listen, chum",
    user_id: 1,
  },
  {
    title: "IDIOTS",
    post_content: "I can't believe how stupid you all are!!",
    user_id: 1,
  },
  {
    title: "A Brief history of Car Door Mirrors.",
    post_content: "Strap in folks, you're in for a wild ride.",
    user_id: 1,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
