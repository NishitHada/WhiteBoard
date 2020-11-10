const express=require('express')
const mongoose=require('mongoose')
const db_config=require('./db_config')
const bodyParser = require('body-parser')
const cors=require('cors')
const port=8001

app = express()
app.use(cors())
// app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json())

// try{
//     db_config.connectDB().then(
//         console.log('Connected from index.js!!')
//     )
// }
// catch(err){
//     console.log('Problem connecting to Database:', err)
//     return;
// }

db_config.connectDB().then( 
    () => {
        console.log('Connected from index.js!!')

        app.get('/', (req, res) => {
            res.send('Hello').status(200);
        })

        app.post('/get-tasks', async (req, res) => {
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

        app.post('/get-dl-props', async (req, res) => {
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

        app.post('/get-sublist', async (req,res) => {
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

        app.post('/create-dl', (req, res) => {
            console.log(req.body);
            let dl = mongoose.model("dl", db_config.dl_schema);
            dl.insertMany(req.body, (error, result) => {
                if(error) res.send(error);
                else res.send(result).status(200);
            })
        })

        app.post('/add-task', async (req, res) => {
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

        app.post('/login', (req,res) => {
            // let tmp = JSON.stringify(req.body);
            // let tmp1 = JSON.parse(tmp);
            // console.log(tmp1);
            // console.log(tmp1.user_name);
            // console.log(tmp1.password);

            let Usr = mongoose.model("Usr", db_config.credentials_schema);
            
            try{
                Usr.find({user_name: req.body.user_name}).then( (data) => {
                    if(data.length == 0)
                    {
                        console.log('User doesnt exist');
                        res.send('User doesnt exist').status(200);
                    }
                    else if(data[0]['password'] === req.body.password)
                    {
                        console.log(data);
                        res.send('Successful Sign-in').status(200);
                    }
                    else
                    {
                        console.log('Invalid username or Password');
                        res.send('Invalid username or Password').status(200);
                    }
                })
            }
            catch(error){
                console.log('Error in executing query:', error);
                res.send(error);
            }
            // res.sendStatus(200);
        })
    },
    (error) => {
        console.log('Problem connecting to Database:', error)
        // process.kill(process.pid, 'SIGTERM');
        // return process.exit(1);
    },
);


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);    
})