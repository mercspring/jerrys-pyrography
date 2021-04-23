const express = require("express");
const bcrypt = require("bcrypt");
const path = require("path");
const jwt = require("jsonwebtoken");
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
const checkAuthStatus = request => {
  if (!request.headers.authorization) {
    return false;
  }
  const token = request.headers.authorization.split(" ")[1]
  const loggedInUser = jwt.verify(token, process.env.JWT_SECRET || 'secretString', (err, data) => {
    if (err) {
      return false;
    }
    else {
      return true;
    }
  });
  return loggedInUser;
}

app.put("/api/contact", function (req, res) {
  var dbQuery = "UPDATE users SET phone = ?, email = ? WHERE id = 1";
  if (checkAuthStatus(req)) {

    connection.query(dbQuery, [req.body.phone, req.body.email], function (err, result) {
      if (err) {
        res.status('404').end();
        throw err
      };
      console.log(result);
      res.json(result)
    })
  } else {
    res.status(401).end("no allowed")
  }
})
app.put("/api/about", function (req, res) {
  var dbQuery = "UPDATE users SET about = ?WHERE id = 1";

  connection.query(dbQuery, [req.body.about], function (err, result) {
    if (err) {
      res.status('404').end();
      throw err
    };
    console.log(result);
    res.json(result)
  })
})
app.get("/api/about", function (req, res) {

  var dbQuery = "SELECT about FROM users WHERE  id = 1";

  connection.query(dbQuery, function (err, result) {
    if (err) {
      res.status('404').end();
      throw (err);
    };
    res.status(200).send(result);
  })

})
app.get("/api/contact", function (req, res) {

  var dbQuery = "SELECT phone, email FROM users WHERE  id = 1";

  connection.query(dbQuery, function (err, result) {
    if (err) {
      res.status('404').end();
      throw (err);
    };
    res.status(200).send(result);
  })

})
app.post("/api/new", function (req, res) {

  var dbQuery = "INSERT INTO art (caption, pricing, size, sold, url) VALUES (?,?,?,?,?)";

  connection.query(dbQuery, [req.body.caption, req.body.pricing, req.body.size, req.body.sold, req.body.url], function (err, result) {
    if (err) {
      res.status('404').end();
      throw err
    };
    console.log(result);
    res.send("sucess")
  })
})

app.put("/api/edit", function (req, res) {
  var dbQuery = "UPDATE art SET caption = ?, pricing = ?, size = ?, sold = ?, url = ? WHERE id = ? ";

  connection.query(dbQuery, [req.body.caption, req.body.pricing, req.body.size, req.body.sold, req.body.url, req.body.id], function (err, result) {
    if (err) {
      res.status('404').end();
      throw err
    };
    console.log(result);
    res.json(result)
  })
})

app.get("/api/art", function (req, res) {
  var dbQuery = "SELECT * FROM art";

  connection.query(dbQuery, function (err, result) {
    if (err) {
      res.status('404').end();
      throw err
    };
    console.log("sucess");
    res.json(result)
  })

})

app.delete("/api/art/:id", function (req, res) {
  var dbQuery = "DELETE FROM art WHERE ID = ?";

  connection.query(dbQuery, [req.params.id], function (err, result) {
    if (err) {
      res.status('404').end();
      throw err
    };
    console.log("sucess");
    res.json(result)
  })

})

app.post("/api/password", function (req, res) {
  const dbQuery = "UPDATE users SET password = ? WHERE id = 1"
  let password;
  console.log(req.body.password)
  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(req.body.password, salt, function (err, hash) {
      if (err) return next(err);
      console.log(hash)

      // override the cleartext password with the hashed one
      password = hash;
      connection.query(dbQuery, [password], function (err, result) {
        if (err) {
          res.status('404').end();
          throw err
        }
        res.status(200).send(result)
      })
    });
  })
})

app.post("/signin", function (req, res) {
  const dbQuery = "SELECT password FROM users WHERE username = ?";
  connection.query(dbQuery, [req.body.username], function (err, result) {
    if (err) {
      res.status('404').end();
      throw err
    };
    if (result.length === 1) {
      console.log(bcrypt.compareSync(req.body.password, result[0].password))
      if (bcrypt.compareSync(req.body.password, result[0].password)) {
        const userTokenInfo = { username: result[0].username }
        const token = jwt.sign(userTokenInfo, process.env.JWT_SECRET || 'secretString', { expiresIn: "2h" });
        res.status('200').json({ token: token, password: req.body.password, pass: result[0].password });
      } else {
        res.status('401').send("username or password incorrect");
      }
    } else {
      res.status('401').send("username or password incorrect");
    }
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
