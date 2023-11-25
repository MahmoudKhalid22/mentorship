const router = require("express").Router();
const auth = require("../middleware/auth");

import {
  createUser,
  loginUser,
  logoutUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} from "../controller/users";

// SIGN UP
router.post("/users", createUser);

// SIGN IN
router.post("/users/login", loginUser);

// SIGN OUT
router.post("/users/logout",auth,logoutUser);


// GET ALL USERS AFTER SIGN IN
router.get("/users", auth, getUsers);

// GET INFO OF USER AFTER SIGN IN
router.get("/user/:id", auth, getUser);

// UPDATE USER AFTER SIGN IN
router.patch("/user/:id", auth, updateUser);

// DELETE USER AFTER SIGN IN
router.delete("/user/:id", auth, deleteUser);

module.exports = router;
