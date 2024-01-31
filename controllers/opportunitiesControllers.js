require("dotenv").config();

const knex = require("knex")(require("../knexfile"));

const getAllOpportunities = async (_req, res) => {
  try {
    const result = await knex("opportunities").select("*");

    const mappedOpportunities = await Promise.all(
      result.map(async (opportunity) => {
        const users = await knex("opportunities_users")
          .join("users", "opportunities_users.user_id", "=", "users.id")
          .where("opportunities_users.opportunities_id", opportunity.id)
          .select("users.*");
        const cleanUsers = users.map((user) => {
          delete user.password;

          return user;
        });
        return { ...opportunity, cleanUsers };
      })
    );

    return res.status(200).json(mappedOpportunities);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const getOneOpportunity = async (req, res) => {
  try {
    const result = await knex("opportunities").where({
      id: req.params.opportunitiesId,
    });

    const mappedOpportunity = await Promise.all(
      result.map(async (opportunity) => {
        const users = await knex("opportunities_users")
          .join("users", "opportunities_users.user_id", "=", "users.id")
          .where("opportunities_users.opportunities_id", opportunity.id)
          .select("users.*");
        const cleanUsers = users.map((user) => {
          delete user.password;

          return user;
        });

        return { ...opportunity, cleanUsers };
      })
    );

    if (!mappedOpportunity) {
      return res.status(404).send("Opportunity not found");
    }

    return res.status(200).json(mappedOpportunity[0]);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const userOppSignUp = async (req, res) => {
  //get user id from session storage
  try {
    const { opportunitiesId: opportunities_id } = req.params;
    const { user_id } = req.body;
    // const user_id = sessionStorage.getItem("user_id");

    console.log(opportunities_id);

    const newRecord = {
      user_id,
      opportunities_id,
    };
    const opportunitiesUsers = await knex("opportunities_users").insert(
      newRecord
    );
    console.log(opportunitiesUsers);
    const response = await knex("opportunities_users")
      .where({ id: opportunitiesUsers[0] })
      .first();
    return res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getAllOpportunities, getOneOpportunity, userOppSignUp };
