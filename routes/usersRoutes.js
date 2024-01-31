const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));

const {
  getAllUsers,
  registerUser,
  loginUser,
} = require("../controllers/usersControllers");

router.route("/").get(getAllUsers);

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

module.exports = router;
