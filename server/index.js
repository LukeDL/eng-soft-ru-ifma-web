const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const bodyParser = require('body-parser')
const { check, validationResult } = require('express-validator')
const app = express()

const bcrypt = require('bcrypt')
const saltRounds = 13

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

  app.post(
    '/api/users',
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
