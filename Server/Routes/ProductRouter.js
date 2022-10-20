const express = require('express')
const router = express.Router()
const ProductController=require('../Controllers/ProductController')

router.post('/register',ProductController.Register)
router.get('/',ProductController.GetDataProducts)
router.put('/:id',ProductController.UpdateDataProduct)
router.delete('/:id',ProductController.DeleteProducts)

module.exports = router