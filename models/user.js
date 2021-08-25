
const mongoose = require("mongoose");

const User = mongoose.model(
    "users", {
        name: {
            type: String,
            required: true
        },

        age: {
            type: Number
        },

        job: {
            type: String
        }
    }
);

module.exports = User;