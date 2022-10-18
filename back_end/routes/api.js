const express = require('express');
var routers = express.Router();
var controller = require('../controller/controller')
const passport =require('passport')
require('../passport')


routers.post('/login',controller.login)
routers.post('/register',controller.register)
routers.use(passport.authenticate('user',{session : false}),(req,res,next)=>{
console.log(req.user)
next()} )
routers.get('/profile/:id', controller.profile)
routers.put('/:id',  controller.update)
routers.get('/',controller.findall)
routers.post('/',  controller.create)
routers.get('/:fname',  controller.find)
routers.delete('/:id',  controller.delete)

routers.use(passport.authenticate('admin',{session : false}),(req,res,next)=>{
    console.log(req.user)
     next()} )



module.exports = routers;
//Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDkxMWZhNGI1M2MxOWQ5YWI3ZDBiMiIsImlhdCI6MTY2NjAzMDM3MCwiZXhwIjoxNjY2MTE2NzcwfQ.2mbULHPknnsKR3evOk8KvVQEt9ytAU-E31enK9AF3TA