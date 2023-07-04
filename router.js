const express = require('express')
const router = express.Router()
const AuthController = require('./controllers/AuthController')

router.get('/', AuthController.index)

module.exports = router