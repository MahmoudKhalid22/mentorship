const router = require("express").Router();

import { createUser, getUsers, getUser,updateUser, deleteUser } from "../controller/users";

router.post("/users", createUser);

router.get("/users", getUsers);

router.get("/user/:id", getUser);
// router.get("/user/:id", () => console.log("requested"));

router.patch("/user/:id",updateUser);

router.delete("/user/:id",deleteUser);



module.exports = router;
