const express = require("express");
const router = express.Router();
const { getAllCart, getCartById, addCart, editCart, deleteCart} = require('../controllers/cartform')
const { authentication, authorization, authorizationCust } = require("../middlewares/usercheck");


router.get("/:id",  getCartById);
router.get("/", getAllCart);
router.post("/add", addCart);
router.put("/edit/:id", editCart);
router.delete("/:id", deleteCart);

module.exports = router;