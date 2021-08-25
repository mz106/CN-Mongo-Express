
require("dotenv").config();
const express = require("express");

const { connection } = require("./db");
const userRouter = require("./routes/user");
const indexRouter = require("./routes/index");

const app = express();
const port = process.env.PORT;


app.use(express.json()); ///remember this!!!!!!!

app.use("/user", userRouter);
app.use("/", indexRouter);

app.listen(port, () => {
    console.log("listening");
});