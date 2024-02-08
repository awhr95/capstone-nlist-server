require("dotenv").config();
const jwt = require("jsonwebtoken");
const fs = require("fs");

const knex = require("knex")(require("../knexfile"));

const getMapAllOpportunities = async (_req, res) => {
  try {
    const locationsFile = fs.readFileSync("./maps/geoSeedData.geojson");
    const locations = JSON.parse(locationsFile);

    res.json(locations);
  } catch (error) {
    console.error(error);
  }
};

const getMapAllOpportunitiesDb = async (req, res) => {
  try {
    const locations = await knex("opportunities").select("*");

    let oppGeo = { type: "FeatureCollection" };
    oppGeo.features = [];

    locations.forEach((opp) => {
      const feature = {
        type: "Feature",
        geometry: { type: "Point", coordinates: [opp.longitude, opp.latitude] },
        properties: {
          title: opp.title,
          description: opp.description,
        },
      };
      oppGeo.features.push(feature);
    });
    console.log(oppGeo);
    res.status(200).json(oppGeo);
  } catch (error) {
    console.error({ error: error.message });
  }
};

module.exports = {
  getMapAllOpportunities,
  getMapAllOpportunitiesDb,
};
