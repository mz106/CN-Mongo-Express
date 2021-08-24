
require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const { connection } = require("./db");

const app = express();
const port = process.env.PORT

app.get("/", (req, res) => {
    res.status(200).send("yes, i am here!");
});

app.get("/user", (req, res) => {
    res.status(200).json({"msg": `You are viewing the user ${req.body.name}.`});
});

app.post("/user", (req, res) => {
    res.status(201).json({"name": "created user"});
});

app.listen(port, () => {
    console.log("listening");
});