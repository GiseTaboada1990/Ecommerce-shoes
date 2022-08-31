const { Router } = require("express");
const router = Router();
// var logger = require('morgan');
// var session = require('express-session');

//--------------------------IMPORT
const shoesRouter = require("./products")
const categories= require("./categories")
const brands= require("./brands")
const size = require("./size")
const stock = require ("./stock");
const paymants = require ("./payments")
const order = require ("./order")
const inactives = require("./inactives")
const authGoogle = require("./authGoogle")
//--------------------------ROUTES
router.use("/auth", authGoogle)
router.use("/inactives", inactives)
router.use("/payments", paymants)
router.use("/order", order)
router.use("/stock", stock);
router.use("/shoes", shoesRouter);
router.use("/categories", categories);
router.use("/brands", brands);
router.use("/size", size);



module.exports = router;