const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const bodyParser = require('body-parser')
const { check, validationResult } = require('express-validator')
const app = express()

const bcrypt = require('bcrypt')
const saltRounds = 13

const jwt = require('jsonwebtoken')

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

const models = require('./models/index.js')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  await nuxt.ready()
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))

  // Create USER

  app.post(
    '/api/signup',
    [
      check('email')
        .isEmail()
        .normalizeEmail(),
      check('password').isLength({ min: 6 })
    ],
    (req, res) => {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(422).json({ erros: errors.array() })
      }
      console.log(req.body)

      // send data to DATABASE

      bcrypt.genSalt(saltRounds, (err, Salt) => {
        if (err) {
          console.log(err.stack)
        }
        bcrypt.hash(req.body.password, Salt, (err, Hash) => {
          if (err) {
            console.log(err)
          }
          console.log(Hash)
          models.User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: Hash
          })
        })
      })
    }
  )

  // receive request via $axios
  app.post(
    '/api/session',
    [
      check('email')
        .isEmail()
        .normalizeEmail(),
      check('password').isLength({ min: 6 })
    ],
    (req, res) => {
      // load data from DB using Sequelize
      models.User.findOne({ where: { email: req.body.email } })
        .then((user) => {
          bcrypt
            .compare(req.body.password, user.password) // compare password using bcrypt
            .then((result) => {
              try {
                const tokenJwt = jwt.sign(
                  {
                    name: user.firstName,
                    email: user.email,
                    role: user.role
                  },
                  process.env.AUTH_USER_SECRET
                )
                return res.json({
                  user: {
                    name: user.firstName,
                    email: user.email,
                    role: user.role
                  },
                  token: tokenJwt
                }) // send token back
              } catch (error) {
                console.log('jwt error: ' + error)
              }
            })
            .catch((err) => {
              // catch bcrypt error
              throw err
            })
        })
        .catch((err) => {
          // catch sequelize User.findOne error print on console.
          console.log('models.User.findOne error: ' + err)
        })
    }
  )

  app.get('/api/session/user', [], (req, res) => {
    const token = req.headers.authorization
    if (token) {
      jwt.verify(
        token.replace(/^Bearer\s/, ''),
        process.env.AUTH_USER_SECRET,
        (err, decoded) => {
          if (err) {
            return res.status(401).json({ message: 'unauthorized' })
          } else {
            return res.json({ user: decoded })
          }
        }
      )
    } else {
      console.log('un 2')
      return res.status(401).json({ message: 'unauthorized' })
    }
  })

  //  app.delete('/api/session', [], (req, res) => {})

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
