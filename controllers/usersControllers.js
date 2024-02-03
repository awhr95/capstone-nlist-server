require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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

const getOneUser = async (req, res) => {
  try {
    const result = await knex("users").where({
      id: req.params.userId,
    });

    const mappedUser = await Promise.all(
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
    return res.status(200).json(mappedUser[0]);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const getUserSavedOpps = async (req, res) => {
  try {
    const result = await knex("users").where({
      id: req.params.userId,
    });

    const mappedUser = await Promise.all(
      result.map(async (user) => {
        const savedOpportunities = await knex("saved_opportunities_users")
          .join(
            "opportunities",
            "saved_opportunities_users.opportunities_id",
            "=",
            "opportunities.id"
          )
          .where("saved_opportunities_users.user_id", user.id)
          .select("opportunities.*");
        return { ...user, savedOpportunities };
      })
    );
    return res.status(200).json(mappedUser[0]);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const registerUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send("Please enter the required fields.");
  }

  const hashedPassword = bcrypt.hashSync(password, 6);

  const newUser = {
    user_name: "",
    email,
    bio: "",
    current_number_of_opportunities: 0,
    total_opportunities: 0,
    password: hashedPassword,
    first_name: "",
    last_name: "",
  };

  try {
    const users = await knex("users").insert(newUser);
    const response = await knex("users").where({ id: users[0] }).first();
    return res.status(201).json(response);
  } catch (error) {
    return res.status(400).json({ message: "Failed registration" });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);

  if (!email || !password) {
    return res.status(400).send("Please enter the required fields");
  }

  try {
    const user = await knex("users").where({ email: email }).first();

    const passwordCorrect = bcrypt.compareSync(password, user.password);

    if (!passwordCorrect) {
      return res.status(400).send("Invalid password");
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "24h",
      }
    );

    return res.json({ token, id: user.id });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Failed login" });
  }
};

const updateAccountDetails = async (req, res) => {
  const updateFields = {
    user_name: req.body.user_name,
    email: req.body.email,
    bio: req.body.bio,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
  };
  try {
    if (
      !updateFields.email ||
      !updateFields.user_name ||
      !updateFields.bio ||
      !updateFields.first_name ||
      !updateFields.last_name
    ) {
      return res.status(400).send("Please fill all fields");
    }
    const checkUser = await knex("users").where({ id: req.params.userId });
    console.log(checkUser[0].id);

    if (checkUser.length === 0) {
      return res.status(404).send("User not found");
    }

    await knex("users").where({ id: req.params.userId }).update(updateFields);

    const updatedUser = await knex("users")
      .where({ id: checkUser[0].id })
      .first();
    return res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: error.message });
  }
};

const getUserOpps = async (req, res) => {
  const userId = req.params.userId;
  try {
    const userOpportunities = await knex("users")
      .select("users.id as user_id", "opportunities.*")
      .join(
        "opportunities_users",
        "users.id",
        "=",
        "opportunities_users.user_id"
      )
      .join(
        "opportunities",
        "opportunities.id",
        "=",
        "opportunities_users.opportunities_id"
      )
      .where("users.id", userId);
    return res.status(200).json(userOpportunities);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  getUserSavedOpps,
  registerUser,
  loginUser,
  updateAccountDetails,
  getUserOpps,
};
