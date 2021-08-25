
const express = require("express");

const { addUser, listUsers } = require("../utils/user");

const router = express.Router();


// router.get("/name", (req, res) => {
//     res.status(200).send("This user has been sent.");
// });

// router.post("/name", (req, res) => {
//     res.status(201).send("This user has been posted");
// });

router.get("/", async (req, res) => {
    res.status(200).json({"msg": await listUsers()});
});

router.get("/:name", (req, res) => {
    res.status(200).json({"msg": `Attempting to get user ${req.params.name}`});
});

router.post("/:name", async (req, res) => {
    await addUser(req.body.name, req.body.age, req.body.job);
    res.status(201).json({"msg": `Created user ${req.body.name}`});
});

module.exports = router;