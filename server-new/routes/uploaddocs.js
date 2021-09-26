const express = require("express");
const router = require('express').Router()
const uploaddocs = require ('../config/multer.config')
const UploaddocController = require('../controllers/uploaddocs')
const multer  = require('multer')
//-----------------------------------MULTIPLE
const diskupload = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/dokumen');
    },
    filename: function(req, file, cb) {
        const originalName = file.originalname;
        const nameArr = originalName.split('.');
        var extension = '';
        if (nameArr.length > 1) {
            extension = nameArr[nameArr.length - 1];
        }
        // // ktp-21092021.jpg
        cb(null, file.fieldname +'-'+ Date.now() +'.'+extension);
    }});
const upload = multer({storage: diskupload});

router.post('/dokumen/:userId',upload.fields
([
    { name: 'ktpUpload', maxCount: 1 },
    { name: 'kkUpload', maxCount: 1 },
    { name: 'npwpUpload', maxCount: 1 },
    { name: 'slipGajiUpload', maxCount: 1 }


]), uploaddocs.resMultiple, UploaddocController.addPathMultiple
)

module.exports = router;