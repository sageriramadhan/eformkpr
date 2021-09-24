const express = require("express");
const router = express.Router();
const { getAllProduct, getProductById, addProduct, editProduct, deleteProduct} = require('../controllers/form.js')
let upload = require('../config/multer.config.js');

router.get("/:id",  getProductById);
router.get("/", getAllProduct);
router.post("/add/:userId",addProduct);
router.put("/edit/:userId", editProduct);
router.delete("/delete/:userId", deleteProduct);

module.exports = router;
