const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));
const bcrypt = require("bcrypt");


const { getAllUsers } = require("../controllers/usersControllers");

router.route("/").get(getAllUsers);

router.post("/register", async (req, res) => {

const {
        user_name,
        email,
        bio,
        password,
        first_name,
        last_name} = req.body;

if (!user_name || !first_name || !last_name || !email || !password || !bio) {
    return res.status(400).send("Please enter the required fields.");
}

const hashedPassword = bcrypt.hashSync(password, 6);

  const newUser = ({
    id,
    user_name,
    email,
    bio,
    current_number_of_opportunities: 0,
    total_opportunities: 0,
    password: hashedPassword,
    first_name,
    last_name,
  } = req.body);


try{
    const users = await knex("users").insert(newUser);
    const response = await knex("users").where({ id: users[0] }).first();
    return res.status(201).json(response);
}catch(error){
    return res.status(400).json({ message: "Failed registration" });
}
});

module.exports = router;
