const mongoose=require('mongoose')
const dotenv= require('dotenv')
dotenv.config({path :'../back_end/.env'})
const uri = process.env.DB_CONN


const connectDB = async()=>{
    try {
    const con= mongoose.connect(uri)
    console.log("database connected ")
    }catch(error){
    console.error();
    }
}
module.exports = connectDB;