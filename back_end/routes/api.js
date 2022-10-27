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
routers.use(passport.authenticate('admin',{session : false}),(req,res,next)=>{
    console.log(req.user)
     next()} )
routers.put('/:id',  controller.update)
routers.get('/',controller.findall)
routers.post('/',  controller.register)
// routers.get('/:fname',  controller.find)
routers.delete('/:id',  controller.delete)

module.exports = routers;