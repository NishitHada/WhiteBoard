const express = require('express')
const mongoose = require('mongoose')
const db_config=require('../db_config')

const router = express.Router();
//http://localhost:5000/tasks

router.post('/get-tasks', async (req, res) => {
    console.log(req.body);

    let task = mongoose.model("task", db_config.task_schema, 
    req.body['tasklist_collection_name']);
    // let data= await task.find({});
    // console.log(data)

    try{
        task.find({}).then( (data) => {
            console.log(data);
            res.send(data).status(200);
        })
    }
    catch(error){
        res.send(error);
    }

    // res.sendStatus(200);
})

router.post('/add-task', async (req, res) => {
    console.log(req.body);

    let dl = mongoose.model("dl", db_config.dl_schema);
    data = await dl.find({'Name': req.body['ParentDL']});
    console.log(data);
    let tasklist_collection_name= data[0]['tasklist_collection_name'];
    console.log(tasklist_collection_name);
    
    let task = mongoose.model('task', db_config.task_schema, 
    tasklist_collection_name);
    // { collection: `${tasklist_collection_name}` });
    task.insertMany(req.body, (error, result) => {
        if(error) res.send(error);
        else res.send(result).status(200);
    })

    // res.sendStatus(200);
})


exports.router = router;