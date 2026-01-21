const express = require("express");
const app = express();
const ExpressError = require("./ExpressError.js");

// app.use((req, res) => {
//   console.log("This is first Middleware!");
//   res.send("Middleware finished!");
// });

// app.use((req, res, next) => {
//   console.log("This is first Middleware!");
//   next();
//   console.log("This will execute");
// });

// app.use((req, res, next) => {
//   console.log("This is second Middleware!");
//   return next();
//   console.log("this will not executed as we have return next();");
// });

// app.use((req, res, next) => {
//   req.time = new Date(Date.now());
//   console.log(req.method, req.host, res.time);
//   next();
// });

app.use("/random", (req, res, next) => {
  console.log("This middleware is only for random");
  next();
});

app.use("/api", (req, res, next) => {
  let { token } = req.query;
  console.log(token);
  if (token === "giveaccess") {
    console.log(token);
    next();
  }
  throw new ExpressError(404, "ACCESS DENIED");
});

// const checkToken = (req, res, next) => {
//   let { token } = req.query;
//   if (token === "giveaccess") {
//     next();
//   }
//   res.send("ACCESS DENIED");
// };

// app.get("/api", checkToken, (req, res) => {
//   res.send("Data");
// });
app.get("/", (req, res) => {
  res.send("This is Root  Directory!");
  console.log("Root");
});

app.use("/admin", (err, req, res, next) => {
  let { status = 394, msg = "errror" } = err;
  res.status(status).send(msg);
});

app.get("/admin", (req, res) => {
  throw new ExpressError(403, "You cannot access This admin ");
});

app.use((req, res) => {
  res.send("Page Not Found");
});
app.listen(8080, () => {
  console.log("App is listening at 8080");
});
