const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();

//DB config
const db = require("./config/default").mongoURI;

// connect to mongo DB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Mongoose DB connected"))
  .catch((err) => console.log("err: ", err));

// Routes 
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));