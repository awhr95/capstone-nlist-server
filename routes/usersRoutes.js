const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));

const {
  getAllUsers,
  registerUser,
  loginUser,
  updateAccountDetails,
  getUserOpps,
} = require("../controllers/usersControllers");

router.route("/").get(getAllUsers);

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/account/:userId").put(updateAccountDetails);

router.route("/mylist/:userId").get(getUserOpps);

module.exports = router;
