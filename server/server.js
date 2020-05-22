require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/habitDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established")
});

const usersRouter = require("./routes/users");
const logsRouter = require("./routes/logs");

app.use("/api/users", usersRouter);
app.use("/api/logs", logsRouter);


app.listen(port, () => {
    console.log("Server is running on port 5000");
});