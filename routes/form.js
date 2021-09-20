const express = require("express");
const router = express.Router();
const { getAllProduct, getProductById, addProduct, editProduct, deleteProduct} = require('../controllers/form.js')
let upload = require('../config/multer.config.js');

router.get("/:id",  getProductById);
router.get("/", getAllProduct);
router.post("/add", upload.single("file"),addProduct);
router.put("/edit/:id", editProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
