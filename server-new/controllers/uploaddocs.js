const Uploaddoc = require("../models/uploaddocs");

class UploaddocController{ 

      static addPathMultiple(req,res,next){
         console.log(req.files)

         const {
            ktpUpload,
            kkUpload,
            npwpUpload,
            slipGajiUpload,
         } = req.files
         
         const {userId} = req.params
         Uploaddoc.create({
            ktpUpload,
            kkUpload,
            npwpUpload,
            slipGajiUpload,
            userId
         })
           .then((data) => {
              res.status(201).json({
                 message: "File Uploaded",
                 result: data
              })
           })
           .catch((err) => {  
              next({
                 name: "Failed to Upload",
                 log: err
              })           
           })    
      }
}
module.exports = UploaddocController