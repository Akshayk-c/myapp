const express = require('express');
var routers = express.Router();
var controller = require('../controller/controller')

routers.get('/',controller.findall)
routers.post('/',controller.create)
routers.get('/:fname',controller.find)
routers.put('/:id',controller.update)
routers.delete('/:id',controller.delete)
routers.post('/login',controller.login)
routers.post('/register',controller.register)

module.exports = routers;