const express = require('express')
const multer  = require('multer')
const Uploaddoc = require('../models/uploaddocs')


//error handler dan respon untuk file mutiple
const resMultiple= ((req, res, next) =>{
    const files = req.files;
    let obj = {}
    if (!files) {
        res.status(400).json({'message': 'File can not be empty'});
        return
    } else
    for (key in files) {
        files[key].forEach((item, index) => { 
            obj[item.fieldname] = item.path 
        })
    }
    req.files = obj
    next()
})

module.exports = {
    resMultiple
}
