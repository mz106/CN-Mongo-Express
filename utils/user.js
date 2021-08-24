
//function to add/search the database

const { User } = require("../models/user");

const addUser = async (name, age, job) => {
    const newUser = new User({name, age, job});
    await newUser.save();
    console.log(newUser);
};

const listUsers = async () => {
    const allUsers = await User.find({});
    console.log(allUsers);
};

module.exports = {
    addUser, 
    listUsers
};