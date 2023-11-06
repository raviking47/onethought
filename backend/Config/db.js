const mongoose = require('mongoose');


const mongoDB = process.env.MONGO_URI || 'mongodb+srv://ravitomerak4747:ravitomer@cluster1.jntqh9o.mongodb.net/?retryWrites=true&w=majority';

//Get the default connection

const ConnectDB = async()=>{
    try {
        const conn =  await mongoose.connect(mongoDB,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log(`MongoDB Connected:,${conn.connection.host}`);
    } catch (error) {
        console.log(`Error,${error.message}`);
        process.exit(); 
    }
}
module.exports = ConnectDB 