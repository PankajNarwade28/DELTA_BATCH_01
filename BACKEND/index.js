const figlet = require("figlet");
figlet("Prathmesh Lohar", (err, data) => {
  if (err) {
    console.log("error");
    console.dir(err);
    return;
  }
  console.log(data);
});
