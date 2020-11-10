require('dotenv').config();
const mongoose = require('mongoose');

const username = process.env.username;
const password = process.env.password;
const remoteURL = process.env.remoteURL;
const dbName = process.env.dbName;

const mongoConnectionString = `mongodb://${username}:${password}@${remoteURL}/${dbName}?ssl=true&replicaSet=atlas-9efm0j-shard-0&authSource=admin&retryWrites=true&w=majority`;

const connectDB = async () => {
    try{
      await mongoose.connect(mongoConnectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log('Connected');
    }
    catch(error)
    {
      console.log('Error Connecting to DB-', error);
    }
};

const user_schema = new mongoose.Schema({
    user_name: String,
    sub: [String]
},
{
    collection: 'sub-list'
})

const dl_props_schema = new mongoose.Schema({
    Name: String,
    Color: String,
    // rwx_list: String,
    tasklist_collection_name: String,
    Owner: String
},
{
    collection: 'dl_props'
});

const task_schema = new mongoose.Schema({
    ParentDL: String,
    Desc: String 
})

const credentials_schema = new mongoose.Schema({
    user_name: String,
    password: String
},
{
    collection: 'credentials'
})


// console.log(username, password)
// console.log(mongoConnectionString)
// connectDB();

exports.mongoConnectionString = mongoConnectionString;
exports.connectDB = connectDB;
exports.credentials_schema = credentials_schema;
exports.dl_schema = dl_props_schema;
exports.task_schema = task_schema;
exports.user_schema = user_schema;
// exports.EmpSchema = EmpSchema;

