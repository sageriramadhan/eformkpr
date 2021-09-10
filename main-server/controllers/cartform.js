const Cartform = require("../models/cartform");
const Form = require("../models/form");
const { success, fail, validation } = require("../middlewares/validasi");
const multer = require("multer");
const path = require("path");


exports.getAllCart = async (req, res) => {
  try {
    const carts = await Cartform.findAll();
    res.status(200).json(success("OK", { data: carts }, res.statusCode));

    return;
  } catch (error) {
    console.log(error);
    res.status(500).json(fail(error, res.statusCode));
    return;
  }
};

exports.getCartById = async (req, res) => {
    try {
      const carts = await Cartform.findByPk(req.params.id);
      res.status(200).json(success("OK", { data: carts }, res.statusCode));
  
      return;
    } catch (error) {
      console.log(error);
      res.status(500).json(fail(error, res.statusCode));
      return;
    }
  };

  exports.addCart = async (req, res, next) => {
    try {
      const userId = req.body.userId;
      const formId = req.body.formId;
      const status = req.body.status;
      let param = {
        userId: userId,
        formId: formId,
        status: status,
      }
      const cart = await Cartform.create(param);
      res.status(200).json(success("OK", { data: cart }, res.statusCode));
    } catch (error) {
      console.log(error);
      res.status(500).json(fail(error, res.statusCode));
      return;
    }
     next();
  };

  exports.deleteCart = async (req, res) => {
    try {
      const removeCart = await Cartform.destroy({
        where: {
          id: req.params.id,
        },
      });
      res
        .status(200)
        .json(success("Remove Product", { data: "Success" }, res.statusCode));
  
      return;
    } catch (error) {
      console.log(error);
      res.status(501).json(fail(error, res.statusCode));
      return;
    }
  };

  exports.editCart = async (req, res, next) => {
    try {
        const userId = req.body.userId;
        const formId = req.body.formId;
        const status = req.body.status;
  
       if (
         !userId ||
         !formId ||
         !status 
       ) {
         return res.status(501).json(validation("Please input all field"));
       }
  
  
      const editCart = await Cartform.update(
        {
            userId: userId,
            formId: formId,
            status: status,
        },
        {
          where: { id: req.params.id },
        }
      );
      res
        .status(200)
  
        .json(success("Edit Successfully", { data: "success" , result : editCart}, res.statusCode));
    } catch (error) {
      console.log(error);
      res.status(501).json(fail(error, res.statusCode));
      return;
    }
    next()
  };