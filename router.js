const express = require('express')
const router = express.Router()
const AuthController = require('./controllers/AuthController')
const NilaiController = require('./controllers/NilaiController')
const multer = require('./multer')

router.get('/', AuthController.index)
router.post('/authenticate', AuthController.authenticate)
router.get('/dashboard', AuthController.dashboard)
router.post('/import', multer.single('nilai'), NilaiController.importing)

module.exports = router