
require("dotenv").config();
const express = require("express");

const { connection } = require("./db");
const { addUser, listUsers } = require("./utils/user");

const app = express();
const port = process.env.PORT;

app.use(express.json()); ///remember this!!!!!!!

app.get("/", (req, res) => {
    res.status(200).send("This has been sent.");
});

app.post("/", (req, res) => {
    res.status(201).send("This has been posted");
});

app.get("/user/:name", (req, res) => {
    res.status(200).json({"msg": `Attempting to get user ${req.params.name}`});
});

app.post("/user", async (req, res) => {
    await addUser(req.body.name, req.body.age, req.body.job);
    res.status(201).json({"msg": `Created user ${req.body.name}`});
});

app.listen(port, () => {
    console.log("listening");
});