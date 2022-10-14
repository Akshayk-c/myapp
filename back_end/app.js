const express=require('express');
const app=express();
const user=require('./routes/api'); 
var port=5000
const connectDB=require('./database/connection')
const morgan=require('morgan')
var cors = require('cors')
const passport =require('passport')
require('./passport')


app.use(cors())
app.use(express.json())
app.get('/',passport.authenticate('jwt',{session : false}),(req,res)=>{
    res.send("token valid")
    //Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDkxMWZhNGI1M2MxOWQ5YWI3ZDBiMiIsImFkbWluIjp0cnVlLCJpYXQiOjE2NjU3NTM4MzksImV4cCI6MTY2NTg0MDIzOX0.AGav0wbmL1QuI1t2nKmZaviT2krM7oQqQ0xh_F_OceA
})
app.use('/user', user)
app.use(morgan('tiny'))
connectDB();
app.listen(port,()=>{
console.log("listening to  http://localhost:"+port)
})
