const express = require('express')
const router = express.Router()
const SaisieProductController=require('../Controllers/SaisieProductController')

router.post('/Saisie',SaisieProductController.SaveSaisie)
router.get('/',SaisieProductController.GetDataSaisie)
router.put('/:id',SaisieProductController.UpdateDataSaisie)
router.delete('/:id',SaisieProductController.DeleteSaisie)

module.exports = router