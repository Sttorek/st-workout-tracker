const express = require("express");
const mongoose = require("mongoose");
const path = require("path")

// const routes = require('./controllers');


const PORT = process.env.PORT || 3000;


const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


//! require routes uncomment later
// app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true });



app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});