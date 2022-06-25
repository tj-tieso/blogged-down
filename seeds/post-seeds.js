const { Post } = require("../models");

const postData = [
  {
    title: "Session 0",
    post_content:
      "The party is composed of the following: Nick (Drogo, the Human Druid). Leon (Kipperly, the Dragonborn Bard). Tim (Randolf, the Barbarian). Sean (Morris, the Dwarf Fighter). Trevor (Chirp, the Dwarf Druid). Phil (Wren, the Human Wizard). The party, except for Wren, all met in a prior war for their country.",
    user_id: 1,
  },
  {
    title: "Session 1 - Strahd's Note",
    post_content:
      "Morris awakes from a dreadful night sleep only to find his family has been kidnapped! He gathers up his fellows to help in the hunt. While searching, he recieves a missive from one Count Strahd Von Zarovich, imploring him to travel to Barovia if he wants to see his family again. ",
    user_id: 2,
  },
  {
    title: "Session 2 - It's Always Sunny in Barovia",
    post_content:
      "The Gang gets Passage to the dreary land of Barovia. While there, they stumble into a haunted house",
    user_id: 3,
  },
  {
    title: "Session 3 - The House that Strahd Built",
    post_content: "Ghouls, and Ghosts, and Vampires! Oh My!",
    user_id: 4,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
