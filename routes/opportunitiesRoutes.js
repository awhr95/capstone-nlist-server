const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));

const {
  getAllOpportunities,
  getOneOpportunity,
  userOppSignUp,
} = require("../controllers/opportunitiesControllers");

router.route("/").get(getAllOpportunities);

router.route("/:opportunitiesId").get(getOneOpportunity);

router.route("/signup/:opportunitiesId").post(userOppSignUp);

module.exports = router;
