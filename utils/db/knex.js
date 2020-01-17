// Copyright (c) 2018-2020, BB Jansen
//
// Please see the included LICENSE file for more information.
'use strict'

const knex = module.exports = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: process.env.DB_FILE
  },
  useNullAsDefault: true, // sqlite3 - defaults not supported
  propagateCreateError: false, // sqlite3 - automatically reconnect
  pool: { min: 1, max: 100 }, // 
  timeout: 120000
})

module.exports = knex
