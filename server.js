const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const connection = require("./config/connection")



// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.post("/api/new", function(req,res) {

  var dbQuery = "INSERT INTO art (caption, pricing, size, sold, url) VALUES (?,?,?,?,?)";

  connection.query(dbQuery, [req.body.caption, req.body.pricing, req.body.size, req.body.sold, req.body.url], function(err, result){
    if (err) {
      res.status('404').end();
      throw err
    };
    console.log(result);
    res.send("sucess")
  })
})

app.put("/api/edit", function(req,res) {
  var dbQuery = "UPDATE art SET caption = ?, pricing = ? size = ?, sold = ?, url = ? WHERE id = ? ";

  connection.query(dbQuery, [req.body.caption, req.body.pricing, req.body.size, req.body.sold, req.body.url], function(err, result){
    if (err) {
      res.status('404').end();
      throw err
    };
    console.log(result);
    res.json(result)
  })
})

app.get("/api/art", function(req,res) {
  var dbQuery = "SELECT * FROM art";

  connection.query(dbQuery, function(err, result){
    if (err) {
      res.status('404').end();
      throw err
    };
    console.log("sucess");
    res.json(result)
  })

})

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
