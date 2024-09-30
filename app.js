const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cron = require("node-cron");

app.use(bodyParser.json());
app.use(express.json());

//database connection

const mongourl =
  "mongodb+srv://majorpro704:Majorpro123@cluster0.kynsh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(mongourl)
  .then(() => {
    console.log("Database Connnected");
  })
  .catch((err) => {
    console.error(err);
  });
require("./Schemas/UserDetails");

const authRoutes = require("./Routes/Authroutes");

app.get("/", (req, res) => {
  res.send({ status: "started" });
});

//User Authentication Routes

app.post("/login-user", authRoutes);
app.post("/register", authRoutes);
app.post("/forgotpass", authRoutes);
app.post("/resetpass", authRoutes);
app.post("/userdata", authRoutes);
app.post("/change-password", authRoutes);

app.listen(5001, () => {
  console.log("Node js server started.");
});
