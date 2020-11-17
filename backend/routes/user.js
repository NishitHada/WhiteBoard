const express = require('express')
const mongoose = require('mongoose')
const db_config=require('../db_config')

const router = express.Router();
//http://localhost:5000/user

router.post('/get-sublist', async (req,res) => {
    console.log(req.body);
    
    let user = mongoose.model("user", db_config.user_schema);
    
    // let data = await user.find({user_name: req.body['user_name']});
    // console.log(data);
    // console.log(data['sub']);

    try{
        user.findOne({user_name: req.body['user_name']}).then( (data) => {
            console.log(data);
            res.send(data['sub']).status(200);
        })
    }
    catch(error){
        res.send(error);
    }

    // res.sendStatus(200);
})

exports.router = router;