const express=require('express')
const mongoose=require('mongoose')
const db_config=require('./db_config')
const bodyParser = require('body-parser')
const cors=require('cors')

const dlRoutes = require('./routes/dl')
const tasksRoutes = require('./routes/tasks')
const userRoutes = require('./routes/user')

const port= process.env.port || 5001


app = express()
app.use(cors())
// app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json())

app.use('/dl', dlRoutes.router);
app.use('/tasks', tasksRoutes.router)
app.use('/user', userRoutes.router)

db_config.connectDB().then( 
    () => {
        console.log('Connected from index.js!!')
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