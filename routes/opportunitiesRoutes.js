const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));

const {
  getAllOpportunities,
  getOneOpportunity,
} = require("../controllers/opportunitiesControllers");

router.route("/").get(getAllOpportunities);

router.route("/:id").get(getOneOpportunity);

module.exports = router;
