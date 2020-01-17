// Copyright (c) 2018-2020, BB Jansen
//
// Please see the included LICENSE file for more information.
'use strict'

const express = require('express')
const router = express.Router()
const db = require('../utils/utils').knex

// Get address by id
router.get('/all',
async function (req, res, next) {
  try {
    const getNodes = await db('nodes')
      .leftJoin('status', 'nodes.address', 'status.address')
      .leftJoin('geo', 'nodes.address', 'geo.address')
      .select()

    res.json(getNodes)
  } catch (err) {
    next(err)
  }
})

module.exports = router
