// Database
const db = require('../config')

// JWT
const jsonwebtoken = require('../jwt')

const index = (req, res) => {
    const fail = req.flash('fail')
    const success = req.flash('success')
    res.render('index', {
        success,
        fail,
        auth: req.session.auth
    })
}

const authenticate = async (req, res) => {
    // Destructuring Request Body
    const { username, password } = req.body
    // Authenticating
    const auth = await db('users').select().where('username', username).where('password', password)

    // Not Authenticated
    if (auth.length < 1) {
        req.flash('fail', 'Gagal Login! Username atau Password Salah!')
        return res.redirect('/') 
    }

    // Make an Object for JWT
    const user = {
        username: auth[0].username,
        email: auth[0].email,
        name: auth[0].name,
    }

    // Authenticated
    const token = jsonwebtoken(user)
    req.session.auth = {
        token,
        username: user.username
    }
    return res.redirect('/dashboard')
}

const dashboard = async (req, res) => {
    // Not Authenticated?
    if (!req.session.auth) return res.redirect('/')

    // Get User Detail
    const user = await db('users').select().where('username', req.session.auth.username)
    // Get Table 'nilai' from DB
    const nilai = await db('nilai').select()

    // Render HTML and Take Data
    res.render('dashboard', {
        increments: 1,
        auth: req.session.auth,
        user,
        nilai
    })
}

module.exports = { index, authenticate, dashboard }