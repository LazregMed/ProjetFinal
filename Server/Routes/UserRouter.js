const express = require('express')
const router = express.Router()
const UserController = require('../Controllers/UserController')
const { AuthMiddleWare } = require('../Middlewares/AuthMiddleWare ')
const { DataValidation } = require('../Middlewares/DataValidation')




router.post('/register',DataValidation,UserController.Register)
router.post('/login',DataValidation,UserController.Login)
router.get('/',AuthMiddleWare,UserController.GetDataUsers)
router.put('/:id',AuthMiddleWare,UserController.UpdateDataUser)
router.delete('/:id',AuthMiddleWare,UserController.DeleteUSers)



module.exports = router