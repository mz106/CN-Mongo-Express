
const mongoose = require("mongoose");
const { connection } = require("../db");

const Person = mongoose.model(
    "people", {
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

module.exports = Person;