const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));
const bcrypt = require("bcrypt");

const { getAllUsers } = require("../controllers/usersControllers");

router.route("/").get(getAllUsers);

router.post("/register", async (req, res) => {
  const { user_name, email, bio, password, first_name, last_name } = req.body;

  if (!user_name || !first_name || !last_name || !email || !password || !bio) {
    return res.status(400).send("Please enter the required fields.");
  }

  const hashedPassword = bcrypt.hashSync(password, 6);

  const newUser = {
    user_name,
    email,
    bio,
    current_number_of_opportunities: 0,
    total_opportunities: 0,
    password: hashedPassword,
    first_name,
    last_name,
  };

  try {
    const users = await knex("users").insert(newUser);
    const response = await knex("users").where({ id: users[0] }).first();
    return res.status(201).json(response);
  } catch (error) {
    return res.status(400).json({ message: "Failed registration" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

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

    return res.json({ token });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Failed login" });
  }
});

module.exports = router;
