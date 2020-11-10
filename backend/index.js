const express=require('express')
const mongoose=require('mongoose')
const db_config=require('./db_config')
const bodyParser = require('body-parser')
const cors=require('cors')
const port=8001

app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended:true }));

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

        app.post('/login', (req,res) => {
            let tmp = JSON.stringify(req.body);
            let tmp1 = JSON.parse(tmp);
            console.log(tmp1);
            console.log(tmp1.user_name);
            console.log(tmp1.password);

            let Usr = mongoose.model("Usr", db_config.credentials_schema);
            
            try{
                Usr.find({user_name: tmp1.user_name}).then( (data) => {
                    if(data.length == 0)
                    {
                        console.log('User doesnt exist');
                        res.send('User doesnt exist').status(200);
                    }
                    else if(data[0]['password'] === tmp1.password)
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