
require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const { connection } = require("./db");

const app = express();
const port = process.env.PORT

app.listen(port, () => {
    console.log("listening");
});