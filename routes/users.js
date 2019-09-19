const express = require('express');
const route = express.Router();
const userController = require("../controller/users");

route.get('/', userController.getUsers )
route.post("/", userController.createUser)
route.get("/:id", userController.getSingleUser)
route.delete("/:id", userController.deleteUser)
route.put("/:id", userController.updateUser)

module.exports = route;