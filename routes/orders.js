const express = require("express")
const route = express.Router()
const orderController = require("../controller/orders")

route.get("/", orderController.createOrder)

module.exports = route;