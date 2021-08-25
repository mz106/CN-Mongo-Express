
//function to add/search the database

const User  = require("../models/user");

const addUser = async (name, age, job) => {
    const newUser = new User({name, age, job});
    await newUser.save();
    console.log("addUser has been reached")
    console.log(newUser);
};

const listUsers = async () => {
    const allUsers = await User.find({});
    console.log(allUsers);
};

const deleteUser = async (name) => {
    await User.deleteOne({name: name});
    console.log(`${name} has been removed`);
};

const updateUserAge = async (name, newAge) => {
    const updateUser = await User.updateOne({name: name}, {$set:{age: newAge}});
};

module.exports = {
    addUser, 
    listUsers,
    deleteUser,
    updateUserAge
};