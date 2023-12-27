const express=require('express');
const app=express();
const user=require('./routes/api'); 
var port=5000
const connectDB=require('./database/connection')
const morgan=require('morgan')
var cors = require('cors')
const path = require('path');

app.use(cors())
app.use(express.json())
//app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, "public")));
// app.get('/*', (req, res) => {
//   console.log('bb')
//   console.log(req.originalUrl)
//   res.sendFile(path.join(__dirname,'index.html'));
 // });
//   app.get("/app/*", function (req, res) {
//     res.sendFile(path.resolve(__dirname, './public', 'index.html'));
//  })
  
app.use('/user', user)
app.use(morgan('tiny'))
connectDB();
app.listen(port,()=>{
console.log("listening to  http://localhost:"+port)
})
