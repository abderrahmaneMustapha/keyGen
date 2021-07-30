'use strict';
const express  = require('express')
const keyControllers = require('./controllers')

const router = express.Router()

router.get('/',keyControllers.getKeys)
router.post('/',keyControllers.createKeys)
router.delete('/:id',keyControllers.deleteKeys)

module.exports = router;
