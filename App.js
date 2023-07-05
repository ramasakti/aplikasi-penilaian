const express = require('express')
const app = express()
const session = require('express-session')
const bodyParser = require('body-parser')
const flash = require('express-flash')
const path = require('path')
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

app.use(router)

app.listen(3000, () => console.log(`Server Aktif!`))