
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).send("this has been got");
});

module.exports = router;