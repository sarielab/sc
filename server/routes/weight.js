const express = require('express')
const router = express.Router()

const weightCtrl = require('../controllers/weightCtrl')

router.get('/', weightCtrl.getAll)//v
router.get('/:id', weightCtrl.getOne)//v
router.put('/:id', weightCtrl.update)//v
router.delete('/:id', weightCtrl.remove)//v
router.post('/', weightCtrl.create)//v

module.exports = router