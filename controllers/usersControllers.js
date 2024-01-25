require("dotenv").config();

const knex = require("knex")(require("../knexfile"));

const getAllUsers = async (_req, res) => {
  try {
    const result = await knex("users").select("*");
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = { getAllUsers };
