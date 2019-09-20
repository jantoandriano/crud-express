require("dotenv").config()
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const users = require("./routes/users/users__routes");
const cors = require("cors");

// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

// list of route
app.use("/users",users)


// listen to port and running ther server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening at ${port}`);
});