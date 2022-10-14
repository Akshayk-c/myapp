const express = require('express');
var routers = express.Router();
var controller = require('../controller/controller')
const passport =require('passport')
require('../passport')

var isTokenValid =passport.authenticate('jwt',{session : false})
console.log( isTokenValid)

routers.get('/', isTokenValid ,controller.findall)
routers.post('/', isTokenValid , controller.create)
routers.get('/:fname', isTokenValid , controller.find)
routers.put('/:id', isTokenValid , controller.update)
routers.delete('/:id', isTokenValid , controller.delete)
routers.post('/login',controller.login)
routers.post('/register',controller.register)

module.exports = routers;
//Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDkxMWZhNGI1M2MxOWQ5YWI3ZDBiMiIsImFkbWluIjp0cnVlLCJpYXQiOjE2NjU3NTM4MzksImV4cCI6MTY2NTg0MDIzOX0.AGav0wbmL1QuI1t2nKmZaviT2krM7oQqQ0xh_F_OceA
