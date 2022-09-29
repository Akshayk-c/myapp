const mongoose=require('mongoose')
const uri = "mongodb+srv://Akshay666:6HdyY0pf0DDCsyyQ@cluster0.f3xvxg7.mongodb.net/?retryWrites=true&w=majority";


const connectDB = ()=>{
    try {
    const con= mongoose.connect(uri)
    console.log("database connected ")
    }catch(error){
    console.error();
    }
}
module.exports = connectDB;