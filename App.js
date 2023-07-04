const express = require('express')
const app = express()
const multer = require('multer')
const fs = require('fs')
const path = require('path')
const session = require('express-session')
const db = require('./config')
const bodyParser = require('body-parser')
const flash = require('express-flash')
const router = require('./router')

// Setup View Engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Akses ke Direktori 'upload'
app.use(express.static(path.join(__dirname, 'public')))
app.use('/upload', express.static(path.join(__dirname, 'upload')))

// Setup Session
app.use(
    session({
        secret: 'rawon', // Ganti dengan secret key yang lebih aman
        resave: false,
        saveUninitialized: true,
    })
)

//Setup Flash Message
app.use(flash())

//Setup Body Parser untuk Menangani Request
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

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

app.use(router)

app.listen(3000, () => console.log(`Server Aktif!`))