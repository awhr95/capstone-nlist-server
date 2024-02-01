const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));

const {
  getAllOpportunities,
  getOneOpportunity,
  userOppSignUp,
  createOpp,
  editOpp,
} = require("../controllers/opportunitiesControllers");

router.route("/").get(getAllOpportunities);

router.route("/:opportunitiesId").get(getOneOpportunity);

router.route("/signup/:opportunitiesId").post(userOppSignUp);

router.route("/create-opportunity").post(createOpp);

router.route("/edit-opp/:opportunitiesId").put(editOpp);

module.exports = router;
