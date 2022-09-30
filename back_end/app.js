const express=require('express');
const app=express();
const user=require('./routes/api'); 
var port=5000
const connectDB=require('./database/connection')
const morgan=require('morgan')

app.use(express.json())
app.use('/user', user)
app.use(morgan('tiny'))
connectDB();
app.listen(port,()=>{
console.log("listening to  http://localhost:"+port)
})
