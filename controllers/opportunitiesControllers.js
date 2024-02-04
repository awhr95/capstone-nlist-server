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

const getAllSavedOpportunities = async (req, res) => {
  try {
    const result = await knex("opportunities").select("*");

    const mappedOpportunities = await Promise.all(
      result.map(async (opportunity) => {
        const users = await knex("saved_opportunities_users")
          .join("users", "saved_opportunities_users.user_id", "=", "users.id")
          .where("saved_opportunities_users.opportunities_id", opportunity.id)
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

const userOppSave = async (req, res) => {
  try {
    const { opportunitiesId: opportunities_id } = req.params;
    const { user_id } = req.body;
    // const user_id = sessionStorage.getItem("user_id");

    const newRecord = {
      user_id,
      opportunities_id,
    };
    const opportunitiesUsers = await knex("saved_opportunities_users").insert(
      newRecord
    );
    console.log(opportunitiesUsers);
    const response = await knex("saved_opportunities_users")
      .where({ id: opportunitiesUsers[0] })
      .first();
    return res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createOpp = async (req, res) => {
  const newOpp = ({
    user_id,
    title,
    description,
    type,
    date_of_opportunity,
    start_time_of_opportunity,
    end_time_of_opportunity,
    number_of_volunteers_needed,
  } = req.body);
  try {
    if (
      !newOpp.title ||
      !newOpp.description ||
      !newOpp.type ||
      !newOpp.date_of_opportunity ||
      !newOpp.start_time_of_opportunity ||
      !newOpp.end_time_of_opportunity ||
      !newOpp.number_of_volunteers_needed
    ) {
      return res.status(400).send("Incomplete form. Please fill all fields");
    }

    const opportunities = await knex("opportunities").insert(newOpp);
    const response = await knex("opportunities")
      .select("*")
      .where({ id: opportunities[0] })
      .first();
    return res.status(201).json(response);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const editOpp = async (req, res) => {
  const updateFields = {
    title: req.body.title,
    description: req.body.description,
    type: req.body.type,
    date_of_opportunity: req.body.date_of_opportunity,
    start_time_of_opportunity: req.body.start_time_of_opportunity,
    end_time_of_opportunity: req.body.end_time_of_opportunity,
    number_of_volunteers_needed: req.body.number_of_volunteers_needed,
  };
  try {
    if (
      !updateFields.title ||
      !updateFields.description ||
      !updateFields.type ||
      !updateFields.date_of_opportunity ||
      !updateFields.start_time_of_opportunity ||
      !updateFields.end_time_of_opportunity ||
      !updateFields.number_of_volunteers_needed
    ) {
      return res.status(400).send("No fields to update");
    }

    const checkExistingOpp = await knex("opportunities").where({
      id: req.params.opportunitiesId,
    });

    if (checkExistingOpp.length === 0) {
      return res.status(404).send("Opportunity not found");
    }

    await knex("opportunities")
      .where({ id: req.params.opportunitiesId })
      .update(updateFields);
    const updatedOpp = await knex("opportunities")
      .where({ id: checkExistingOpp[0].id })
      .first();
    return res.status(200).json(updatedOpp);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const deleteOpp = async (req, res) => {
  try {
    if (!req.params.opportunitiesId) {
      return res.status(404).send("No opportunity selected");
    }
    const opportunityRecord = await knex("opportunities")
      .where({ id: req.params.opportunitiesId })
      .del();
    if (opportunityRecord === 0) {
      return res.status(404).send("Opportunity could not be found");
    }
    return res.status(204).send("Item deleted");
  } catch (error) {}
};

module.exports = {
  getAllOpportunities,
  getAllSavedOpportunities,
  getOneOpportunity,
  userOppSignUp,
  userOppSave,
  createOpp,
  editOpp,
  deleteOpp,
};
