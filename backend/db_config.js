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

const dl_props_schema = new mongoose.Schema({
    dl_name: String,
    color: String,
    // rwx_list: String,
    taskList_collection_name: String,
    owner: String
},
{
    collection: 'dl_props'
});

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
// exports.EmpSchema = EmpSchema;

