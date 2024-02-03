const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));

const {
  getAllOpportunities,
  getAllSavedOpportunities,
  getOneOpportunity,
  userOppSignUp,
  createOpp,
  editOpp,
  deleteOpp,
  userOppSave,
} = require("../controllers/opportunitiesControllers");

router.route("/").get(getAllOpportunities);

router.route("/saved").get(getAllSavedOpportunities);

router.route("/:opportunitiesId").get(getOneOpportunity);

router.route("/signup/:opportunitiesId").post(userOppSignUp);

router.route("/save/:opportunitiesId").post(userOppSave);

router.route("/create-opportunity").post(createOpp);

router.route("/edit-opportunity/:opportunitiesId").put(editOpp);

router.route("/delete-opportunity/:opportunitiesId").delete(deleteOpp);

module.exports = router;
