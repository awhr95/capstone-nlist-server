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
};

module.exports = { getAllUsers, registerUser, loginUser };
