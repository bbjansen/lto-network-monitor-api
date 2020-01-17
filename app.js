// Copyright (c) 2018-2020, BB Jansen
//
// Please see the included LICENSE file for more information.
'use strict'

// Set Express App
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const Helmet = require('helmet')
const Compression = require('compression')
const cors = require('cors')
const figlet = require('figlet')

app.use(function (req, res, next) {
  res.locals.session = req.session
  return next()
})

// Compress
app.use(Helmet())
app.use(Compression())

// Set Body Parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// CORS
app.use(cors())

// Set Rate Limiter
const rateLimiter = require('./middleware/rateLimiter')

// Public Routes
app.all('/',
  rateLimiter,
  function (req, res, next) {
    figlet('LTO Node Monitor API', function (err, data) {
      res.set('Content-Type', 'text/plain')
      res.status(200).send(`${data} v1.0 \n
      nodes: /v1/nodes/all
      `)
    })
  })

app.use('/v1/nodes', require('./routes/nodes'))

app.use(function onError (err, req, res, next) {
  res.locals.error = process.env.DEBUG == true ? err : {}
  res.statusCode = err.status || 500
  res.set('Content-Type', 'application/json')
  res.status(res.statusCode).json(err.toString())
})

module.exports = app
