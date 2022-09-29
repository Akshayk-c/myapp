const express = require('express');
var routers = express.Router();
var controller = require('../controller/controller')

routers.get('/',controller.findall)
routers.post('/',controller.create)
routers.get('/:id',controller.find)
routers.put('/:id',controller.update)
routers.delete('/:id',controller.delete)

module.exports = routers;