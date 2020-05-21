require("dotenv").config();
const express = require("express");

const app = express();

mongoose.connect("mongodb://localhost:27017/userDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.set("useCreateIndex", true);

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
})


const User = new mongoose.model("User", userSchema)

app.use(express.json());

app.listen(4000, function() {
    console.log("Server is running on port 4000")
});