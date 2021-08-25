
const express = require("express");

const { addUser, listUsers, deleteUser, updateUserAge } = require("../utils/user");

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

router.delete("/:name", async (req, res) => {
    await deleteUser(req.body.name); 
    res.status(202).json({"msg": `${req.body.name} has been deleted.`});
});

router.put("/:name/:par", async (req, res) => {
    
        await updateUserAge(req.body.name, req.body.age);
        res.status(202).json({"msg": `${req.body.name}s age has been updated to ${req.body.age}`});

    
});

module.exports = router;