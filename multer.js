const multer = require('multer')
const fs = require('fs')

//Setup Multer Upload File
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'upload') // Menentukan direktori penyimpanan file
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname) // Menentukan nama file
    }
})

const upload = multer({ storage: storage })

module.exports = upload