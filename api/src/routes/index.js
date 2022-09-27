const { Router } = require("express");
const router = Router();

//--------------------------IMPORT
const shoesRouter = require("./products")
const categories= require("./categories")
const brands= require("./brands")
const size = require("./size")
const paymants = require ("./payments")
const order = require ("./order")
const inactives = require("./inactives")
const authGoogle = require("./authGoogle")
const user = require("./users")
const solds = require("./solds")
const reviews = require("./review")

//--------------------------ROUTES
router.use("/reviews", reviews)
router.use("/solds", solds)
router.use("/user", user)
router.use("/auth", authGoogle)
router.use("/inactives", inactives)
router.use("/payments", paymants)
router.use("/order", order)
router.use("/shoes", shoesRouter);
router.use("/categories", categories);
router.use("/brands", brands);
router.use("/size", size);



module.exports = router;