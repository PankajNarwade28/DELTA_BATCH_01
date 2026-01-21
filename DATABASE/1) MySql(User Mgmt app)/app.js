// Following command is used to access the npm package called faker
const { faker } = require("@faker-js/faker");
// get the client
// require mysql2 npm package as mysql in app.js
const mysql = require("mysql2");
const PORT = 8080;
// require express package into express function
let express = require("express");
// assigned runned express() function to app variable to simplify
let app = express();
// path package required
let path = require("path");
// method-override package is required to override Post methods into patch and put
let methodoverride = require("method-override");
//use methodoverride function for all the apis called
app.use(methodoverride("_method"));
//to acces data in backend from post request
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// create the connection to database ,
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "temp",
  password: "Pankaj@51040",
});

app.get("/back/home", (req, res) => {
  res.redirect("/");
});
app.get("/", (req, res) => {
  try {
    let q = "select count(*) from user";
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["count(*)"];
      res.render("home.ejs", { count });
    });
  } catch (err) {
    console.log(err);
    res.send(result);
  }
});
// show user

app.get("/user", (req, res) => {
  try {
    let q = "select * from user";
    connection.query(q, (err, users) => {
      if (err) throw err;

      res.render("showusers.ejs", { users });
    });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

// edit user

app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = ` SELECT * FROM USER WHERE ID='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("edit.ejs", { user });
    });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

// update data
app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { Password: Formpass, Username: Newusername } = req.body;
  let q = ` SELECT * FROM USER WHERE ID='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      if (Formpass != user.Password) {
        res.render("error.ejs");
      } else {
        let q2 = `UPDATE user SET Username='${Newusername}' WHERE id ='${id}' `;
        connection.query(q2, (err, result) => {
          try {
            if (err) throw err;
            console.log("User Updated Successfully!");
            res.redirect("/user");
          } catch (err) {
            res.send(err);
          }
        });
      }
      console.log(user.Password);
    });
  } catch (err) {
    res.render("error.ejs");
  }
});
// delete from database

app.post("/user/:id/delete", (req, res) => {
  let { id } = req.params;
  let q = ` SELECT * FROM USER WHERE ID='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("delete.ejs", { user });
    });
  } catch (err) {
    res.render("error.ejs");
  }
});

// delete data
app.delete("/user/:id", (req, res) => {
  let { id } = req.params;
  let { Password: Formpass, Username: Newusername } = req.body;
  let q = ` SELECT * FROM USER WHERE ID='${id}'`;

  try {
    connection.query(q, (err, result) => {
      // let masterOtp = 252525;
      if (err) throw err;
      let user = result[0];
      if (Formpass != user.Password) {
        res.render("error.ejs");
      } else {
        let q2 = `DELETE FROM user WHERE id ='${id}'`;
        connection.query(q2, (err, result) => {
          try {
            if (err) throw err;
            res.redirect("/user");
          } catch (err) {
            res.send(err);
          }
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
});
// Add new user

app.get("/user/add", (req, res) => {
  res.render("add.ejs");
});

// add user to database

app.post("/user", (req, res) => {
  let { email, username, password } = req.body;
  let id = faker.string.uuid();
  console.log(id);
  console.log(email, username, password);
  q = ` INSERT INTO USER VALUES ("${id}","${username}","${email}","${password}")`;
  console.log(q);
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;

      res.redirect("/user");
    });
  } catch (err) {
    res.send("WRONG ENTRY");
  }
});

// Create port
app.listen(PORT, (req, res) => {
  console.log(`App is Starting at http://localhost:${PORT}/`);
});
