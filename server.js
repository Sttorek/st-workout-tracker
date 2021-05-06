const express = require("express");
const mongoose = require("mongoose");
const path = require("path")



// require routes here


const PORT = process.env.PORT || 3000;

//! require model here
// const User = require("./userModel.js");


const app = express();



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true });



app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});