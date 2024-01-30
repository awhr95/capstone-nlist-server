require("dotenv").config();

const knex = require("knex")(require("../knexfile"));

const getAllUsers = async (_req, res) => {
  try {
    const result = await knex("users").select("*");

    const mappedUsers = await Promise.all(
      result.map(async (user) => {
        const opportunities = await knex("opportunities_users")
          .join(
            "opportunities",
            "opportunities_users.opportunities_id",
            "=",
            "opportunities.id"
          )
          .where("opportunities_users.user_id", user.id)
          .select("opportunities.*");
        return { ...user, opportunities };
      })
    );
    return res.status(200).json(mappedUsers);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = { getAllUsers };
