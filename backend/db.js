const mongoose= require('mongoose')
require('dotenv').config();

const connectDB=async()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/REACTUSER")
        console.log('database connected')
    }catch(err){
        console.log(err,'error')
        process.exit(1)
    }
}
module.exports = connectDB;

  