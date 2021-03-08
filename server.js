const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const fileUpload = require('express-fileupload')
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:')

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.get("/api/pictures/1", (req,res) => {
  res.sendFile(path.join(__dirname, "./pictures/jerrys_icon.jpg"))
})

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
