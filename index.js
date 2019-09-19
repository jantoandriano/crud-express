const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const users = require("./routes/users");

// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/users",users)


// listen to port and running ther server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening at ${port}`);
});