const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));

const {
  getAllOpportunities,
} = require("../controllers/opportunitiesControllers");

router.route("/").get(getAllOpportunities);

module.exports = router;
