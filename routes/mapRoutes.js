const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));

const {
  getMapAllOpportunities,
  getMapAllOpportunitiesDb,
} = require("../controllers/mapsControllers.js");

router.route("/").get(getMapAllOpportunities);
router.route("/db").get(getMapAllOpportunitiesDb);

module.exports = router;
