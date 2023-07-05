// JSON Web Token
const jwt = require('jsonwebtoken')
const secretKey = 'rawon'

// Generate Token
const generateToken = (user) => {
    const token = jwt.sign(user, secretKey, { expiresIn: '1h' })
    return token
}

module.exports = generateToken