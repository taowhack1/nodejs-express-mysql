const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// parse requests of content-type - application/json
app.use(bodyParser.json());
app.use(cors());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to playerZa application." });
});

require("./app/routes/user.routes.js")(app);

const db = require('./app/models');
db.sequelize.sync()
  .then(() => {
    console.log("database connected.")
  })
  .catch(error => {
    console.log("database connect fail", error)
  })


// set port, listen for requests
const PORT = process.env.PORT || 3009;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

