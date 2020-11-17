// import express from 'express';
// import mongoose from 'mongoose'
const express = require('express')
const mongoose = require('mongoose')
const db_config=require('../db_config')

const router = express.Router();
//http://localhost:5000/dl

router.post('/create-dl', (req, res) => {
    console.log(req.body);
    let dl = mongoose.model("dl", db_config.dl_schema);
    dl.insertMany(req.body, (error, result) => {
        if(error) res.send(error);
        else res.send(result).status(200);
    })
})

router.post('/get-dl-props', async (req, res) => {
    console.log(req.body);

    let dl = mongoose.model("dl", db_config.dl_schema);
    // let dl_data = await dl.findOne({Name: req.body['Name']});
    // console.log(dl_data);

    try{
        dl.findOne({Name: req.body['Name']}).then( (data) => {
            console.log(data);
            res.send(data).status(200);
        })
    }
    catch(error){
        res.send(error);
    }

    // res.sendStatus(200);
})



exports.router = router;
