require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const opportunitiesRoutes = require("./routes/opportunitiesRoutes");
const usersRoutes = require("./routes/usersRoutes");
const mapRoutes = require("./routes/mapRoutes");
const authorize = require("./utils/authorize");

const PORT = process.env.PORT || 8020;

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  // console.log("Logging request from middleware.");
  next();
});

app.use("/opportunities", opportunitiesRoutes);
app.use("/users", usersRoutes);
app.use("/map", mapRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
